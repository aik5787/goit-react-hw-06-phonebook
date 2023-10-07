import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import {
  ListItem,
  ListItemWrapper,
  ListItemInfo,
  ListItemButton,
} from './ContactListItem.styled';

export const ContactListItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  return filteredContacts.map(contact => (
    <ListItem key={contact.id}>
      <ListItemWrapper>
        <ListItemInfo>
          {contact.name}: {contact.number}
        </ListItemInfo>
        <ListItemButton onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </ListItemButton>
      </ListItemWrapper>
    </ListItem>
  ));
};
