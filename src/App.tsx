import { useState } from 'react'
import { FcShipped } from "react-icons/fc";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FcShipped size={84}/>
      </div>
      <h1>Github Pages</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click to increment: {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
