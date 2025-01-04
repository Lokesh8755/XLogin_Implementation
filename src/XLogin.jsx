import React, { useState } from "react";

function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!username || !password) {
      setMessage("Please fill both fields.");
      return;
    }

    // Check if username and password are correct
    if (username === "user" && password === "password") {
      setMessage(`Welcome, ${username}!`);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default XLogin;
