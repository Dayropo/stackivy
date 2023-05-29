import { Routes, Route } from "react-router-dom"
import Career from "./pages/Career"
import Layout from "./layout/Layout"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Career />} />
      </Route>
    </Routes>
  )
}

export default App
