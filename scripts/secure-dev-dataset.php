<?php
/**
 * Script para securizar el dataset de desarrollo
 * Reemplaza contraseñas reales con contraseñas de desarrollo seguras
 */

echo "=== Securización de Dataset de Desarrollo ===\n\n";

$inputFile = 'database/development_dataset.sql';
$outputFile = 'database/development_dataset_secure.sql';

if (!file_exists($inputFile)) {
    die("❌ Error: No se encontró el archivo {$inputFile}\n");
}

echo "📄 Leyendo dataset original...\n";
$content = file_get_contents($inputFile);

echo "🔒 Aplicando medidas de seguridad...\n\n";

// Definir contraseñas de desarrollo seguras para cada usuario
$devPasswords = [
    '1' => 'founder123',     // Fernando Escobar
    '8' => 'admin123',       // Exchange Latam Admin
    '3887' => 'contable123', // Carol Sanabria (Contabilidad)
    '4126' => 'staff123',    // Erika Caro
    '4333' => 'auxcontable123' // Ana Lancheros (Aux Contable)
];

// Generar hashes bcrypt para las nuevas contraseñas
$hashedPasswords = [];
foreach ($devPasswords as $userId => $password) {
    $hashedPasswords[$userId] = password_hash($password, PASSWORD_BCRYPT);
    echo "✓ Generando hash para usuario ID {$userId}: {$password}\n";
}

echo "\n🔄 Reemplazando contraseñas en el dataset...\n";

// Función para reemplazar contraseña específica de usuario
function replaceUserPassword($content, $userId, $newHashedPassword) {
    // Patrón para encontrar el registro específico del usuario
    $pattern = '/\(' . preg_quote($userId, '/') . ',\'([^\']*)\',\'([^\']*)\',(\d+),\'([^@]+@exchangelatam\.com)\',\'[^\']*\',\'([^\']*)\'/';

    return preg_replace_callback($pattern, function($matches) use ($newHashedPassword) {
        return "({$matches[0][0]},'{$matches[1]}','{$matches[2]}',{$matches[3]},'{$matches[4]}','','$newHashedPassword'";
    }, $content);
}

// Método más directo: buscar y reemplazar cada hash de contraseña
foreach ($hashedPasswords as $userId => $newHash) {
    // Buscar el patrón específico para cada usuario
    $pattern = '/(\(' . preg_quote($userId, '/') . ',\'[^\']*\',\'[^\']*\',\d+,\'[^@]+@exchangelatam\.com\',\'[^\']*\',\')(\$2y\$[^\']+)(\')/';

    $content = preg_replace($pattern, '${1}' . $newHash . '${3}', $content);
    echo "✓ Contraseña actualizada para usuario ID {$userId}\n";
}

// Verificación adicional: eliminar cualquier token de recordar sesión
echo "\n🧹 Limpiando tokens de sesión...\n";
$content = preg_replace('/,\'[a-zA-Z0-9]{60,100}\',/', ',NULL,', $content);
echo "✓ Tokens de 'remember me' eliminados\n";

// Limpiar timestamps sensibles (opcional)
echo "\n📅 Actualizando timestamps...\n";
$currentTimestamp = date('Y-m-d H:i:s');
$content = preg_replace('/\'email_verified_at\':\'[^\']*\'/', "'email_verified_at':'{$currentTimestamp}'", $content);
echo "✓ Timestamps de verificación de email actualizados\n";

// Agregar comentarios de seguridad al archivo
$securityHeader = "-- =============================================================\n";
$securityHeader .= "-- Dataset de Desarrollo ExchangeLatam - VERSIÓN SEGURA\n";
$securityHeader .= "-- Generado: " . date('Y-m-d H:i:s') . "\n";
$securityHeader .= "-- \n";
$securityHeader .= "-- 🔒 CONTRASEÑAS DE DESARROLLO:\n";
foreach ($devPasswords as $userId => $password) {
    $userName = getUserName($userId);
    $securityHeader .= "-- User ID {$userId} ({$userName}): {$password}\n";
}
$securityHeader .= "-- \n";
$securityHeader .= "-- ⚠️ SEGURIDAD:\n";
$securityHeader .= "-- - Contraseñas reales reemplazadas\n";
$securityHeader .= "-- - Tokens de sesión eliminados\n";
$securityHeader .= "-- - Timestamps actualizados\n";
$securityHeader .= "-- - Solo para uso en desarrollo\n";
$securityHeader .= "-- =============================================================\n\n";

// Función auxiliar para obtener nombres de usuario
function getUserName($userId) {
    $names = [
        '1' => 'Fernando Escobar',
        '8' => 'Exchange Admin',
        '3887' => 'Carol Sanabria',
        '4126' => 'Erika Caro',
        '4333' => 'Ana Lancheros'
    ];
    return $names[$userId] ?? 'Usuario';
}

// Reemplazar el header original con el header de seguridad
$content = preg_replace('/^-- =============================================================.*?=============================================================\n\n/s', $securityHeader, $content);

echo "\n💾 Guardando dataset seguro...\n";
file_put_contents($outputFile, $content);

echo "✅ ¡Dataset seguro creado exitosamente!\n\n";

echo "📁 Archivos generados:\n";
echo "   🔒 {$outputFile} (SEGURO - usar este)\n";
echo "   ⚠️  {$inputFile} (ORIGINAL - no usar en desarrollo)\n\n";

echo "📏 Tamaño del archivo seguro: " . number_format(filesize($outputFile)) . " bytes\n\n";

echo "🔑 Credenciales de desarrollo:\n";
foreach ($devPasswords as $userId => $password) {
    $userName = getUserName($userId);
    $email = getUserEmail($userId);
    echo "   👤 {$userName}: {$email} / {$password}\n";
}

// Función auxiliar para emails
function getUserEmail($userId) {
    $emails = [
        '1' => 'jfescobar@exchangelatam.com',
        '8' => 'admin@exchangelatam.com',
        '3887' => 'contabilidad@exchangelatam.com',
        '4126' => 'eacaro@exchangelatam.com',
        '4333' => 'auxcontable@exchangelatam.com'
    ];
    return $emails[$userId] ?? 'unknown@exchangelatam.com';
}

echo "\n🚀 Para importar el dataset seguro:\n";
echo "   docker-compose exec mysql mysql -u sail -ppassword exchangelatam < {$outputFile}\n\n";

echo "✅ Las contraseñas ya están configuradas, no necesitas cambiarlas después de importar.\n";

// Crear también un archivo de backup del original
$backupFile = 'database/development_dataset_original_backup.sql';
if (!file_exists($backupFile)) {
    copy($inputFile, $backupFile);
    echo "\n📦 Backup del archivo original creado: {$backupFile}\n";
}

echo "\n⚠️  IMPORTANTE:\n";
echo "   - Usar solo {$outputFile} para desarrollo\n";
echo "   - El archivo original contiene contraseñas reales\n";
echo "   - No compartir archivos con contraseñas reales\n";