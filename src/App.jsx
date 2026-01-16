import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // hardcoded credentials
  const correctEmail = 'test@example.com'
  const correctPassword = '123456'

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill all fields')
      return
    }

    if (email === correctEmail && password === correctPassword) {
      setError('')
      navigate('/home')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>

      {error && <p style={styles.error}>{error}</p>}
    </div>
  )
}

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome 🎉</h1>
      <p>You have successfully logged in.</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

const styles = {
  container: {
    maxWidth: '300px',
    margin: '100px auto',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px'
  },
  button: {
    width: '100%',
    padding: '8px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginTop: '10px'
  }
}

export default App
