# react router dom
instalacion de la libreria react-router-dom
--> npm install react-router-dom <--

# Estructura carpetas React
creamos una carpeta components y otra carpeta pages; a su vez, creamos otra carpeta styles.

# modulos css
para crear css aparte para cada fichero se hace así
--> {nombre}.module.css <--

# ¿Cuándo usar Arrow Functions o Functions?

# ¿Cuándo usar {nombre.class} o {nombre["class-class"]}?

# ¿Cómo importar los modulos css?

# Imagenes: assets o public.
Assets:  Si la imagen va a cambiar mucho se mete en assets, porque se va a recompilar cada vez que haga "npm run dev". Sólo para imagenes que usaré en componentes React -> Imagenes de cards, logos, icons... || para acceder con unidad relatiza --> src="../assets/{nombre}.png"

Public: Imagenes que no cambien / son fijas. No necesito que cuando se recompile el código cargar la imagen. Sólo para imagenes que se referencien en el index.html || acceder imagen de forma absoluta --> src="images/{nombre}.png" o "import {nombre} "path"" y luego se importa en src={nombre};

# styleGlobales o Reusables

# En componentes crear subcarpetas por cada componente.


# Con ReactRouterDom el app no se ponen componentes, es el ficher de enrutamiento.
