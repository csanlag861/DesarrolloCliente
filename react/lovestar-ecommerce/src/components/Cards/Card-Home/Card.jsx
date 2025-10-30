import styleCard from "./card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
    const navigate = useNavigate();
    const handleCard = (event) => {
        navigate("/Tienda");
    }
    return (
        <div className={styleCard.card} onClick={handleCard}>
            <img src={card.url} alt={card.alt} />
        </div>
    )
}

export default Card;