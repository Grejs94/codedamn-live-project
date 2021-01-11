import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import "./style.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser() {
    const res = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((t) => t.json());

    console.log(res);
  }

  return (
    <div className="form">
      <h1>Register</h1>
      <form className="register-fields">
        <TextField
          fullWidth
          placeholder="you@awesome.com"
          label="Your Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          placeholder="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color="primary" variant="contained" onClick={registerUser}>
          Register
        </Button>
      </form>
    </div>
  );
}
