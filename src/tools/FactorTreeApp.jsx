import React, { useState } from "react";

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
      <div className="p-2 border rounded bg-white shadow">{node.value}</div>
      {node.children?.length > 0 && (
        <div className="flex mt-4 space-x-4">
          {node.children.map((child, idx) => (
            <FactorTree key={idx} node={child} />
          ))}
        </div>
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
    <div className="min-h-screen p-6 bg-gray-100 text-center">
      <h1 className="text-2xl font-bold mb-4">🧮 make a factor tree</h1>
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border px-2 py-1 rounded"
          placeholder="Enter a number > 1"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded" type="submit">
          Make Tree
        </button>
      </form>

      {tree && (
        <div className="flex flex-col items-center">
          <FactorTree node={tree} />
        </div>
      )}
    </div>
  );
}