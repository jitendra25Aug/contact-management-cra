import { useQuery } from "@tanstack/react-query";
import { LineGraph, Map, WorldData } from "../components";
import { fetchData } from "../utils/api";
import { url_country_data, url_graph, url_world_data } from "../utils/helper";

/**
 * DISPLAYS MAP AND LINE GRAPH USING DATA FROM APIs ENDPOINT
 * USES REACT QUERY TO LOAD DATA FROM ALL THE DIFFERNENT ENDPOINTS
 */
const Dashboard = () => {
    const lineGraphData = useQuery({
        queryKey: ["covidCases"],
        queryFn: () => fetchData(url_graph).then((queryData) => queryData.data),
        cacheTime: 5 * 60 * 1000
    });

    const mapData = useQuery({
        queryKey: ["covidCases_country"],
        queryFn: () => fetchData(url_country_data).then((queryData) => queryData.data),
        cacheTime: 5 * 60 * 1000
    });
    const worldData = useQuery({
        queryKey: ["covidCases_world"],
        queryFn: () => fetchData(url_world_data).then((queryData) => queryData.data),
        cacheTime: 5 * 60 * 1000
    });

    if (lineGraphData.status === "loading" || mapData.status === "loading" || worldData.status === "loading") {
        return <section className="dashboard-page">
            <div className="loading"></div>
        </section>
    }
    if (lineGraphData.status === "error" || mapData.status === "error" || worldData.status === "error") {
        return <section className="dashboard-page">
            <h3>Error occured while loading data..</h3>
        </section>
    }
    return (
        <section className="dashboard-page">
            <div className="dashboard-container">
                <WorldData worldData={worldData} />
                <div className="dashboard-visuals">
                    <Map mapData={mapData} />
                    <LineGraph lineGraphData={lineGraphData} />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;