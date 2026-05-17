
const InputField = ({ type, placeholder, icon }) => {
  return (
    <div className="input-wrapper">
          <input type={type} placeholder={placeholder} className="input-field" required />
          <img src={icon} alt="" className="mail-icon" />
        </div>

  )
}

export default InputField