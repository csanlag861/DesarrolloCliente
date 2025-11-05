# 🧠 React Hooks y Contextos: Filosofía, Usos y Ventajas

## 🔹 useEffect

### 📖 ¿Qué es?

`useEffect` es el gancho del ciclo de vida en los componentes funcionales.
Su función es permitirte ejecutar efectos secundarios (side effects) en respuesta a cambios del estado o de las props.

👉 React, por diseño, no quiere que el render tenga efectos colaterales.
El render debe ser puro: para una entrada (props + state), debe devolver siempre el mismo resultado (la UI).
Pero en el mundo real necesitamos hacer cosas “impuras”:
- Llamar APIs
- Actualizar el document.title
- Manejar subscripciones
- Sincronizar con el almacenamiento local…

### 🧩 Sintaxis básica

```jsx
import { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El componente se montó o contador cambió:", contador);
  }, [contador]); // <- dependencias

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(c => c + 1)}>Incrementar</button>
    </div>
  );
}
```

### ⚙️ Cómo funciona

- El efecto se ejecuta después del render.
- El segundo parámetro ([...]) controla cuándo se ejecuta:
    - [] vacío → solo una vez (montaje).
    - [var] → cada vez que cambia esa variable.
    - sin nada → en cada render (no recomendable salvo casos especiales).

### 🧠 Filosofía detrás

React te dice: ***“Dime qué dependencias necesita tu efecto, y yo me encargaré de volver a ejecutarlo cuando cambien”.*** 
Esto mantiene la UI sincronizada con el estado.

### ✅ Casos de uso
- Peticiones HTTP (fetch a una API)
- Escuchar o limpiar eventos del navegador
- Manipular el DOM directamente
- Temporizadores (setTimeout, setInterval)
- Sincronizar con localStorage

### 💡 Ventajas
- Permite efectos controlados y limpios
- Se integra con el modelo funcional de React
- Sustituye los métodos de ciclo de vida de clases (componentDidMount, etc.)
- Facilita limpieza de recursos con return () => {} dentro del efecto

---

## 🔹 useState

### 📖 ¿Qué es?

`useState` es el hook de estado.
Te permite darle memoria a un componente funcional.

👉 En React, una función pura renderiza UI a partir de props. Pero con `useState`, puedes guardar datos internos que cambian con el tiempo sin abandonar la naturaleza funcional.

### 🧩 Sintaxis básica

```jsx
import { useState } from "react";

function EjemploUseState() {
  const [nombre, setNombre] = useState("Hugo");

  return (
    <div>
      <p>Hola, {nombre}</p>
      <input 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        placeholder="Escribe tu nombre"
      />
    </div>
  );
}
```

### ⚙️ Cómo funciona

- Llamas a **useState(valorInicial)** → devuelve un array **[estado, setEstado]**
- React mantiene el valor entre renderizados.
- Cuando llamas a **setEstado(nuevoValor)**, React re-renderiza el componente con el nuevo estado.

### 🧠 Filosofía detrás

El estado en React es una fotografía del tiempo.
React re-renderiza tu componente cada vez que el estado cambia, asegurando que la UI refleje siempre el estado actual del mundo.

### ✅ Casos de uso
- Formularios controlados
- Contadores
- Cambiar estilos dinámicamente
- Mostrar/ocultar componentes
- Estados de carga, error, éxito

### 💡 Ventajas
- Hace que tus componentes sean reactivos.
- Facilita el diseño declarativo: “si el estado es X, muestra Y”.
- Evita manipular directamente el DOM.

---

## 🔹 useRef

### 📖 ¿Qué es?
`useRef` crea una referencia mutable que no causa re-renderizados cuando cambia.
Es una forma de mantener un valor persistente entre renders sin disparar un nuevo render.

### 🧩 Sintaxis básica
```jsx
import { useRef, useEffect } from "react";

function EjemploUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // accede al nodo DOM
  }, []);

  return <input ref={inputRef} placeholder="Escribe algo..." />;
}
```

### 🧠 Filosofía detrás
React te dice: ***“Yo controlo el DOM virtual. Pero si tú necesitas acceder al DOM real, hazlo a través de una referencia controlada”.***
Así mantiene la pureza del render, pero te deja una puerta al mundo imperativo cuando es necesario.

### ✅ Casos de uso
- Acceder a elementos DOM (focus, scroll, medidas)
- Guardar valores entre renders sin provocar renderizados (por ejemplo, un contador interno o un valor previo)
- Integrar librerías externas (canvas, mapas, etc.)

### 💡 Ventajas
- No re-renderiza al cambiar.
- Permite integrar React con APIs imperativas.
- Ideal para optimización o casos muy concretos.

---

## 🔹 Contextos en React (React.createContext + useContext)

### 📖 ¿Qué es?
`El Contexto` es el mecanismo de React para compartir datos globales a través del árbol de componentes sin tener que pasarlos manualmente por props.

👉 React promueve el *flujo de datos unidireccional*: los datos van de padre a hijo por props.
Pero a veces necesitas algo más global (por ejemplo, tema, idioma o usuario logueado).
Ahí entra el **Contexto**.

### 🧩 Sintaxis básica
```jsx 
import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const TemaContext = createContext();

// 2. Crear un proveedor
function TemaProvider({ children }) {
  const [tema, setTema] = useState("claro");
  const alternarTema = () => setTema(t => (t === "claro" ? "oscuro" : "claro"));

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

// 3. Consumir el contexto
function BotonTema() {
  const { tema, alternarTema } = useContext(TemaContext);
  return (
    <button onClick={alternarTema}>
      Tema actual: {tema}
    </button>
  );
}

// 4. Usar en la app
function App() {
  return (
    <TemaProvider>
      <BotonTema />
    </TemaProvider>
  );
}
```

### 🧠 Filosofía detrás
El contexto es como una **corriente de datos invisible** que fluye por debajo de los componentes.
Cada consumidor puede “beber” de esa corriente sin que los datos tengan que pasar explícitamente por cada nivel del árbol.

### ✅ Casos de uso
- Autenticación (usuario actual)
- Tema visual (modo oscuro / claro)
- Idioma (internacionalización)
- Configuraciones globales o flags
- Estado global ligero (sin Redux)

### 💡 Ventajas
- Evita el prop drilling (pasar props por 5 niveles)
- Mantiene el código limpio y declarativo
- Facilita estados compartidos en grandes aplicaciones