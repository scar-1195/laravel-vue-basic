# Laravel 8 + Vue 2 (Principiantes)

![GitHub Logo](https://mobiosolutions.com/wp-content/uploads/2020/05/The-Ultimate-Guide-to-Implement-Vue-JS-in-Laravel.png)

## Guia de instalación

### 1° Instalación de Laravel UI

Una vez creado nuestro proyecto de laravel empezamos con la instalación de **Laravel UI**

```
composer require laravel/ui

```

este un paquete de Laravel que proporciona un conjunto de plantillas de vista y controladores para la autenticación de usuarios, el registro de usuarios y la recuperación de contraseñas. Puedes utilizar Laravel UI para personalizar fácilmente la interfaz de autenticación de tu aplicación Laravel.

### 2° Configuración Vue Scaffolding

```
php artisan ui vue

```

Añade ciertas configuraciones en el proyecto que nos ayuda a implementar librerias o frameworks de interfaz de usuarios.

### 3° Creación de los modulos de node y compilación de dependencias

```
npm install && npm run dev

```

Con esto creamos nuestros modulos de node y corre el compilador de webpack mix.

**Nota**
Posiblemente laravel te pida correr de nuevo el comando **npm run dev** para instalar unas dependencias faltantes en el proyecto y volver a compilar.

### 4° Configurar rutas de compilación webpack.mix.js

```
const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/admin/app.js", "public/js/admin")
    .vue()
    .sass("resources/sass/admin/index.scss", "public/css/admin");


```

Siguiendo los estandares vamos a decirle al archivo de compilación la ruta de nuestros archivos JS y CSS/SASS

### 5° Creación de nuestros archivos blade CSS / JS / Main

A continuacion se crearan siguiendo los estandares 3 archivos.

1. main.blade.php que sera la vista principal que vamos a renderizar incluyendo nuestro div con un id para montar nuestro componente de Vue.

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Laravel 8 Vue 2</title>
  @include('admin.template.global_css')
</head>

<body>
  <div id="admin"></div>
  @include('admin.template.global_js')
</body>

</html>
```

2. global_css.blade.php que contendra la ruta de nuestros estilos

```
<link rel="stylesheet" href="{{asset('css/admin/index.css')}}" />
```

3. global_js.blade.php que contendra nuestro JavaScript

```
<script src="{{asset('js/admin/app.js')}}"></script>

```

### 6° Creación de nuestro componente principal de Vue

```
<template>
  <h1>hola Mundo</h1>
</template>

<script>
export default {
  name: 'App',
}
</script>
```

### 7° Creacion del archivo principal de JS que montara Vue

```
import("../bootstrap");

import Vue from "vue";
import App from "./pages/App.vue";

export const bust = new Vue();

const admin = new Vue({
    el: "#admin",
    render: (h) => h(App),
});
```

### 8° Modificar rutas de Laravel para mostrar nuestro componente de Vue

```
<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('admin.main');
});
```
