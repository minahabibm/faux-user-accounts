import React, { useState } from 'react';
import axios from 'axios';

import './form.css';

export default function Form() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [validateNameError, setValidateNameError] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateName = (name) => {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)){
      setValidateNameError(true);
      setSubmitted(false);
      setShowError(false);
      return false;
    } else {
      return true;
    }
  }

  const handleInputChange = (event) => {
    event.persist();
    let target = event.target.name;
    setFormInfo((values) => ({
      ...values, 
      [target]: event.target.value
    }));
    console.log(formInfo)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( validateName(formInfo.name) && formInfo.name && formInfo.email && formInfo.feedback) {
      axios.post('http://localhost:8000/sendfeedback', {
        name: formInfo.name,
        email: formInfo.email,
        feedback: formInfo.feedback,
      })
      .then(res => {
        setSubmitted(true);
        setValidateNameError(false);
        setShowError(false);
        console.log(res)
      })
      .catch(err => {
        setValidateNameError(false);
        setShowError(true);
        console.log(err)
      })
    }

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
       
            <input type="text" name="name" className="customize"  placeholder="Name" required value={formInfo.name} onChange={handleInputChange}/>

            <br />

            <input type="email" name="email" className="customize"  placeholder="Email" required value={formInfo.email} onChange={handleInputChange}/>

            <br />

            <textarea id="feedback" name="feedback" className="customize" placeholder="How can I help?" required value={formInfo.feedback} onChange={handleInputChange}/>
                
            <br />

            <input type="submit" value="Submit" className="submitButton"/>

            {submitted && <p className="successMessage">Success! Thank you for getting in touch!</p>}
            {validateNameError && <span className="errorMessage"> make sure its a valid Name </span>}
            {showError && <p className="errorMessage">Oops, something wasn't right </p>}

        </form>
    </div>
  );
}