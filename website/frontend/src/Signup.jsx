import React, { useState } from "react";
//import 'bootstrap-icons/font/bootstrap-icons.css'


function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          alert('Acc created')
        });
      }
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4" style={{ width: '700px' }}>
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-3 ms-2">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3 ms-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="e.g mario@example.com"
              required
            />
          </div>


          <div className="ms-2 mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="form-control"
              required
            />
          </div>

          <div className="ms-2 mb-3">
            <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="current-password"
              className="form-control"
              required
            />
          </div>


          <button type="submit" className="btn btn-primary ms-2" style={{ width: '300px' }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

