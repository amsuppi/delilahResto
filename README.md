# REST API Delilah Resto

Esto describe los recursos que componen la API REST de Delilah Resto, basada en un sistema de pedidos.

## Comenzando 🚀

### Dependencias 

Debe tener instaladas las dependencias necesarias para correr el proyecto con exito. 

```
EJEMPLO
```
### Instalación 

Corre el servidor
```
EJEMPLO
```
## Ejecutando las pruebas ⚙️

Para poder interactuar con la api es necesario usar un entorno que permita el envío de peticiones HTTP REST sin necesidad de desarrollar un cliente, como por ejemplo Postman entre otras.

### Registro del usuario

Primero que todo debemos registrar al usuario para poder acceder al resto de peticion HTTP, para esto usaremos la siguiente ruta
* 121.123.123

Lo siguinte que le vamos a pasar son los datos del usuario

```
EJEMPLO
```

### Login del usuario

Ya registrados nos debemos logear para poder obtener el token que nos permitira empezar a interacturar con los pedidos y las oredenes.
* 123.123.123

En este momento existen dos tipos de login, el de un usuario común y el del administrador, que ya viene registrado desde la base de datos

#### Rol administrador

El rol administrador es quien tiene todos los permisos para poder acceder a la REST API, al venir por defecto lo unico que debemos hacer es logerase con 

```
EJEMPLO
```

#### Rol ususuario

En este caso el rol usuario necesita ser registrado anteriormente para poder logearse, a diferencia del de administrador no tiene todos los accesos en la rest api, por lo que lo unico con lo que puede acceder es a los pedidos y a su propia orden

```
EJEMPLO
```

Cuando se lograros logear con exito, el sistema devolvera un token, donde se debera copiar en el headers, para poder validar que el usuario se a logeado con exito, y asi identificar el rol de cada usuario

```
EJEMPLO
```


## Peticiones de productos ☕

### Subiendo los productos

```
EJEMPLO
```
```
EJEMPLO
```

### Trayendo los productos

##### Request

```
EJEMPLO
```

##### Response

```
EJEMPLO
```

### Editar un producto

```
EJEMPLO
```

```
EJEMPLO
```

### Eliminar un producto

```
EJEMPLO
```


## Peticiones de usuarios 🤓

### Trayendo los usuarios

##### Request

```
EJEMPLO
```

##### Response

```
EJEMPLO
```

### Editar un usuario

```
EJEMPLO
```

```
EJEMPLO
```

### Eliminar un usuario

```
EJEMPLO
```


## Peticiones de pedidos 📦

### Generar un pedido

```
EJEMPLO
```
### Trayendo los pedidos

##### Request

```
EJEMPLO
```

##### Response

```
EJEMPLO
```

### Editar un pedido

```
EJEMPLO
```

```
EJEMPLO
```

### Eliminar un pedido

```
EJEMPLO
```

