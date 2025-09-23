# ExchangeLatam - Documentación del Proyecto

## Descripción General

ExchangeLatam es una plataforma web colombiana especializada en servicios de exchange para brokers y billeteras virtuales. Permite a los usuarios realizar depósitos y retiros desde y hacia sus cuentas bancarias con bajas comisiones, agilidad y confianza.

## Arquitectura Técnica

### Stack Tecnológico
- **Backend**: Laravel 9.52.20 (PHP 8.2)
- **Frontend**: Vue.js con Inertia.js
- **Base de Datos**: MySQL 8.0
- **Bundler**: Vite 3.0.9
- **Containerización**: Docker con Laravel Sail
- **Autenticación**: Laravel Jetstream
- **Permisos**: Spatie Laravel Permission

### Estructura del Proyecto
```
ExchangeLatam/
├── app/
│   ├── Http/Controllers/    # Controladores de la aplicación
│   ├── Models/             # Modelos Eloquent
│   └── ...
├── resources/
│   ├── js/                 # Componentes Vue.js
│   │   └── Pages/          # Páginas Inertia
│   │       ├── Publics/    # Páginas públicas
│   │       └── ...
│   └── views/              # Vistas Blade
├── routes/
│   └── web.php            # Rutas de la aplicación
├── database/
│   ├── migrations/        # Migraciones de base de datos
│   └── seeders/          # Seeders para datos iniciales
├── docker/               # Configuración Docker
└── public/              # Archivos públicos
```

## Configuración del Entorno

### Variables de Entorno (.env)
```env
APP_NAME=ExchangeLatam
APP_ENV=local
APP_KEY=base64:I/TztnIUa+extDDuBwIY/XnAB6haE7UnCGBUnR95dvw=
APP_DEBUG=true
APP_URL=http://localhost
APP_SUBDOMAIN=http://admin.localhost

# Base de Datos
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=exchangelatam
DB_USERNAME=sail
DB_PASSWORD=password

# Docker
WWWGROUP=1000
WWWUSER=1000
```

### Puertos de Servicio
- **Aplicación Principal**: http://localhost (Puerto 80)
- **Panel Administrativo**: http://admin.localhost (Puerto 80)
- **Vite Dev Server**: http://localhost:5173
- **MySQL**: Puerto 3306
- **Redis**: Puerto 6379
- **Mailpit**: Puerto 8025 (Dashboard), 1025 (SMTP)
- **Meilisearch**: Puerto 7700

## Inicialización en Desarrollo

### 🚀 Setup Rápido (Recomendado)
```bash
# 1. Copiar archivo de entorno
cp .env.example .env

# 2. Instalar dependencias Node.js (PHP ya incluido en contenedor)
npm install

# 3. Construir assets frontend
npm run build

# 4. Solucionar problemas de line endings en Windows (si es necesario)
dos2unix docker/8.2/start-container
dos2unix docker/8.3/start-container
dos2unix docker/8.4/start-container
dos2unix docker/mysql/create-testing-database.sh

# 5. Iniciar servicios Docker
docker-compose up -d

# 6. Esperar a que MySQL esté listo
sleep 15

# 7. Ejecutar migraciones
docker-compose exec laravel.test php artisan migrate --force

# 8. Importar dataset de desarrollo con datos reales y seguros
docker-compose exec mysql mysql -u sail -ppassword exchangelatam < database/development_dataset_secure.sql

# 9. Iniciar servidor de desarrollo frontend
npm run dev
```

### 🔧 Setup Paso a Paso

#### 1. Preparación del Entorno
```bash
# Verificar Docker está instalado y corriendo
docker --version
docker-compose --version

# Clonar el repositorio si no está disponible
git clone <repository-url>
cd ExchangeLatam

# Copiar variables de entorno
cp .env.example .env
```

#### 2. Instalar Dependencias
```bash
# Solo Node.js (PHP está en el contenedor Docker)
npm install

# Construir assets para primera vez
npm run build
```

#### 3. Configurar Docker
```bash
# IMPORTANTE: En Windows, corregir line endings
dos2unix docker/8.2/start-container
dos2unix docker/8.3/start-container
dos2unix docker/8.4/start-container
dos2unix docker/mysql/create-testing-database.sh

# Construir contenedores
docker-compose build

# Iniciar servicios
docker-compose up -d
```

#### 4. Configurar Base de Datos
```bash
# Esperar a que MySQL esté listo
sleep 15

# Verificar que MySQL está corriendo
docker-compose ps

# Ejecutar migraciones
docker-compose exec laravel.test php artisan migrate --force

# Importar dataset de desarrollo (RECOMENDADO)
docker-compose exec mysql mysql -u sail -ppassword exchangelatam < database/development_dataset_secure.sql

# Alternativa: Solo seeders básicos
# docker-compose exec laravel.test php artisan db:seed
```

#### 5. Iniciar Desarrollo
```bash
# Iniciar servidor de desarrollo frontend
npm run dev

# La aplicación estará disponible en:
# - Frontend: http://localhost
# - Admin: http://admin.localhost
# - Vite Dev: http://localhost:5173
```

### Dataset de Desarrollo (Recomendado)

El proyecto incluye un dataset extraído de producción que contiene:

#### 👥 Usuarios @exchangelatam.com (5 usuarios)
- **Fernando Escobar Bermudez** (jfescobar@exchangelatam.com) - `founder123`
- **Exchange Latam** (admin@exchangelatam.com) - `admin123`
- **Carol Xiomara Sanabria Rincón** (contabilidad@exchangelatam.com) - `contable123`
- **Erika Andrea Caro Arcila** (eacaro@exchangelatam.com) - `staff123`
- **Ana Maria Lancheros Quintero** (auxcontable@exchangelatam.com) - `auxcontable123`

#### 🏢 Datos de Empresa Reales
- Información corporativa de ExchangeLatam
- Enlaces a redes sociales (Facebook, Instagram, WhatsApp)
- Preguntas frecuentes del sitio web
- Cotizaciones históricas del dólar
- 28 bancos colombianos configurados
- 32 departamentos y 1,122 ciudades de Colombia

#### 🔧 Configuraciones de Sistema
- Roles y permisos completos
- Brokers configurados
- Billeteras virtuales disponibles
- Tarifas y comisiones

```bash
# Importar dataset seguro de desarrollo
docker-compose exec mysql mysql -u sail -ppassword exchangelatam < database/development_dataset_secure.sql

# ✅ Las contraseñas ya están configuradas para desarrollo
# ✅ No se requieren pasos adicionales de seguridad
# ✅ Datos reales de empresa para desarrollo efectivo
```

### 🔄 Comandos de Verificación
```bash
# Verificar que la aplicación está corriendo
curl -I http://localhost

# Verificar usuarios importados
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT id, first_name, last_name, email FROM users WHERE email LIKE '%@exchangelatam.com%';"

# Verificar datos de empresa
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT name, description FROM companies;"

# Verificar estado de contenedores
docker-compose ps
```

## Comandos de Desarrollo

### 🛠️ Gestión de Contenedores
```bash
# Verificar estado de contenedores
docker-compose ps

# Iniciar todos los servicios
docker-compose up -d

# Parar todos los servicios
docker-compose down

# Reiniciar servicios específicos
docker-compose restart laravel.test
docker-compose restart mysql

# Limpiar y reiniciar (elimina volúmenes - CUIDADO: borra datos)
docker-compose down -v
docker-compose up -d
```

### 📋 Logs y Debugging
```bash
# Ver logs de Laravel
docker logs exchangelatam-laravel.test-1 -f

# Ver logs de MySQL
docker logs exchangelatam-mysql-1 -f

# Logs de Laravel desde dentro del contenedor
docker-compose exec laravel.test tail -f storage/logs/laravel.log

# Acceder al contenedor Laravel
docker-compose exec laravel.test bash

# Acceder a MySQL
docker-compose exec mysql mysql -u sail -ppassword exchangelatam
```

### 🔄 Comandos Laravel
```bash
# Ejecutar comandos Artisan
docker-compose exec laravel.test php artisan migrate
docker-compose exec laravel.test php artisan db:seed
docker-compose exec laravel.test php artisan cache:clear
docker-compose exec laravel.test php artisan config:clear

# Refrescar base de datos (CUIDADO: borra todos los datos)
docker-compose exec laravel.test php artisan migrate:fresh --seed

# Generar clave de aplicación
docker-compose exec laravel.test php artisan key:generate
```

## Estructura de Base de Datos

### Migraciones Principales
La aplicación incluye 44 migraciones que crean las siguientes tablas principales:

- **users**: Usuarios del sistema
- **teams**: Equipos de trabajo
- **roles & permissions**: Sistema de roles y permisos
- **accounts**: Cuentas bancarias de usuarios
- **transactions**: Transacciones (depósitos/retiros)
- **trading_accounts**: Cuentas de trading
- **wallet_accounts**: Cuentas de billeteras virtuales
- **dollar_prices**: Precios del dólar
- **companies**: Información de empresa
- **contacts**: Datos de contacto
- **faqs**: Preguntas frecuentes

### Seeders Incluidos
- **CompanySeeder**: Datos básicos de la empresa
- **ContactSeeder**: Enlaces de redes sociales
- **RolesSeeder**: Roles y permisos del sistema

## Funcionalidades Principales

### Panel Público
- **Página Principal** (`/`): Landing page con información de la empresa
- **Sobre Nosotros** (`/about`): Información corporativa
- **FAQ** (`/faq`): Preguntas frecuentes
- **Precios del Dólar** (`/dollarPrices`): Cotizaciones actuales
- **Políticas** (`/policy-SAGRILAFT`): Documentación legal

### Panel de Usuario (Autenticado)
- **Dashboard**: Resumen de actividad
- **Depósitos**: Gestión de depósitos
- **Retiros**: Gestión de retiros
- **Cuentas Bancarias**: Administración de cuentas
- **Exchange de Billeteras**: Operaciones con billeteras virtuales
- **Verificación**: Proceso de verificación de identidad
- **Formularios**: Conocimiento del cliente y fondos

### Panel Administrativo (admin.localhost)
- **Dashboard Administrativo**: Métricas y estadísticas
- **Gestión de Usuarios**: CRUD completo de usuarios
- **Gestión Financiera**: Administración de depósitos y retiros
- **Configuración**: Precios, tarifas, roles y permisos
- **Reportes**: Generación de reportes contables
- **Mensajería**: Sistema de notificaciones masivas

## Seguridad y Permisos

### Sistema de Roles
La aplicación utiliza Spatie Laravel Permission para manejar roles y permisos:
- **Super Admin**: Acceso completo
- **Admin**: Gestión operativa
- **User**: Usuarios finales

### Middleware de Seguridad
- **auth**: Autenticación requerida
- **verified**: Email verificado
- **data**: Datos completos del usuario
- **route.users**: Control de acceso a rutas
- **can**: Verificación de permisos específicos

## Desarrollo Frontend

### Componentes Vue.js
Los componentes están organizados en:
- **Pages/Publics/**: Páginas públicas (Welcome, About, FAQ)
- **Pages/Auth/**: Autenticación y registro
- **Pages/Dashboard/**: Panel de usuario
- **Pages/Admin/**: Panel administrativo

### Inertia.js
Inertia conecta Laravel con Vue.js sin API:
- SSR habilitado para mejor SEO
- Navegación SPA sin recarga de página
- Compartición de datos entre backend y frontend

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
```

## Solución de Problemas

### 🚨 Problemas Comunes y Soluciones

#### ❌ Error 500 en Página Principal
**Síntomas**: La página muestra "Server Error" o error 500
**Causa**: Conexión a base de datos fallida o MySQL no está listo
**Solución**:
```bash
# 1. Verificar estado de contenedores
docker-compose ps

# 2. Verificar logs de MySQL
docker logs exchangelatam-mysql-1

# 3. Verificar logs de Laravel
docker logs exchangelatam-laravel.test-1

# 4. Reiniciar servicios en orden
docker-compose down
docker-compose up -d mysql
sleep 20  # Esperar a que MySQL esté listo
docker-compose up -d laravel.test

# 5. Si persiste, limpiar volúmenes (CUIDADO: borra datos)
docker-compose down -v
docker-compose up -d
sleep 20
docker-compose exec laravel.test php artisan migrate --force
```

#### 🐳 Contenedores Docker Fallan al Iniciar
**Síntomas**: Error "No such file or directory" o "bash\r not found"
**Causa**: Problemas de line endings en Windows (CRLF vs LF)
**Solución**:
```bash
# 1. Convertir line endings en scripts Docker
dos2unix docker/8.2/start-container
dos2unix docker/8.3/start-container
dos2unix docker/8.4/start-container
dos2unix docker/mysql/create-testing-database.sh

# 2. Reconstruir contenedores
docker-compose build laravel.test

# 3. Iniciar servicios
docker-compose up -d
```

#### 🎨 Frontend No Renderiza Correctamente
**Síntomas**: Página carga pero sin estilos o componentes Vue.js
**Causa**: Vite dev server no está corriendo
**Solución**:
```bash
# 1. Verificar si Vite está corriendo
npm run dev

# 2. Verificar en navegador
# - http://localhost (aplicación principal)
# - http://localhost:5173 (Vite dev server)

# 3. Si hay errores, reconstruir assets
npm run build
npm run dev
```

#### 🔑 No Puedo Acceder con las Credenciales
**Síntomas**: Login falla con credenciales correctas
**Causa**: Dataset no importado o contraseñas incorrectas
**Solución**:
```bash
# 1. Verificar que el dataset fue importado
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT COUNT(*) FROM users;"

# 2. Verificar usuarios @exchangelatam.com
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT id, email FROM users WHERE email LIKE '%@exchangelatam.com%';"

# 3. Re-importar dataset si es necesario
docker-compose exec mysql mysql -u sail -ppassword exchangelatam < database/development_dataset_secure.sql

# 4. Usar credenciales correctas:
# admin@exchangelatam.com / admin123
```

#### 📊 Base de Datos Vacía o Corrupta
**Síntomas**: Errores de foreign key o tablas no encontradas
**Causa**: Migraciones no ejecutadas o dataset no importado
**Solución**:
```bash
# 1. Verificar tablas existentes
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SHOW TABLES;"

# 2. Refrescar base de datos COMPLETA
docker-compose exec laravel.test php artisan migrate:fresh --force

# 3. Importar dataset de desarrollo
docker-compose exec mysql mysql -u sail -ppassword exchangelatam < database/development_dataset_secure.sql

# 4. Verificar que funcionó
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT COUNT(*) FROM users;"
```

### Logs Útiles
```bash
# Logs de Laravel
docker-compose exec laravel.test tail -f storage/logs/laravel.log

# Logs de MySQL
docker logs exchangelatam-mysql-1

# Logs del contenedor Laravel
docker logs exchangelatam-laravel.test-1
```

## Testing

### Comandos de Testing
```bash
# Ejecutar tests
docker-compose exec laravel.test php artisan test

# Tests con coverage
docker-compose exec laravel.test php artisan test --coverage

# Tests específicos
docker-compose exec laravel.test php artisan test --filter=UserTest
```

## Deployment

### Producción
Para despliegue en producción:

1. **Configurar variables de entorno**:
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://exchangelatam.com
APP_SUBDOMAIN=https://admin.exchangelatam.com
```

2. **Build de assets**:
```bash
npm run build
```

3. **Optimizaciones**:
```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Contacto y Soporte

- **Empresa**: ExchangeLatam
- **Experiencia**: 5 años en el mercado
- **Ubicación**: Colombia
- **Especialidad**: Exchange para brokers y billeteras virtuales

---

*Documentación generada con Claude Code*
*Última actualización: Septiembre 2025*