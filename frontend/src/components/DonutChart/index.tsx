import axios from 'axios'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale'
import { BASE_URL } from 'utils/requests'

type ChartData = {
  labels: string[]
  series: number[]
}

function DonutChart() {
  let chartData: ChartData = { labels: [], series:[] }

//   const mockData = {
//     series: [477138, 499928, 444867, 220426, 473088],
//     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
// }

axios.get(`${BASE_URL}/sales/amount-by-seller`).then(response => {
  const data = response.data as SaleSum[]
  const myLables = data.map((x: { sellerName: string }) => x.sellerName)
  const mySeries = data.map((x: { sum: number }) => x.sum)

  chartData = { labels: myLables, series: mySeries }
  console.log(chartData);

})

const options = {
    legend: {
        show: true
    }
}


  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={ chartData.series }
      type="donut"
      height="240"
    />
  )
}

export default DonutChart;
