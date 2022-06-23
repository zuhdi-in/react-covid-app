import StyledCard from "./Card.styled";

function Card(props) {
    const {card} = props;
    console.log(card)
    return(
        <StyledCard>
            <h3 className={"card__status"}>{card.title || "0"} </h3>
            <p className={"card__total"} style={{color: card.title === "deaths" ? "#EF476F" : card.title === "confirmed" && "#118AB2"}}>{card.value.toLocaleString()}</p>
        </StyledCard>
    )
}

export default Card;