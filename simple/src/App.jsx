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
          <input type="email" placeholder="Email" required />
          <img src="/mail.svg" alt="" className="mail-icon" />
        </div>
      </form>


      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input type="password" placeholder="Password" required />
          <img src="/lock.svg" alt="" className="lock-icon" />
        </div>
        <a href="#" className="forgotpassword">Forgot Password?</a>
        <button type="submit" className="login-btn">Log In</button>
      </form>

      <p className="signup">Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>
    </div>
  )
}

export default App
