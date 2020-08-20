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
  terms: '' //(checkbox)
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '' //(checkbox)
};

const initialUsers = [
  {
    id: uuid(),
    name: 'ed'
  }
];

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

  useEffect(() => {
    getUser()
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <Form
          disabled={disabled}
          errors={formErrors}
          values={formValues}
        />

        {
          users.map(user => {
            return (
              <User key={user.id} details={user} />
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
