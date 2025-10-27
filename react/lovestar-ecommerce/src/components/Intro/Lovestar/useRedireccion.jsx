import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Home from "../../../pages/Home/Home";

const useRedireccion = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 5000);
    })
    clearTimeout();
    return useRedireccion;
}

export default useRedireccion;
