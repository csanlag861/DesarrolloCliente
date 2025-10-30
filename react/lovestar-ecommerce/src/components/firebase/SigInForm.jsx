import { useState } from "react";

function SigInForm() {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");


    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePasswd = (event) => {
        setPasswd(event.target.value);
    }
    return (
        <form action="">
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={handleEmail} required>Email</input>
            </div>

            <div>
                <label>Password</label>
                <input type="password" value={passwd} onChange={habdlePasswd} required>Password</input>
            </div>

            <div>
                
            </div>
        </form>
    );
}

export default SigInForm;