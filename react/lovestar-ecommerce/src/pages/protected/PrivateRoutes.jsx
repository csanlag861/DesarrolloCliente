import { Navigate } from "react-router-dom"
import { UserContext } from "../../context/ContextUser";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    const isAdmin = currentUser?.rol == "admin" ? true : false;
    const isAuth = !!currentUser;

    if (!isAuth) {
        return <Navigate to="/login" />;
    }
    
    if (!isAdmin) {
        return <Navigate to="/home" />;
    }

    return children;
}

export default PrivateRoute;