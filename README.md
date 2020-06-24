# REST API Delilah Resto

Esto describe los recursos que componen la API REST de Delilah Resto, basada en un sistema de pedidos.

## Comenzando 🚀

### Dependencias 
```
"dependencies": {
    "bcrypt": "^5.0.0",
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "express-validator": "^6.5.0",
    "jwt-simple": "^0.5.6",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.10"
  }
```
### Instalación 

Corre el servidor

```
npm start
```
Servidor corriendo 

```
Servidor arrancado en el puerto 4000
```

## Ejecutando las pruebas ⚙️

Para poder interactuar con la api es necesario usar un entorno que permita el envío de peticiones HTTP REST sin necesidad de desarrollar un cliente, como por ejemplo Postman entre otras.

### Registro del usuario

Primero que todo debemos registrar al usuario para poder acceder al resto de peticion HTTP, para esto usaremos la siguiente ruta

* POST/api/users/register

Lo siguinte que le vamos a pasar son los datos del usuario

```
{
		    "name":"Franco",
		    "lastname":"Perez",
        "email":"franco.perez@gmail.com",
        "phone": "345234234",
        "adress":"Av velez sarfield 564",
        "pass":"1234"
    }
```

### Login del usuario

* POST/api/users/register

En este momento existen dos tipos de login, el de un usuario común y el del administrador, que ya viene registrado desde la base de datos

#### Rol administrador

El rol administrador es quien tiene todos los permisos para poder acceder a la REST API, al venir por defecto lo unico que debemos hacer es logerase con 

```
{
        "email":"franco.perez@gmail.com",
        "pass":"1234"
    }
```

#### Token

Cuando se lograros logear con exito, el sistema devolvera un token, donde se debera copiar en el headers con la key `token`

## Peticiones de productos ☕

### Subiendo los productos

```
POST/api/products
```
```
{
       "title": "Milanesas con papas",
       "price" : "250",
       "stock": "11"
    }
```

### Trayendo los productos

##### Request

```
GET/api/products
```

##### Response

```
{
        "productId": 1,
        "title": "Milanesas con papas",
        "price": 2050,
        "stock": 7,
        "createdAt": "2020-06-23T23:29:52.000Z",
        "updatedAt": "2020-06-24T18:01:46.000Z"
    }
```

### Editar un producto

```
PUT/api/products/id
```

```
{
       "title": "Milanesas con papas",
       "price" : "250",
       "stock": "11"
    }
```

### Eliminar un producto

```
DELETE/api/products/id
```


## Peticiones de usuarios 🤓

### Trayendo los usuarios

##### Request

```
GET/api/users
```

##### Response

```
 {
        "id": 1,
        "name": "Amalia Maribel",
        "lastname": "Suppi",
        "email": "maribel7@fl.co",
        "phone": 345234234,
        "adress": "Belisario Caraffa",
        "pass": "$2b$10$reuzqX.ccNyNBHRSH9lB9OnPqEX4uYobBW7Kkh365hiYiUvq81hT6",
        "createdAt": "2020-06-23T23:40:16.000Z",
        "updatedAt": "2020-06-24T14:34:19.000Z"
    }
```

### Editar un usuario

```
PUT/api/users/id
```

```
 {
        "name": "Amalia Maribel",
        "lastname": "Suppi",
        "email": "maribel7@fl.co",
        "phone": 345234234,
        "adress": "Belisario Caraffa",
        "pass": "$2b$10$reuzqX.ccNyNBHRSH9lB9OnPqEX4uYobBW7Kkh365hiYiUvq81hT6"
    }
```

### Eliminar un usuario

```
DELETE/api/users/id
```


## Peticiones de pedidos 📦

### Generar un pedido

```
POST/api/orders
```

```
{
	"status": "activo",
	"total" : "600",
	"pay": "efectvio",
	"productId" : [1,3]
	
}
```


### Trayendo los pedidos

##### Request

```
GET/api/orders
```

##### Response

```
{
        "orderId": 6,
        "status": "activo",
        "total": 600,
        "pay": "efectvio",
        "createdAt": "2020-06-24T14:17:22.000Z",
        "updatedAt": "2020-06-24T14:17:22.000Z",
        "userId": 1
    }
```

### Editar un pedido

```
PUT/api/orders/id
```

```
{
        "status": "activo",
        "total": 600,
        "pay": "efectvio",
    }
```

### Eliminar un pedido

```
DELETE/api/orders/id
```

