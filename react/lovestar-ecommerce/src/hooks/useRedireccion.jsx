import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedireccion = (timeout=5) => {
    const navigate = useNavigate();
    useEffect(() => {
        const time = setTimeout(() => {
            navigate("/home");
        }, timeout*1000);

        return () => clearTimeout(time);
    }, [navigate, timeout])
}

export default useRedireccion;