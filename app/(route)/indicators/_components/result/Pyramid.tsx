import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const DynamicChart = dynamic(() => import('react-apexcharts'), { ssr: false })

function Pyramid() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const series = [
    {
      name: '최종 점수',
      data: [10, 30, 50, 70, 90],
    },
  ]

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ['#afb0fe', '#a576f4', '#c676f4', '#e676f4', '#6c76f4'],
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
      formatter: function (
        val: unknown,
        opt: { w: { globals: { labels: string[] } }; dataPointIndex: number },
      ) {
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
    <>
      {isClient && (
        <DynamicChart
          options={options}
          series={series}
          type="bar"
          width={290}
          height={300}
        />
      )}
    </>
  )
}

export default Pyramid
