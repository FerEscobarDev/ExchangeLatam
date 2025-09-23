# Dataset de Desarrollo ExchangeLatam

Este directorio contiene datos seguros extraídos y procesados específicamente para desarrollo.

## Archivo Disponible

### `development_dataset_secure.sql` ⭐ **ÚNICO ARCHIVO**
**Dataset seguro para desarrollo** (2.9 MB)
- ✅ **Usuarios @exchangelatam.com**: 5 usuarios del staff
- ✅ **Contraseñas seguras**: Contraseñas de desarrollo (no reales)
- ✅ **Datos de empresa**: Información completa de ExchangeLatam
- ✅ **Configuraciones**: Roles, permisos, bancos, ciudades
- ✅ **Datos relacionados**: Cuentas, transacciones, verificaciones
- 🔒 **Tokens eliminados**: Sin tokens de sesión reales

## Usuarios Incluidos

| ID | Nombre | Email | Contraseña Dev | Rol |
|---|---|---|---|---|
| 1 | Fernando Escobar Bermudez | jfescobar@exchangelatam.com | `founder123` | Founder |
| 8 | Exchange Latam | admin@exchangelatam.com | `admin123` | Admin |
| 3887 | Carol Xiomara Sanabria Rincón | contabilidad@exchangelatam.com | `contable123` | Contabilidad |
| 4126 | Erika Andrea Caro Arcila | eacaro@exchangelatam.com | `staff123` | Staff |
| 4333 | Ana Maria Lancheros Quintero | auxcontable@exchangelatam.com | `auxcontable123` | Aux. Contable |

## Datos de Empresa Incluidos

### Información Corporativa
- **companies**: Datos de ExchangeLatam
- **contacts**: Enlaces a redes sociales (Facebook, Instagram, WhatsApp)
- **faqs**: Preguntas frecuentes del sitio web

### Configuración del Sistema
- **dollar_prices**: Cotizaciones históricas del dólar
- **rates**: Tarifas y comisiones del sistema
- **roles & permissions**: Sistema completo de permisos
- **brokers**: Brokers configurados
- **wallets**: Billeteras virtuales disponibles

### Datos Maestros
- **banks**: 28 bancos colombianos configurados
- **departaments**: 32 departamentos de Colombia
- **cities**: 1,122 ciudades de Colombia

## Uso del Dataset

### 1. Importar Dataset de Desarrollo Seguro
```bash
# Importar datos de desarrollo con contraseñas seguras
docker-compose exec mysql mysql -u sail -ppassword exchangelatam < database/development_dataset_secure.sql
```

### 2. Verificar Importación
```bash
# Verificar usuarios importados
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT id, first_name, last_name, email FROM users WHERE email LIKE '%@exchangelatam.com%';"

# Verificar datos de empresa
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT name, description FROM companies;"

# Verificar contactos (redes sociales)
docker-compose exec mysql mysql -u sail -ppassword exchangelatam -e "SELECT name, link FROM contacts;"
```

## Consideraciones de Seguridad

### ✅ Dataset Completamente Seguro
El archivo `development_dataset_secure.sql` está preparado para uso en desarrollo:

- **Contraseñas seguras**: Solo contraseñas de desarrollo conocidas
- **No requiere cambios**: Listo para usar después de importar
- **Tokens eliminados**: Sin tokens de sesión reales
- **Timestamps seguros**: Fechas actualizadas

### 🔒 Información Incluida
- **Nombres reales**: Información del staff de ExchangeLatam
- **Datos de empresa**: Información corporativa real
- **Configuraciones**: Datos maestros del sistema

**Recomendación**: Este dataset es seguro para desarrollo pero contiene información real de la empresa.

## Beneficios para Desarrollo

### 🎯 Datos Reales de Empresa
- Información genuina de ExchangeLatam
- Configuraciones de producción
- Datos de contacto actuales

### 🔗 Integridad Referencial
- Relaciones entre tablas mantenidas
- Datos consistentes
- Sin problemas de foreign keys

### 🏢 Contexto de Negocio
- Comprensión real del dominio
- Casos de uso auténticos
- Flujos de trabajo reales

### 🚀 Desarrollo Efectivo
- Testing con datos reales
- Debugging más preciso
- Desarrollo de features contextualizado

## Estructura del Dataset

```
development_dataset_secure.sql
├── Configuración MySQL
├── Tablas del Sistema (17 tablas)
│   ├── companies
│   ├── contacts
│   ├── faqs
│   ├── dollar_prices
│   ├── banks
│   ├── departaments
│   ├── cities
│   ├── roles & permissions
│   ├── brokers
│   ├── wallets
│   └── rates
├── Datos de Usuarios (10 tablas)
│   ├── users (5 usuarios)
│   ├── accounts
│   ├── transactions
│   ├── trading_accounts
│   ├── wallet_accounts
│   ├── verifications
│   ├── form_funds
│   ├── form_knowledge_clients
│   ├── notices
│   └── notifications
└── Restauración de configuración
```

## Mantenimiento

### Limpieza
Para volver a datos básicos de seeders:
```bash
docker-compose exec laravel.test php artisan migrate:fresh --seed
```

### Testing Rápido
Para verificar que todo funciona:
```bash
# Login como admin
# Email: admin@exchangelatam.com
# Password: admin123
```

---

**Nota**: Este dataset contiene datos seguros procesados específicamente para desarrollo. Todas las contraseñas son de desarrollo y están documentadas.