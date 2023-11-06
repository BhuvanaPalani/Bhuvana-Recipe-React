import { useState } from "react";
import "./RegisterPage.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleRegistration = () => {
    if (validateEmail(email)) {
      setIsRegistered(true);
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  return (
    <div className="page-container">
      <h2>Register for Newsletter</h2>
      {isRegistered ? (
        <div>
          <p>Thank you for registering!!!</p>
          <p>You will recieve the update of the new dish in your email.</p>
        </div>
      ) : (
        <form>
          <div className="page-input">
            <label>Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailValid(true);
              }}
            />
          </div>
          {isEmailValid ? null : (
            <p className="error-message">
              The given email address is wrong. Please enter a valid email
              address.
            </p>
          )}
          <button type="submit" onClick={handleRegistration}>
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default RegisterPage;
