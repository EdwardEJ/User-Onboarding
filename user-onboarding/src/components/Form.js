import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    disabled,
    errors,
    inputChange
  } = props;

  const onSubmit = e => {
    e.preventDefault()
    submit()
  }

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

        <label>Name:&nbsp;
          <input
            type='text'
            value={values.name}
            name='name'
            onChange={onInputChange}
          />
        </label>

        <label>Email:&nbsp;
        <input
            type='email'
            value={values.email}
            name='email'
            onChange={onInputChange}
          />
        </label>

        <label>Password (3 characters minimum):&nbsp;
        <input
            type='password'
            value={values.pasword}
            name='password'
            onChange={onInputChange}
          />
        </label>

        <label>Terms:&nbsp;
          <input
            type='checkbox'
            name='terms'
            checked={values.terms}
            onChange={onCheckBoxChanged}
          />
        </label>
      </div>
    </form>
  )

}