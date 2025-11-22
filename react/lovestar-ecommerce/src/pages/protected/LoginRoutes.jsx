import { Navigate } from "react-router-dom"
import { UserContext } from "../../context/ContextUser";
import { useContext } from "react";

const LoginRoute = ({ children }) => {
    const { currentUser } = useContext(UserContext);
    const isAuth = !!currentUser;

    if (!isAuth) {
        return <Navigate to="/Login" />;
    }

    return children;
}

export default LoginRoute;