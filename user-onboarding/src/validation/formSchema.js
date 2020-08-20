import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must include email address."),
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .required("Username is Required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters long.")
    .required("You must have a password"),
  // terms: yup
  //   .boolean()
  //   .required("You must agree to the terms")
});

export default formSchema