const { default: styled } = require("styled-components");

const StyledCovidForm = styled.div`
/* Small Screen */

    padding: 4rem 2rem;


.form__left {
    display: none;
}

.form__input {
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid black;
}

.form__group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form__form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.form__submit {
    margin-top: 12px;
    font-size: 1.1rem;
    padding: 14px 12px;
    border-radius: 20px;
    background-color: #06D6A0;
    border: 0px;
    color: white;
    font-weight: 500;
}

@media (min-width: 768px) {
    .form {
        display: flex;
        flex-direction: row;
        gap: 60px;
    }

    .form__image {
        margin: auto;
        width: 100%;
    }

    .form__right {
        flex-basis: 50%;
    }
    
    .form__left {
        flex-basis: 50%;
        display: flex;
    }
}

@media (min-width: 992px) {
        padding: 5rem 7rem;
    

    .form {
        gap: 200px;
    }
}
`
export default StyledCovidForm;