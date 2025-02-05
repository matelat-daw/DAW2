# Proyecto Docker Compose para Aplicaciones Spring Boot

Este proyecto utiliza Docker Compose para desplegar dos aplicaciones de Java Spring Boot en un contenedor Wildfly, asegurando que Tomcat quede aislado. A continuación se detallan los componentes del proyecto y las instrucciones para su uso.

## Estructura del Proyecto

```
docker-compose-project
├── app1
│   ├── Dockerfile
│   ├── src
│   │   └── main
│   │       └── java
│   │           └── com
│   │               └── example
│   │                   └── app1
│   │                       └── Application.java
│   └── pom.xml
├── app2
│   ├── Dockerfile
│   ├── src
│   │   └── main
│   │       └── java
│   │           └── com
│   │               └── example
│   │                   └── app2
│   │                       └── Application.java
│   └── pom.xml
├── docker-compose.yml
└── README.md
```

## Requisitos Previos

- Docker
- Docker Compose

## Construcción de las Aplicaciones

Para construir las imágenes de las aplicaciones, navega al directorio del proyecto y ejecuta el siguiente comando:

```
docker-compose build
```

## Ejecución del Proyecto

Para iniciar los contenedores y desplegar las aplicaciones, utiliza el siguiente comando:

```
docker-compose up
```

Esto levantará los servicios definidos en el archivo `docker-compose.yml`, incluyendo Wildfly para las aplicaciones Spring Boot.

## Acceso a las Aplicaciones

- La aplicación 1 estará disponible en `http://localhost:8080/app1`
- La aplicación 2 estará disponible en `http://localhost:8081/app2`

## Detener los Contenedores

Para detener y eliminar los contenedores, ejecuta:

```
docker-compose down
```

## Notas

Asegúrate de que los archivos `Dockerfile` y `pom.xml` de cada aplicación estén correctamente configurados para que las aplicaciones se construyan y ejecuten sin problemas.