'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { BenchmarkResult } from '@/lib/benchmark';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface BenchmarkChartProps {
  results: {
    rest: BenchmarkResult;
    graphql: BenchmarkResult;
  };
}

export default function BenchmarkChart({ results }: BenchmarkChartProps) {
  const data = {
    labels: [
      'Avg Response Time (ms)',
      'Throughput (req/s)',
      'Bandwidth Usage (KB)',
      'Query Complexity',
      'Cache Hit Ratio (%)',
      'Error Rate (%)'
    ],
    datasets: [
      {
        label: 'REST API',
        data: [
          results.rest.averageResponseTime,
          results.rest.throughput,
          results.rest.bandwidthUsage,
          results.rest.queryComplexity,
          results.rest.cacheHitRatio,
          results.rest.errorRate
        ],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'GraphQL API',
        data: [
          results.graphql.averageResponseTime,
          results.graphql.throughput,
          results.graphql.bandwidthUsage,
          results.graphql.queryComplexity,
          results.graphql.cacheHitRatio,
          results.graphql.errorRate
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'REST vs GraphQL Performance Comparison'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="mt-8">
      <Line options={options} data={data} />
      
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-bold">REST API Metrics</h3>
          <p>Average Response Time: {results.rest.averageResponseTime.toFixed(2)}ms</p>
          <p>Throughput: {results.rest.throughput.toFixed(2)} req/s</p>
          <p>Bandwidth Usage: {results.rest.bandwidthUsage.toFixed(2)}KB</p>
          <p>Query Complexity: {results.rest.queryComplexity}</p>
          <p>Cache Hit Ratio: {results.rest.cacheHitRatio.toFixed(2)}%</p>
          <p>Error Rate: {results.rest.errorRate.toFixed(2)}%</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-bold">GraphQL API Metrics</h3>
          <p>Average Response Time: {results.graphql.averageResponseTime.toFixed(2)}ms</p>
          <p>Throughput: {results.graphql.throughput.toFixed(2)} req/s</p>
          <p>Bandwidth Usage: {results.graphql.bandwidthUsage.toFixed(2)}KB</p>
          <p>Query Complexity: {results.graphql.queryComplexity}</p>
          <p>Cache Hit Ratio: {results.graphql.cacheHitRatio.toFixed(2)}%</p>
          <p>Error Rate: {results.graphql.errorRate.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
} 