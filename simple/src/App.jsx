const App = () => {
  return (
    <div className = "Login-Container">
      <h2 className="form">Log in with</h2>
      
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
