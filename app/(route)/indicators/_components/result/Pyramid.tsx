'use client'
import Chart from 'react-apexcharts'

function Pyramid() {
  const series = [
    {
      name: '분포도',
      data: [10, 30, 50, 70, 90],
    },
  ]

  const options = {
    chart: {
      toolbar: {
        show: false, // 다운로드 툴바를 숨깁니다.
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex]
      },
      dropShadow: {
        enabled: true,
      },
    },
    xaxis: {
      show: false,
      categories: ['90점', '70점', '50점', '30점', '10점'],
    },
    yaxis: {
      show: false,
    },
  }

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={270}
        height={220}
      />
    </div>
  )
}

export default Pyramid
