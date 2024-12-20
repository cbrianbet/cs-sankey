import { Chart } from "react-google-charts";


const GoogleChartsSankey = ({data}) => {
    const googleChartData = [
        ["From", "To", "Weight"],
        ...data?.sankeyData.map((item) => [item.from, item.to, item.weight]) // Transform your data
    ];
    const googleChartOptions = {
        sankey: {
            node: {
                nodePadding: 20,
                label: {
                    fontSize: 12
                }
            },
        }
    };

    return (
        <>
            {
                data && <Chart
                    chartType={'Sankey'}
                    width={"100%"}
                    height={"400px"}
                    data={googleChartData}
                    options={googleChartOptions}
                />
            }
        </>
    )
}

export default GoogleChartsSankey
