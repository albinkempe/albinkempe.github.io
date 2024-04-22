import CaseCard from "../components/CaseCard/CaseCard"

const PortfolioPage = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="portfolio">
                <CaseCard
                    title="Energuesser"
                    description="Prototypes for Humanity"
                    imgPath="/albin-1.jpg"
                />
            </div>
        </div>
    )
}

export default PortfolioPage