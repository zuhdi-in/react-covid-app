import SyledSummary from "./Summary.styled";

function Summary (props) {
    const { summaryImage, title } = props

    return (
        <SyledSummary>
            <section className={"summary"}>
                <div>
                    <h2 className={"summary__title"}>Summary</h2>
                    <p className={"summary__subtitle"}>Data Covid Berdasarkan {title}</p>
                </div>
                <div>
                    <img src={summaryImage} />
                </div>
            </section>
        </SyledSummary>
    )
}

export default Summary;