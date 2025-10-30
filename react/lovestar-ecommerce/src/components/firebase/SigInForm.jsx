import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase";

function SigInForm() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");


    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePasswd = (event) => {
        setPasswd(event.target.value);
    }

    const handleGoogle = async() => {
        try {
        const res = await signInWithGooglePopup();            
        } catch (error) {
            console.error("Error a la hora de hacer login con Google", error);
        }
    }
    return (
        <form action="">
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={handleEmail} required placeholder="email"/>
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={passwd} onChange={handlePasswd} required placeholder="passwd"/>
            </div>

            <div>
                <button type="submit">Login con Usuario y Password</button>
                <button type="button" onClick={handleGoogle}>Login con Google</button>
            </div>
        </form>
    );
}

export default SigInForm;