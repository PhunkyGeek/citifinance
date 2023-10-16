import React from 'react';
import { List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core';

const Dialog = ({ isOpen, onClose, currencies, determineCurrencyIcon }) => {
  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <List>
        {currencies.map((currency) => (
          <ListItem
            button
            key={currency}
            onClick={() => {
              // Handle account creation here
              onClose();
            }}
          >
            <ListItemIcon>
              <div style={{ width: 32 }}>{determineCurrencyIcon(currency)}</div>
            </ListItemIcon>
            <ListItemText primary={currency} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Dialog;
