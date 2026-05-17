import SocialLoginButton from "./components/SocialLoginButton";
import InputField from "./components/InputField";
const App = () => {
  return (
    <div className = "Login-Container">
      <h2 className="form">Log in with</h2>
      
      <SocialLoginButton />

      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        
        <InputField  type= "email" placeholder="Email" icon="/mail.svg"/>
        <InputField  type= "password" placeholder="Password" icon="/lock.svg"/>

        <a href="#" className="forgotpassword">Forgot Password?</a>
        <button type="submit" className="Loginbtn">Log In</button>

        <p className="signup">Don't have an account? <a href="#" className="signup-link">Sign Up</a></p>
       </form>
    </div>
  )
}

export default App
