const { default: styled } = require("styled-components");

const StyledFooter = styled.div`
/* Smaal Scren */
    padding: 2rem;
    background-color: #06D6A0 ;
    color: white;

.footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.footer__brand {
    margin: 0px;
    text-transform: uppercase;
    padding: 0px;
}

.footer__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0px;
    padding: 0px;
    list-style: none;   
}

.footer__item {
    margin: 0px;
    padding: 0px;
}

.footer__right {
    margin: 0px;
    padding: 0px;
    display: flex;
}

.footer__left {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
}


/* Medium Screen */
@media (min-width: 768px) {
    .footer {
        flex-direction: row;
        justify-content: space-between;
        gap: 0rem;
    }

    .footer__list {
        flex-direction: row;
        margin: auto;
        gap: 2rem;
    }
    
}

/* Large Screen */
@media (min-width: 992px) {
        padding: 2rem 7rem;
}

`

export default StyledFooter;