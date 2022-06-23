import styled from "styled-components";

const StyledNavbar = styled.div`
/* Smaal Scren */
    padding: 2rem;
    background-color: #06D6A0 ;
    color: white;

.navbar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.navbar__brand {
    margin: 0px;
    text-transform: uppercase;
    padding: 0px;
}

.navbar__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0px;
    padding: 0px;
    list-style: none;   
}

.navbar__item {
    margin: 0px;
    padding: 0px;
}

.navbar__item a{
    color: white;
    text-decoration: none;
}

.navbar__right {
    margin: 0px;
    padding: 0px;
    display: flex;
}

.navbar__left {
    display: flex;
    margin: 0px;
    padding: 0px;
}


/* Medium Screen */
@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        gap: 0rem;
    }

    .navbar__list {
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

export default StyledNavbar
