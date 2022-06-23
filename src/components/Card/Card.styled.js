import styled from "styled-components";

const StyledCard = styled.div`
    padding: 34px 0px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    border-radius: 24px;
    display: block;
    width: 100%;


.card__status {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0 0 10px 0;
    text-align: center;
}

.card__total {
    text-align: center;
    font-size: 2.6rem;
    font-weight: 600;
    color: #06D6A0;
    margin: 0;
}

/* Medium Screen */
@media (min-width: 768px) {
    width: 100%;

   .card__total {
       font-size: 2rem;
   }
}

@media (min-width: 992px) {
    .card__total {
        font-size: 3rem;
    }
}
`;

export default StyledCard;