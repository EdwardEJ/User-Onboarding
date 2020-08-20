import React, { useState, useEffect } from 'react';

import Form from './Form'
import User from './User'

import formSchema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import { v4 as uuid } from 'uuid'

import '../App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: {
    accept: false,
  } //(checkbox)
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
};

const initialUsers = [];
const initialDisable = true;


function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisable)

  const getUser = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data.data)
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }


  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      terms: {
        ...formValues.terms.accept,
        [name]: isChecked,
      }
    })
  }


  const submit = () => {
    const newUser = {
      id: uuid(),
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      terms: formValues.terms.accept
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      });
  }, [formValues]);


  return (
    <div className="App">
      <header className="App-header">
        <Form
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
          disabled={disabled}
          errors={formErrors}
        />

        {
          users.map((user) => {
            return <User key={user.id} details={user} />;
          })
        }
      </header>
    </div>
  );
}

export default App;
