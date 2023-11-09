import { useState } from "react";
import "./RegisterPage.css";

// Functional component for the registration page
function RegisterPage() {
  // State for the email input
  const [email, setEmail] = useState("");
  // State to track whether the user is registered
  const [isRegistered, setIsRegistered] = useState(false);
  // State to track the validity of the email input
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Function to handle the registration process
  const handleRegistration = () => {
    // Validate the email using the validateEmail function
    if (validateEmail(email)) {
      // If the email is valid, set isRegistered to true and reset email validity
      setIsRegistered(true);
      setIsEmailValid(true);
    } else {
      // If the email is not valid, set isEmailValid to false
      setIsEmailValid(false);
    }
  };

  // Function to validate the email format
  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  // JSX for rendering the registration page content
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

// Exporting the RegisterPage component as the default export
export default RegisterPage;
