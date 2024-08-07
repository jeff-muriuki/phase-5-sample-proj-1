import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './Signup'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <React.StrictMode>
      <SignUp setUser={setUser} />
    </React.StrictMode>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);


