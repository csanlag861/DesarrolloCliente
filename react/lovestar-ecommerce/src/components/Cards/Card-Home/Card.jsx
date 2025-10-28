import styleCard from "./card.module.css";

const Card = ({card}) => {
    return (
        <div className={styleCard.card}>
            <img src={card.url} alt={card.alt} />
        </div>
    )
}

export default Card;