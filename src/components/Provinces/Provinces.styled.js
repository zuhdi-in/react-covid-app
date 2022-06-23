const { default: styled } = require("styled-components");

const StyledProvinces = styled.div`
/* Small Screen */
    padding: 4rem 2rem;
    background-color: white;


.provinces{
    display: flex;
    flex-direction: column;    
    gap: 50px;
    text-align: center;
    justify-content: center;

}

.provinces__title{
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0 0 12px 0;
    text-align: center;
}

.provinces__subtitle{
    font-size: 1rem;
    color: #584B54;
    text-align: center;
    margin: 0px;    
}

.provinces__table {
    border-spacing: 0px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    overflow: hidden;
    white-space: nowrap;
}

.provinces__bottom {
    overflow-x: scroll;
    overflow-y: auto;
    
}

.provinces__table th {
    border-right: 1px solid black;
    border-bottom: 1px solid black; 
    padding: 0px 30px;
    margin: 0px;
    border-spacing: 0;
    text-align: center;
}

.provinces__table td {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-collapse: collapse;
    padding: 0;
    margin: 0px;
    border-spacing: 0;
    text-align: center;
}

@media (min-width: 768px) {
    .provinces__bottom {
        margin: 0 auto;
    }
    
    .provinces__bottom {
        overflow-x: hidden;
        overflow-y: hidden;
    }
}

@media (min-width: 992px) {
        padding: 5rem 7rem;


    .provinces__title {
        font-weight: 600;
        font-size: 1.6rem;
    }
    
}
`

export default StyledProvinces