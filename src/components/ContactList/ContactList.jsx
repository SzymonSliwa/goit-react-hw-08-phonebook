import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectContactsFilter } from 'redux/selectors';

import Button from '@mui/material/Button';

export const ContactList = () => {
  const list = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {list
          .filter(ev => ev.name.toLowerCase().includes(filter.toLowerCase()))
          .map(contact => {
            return (
              <li className="contactItem" key={contact.id}>
                <p className="contact">{contact.name}:</p>
                <p className="contact">{contact.number}</p>
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </Button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
