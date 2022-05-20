import { useState } from "react";
import "./App.css";
import FormInput from "./component/FormInput";
import chart from "./chart.png";
import {useNavigate} from "react-router-dom"

const App = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    phoneNumber:""
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Your email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Your password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Passwords don't match!",
      label: "Confirm your password",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: "username",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Your full name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 5,
      name: "phoneNumber",
      type: "number",
      errorMessage:
        "phone number should be of 10 digits ",
      label: "Your phone number",
      pattern: "^[0-9]{10}$",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">

    <div className="divfirst">
    <img src={chart} alt="bar" className="img"/>
      <p className="text">Choose a date range</p>
      <p style={{color:'grey',marginLeft:'10em'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
      In ornare vulputate quam, quis consectetur est euismod non</p>
    </div> 
    
     <div className="divsecond">
      
      <form onSubmit={handleSubmit} >
       
      <h2>Create an account</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <input type="checkbox" name="check" />
        <strong style={{color:'grey',marginLeft:6}}>I read and agree Terms and Conditions</strong>
        <button onClick={ () => navigate("/graph")}>Create account</button>
      </form>
      </div>
    </div>
  );
};

export default App;