import React, { useState } from "react";
import "./Register.css";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
 const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Perform registration process here
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    history.push("/login")
  };

  return (
    <center>
      {" "}
      <div className="card">
        <div class="card">
          <form class="form" onSubmit={handleSubmit}>
            <span class="title">Sign up</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div class="form-container">
              <input type="text" class="input" placeholder="Full Name" />
              <input type="email" class="input" placeholder="Email" />
              <input type="password" class="input" placeholder="Password" />
            </div>
            <button disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner animation="border" size="sm" /> Loading...
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </form>
          <div class="form-section">
            <p>
              Have an account? <a href="/login">Log in</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </center>
  );
}
