# react router dom

instalacion de la libreria react-router-dom
--> npm install react-router-dom <--

# Estructura carpetas React

creamos una carpeta components y otra carpeta pages; a su vez, creamos otra carpeta styles.

# modulos css

para crear css aparte para cada fichero se hace así
--> {nombre}.module.css <--

# ¿Cuándo usar Arrow Functions o Functions?

Cuando creamos un componente padre, como por ejemplo, Header, Footer, Home, etc, usaremos Functions.
Cuando creemos componentes reusables, por ejemplo, cards, usaremos Arrow Functions.

# ¿Cuándo usar {nombre.class} o {nombre["class-class"]}?

{nombre.class}: Si en el CSS tenemos una clase escrita de esta forma ".class", en el JSX usaremos {nombre.class}.
{nombre["class-class"]}: Si en el CSS tenemos una clase escrita de esta forma ".class-text" en el JSX usaremos {nombre["class-text]};

// IMPORTANTE
Si en algún caso tenemos que usar varias clases en una etiqueta HTML usaremos lo siguiente: className={`${nombre.class} ${nombre["class-text"]}`}.

# ¿Cómo importar los modulos css?

import style{Nombre} from "./{nombre}.module.css";

# Imagenes: assets o public.

Assets: Si la imagen va a cambiar mucho se mete en assets, porque se va a recompilar cada vez que haga "npm run dev". Sólo para imagenes que usaré en componentes React -> Imagenes de cards, logos, icons... || para acceder con unidad relatiza --> src="../assets/{nombre}.png"

Public: Imagenes que no cambien / son fijas. No necesito que cuando se recompile el código cargar la imagen. Sólo para imagenes que se referencien en el index.html || acceder imagen de forma absoluta --> src="images/{nombre}.png" o "import {nombre} "path"" y luego se importa en src={nombre};

# styleGlobales o Reusables

En los Estilos Globales se pondrá todo lo referenciado a la tipografía y colores de nuestro proyecto.
En los Estuilos Reusables se pondrá todo el código CSS que estemos repitiendo en nuestro proyecto, y que veamos que se va a ser de utilidad.

# Carpeta Componentes: organizar por subcarpetas.

<!-- En componentes crear subcarpetas por cada componente.-->

Para que nustra estructura de carpetas sea más legible, en la carpeta COMPONENTES crearemos subcarpetas por cada componente, en la que se incluirán los siguientes archivos:

- Componente JSX
- Style

# React Router Dom

<!-- Con ReactRouterDom en el APP no se ponen componentes, es el fichero de enrutamiento. -->

A partir de ahora en el APP no pondremos componentes ya que será nuestro fichero de enrutamiento.
Es decir, en nuestro APP irán todas las rutas a todas nustras vistas, y en caso, de que una vista lleve a otra también irá definida ahí.

# CSS SPREADSHEET

- Para dividir la página usamos:
  {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  }

- Para que los elementos ocupen todo el div usamos:
  {
  justify-content: space-between;
  }

- Usaremos REM la mayor parte del tiempo en las siguientes propiedades:
 - Padding
 - Gap
 - Font-size *
 - Margin *

- Etiquetas HTML utiles:
 - Header
 - Footer
 - Main
 - Section
 - Article
 - Aside
 - Nav
 - Div
 - Span
 - Button
 - a
 - Form