import React, { useState } from "react";
import { Link } from "react-router-dom";

function getFactors(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return [i, number / i];
  }
  return [number];
}

function getFactorTree(number) {
  const [factor1, factor2] = getFactors(number);
  if (factor1 === number) return { value: number, children: [] };
  return { value: number, children: [getFactorTree(factor1), getFactorTree(factor2)] };
}

function FactorTree({ node }) {
  return (
    <div className="flex flex-col items-center">
      <div className="p-3 min-w-[3rem] min-h-[3rem] w-auto h-auto flex items-center justify-center border-2 border-blue-200 rounded-full bg-white shadow-sm text-lg font-medium text-gray-700" style={{ padding: String(node.value).length > 3 ? '0.5rem 1rem' : '0.75rem' }}>
        {node.value}
      </div>
      {node.children?.length > 0 && (
        <>
          <div className="h-8 w-px bg-blue-200"></div>
          <div className="flex space-x-8">
            {node.children.map((child, idx) => (
              <FactorTree key={idx} node={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function FactorTreeApp() {
  const [number, setNumber] = useState(20);
  const [tree, setTree] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const num = parseInt(number);
    if (num > 1) {
      setTree(getFactorTree(num));
    } else {
      setTree(null);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            🧰 tools
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">🧮 factor tree builder</h1>
          
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="flex items-center justify-center space-x-4">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                min="2"
                className="w-32 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-center text-lg text-gray-800 placeholder-gray-400"
                placeholder="Enter a number"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Generate Tree
              </button>
            </div>
          </form>

          {tree && (
            <div className="mt-8 overflow-auto">
              <FactorTree node={tree} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}