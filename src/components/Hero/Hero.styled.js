import styled from "styled-components";

const StyledHero = styled.div`
    padding: 4rem 2rem;
    background-color: white;

.hero {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.hero__right {
    margin: 0px;
    padding: 0px;
}

.hero__left {
    margin: 0px;
    padding: 0px;
}

.hero__title {
    font-size: 2rem;
    line-height: 2.8rem;
    margin: 0px;
    padding: 0px;
    margin-bottom: 15px;
}

.hero__desc {
    color: #584B54;
    margin: 0px;
    padding: 0px;
    margin-bottom: 40px;
}

.hero__image {
    width: 100%;
    object-fit: cover;
}

.hero__button {
    font-size: 1rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    padding: 0.7rem 0;
    text-align: center;
    display: block;
    max-width: 100%;
    width: 100%;
    background-color: #06D6A0;
    border: 0px;
    border-radius: 4rem;
}

@media (min-width: 768px) {
    .hero {
        flex-direction: row;
    }

    .hero__right {
        display: flex;
    }
    .hero__image {
        margin: auto;
    }

    .hero__button {
        max-width: 100%;
        width: 60%;
    }
}

@media (min-width: 992px) {
        padding: 5rem 7rem;


    .hero {
        gap: 200px;
    }

    .hero__title {
        font-size: 3rem;
        line-height: 3.6rem;
        font-weight: 600;
    }

    .hero__left {
        flex-basis: 50%;
    }

    .hero__right {
        flex-basis: 50%;
    }

    .hero__button {
        width: 40%;
    }
}

`

export default StyledHero;