import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [displayPass, setDisplayPass] = useState(false);
  const [displayConfirmPass, setDisplayConfirmPass] = useState(false);

  const signUpNewUser = () => {
    // Communicate with backend!
  };

  const handleRendering = () => {
    if (!displayPass) {
      setDisplayPass(true);
      return;
    }
    if (!displayConfirmPass) {
      setDisplayConfirmPass(true);
      return;
    }
    if (password !== confirmPass) {
      // Do some error handling
      return;
    }
    signUpNewUser();
  };
  return (
    <div className="signup-page">
      <h1 className="signup-title">
        Welcome to the best restaurant in Kiranchi!
      </h1>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Please enter your email address"
        className="email-input"
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
      {displayPass && (
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Please enter a password"
          className="password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
      )}
      {displayConfirmPass && (
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Please confirm your password"
          className="password"
          onChange={(e) => {
            e.preventDefault();
            setConfirmPass(e.target.value);
          }}
        />
      )}
      <button className="next-btn" onClick={handleRendering}>
        Next
      </button>
    </div>
  );
}
