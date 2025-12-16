import styleError from "./error.module.css";

function Error() {
    return (
        <div className={styleError.container}>
            <h1>ERROR</h1>
            <h2>Página no encontrada</h2>
        </div>
    );
}

export default Error;