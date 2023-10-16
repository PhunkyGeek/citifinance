import React from 'react';
import { ThemeProvider, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { theme } from '../../utils/theme';

const ApolloCard = ({ cardNumber, validThru, cvv }) => {
  return (
    <>
      <div className="card-top">
        {/* Your card top content here */}
      </div>
      <div className="card-number">{cardNumber}</div>
      <div style={{ display: 'flex' }}>
        <div>
          <div className="valid-thru-label">valid thru</div>
          <div>{validThru}</div>
        </div>
        <div>
          <div className="cvv-label">cvv</div>
          <div style={{ marginLeft: 12 }}>{cvv}</div>
        </div>
      </div>
    </>
  );
};

const NoApolloCard = ({ onCreateNewCardClicked }) => {
  return (
    <div style={{ display: 'flex', marginTop: '62px', justifyContent: 'center' }}>
      <ThemeProvider theme={theme}>
        <Button
          style={{ fontWeight: 'bold', textTransform: 'none', letterSpacing: 1 }}
          color="primary"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onCreateNewCardClicked}
        >
          Create new card
        </Button>
      </ThemeProvider>
    </div>
  );
};

export { ApolloCard, NoApolloCard };
