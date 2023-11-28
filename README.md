
# Hospital - API

Desarrollo de una API-REST, la cual consiste en el manejo y persistencia de las citas que un hospital realiza, y que tiene como base el modelo *cliente-servidor*.
Este es un aplicativo web (REST API) que por medio de formularios reciba la informacion de pacientes y doctores, los alamacenen en una base de datos, en este caso el aplicativo va a permititr realizar las operaciones bases CRUD sobre los datos:
**tambien se especifica el metodo de rutas correspondiente**
-- *Create = post* 
-- *Read = get*
-- *Update = put*
-- *Delete = delete*


## INSTALL
Para usar el proyecto en su repositorio local, siga cuidadosamente las indicaciones, teniendo en cuenta que debe clonar el repositorio
inicialmente, luego siga las instrucciones indicadas:

- Inicializar el proyecto
```code
    npm init 
```
- Instalar dependencias del proyecto
```code
    npm i express nodemon body-parser mysql2 dotenv cors
```
- *(Deseable)* Instalar Swagger para documentar la API
```code
    npm i swagger-jsdoc swagger-ui-express
```
-  Instalar ORM sequelize con Typescript
```code
    npm i sequelize sequelize-typescript
```
- Instalar nodemon para Typescript
```code
    npm install --save-dev ts-node nodemon
```
- Instalar los tipos para trabajar con Typescript
```code
    npm i @types/node @types/express @types/body-parser @types/mysql @types/dotenv
```
- Crear el proyecto Typescript
```code
    npx tsc --init
```

## TECNOLOGIAS
Las tecnologias que se usaron en el proyecto fueron las siguientes:
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> Typescript
- Sequelize
- Postman
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> Express
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> Node.js
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> MySQL
- <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> Git


## API REST- CONSULTORIO
*El modelo de datos se realizo, bajo el modelo entidad relacion, el cual constituye un flujo de datos estruturado y basado en la integridad referencial de las entidades.*
![Diagrama](database_hospital.png)


#### RUTAS API

Para consumir el API correctamente tener en cuenta las rutas determinadas en la logica del negocio del hospital.

----

#### *Doctores*
```http
  GET      /api/doctores
  GET      /api/doctores/{id}
  POST     /api/doctores/{body}
  PUT      /api/doctores/{id}
  DELETE   /api/doctores/{id}
```
##### **body**
```json
    {
        "id_profesional":"56254652",
        "nombre":"Juan",
        "apellido":"Estrada",
        "correo":"estrada@gmail.com",
        "telefono":"311223423"
    }   

```

-----

#### *Pacientes*
```http
  GET      /api/pacientes
  GET      /api/pacientes/{id}
  POST     /api/pacientes/{body}
  PUT      /api/pacientes/{id}
  DELETE   /api/pacientes/{id}
```
##### **body**
```json
    {
        "id_numeroCedula":"98723421",
        "nombre":"Esteban",
        "apellido":"Casallas",
        "fechaNacimiento":"01-11-2003",
        "id_telefono":"1"
    } 

```
-----
#### *Telefono - Paciente*
```http
  GET      /api/telefono
  GET      /api/telefono/{id}
  POST     /api/telefono/{body}
  PUT      /api/telefono/{id}
  DELETE   /api/telefono/{id}
```
##### **body**
```json
    {
    "extension":"+57",
    "numberTelefono":"312091223"
    }

```
-----

#### *Consultorio*
```http
  GET      /api/consultorio
  GET      /api/consultorio/{id}
  POST     /api/consultorio/{body}
  PUT      /api/consultorio/{id}
  DELETE   /api/consultorio/{id}
```
##### **body**
```json
    {
        "id_consultorio":"101",
        "direccionConsultorio":"Carrera 9 sur - Sanitas"
    }
```
-----

#### *Especializacion*
```http
  GET      /api/especialidad   
  GET      /api/especialidad/{id}
  POST     /api/especialidad/{body}
  PUT      /api/especialidad/{id}
  DELETE   /api/especialidad/{id}
```
##### **body**
```json
    {
        "especialidad":"Neurologia",
        "descripcion":"Medicina especializada"
    }
```

-----
#### *Cita*
```http
  GET      /api/cita   
  GET      /api/cita/{data}
  POST     /api/cita/{id}
  PUT      /api/cita/{id}
  DELETE   /api/cita/{id}
```
##### **body**
```json
    {
        "fecha_hora":"10-10-2023T12:00:00",
        "id_profesional":"56254652",
        "id_numeroCedula":"98723421",
        "id_especializacion":"1",
        "id_consultorio":"101"
    } 
```


### Ejemplo para el uso de parametros
#### Get item {id} 

```http
  GET /api/consultorio/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id del recurso |

-----
### PRUEBAS - API
-- Citas
*get cita*
![Citas](pruebas-citas/cita_get_01.png)
