const App = () => {
  return (
    <div className = "Login-Container">
      <h2 className="form">Log in with</h2>
      <div className="social-login">
        <button className="social-btn">
          <img src="/google.svg" alt="Google" className="google-icon" />
          Google
        </button>
        <button className="social-btn">
          <img src="/facebook.svg" alt="Facebook" className="facebook-icon" />
          Facebook
        </button>
      </div>

      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder="Email" className="input-field" required />
          <img src="/mail.svg" alt="" className="mail-icon" />
        </div>

        <div className="input-wrapper">
          <input type="password" placeholder="Password" className="input-field" required />
          <img src="/lock.svg" alt="" className="mail-icon" />
        </div>
        <a href="#" className="forgotpassword">Forgot Password?</a>
        <button type="submit" className="Loginbtn">Log In</button>

        <p className="signup">Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>
       </form>
    </div>
  )
}

export default App
