import Card from "../Card/index";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import StyledCards from "./Cards.styled";

function Cards (props) {
    const cards = useSelector((state) => state.covid.covid);
    const { title } = props;


    return(
        <StyledCards>
            <section className={"global"} id="global">
                <div>
                    <h2 className={"global__title"}>{title}</h2>
                    <p className={"global__subtitle"}>Data Covid Berdasarkan {title}</p>
                </div>
                <div className={"global__card"}> 
                    {cards.map(function(card) {
                        return <Card key={nanoid(5)} card={card}/>})}    
                </div>
            </section>
        </StyledCards>
    )
}

export default Cards;