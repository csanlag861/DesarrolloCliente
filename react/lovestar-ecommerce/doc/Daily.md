# 🧾 Daily Log - Proyecto Ecommerce

### 🚧 Pendiente / Por hacer

- Re-hacer el acordeon.
- Filtro en la tienda.
- Cargar más (en la tienda).
- Hacer más productos para la tienda.
- Grid Shop Responsive y Accesible.

- Que el usuario que no tenga el descuento tenga otro footer.
- Refactorizar los distintos botones que hay.

-- Organizar:

- Decidir un día para sólo hacer responsive.
- Decidir un día para sólo hacer lógica.

### 💡 Ideas / Notas

- Cuando un usuario logeado intenta acceder a la ruta _/lovestar_, redirige al **login**, pero en realidad debería redirigir a **home**.

### 💻 Fragmentos de código / Soluciones técnicas

> Fragmentos relevantes o ejemplos de código que resolvieron un problema.
> 👇 Ocupar todo el ancho de un elemento flex. 👇

```css
& > * {
  flex: 1;
}
```


> 👇 Para quitar el padding del primer hijo. En este caso, le quitamos el padding al div hero para que ocupe todo el ancho. 👇
```css
& > :first-child {
  margin-inline: -64px;
}
```


> 👇 Para mostrar algo una única vez al día. 👇
```JSX
  useEffect(() => {
    const hasShownToday = localStorage.getItem("showDialog");
    const hoy = new Date().toDateString();

    if (hasShownToday !== hoy) {
      const time = setTimeout(() => {
        setShowDialog(true);
        localStorage.setItem("showDialog", hoy);
      }, 1000);

      return () => clearTimeout(time);
    }
  }, []);
```



### 🚀 Próximos pasos

- Sobre Nosotros.
- Filtros en la tienda.
- Dashboard admin
- Carrito
- Checkout
- Dialog
- Detalles del producto.

---

- Lógica de Contacto.
- Lógica de Membership.

---

- Responsive de Footer.
- Responsive de Header.
- Responsive de Home.
- Responsive de Filtros tienda.
- Responsive de Contacto.
- Hamburguesa Header.

# ERROR IMPORTANTE CON EL useRef.

Excelente pregunta 👏

La diferencia entre pasar emailRef y emailRef.current.value es muy importante en React. Te explico con claridad:

🧩 1️⃣ Qué es emailRef

Cuando haces algo como:

const emailRef = useRef();

emailRef es un objeto con una propiedad .current.
React usa ese objeto para guardar una referencia al elemento del DOM, por ejemplo a un <input>.

Si haces esto:

<input ref={emailRef} />

entonces:

emailRef.current apunta al nodo del input (es decir, el elemento HTML real).

emailRef.current.value es el valor actual que el usuario ha escrito dentro del input.

🧩 2️⃣ Diferencia práctica

👉 Si pasas emailRef, estás pasando todo el objeto de referencia, no el valor del campo.

👉 Si pasas emailRef.current.value, estás pasando el texto que el usuario escribió (por ejemplo, "usuario@gmail.com").

🔍 Ejemplo real
❌ Mal:
signInAuthUserWithEmailAndPassword(emailRef, passwordRef);

Esto le está pasando dos objetos ref, no los strings con email y password.
Firebase espera cadenas de texto, así que esto puede causar errores de tipo o de red.

✅ Bien:
signInAuthUserWithEmailAndPassword(
emailRef.current.value,
passwordRef.current.value
);

Ahora le estás pasando exactamente lo que Firebase necesita: el email y contraseña escritos por el usuario.

```jsx
currentUser?.rol == "admin";
```

“Si currentUser existe (no es null ni undefined), entonces comprueba si su propiedad rol es igual a "admin".”

```jsx
const isAuth = !!currentUser;
```

Como currentUser ya es una expresión booleana por sí misma (si existe → truthy, si no → falsy), puedes hacer simplemente:

👉 el doble !! convierte cualquier valor en true o false.
