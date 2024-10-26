import { useState, useRef, useCallback, useEffect } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const middleNameRef = useRef();
  const lastNameRef = useRef();
  const contactNoRef = useRef();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const userInputDebounce = useDebounce({ email, password, firstName, middleName, lastName, contactNo }, 2000);
  const [debounceState, setDebounceState] = useState(false);
  const [status, setStatus] = useState('idle');

  const navigate = useNavigate();

  const handleShowPassword = useCallback(() => {
    setIsShowPassword((value) => !value);
  }, [isShowPassword]);

  const handleOnChange = (event, type) => {
    setIsFieldsDirty(true);

    switch (type) {
      case 'email':
        setEmail(event.target.value);
        break;

      case 'password':
        setPassword(event.target.value);
        break;

      case 'lastname':
        setLastName(event.target.value);
        break;

      case 'firstname':
        setFirstName(event.target.value);
        break;

      case 'middlename':
        setMiddleName(event.target.value);
        break;

      case 'contactno':
        // Only allow numbers
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/[^0-9]/g, '');
        setContactNo(inputValue);
        break;

      default:
        break;
    }
  };

  const handleRegister = async () => {
    const data = { email, password, firstName, middleName, lastName, contactNo };
    setStatus('loading');
    console.log(data);

    await axios({
      method: 'post',
      url: '/admin/register',
      data,
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.access_token);
        alert("New admin account successfully registered. Redirecting you back to log in page.")
        navigate('/');
        setStatus('idle');
      })
      .catch((e) => {
        console.log(e);
        setStatus('idle');
        // alert(e.response.data.message);
      });
  };

  const handleKeyPress = (e) => {
    const char = String.fromCharCode(e.keyCode || e.which);
    const isValid = /^[0-9]+$/.test(char);
    if (!isValid) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  return (
    <div className='Register'>
      <div className='main-container'>
        <h3>Register</h3>
        <form>
          <div className='form-container'>
            <div>
              <div className='form-group'>
                <label>Last name:</label>
                <input type='text' name='lastname' ref={lastNameRef} onChange={(e) => handleOnChange(e, 'lastname')} />
              </div>
              {isFieldsDirty && lastName == '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div>
              <div className='form-group'>
                <label>First name:</label>
                <input type='text' name='firstname' ref={firstNameRef} onChange={(e) => handleOnChange(e, 'firstname')} />
              </div>
              {isFieldsDirty && firstName == '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div>
              <div className='form-group'>
                <label>Middle name:</label>
                <input type='text' name='middlename' ref={middleNameRef} onChange={(e) => handleOnChange(e, 'middlename')} />
              </div>
            </div>
            <div>
              <div className='form-group'>
                <label>Contact number:</label>
                <input type='text' name='contactno' ref={contactNoRef} onChange={(e) => handleOnChange(e, 'contactno')} onKeyPress={handleKeyPress} />
              </div>
              {isFieldsDirty && contactNo == '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div>
              <div className='form-group'>
                <label>E-mail:</label>
                <input type='text' name='email' ref={emailRef} onChange={(e) => handleOnChange(e, 'email')} />
              </div>
              {isFieldsDirty && email == '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div>
              <div className='form-group'>
                <label>Password:</label>
                <input type={isShowPassword ? 'text' : 'password'} name='password' ref={passwordRef} onChange={(e) => handleOnChange(e, 'password')} />
              </div>
              {isFieldsDirty && password == '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div className='show-password' onClick={handleShowPassword}>
              {isShowPassword ? 'Hide' : 'Show'} Password
            </div>

            <div className='submit-container'>
              <button
                type='button'
                disabled={status === 'loading'}
                onClick={() => {
                  if (status === 'loading') {
                    return;
                  }
                  if (email && password && firstName && lastName && contactNo ) {
                    handleRegister({
                      type: 'register',
                      user: { email, password, firstName, middleName, lastName, contactNo },
                    });
                  } else {
                    setIsFieldsDirty(true);
                    if (email == '') {
                      emailRef.current.focus();
                    }
                    if (password == '') {
                      passwordRef.current.focus();
                    }
                    if (lastName == '') {
                      lastNameRef.current.focus();
                    }
                    if (firstName == '') {
                      firstNameRef.current.focus();
                    }
                    if (contactNo == '') {
                     contactNoRef.current.focus();
                    }
                  }
                }}
              >
                {status === 'idle' ? 'Submit' : 'Loading'}
              </button>
            </div>
            <div className='login-container'>
              <a href='/login'>
                <small>Go back to Login page</small>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
