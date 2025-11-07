# 🧾 Daily Log - Proyecto Ecommerce


### 🚧 Pendiente / Por hacer
- Que el usuario que sea miembro tenga otro footer / mas ropa.
- Que el usuario que no tenga el descuento tenga otro footer.
- BigLayout para el header del Login, Register y Membership.
- Hacer que se reflejen los datos en la card
- Comenzar la vista Sobre Nosotros (acordeon).
- Refactorizar los distintos botones que hay.
- Header Sticky (-> overflow-y)
- Filtro en la tienda ?¿¿?¿


### 💡 Ideas / Notas
- Cuando un usuario logeado intenta acceder a la ruta */lovestar*, redirige al **login**, pero en realidad debería redirigir a **home**.


### 💻 Fragmentos de código / Soluciones técnicas
> Fragmentos relevantes o ejemplos de código que resolvieron un problema.

































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
currentUser?.rol == "admin"
```
“Si currentUser existe (no es null ni undefined), entonces comprueba si su propiedad rol es igual a "admin".”

```jsx
const isAuth = !!currentUser
```

Como currentUser ya es una expresión booleana por sí misma (si existe → truthy, si no → falsy), puedes hacer simplemente:

👉 el doble !! convierte cualquier valor en true o false.
