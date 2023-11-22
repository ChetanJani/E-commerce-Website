import React, { useState } from "react";

const AuthForm = ({ title, onSubmit, formType, onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>{title}</h2>
      <form className={`${formType}-form`} onSubmit={handleSubmit}>
        {formType === "register" && (
          <>
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
            />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="you@example.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">{formType === "login" ? "Log In" : "Register"}</button>
      </form>
      <button className="link-btn" onClick={() => onFormSwitch(formType === "login" ? "register" : "login")}>
        {formType === "login" ? "Don't have an account? Register here." : "Already have an account? Login here."}
      </button>
    </div>
  );
};

export const Login = (props) => {
  return <AuthForm title="Login" formType="login" onFormSwitch={props.onFormSwitch} />;
};

export const Register = (props) => {
  return <AuthForm title="Register" formType="register" onFormSwitch={props.onFormSwitch} />;
};
