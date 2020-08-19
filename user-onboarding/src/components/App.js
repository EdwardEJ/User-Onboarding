import React, { useState, useEffect } from 'react';
import Form from './Form'

import formSchema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

import '../App.css';

const initialFormValues = {
  Name: '',
  Email: '',
  Password: '',
  Terms: '' //(checkbox)
};

const initialFormErrors = {
  Name: '',
  Email: '',
  Password: '',
  Terms: '' //(checkbox)
};

const initialUsers = [{ Name: 'ed' }];
const initialDisable = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisable)


  return (
    <div className="App">
      <header className="App-header">
        <Form />

        {`hello world`}

        {
          users.map(user => {
            return (
              <div key={user.id}>
                <h2>{user.Name}</h2>
                <p>{user.Email}</p>
              </div>
            )
          })
        }
      </header>
    </div>


  );
}

export default App;
