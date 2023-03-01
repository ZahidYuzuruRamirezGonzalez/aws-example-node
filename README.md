# Ms-Pagos-Conciliacion

Este Ms establece la operaciones necesarias, para la conciliación automatica y semimanual del pagos.

Los diagramas asociados a cada una de las operaciones se encuentra en: [Ms-Pagos-Conciliacion](https://lucid.app/lucidchart/cdc6fc77-e3f2-4973-bc75-1aaabf454fc4/edit?viewport_loc=857%2C5457%2C2538%2C1163%2C6RMKcNg~KWru&invitationId=inv_1d1b1102-f7f9-4d9c-a35c-eaf027a07057)

## Capacidades :books:

- Recurso para la generación reporte STP.
- Recurso para conciliación automática. 
- Recurso para recepción de cifras control.
- Recurso para conciliación semimanual automática. 
- Recurso para recepción de cifras control del proceso semimanual.

## Repositorio 🚀

_En caso de necesitar realizar cambios en el código, solicitar acceso a la siguiente ubicación del repositorio en GIT_

https://github.com/MontePiedadMx/Plataforma_Pagos_Conciliacion.git

Ver la sección **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos :bookmark_tabs:

_Necesario tener las siguientes herramientas_

- node versión 14.0.0 o superior
- node package manager versión 6.14.4 o superior

corroborar con:

```
node --version
```

Y también

```
npm --version
```

### Variables de entorno :clipboard:

Para los diferentes ambientes es necesario especificar las urls a redireccionar

```
CONTEXT_NAME=api/conciliacion
CONTEXT_VERSION=v1
LOG_LEVEL=trace
EMAIL_SERVICE_URL=https://10.30.3.15:8012/NMP/Utileria/EnvioCorreo/v1
EMAIL_REMITENTE=notificaciones.conciliacion@montepiedad.com.mx
EMAIL_DESTINATARIO=jgarcia@spsolutions.com.mx,mcamaril@montepiedad.con.mx
EMAIL_DESTINATARIO_BACK_OFFICE=jgarcia@spsolutions.com.mx
EMAIL_SERVICE_USUARIO=osb
EMAIL_SERVICE_ID_CONSUMIDOR=33
EMAIL_SERVICE_ID_DESTINO=100
ELK_HOST_URL=http://10.30.3.120:9200
ELK_USER=SRVMAPIPPDEV
ELK_PASSWORD=Mexico21
ELK_LOGGER_LEVEL=info
ELK_API_VERSION=6.8
ELK_TIMEOUT=1200000
ELK_PP_PAGOS_CONCILIADOS_INDEX=pp_pagos_conciliados
ELK_MP_PAGOS_INDEX=mp_pagos
AMQP_URI=amqps://fca2a615-a555-45c7-b384-2e6f16727e16:kY-2fiH2NZNEqK_G7NBiT0PI@rabbitmqod.apps.financieramontedepiedad.com.mx:5675/d6e0bc69-03f4-4550-9526-9af241274775
AMQP_USER=fca2a615-a555-45c7-b384-2e6f16727e16
AMQP_PASSWORD=kY-2fiH2NZNEqK_G7NBiT0PI
AMQP_MESSAGES_QUEUE=pp-pagos-por-conciliar
AMQP_MESSAGES_TIMEOUT=50000
AMQP_CERTIFICATE:
AMQP_HAS_CERTIFICATE=false
AMQP_MESSAGES_EXCHANGE=pp-conciliacion-pagos-exchange
TIEMPO_ESPERA_CAMBIO_ESTADO=10000
IS_RABBIT_SERVICE=false
MYSQL_HOST=us-mm-dca-547-i.cleardb.net
MYSQL_DATABASE=dev1775-hubpagos
MYSQL_N_CONNECTIONS=10
MYSQL_USER=hubpago
MYSQL_PASS=NMP+0110
TITAN_PROTOCOL=sftp 
TITAN_HOST=10.30.2.236 
TITAN_PORT=44
TITAN_USER=srvmapippdev 
TITAN_PASSWORD=kDcbd9Bc9
OAUTH_AUTHORIZATION="Basic cHJlc3Rhbm9taWNvOkM3Tk45Rnkxbk42cjhzYldo"
OAUTH_ID_DESTINO=100
OAUTH_ID_CONSUMIDOR=150
OAUTH_URL=https://dcpsoadapi1.nmp.com.mx:9091/NMP/oauth2/v1
UNIDAD_ORGANIZACIONAL=FMP
MS_LLAVES_ID_DESTINO=150
MS_LLAVES_ID_CONSUMIDOR=100
MS_LLAVES_URL=https://dev1775-ms-gestor-llaves.apps.tas.nmp.com.mx/NMP/Prestanomico/v1
MS_LLAVES_PROVEEDOR_FIRMA=STP
MS_LLAVES_PASSPHRASE_FIRMA=7zk#uR7x-%NwbV
STP_CONS_ORDENES_URL=https://demo.stpmex.com:7024/speiws/rest/ordenPago/consOrdenesFech
STP_NOMBRE_EMPRESA=ARKANGELES
USER_STP_CONCILIACION=irosales
MS_STP_CONCILIACION_URL=https://10.30.3.15:8012/NMP/GestionFinanzas/Conciliacion/Contable/v1													 
SONAR_HOST_URL=http://150.136.172.54:9000
SONAR_PROJECT_NAME=ms-pagosconciliacion-pp
SONAR_PROJECT_KEY=ms-pagosconciliacion-pp
SONAR_PROJECT_LOGIN=965e737e020ddddc2c9acba8acf2c386cd581ab4
DIAS_INHABILES="2021-12-25|2021-12-31"
HORARIO_PAGOS_RECIBIDOS='0 05,11,17,23 * * *'
HORARIO_PAGOS_ENVIADOS='05 05,11,17,23 * * *'
HORARIO_CONCILIACION_AUTOMATICA='0 06,12,18,00 * * *'
HORARIO_CONCILIACION_TITAN='30 06,12,18,00 * * *'
HORARIO_CONCILIACION_AUTOMATICA_PS='50 06,12,18,00 * * *'
HORARIO_CONCILIACION_TITAN_PS='27 06,16,18,00 * * *'
WS_HUB_PAGOS_URL=https://dev1775-hub-pagos-back.apps.tas.nmp.com.mx:443/HubPagosServicios
ARCHIVO_TIP_URL=https://10.30.3.15:8012/NMP/GestionFinanzas/Conciliacion/Creditos/v1/Archivo
ARCHIVO_TIP_USUARIO=usuario
ARCHIVO_TIP_CONSUMIDOR=48
ARCHIVO_TIP_DESTINO=4
ARCHIVO_TIP_ENV=dev
DATOS_TRAI="STDER|CUNI|BSTP|FSTP|EFT"
DATOS_TRAF="BSTP|FSTP|STDER|CUNI|EFT"
DATOS_FOND="BSTP|FSTP|STDER|CUNI|EFT"
DATOS_REGC="||||F"
ID_BANCO_PS=014
CUENTA_BANCARIA_PS=00318065501068229
UNE=OMEGA
NEW_RELIC_APP_NAME=dev1775-ms-pagos-conciliados
NEW_RELIC_LICENSE_KEY=fc3fbcd672bb21e51af219e7b0e8df816a77NRAL
NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
NODE_TLS_REJECT_UNAUTHORIZED='0'
```

Para análisis de pruebas Sonar

```
SONAR_HOST_URL=URL del Sonarqube
SONAR_PROJECT_NAME=Project name del proyecto
SONAR_PROJECT_KEY=Project key del proyecto
SONAR_PROJECT_LOGIN=Login generado para este proyecto
```

Para configuración new relic

```
NEW_RELIC_APP_NAME: Nombre de la aplicacion en New Relic
ENV_NEW_RELIC_LICENSE_KEY: Key de licencia para permitir comunicación con New Relic y realizar el análisis del comportamiento del microservicio.

```

### Instalación :wrench:

_Instalación de los paquetes necesarios para despliegue y pruebas_

```
npm install
```

## Ejecutando las pruebas ⚙️

_Para la ejecución de las pruebas, no es nesaria la instalacción de otra herramienta diferentes a las instaladas en la **Instalación**, ejecutar_

```
npm run test
```

### Análisis del código :nut_and_bolt:

_Para la ejecución de las pruebas, no es nesaria la instalacción de otra herramienta diferentes a las instaladas en la **Instalación**, ejecutar_

```
npm run sonar
```

## Despliegue :package:

_Para el despliegue, basta con ejecutar la sentencia_

```
npm start
```

_ver el despliegue correcto en (https://[HOSTNAME]:[PORT])_

## Documentación para consumo :book:

Para el consumo de servicios y referencias ver [Ms-Pagos-Conciliacion](https://app.apiary.io/1775pagos-conciliacion/).

## CD/CI

Para CD/CI se hace mediante [Jenkins](http://dev1775-devops.apps.tas.nmp.com.mx/) 

## Autores :black_nib:

Desarrollado para Nacional Monte de Piedad por

* [**S & P Solutions**](<(https://www.spsolutions.com.mx/)>) - [**Juan Carlos García López**](https://github.com/JuanCarlosGarciaLopez)

## Bitácora :heavy_check_mark:

- Versión Inicial

# Pruebas de estres

Las pruebas consistieron en realizar la descarga y conciliación de 5000 pagos, el cúal es el mayor escenario de pagos indicado en un día.

- Generación de reporte T-1 ordenes Enviadas y Recibidas

|Número peticiones | Operación/Recurso |Destino | intentos x petición |Tiempo Minimo | Tiempo Maximo|Tiempo Medio
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |----------- |
| 5000 |POST /pp_pagos_conciliados/_doc - /speiws/rest/ordenPago/consOrdenesFech| elastic - STP | 1 |1000ms | 4000ms| 2000ms |

![prueba](imagenes/LOOPSTP.png)

### Uso de Memoria y CPU: 
![prueba](imagenes/MEMORYSTP.png)
![prueba](imagenes/CPUSTP.png)

- Conciliación SAP

|Número peticiones | Operación/Recurso |Destino | intentos x petición |Tiempo Minimo | Tiempo Maximo|Tiempo Medio
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |----------- |
| 5000 |POST /Conciliacion/Creditos/v1/Archivo | SAP | 1 |200ms | 1400ms| 700ms |

![prueba](imagenes/LOPSAP.png)

### Uso de Memoria y CPU: 
![prueba](imagenes/MEMORYSAP.png)
![prueba](imagenes/CPUSAP.png)

- Conciliación PeopleSoft

|Número peticiones | Operación/Recurso |Destino | intentos x petición |Tiempo Minimo | Tiempo Maximo|Tiempo Medio
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |----------- |
| 5000 |POST /Conciliacion/Contable/v1 | PS | 1 |300ms | 2000ms| 1000ms |

![prueba](imagenes/LOPPS.png)
### Uso de Memoria y CPU:  
![prueba](imagenes/MEMORYPS.png)
![prueba](imagenes/CPUPS.png)

- Conciliación SAP Vía TITAN

|Número peticiones | Operación/Recurso |Destino | intentos x petición |Tiempo Minimo | Tiempo Maximo|Tiempo Medio
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |----------- |
| 5000 |POST /Conciliacion/Creditos/v1/Archivo | PS | 1 |100ms | 1200ms| 600ms |

![prueba](imagenes/LoopTITANSAP.png)

### Uso de Memoria y CPU:  
![prueba](imagenes/MEMORYTITANSAP.png)
![prueba](imagenes/CPUTITANSAP.png)

- Conciliación PeopleSoft Vía TITAN

|Número peticiones | Operación/Recurso |Destino | intentos x petición |Tiempo Minimo | Tiempo Maximo|Tiempo Medio
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |----------- |
| 5000 |POST /Conciliacion/Contable/v1 | PS | 1 |100ms | 800ms| 500ms |

![prueba](imagenes/LoopTITANPS.png)

### Uso de Memoria y CPU:  
![prueba](imagenes/MEMORYTITANPS.png)
![prueba](imagenes/CPUTITANPS.png)