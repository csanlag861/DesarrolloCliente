import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedireccion = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const time = setTimeout(() => {
            navigate("/home");
        }, 5000);

        return () => clearTimeout(time);
    }, [navigate])
}

export default useRedireccion;