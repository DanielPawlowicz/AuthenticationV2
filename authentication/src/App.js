
import Signup from "./components/Signup.js"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext.js"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard.js"
import Login from "./components/Login.js"

function App() {

  return (
    <>
        <Container className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route exact path="/" element={<Dashboard />}/>
                  <Route path='/signup' element={<Signup />}/>
                  <Route path="/login" element={<Login />}/>
                </Routes>
              </AuthProvider>
            </Router>
          </div>
        </Container>
    </>
  )
}

export default App
