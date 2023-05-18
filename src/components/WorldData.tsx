import { formatNumber } from "../utils/helper";

/**
 * @param param0 CONTAINS WORLD WIDE DATA ABOUT COVID-19
 * @returns REACT ELEMENT WHICH DISPLAYS THE INFORMATION ABOUT COVID-19
 */
const WorldData = ({ worldData }: any) => {
    return (
        <div className="world-data">
            <div className="data-wrapper">
                <h4>cases</h4>
                <h2>{formatNumber(worldData.data.cases)}</h2>
            </div>
            <div className="data-wrapper">
                <h4>active</h4>
                <h2>{formatNumber(worldData.data.active)}</h2>
            </div>
            <div className="data-wrapper">
                <h4>recovered</h4>
                <h2>{formatNumber(worldData.data.recovered)}</h2>
            </div>
            <div className="data-wrapper">
                <h4>death</h4>
                <h2>{formatNumber(worldData.data.deaths)}</h2>
            </div>
        </div>
    );
}

export default WorldData;