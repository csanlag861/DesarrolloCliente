import stylesMembership from "./membership.module.css";
import FormInput from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/ContextUser";
import { CardContext } from "../../../context/ContextCard";
import { actualizarMiembro, registrarMiembro } from "../../../utils/firebase";

const MembershipForm = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cardData, setCardData } = useContext(CardContext);

  useEffect(() => {
    if (currentUser) {
      setCardData((prev) => ({
        ...prev,
        username: currentUser.username || currentUser.displayName || "",
        email: currentUser.email || "",
        birthday: currentUser.birthday || "",
        telefono: currentUser.telefono || "",
      }));
    }
  }, [currentUser, setCardData]);

  const handleCancelar = () => {
    navigate("/home");
  };
  const handleConf = async () => {
    try {
        if (currentUser) {
            await actualizarMiembro(currentUser.uid, {
                birthday: cardData.birthday,
                telefono: cardData.telefono
            })
        }else{
            const data = await registrarMiembro({
                email: cardData.email,
                password: cardData.password,
                username: cardData.username,
                additionalData: {
                    birthday: cardData.birthday,
                    telefono: cardData.telefono
                }
            })

            setCurrentUser(data);
        }
        toast.success("¡Bienvenido a la familia de Lovestar!")
        navigate("/home");
    } catch (error) {
        toast.error("Error al hacerte miebro, reinténtalo más tarde.")
        console.error("Error al hacerse miembro", error)
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCardData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className={stylesMembership.container}>
      <div className={`${stylesMembership.text}`}>
        <h1>¡Lovestar Club!</h1>
        <p>
          Sé parte de algo distinto. Hazte miembro y accede a lanzamientos
          exclusivos, descuentos especiales y contenido que nadie más verá.{" "}
          <i>La familia se viste primero.</i>
        </p>
      </div>

      <div className={stylesMembership.form}>
        <FormInput
          label="Nombre de Usuario"
          id="username"
          type="text"
          value={cardData?.username || cardData?.displayName || ""}
          /*                 ref={emailRef}
           */
          onChange={handleChange}
          placeholder="Nombre de Usuario"
          required
        />
        <FormInput
          label="Email"
          id="email"
          type="text"
          value={cardData?.email || ""}
          /*                 ref={emailRef}
           */
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {!currentUser && (
          <FormInput
            label="Password"
            id="password"
            type="password"
            /*                 ref={emailRef}
             */
            value={cardData?.password || ""}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        )}

        <FormInput
          label="Fecha de Nacimiento"
          id="birthday"
          type="date"
          /*                 ref={emailRef}
           */
          value={cardData?.birthday || ""}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Teléfono"
          id="telefono"
          type="tel"
          /*                 ref={emailRef}
           */
          value={cardData?.telefono || ""}
          onChange={handleChange}
          placeholder="Teléfono"
          required
        />
      </div>
      <div className={stylesMembership.btns}>
        <button type="submit" onClick={handleConf}>
          CONFIRMAR
        </button>
        <button type="button" onClick={handleCancelar}>
          CANCELAR
        </button>
      </div>
    </div>
  );
};

export default MembershipForm;
