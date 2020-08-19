import React from 'react'

export default function Form(props) {
  const { disabled, errors, values, inputChange } = props;


  const onCheckBoxChanged = e => {
    const { name, checked } = e.target
    onCheckBoxChanged(name, checked)
  }

  const onInputChange = e => {
    const { name, value } = e.target
    inputChange(name, value)
  }


  return (
    <form>
      <div className='submit-container'>
        <h2>Add a User</h2>
        <button disabled={disabled}>Submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className='form-inputs'>
        <h3>Enter Your Information Here: </h3>

        <lable>Name:
          <input
            type='text'
            value={values.name}
            name='name'
            onChange={onInputChange}
          />
        </lable>

        <lable>Email:
        <input
            type='email'
            value={values.email}
            name='email'
            onChange={onInputChange}
          />
        </lable>

        <lable>Password (3 characters minimum):
        <input
            type='password'
            value={values.pasword}
            name='password'
            onChange={onInputChange}
          />
        </lable>

        <lable>Terms:
          <input
            type='checkbox'
            name='terms'
            checked={values.terms}
            onChange={onCheckBoxChanged}
          />
        </lable>

      </div>
    </form>
  )

}