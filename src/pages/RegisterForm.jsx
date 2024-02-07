import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [field, setField] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    phoneNumber: '',
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);

    
    if (!isCheckboxChecked) {
      alert('You have to agree to terms and conditions to register');
      return;
    }

    if (
      field.firstName !== '' &&
      field.password !== '' &&
      field.repeatPassword !== '' &&
      field.email !== '' &&
      field.phoneNumber !== '' &&
      field.repeatPassword === field.password &&
      field.phoneNumber.length === 10
    ) {
      setValidate(true);

      
      setTimeout(() => {
        navigate('/'); 
      }, 1000);
    }
  };

  return (
    <>
      <div className='container'>
        <form className='registration-form' onSubmit={handleSubmit}>
          <div>{validate ? <h3>Registration Successful!</h3> : ''}</div>
          <h1>CREATE ACCOUNT</h1>
          <input
            id='first-name'
            className='form-inputs'
            type='text'
            value={field.firstName}
            placeholder='First name'
            onChange={(e) => setField({ ...field, firstName: e.target.value })}
          />
          {submitted == true && field.firstName == '' ? (
            <p>Enter your first name</p>
          ) : null}
          <input
            id='email'
            className='form-inputs'
            type='text'
            value={field.email}
            placeholder='Email'
            onChange={(e) => setField({ ...field, email: e.target.value })}
          />
          {submitted == true && field.email == '' ? (
            <p>Enter your Email</p>
          ) : null}
          <input
            id='password'
            className='form-inputs'
            type='password'
            value={field.password}
            placeholder='Password'
            onChange={(e) => setField({ ...field, password: e.target.value })}
          />
          {submitted == true && field.password == '' ? (
            <p>Enter your Password</p>
          ) : null}
          <input
            id='repeat-password'
            className='form-inputs'
            type='password'
            value={field.repeatPassword}
            placeholder='Repeat your Password'
            onChange={(e) => setField({ ...field, repeatPassword: e.target.value })}
          />
          {submitted == true && field.repeatPassword == '' ? (
            <p>Please repeat your password</p>
          ) : null}
          {submitted == true && field.repeatPassword != field.password ? (
            <p>Your password is incorrect</p>
          ) : null}
          <input
            id='phone-number'
            className='form-inputs'
            type='text'
            value={field.phoneNumber}
            placeholder='Phone Number'
            onChange={(e) => setField({ ...field, phoneNumber: e.target.value })}
          />
          {submitted == true && field.phoneNumber == '' ? (
            <p>Enter your Phone Number</p>
          ) : null}
          {submitted == true && field.phoneNumber.length !== 10 ? (
            <p>Enter a valid phone number</p>
          ) : null}
          <label htmlFor=''>
            <input
              type='checkbox'
              checked={isCheckboxChecked}
              onChange={() => setCheckboxChecked(!isCheckboxChecked)}
            />
            I agree all statements in
            <Link to='/TermsService'>Terms of service</Link>
          </label>
          <button id='reg-btn' type='submit'>
            SIGN UP
          </button>
          <h5>
            Have already an account ? <span>Login here</span>
          </h5>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
