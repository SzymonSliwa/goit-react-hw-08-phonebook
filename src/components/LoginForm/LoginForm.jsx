import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/authOperations';

import Button from '@mui/material/Button';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className="Label">
          Email
          <input
            className="Form_input"
            type="email"
            name="email"
            placeholder="Enter e-mail"
          />
        </label>
        <label className="Label">
          Password
          <input
            className="Form_input"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </label>
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};
