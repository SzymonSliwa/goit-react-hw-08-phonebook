import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="container">
      <form
        className="formfield__register"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h3 className="title"> User name</h3>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Enter user name"
        />
        <h3 className="title"> Email</h3>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Enter e-mail"
        />
        <h3 className="title"> Password</h3>
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};
