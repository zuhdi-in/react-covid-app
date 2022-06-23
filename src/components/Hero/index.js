import illustration from "../../assets/images/Ilustrasi-covid.png";
import StyledHero from "./Hero.styled";

function Hero() {

    return (
        <StyledHero>
            <section className={"hero"} id="hero">
                <div className={"hero__left"}>
                    <h1 className={"hero__title"}>Waspada akan penularan dengan Monitoring Perkembangan Covid</h1>
                    <p className={"hero__desc"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <a className={"hero__button"} href="https://www.pedulilindungi.id/">Daftar Vaksin</a>
                </div>
                <div className={"hero__right"}>
                    <img src={illustration} alt="" className={"hero__image"}/>
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;