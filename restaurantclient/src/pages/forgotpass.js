import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forgotpass.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Status message
  const [buttonText, setButtonText] = useState("Send Reset link");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0); // Timer countdown

  const navigate = useNavigate();

  // Timer logic to enable button after 60 seconds
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsButtonDisabled(false);
      setButtonText("Send Reset link");
    }
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Change button to "Sending OTP..."
    setButtonText("Sending Reset link...");
    setIsButtonDisabled(true);

    try {
      const response = await fetch(
        "https://restaurant-management-backend-1.onrender.com/api/user/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setButtonText("Reset link sent");
        setCountdown(60); // Start the 60-second timer
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to send OTP.");
        setButtonText("Send Reset link"); // Reset button
        setIsButtonDisabled(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Network error occurred.");
      setButtonText("Send Reset link"); // Reset button
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="forgot-password-title">Reset Password</h2>
        <p className="forgot-password-description">
          Enter your email to receive a reset link.
        </p>

        {/* Show success or error message dynamically */}
        {message && <p className="status-message">{message}</p>}

        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
          </div>

          {/* Dynamic OTP Button */}
          <button type="submit" className="submit-button" disabled={isButtonDisabled}>
            {countdown > 0 ? `Reset link Sent (${countdown}s)` : buttonText}
          </button>
        </form>

        {/* Back to login link */}
        <Link to="/" className="back-to-login-button">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
