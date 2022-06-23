import styled from "styled-components";

const SyledSummary = styled.div`

    padding-bottom: 4rem;
    padding: 4rem 2rem;

.summary{
    display: flex;
    flex-direction: column;    
    gap: 50px;
    text-align: center;
}

.summary__title{
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0 0 12px 0;
    text-align: center;
}

.summary__subtitle{
    font-size: 1rem;
    color: #584B54;
    text-align: center;
    margin: 0px;
}

img {
    width: 100%;
    height: auto;
}

@media (min-width: 992px) {
        padding: 5rem 7rem;

    .summary__title {
        font-weight: 600;
    font-size: 1.6rem;
    }

    .summary__subtitle {
        font-size: 1rem;
    }
}

`;

export default SyledSummary;