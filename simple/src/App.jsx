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

        </div>
      </form>
    </div>
  )
}

export default App
