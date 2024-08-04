import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { register } from "../../redux/auth/authOps";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;
    if(!name.trim() || !email.trim() || !password.trim()) {
      toast.error('All fields are required!');
      return;
    }
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">Register</button>
        <Toaster/>
      </Form>
    </Formik>
  );
}
