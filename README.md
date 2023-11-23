
# Hospital - API

Desarrollo de una API-REST, la cual consiste en el manejo y persistencia de las citas que un hospital realiza, y que tiene como base el modelo *cliente-servidor*.

## Install

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
## API REST- CONSULTORIO

![Diagrama](database_hospital.png)


#### Rutas principales

Para consumir el API correctamente tener en cuenta las rutas determinadas en la logica del negocio del hospital.

---


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

---

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
---
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
----------------------------------------

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


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

-----


### Ejemplo para el uso de parametros
#### Get item {id} 

```http
  GET /api/consultorio/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id del recurso |



