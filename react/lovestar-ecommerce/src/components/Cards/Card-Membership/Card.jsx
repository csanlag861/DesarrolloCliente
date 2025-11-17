import { useState } from "react";
import stylesCard from "./card.module.css";
import { useContext } from "react";
import { CardContext } from "../../../context/ContextCard";

export default function Card({
  image,
  name,
  profession,
  description,
  links,
  portfolio,
  skills,
  withIcon,
  imageLoading,
  getDomain,
}) {
  const { cardData } = useContext(CardContext);

  const [isIconHovered, setIsIconHovered] = useState(false);
  const [hoveredLinkIndex, setHoveredLinkIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showLight, setShowLight] = useState(true);

  const isMobile = window.innerWidth <= 768;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = e.target;
    const x = e.pageX - offsetLeft;
    const y = e.pageY - offsetTop;

    const rotateY = (x / offsetWidth - 0.5) * 20;
    const rotateX = (y / offsetHeight - 0.5) * -20;

    setTransform({ rotateX, rotateY });
    setCursorPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Enlace copiado al portapapeles");
  };

  return (
    <>
      {imageLoading ? (
        <span className={stylesCard.loader}></span>
      ) : (
        <div
          className={stylesCard.cardContainer}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: !isMobile
              ? `perspective(600px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`
              : "none",
            transition: "transform 0.1s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          {/* ESTILOS DE MI CARD */}
          <div className={stylesCard.info}>
            <div className={stylesCard.top}>
              <img src="img/lovestarlogo.svg" alt="Logo Lovestar" />
              <h2>MEMBER PASS</h2>
            </div>
            <div className={stylesCard.user}>
              <p>Nombre: {cardData?.username || "Nombre de usuario"}</p>
              <p>Email: {cardData?.email || "Email"}</p>
              <p>Cumpleaños: {cardData?.birthday || "Fecha de nacimiento"}</p>
              <p>Teléfono: {cardData?.telefono || "Teléfono"}</p>
            </div>
            {cardData && (
              <h3>
                <i>“¡Bienvenido al club, {cardData?.username}!</i>
              </h3>
            )}
          </div>

          {showLight && window.innerWidth > 768 && !isSafari && (
            <div
              className={stylesCard.cardLight}
              style={{
                left: `${cursorPosition.x - 60}px`,
                top: `${cursorPosition.y - 60}px`,
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
