import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🧰 Math Tools</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link to="/factors" className="text-blue-600 underline">
            🧮 Factor Tree Builder
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App
