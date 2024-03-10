"use client";
import "./login-component.css";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginComponent = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const loginSubmit = async () => {
    try {
      const result = await signIn("credentials", {
        username: credentials.username,
        password: credentials.password,
        redirect: false,
      });

      if (result?.error) {
        console.log("login Failed");
      } else {
        router.push("/policyForm");
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  return (
    <form
      className="login-container"
      typeof="submit"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="login-box">
        <label>Username</label>
        <input
          placeholder="Username"
          onChange={(e: any) => {
            setCredentials((prevValue: any) => {
              return { ...prevValue, username: e.target.value };
            });
          }}
        ></input>
      </div>
      <div className="login-box">
        <label>Password</label>{" "}
        <input
          type="password"
          placeholder="Password"
          onChange={(e: any) => {
            setCredentials((prevValue: any) => {
              return { ...prevValue, password: e.target.value };
            });
          }}
        ></input>
      </div>

      <button className="sign-in-button" onClick={loginSubmit}>Sign In</button>
    </form>
  );
};

export default LoginComponent;
