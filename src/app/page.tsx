'use client';

import { useState } from 'react';
import { runBenchmark, BenchmarkResult } from '@/lib/benchmark';
import BenchmarkChart from '@/components/BenchmarkChart';

interface BenchmarkResults {
  rest: BenchmarkResult;
  graphql: BenchmarkResult;
}

export default function Home() {
  const [results, setResults] = useState<BenchmarkResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRunBenchmark = async () => {
    setIsLoading(true);
    try {
      const restResults = await runBenchmark('rest');
      const graphqlResults = await runBenchmark('graphql');
      setResults({ rest: restResults, graphql: graphqlResults });
    } catch (error) {
      console.error('Benchmark error:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Performance Benchmark</h1>
      <button 
        onClick={handleRunBenchmark}
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isLoading ? 'Running...' : 'Run Benchmark'}
      </button>
      
      {results && <BenchmarkChart results={results} />}
    </div>
  );
} 