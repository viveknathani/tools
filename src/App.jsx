import './App.css'
import { Link } from 'react-router-dom'

function App() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/factors" 
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🧮</span>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">factor tree builder</h2>
                <p className="text-gray-600 mt-1">Visualize prime factorization of numbers</p>
              </div>
            </div>
          </Link>
          {/* Add more tools here */}
        </div>
      </main>
    </div>
  );
}

export default App
