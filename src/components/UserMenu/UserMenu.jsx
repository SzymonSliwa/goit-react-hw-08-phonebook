import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="Wrapper">
      <p className="Username">Welcome, {user.name}</p>
      <button
        className="Button"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
};
