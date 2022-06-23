import styled from "styled-components";

const StyledCards = styled.div`

    padding: 4rem 2rem;


.global{
    display: flex;
    flex-direction: column;    
    gap: 50px;
}

.global__title{
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0 0 12px 0;
    text-align: center;
}

.global__subtitle{
    font-size: 1rem;
    color: #584B54;
    text-align: center;
    margin: 0px;
}

.global__card {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

/* Medium Screen */
@media (min-width: 768px) {
    .global__card {
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
    }
}

@media (min-width: 992px) {
    
    padding: 5rem 7rem;
    

    .global__card {
        gap: 25px;
    }

    .global__title {
        font-weight: 600;
     font-size: 1.6rem;
    }

    .global__subtitle {
        font-size: 1rem;
    }
}
`

export default StyledCards;