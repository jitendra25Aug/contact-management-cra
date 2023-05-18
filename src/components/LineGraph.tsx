import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Covid Chart',
            position: 'right' as const
        },
    },
};

/**
 * @param param0 CONTAINS DATA ABOUT COVID-19 OVER TIME
 * @returns REACT ELEMENT THAT USES CHARTS.js TO DISPLAY LINE GRAPH
 */
const LineGraph = ({ lineGraphData }: any) => {
    const labels = Object.keys(lineGraphData.data.cases);

    const data = {
        labels,
        datasets: [
            {
                label: 'cases',
                data: Object.values(lineGraphData.data.cases),
                borderColor: 'rgb(255, 199, 132)',
                backgroundColor: 'rgba(255, 199, 132, 0.5)',
            },
            {
                label: 'deaths',
                data: Object.values(lineGraphData.data.deaths),
                borderColor: 'rgb(255, 99, 131)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'recovered',
                data: Object.values(lineGraphData.data.recovered),
                borderColor: 'rgb(0, 199, 132)',
                backgroundColor: 'rgba(0, 199, 132, 0.5)',
            },
        ],
    };
    return (
        <div className="linegraph-container">
            <Line className="linegraph-canvas" options={options} data={data} />
        </div>
    );
}

export default LineGraph;
