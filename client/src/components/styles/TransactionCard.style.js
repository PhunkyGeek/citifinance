import React, { useState } from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  Collapse,
  CardContent,
  IconButton,
  CardActions,
  ThemeProvider,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ColorScheme, theme } from '../../utils/theme';

const useTransactionCardStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    expandedText: {
      fontSize: 14,
      marginBottom: 8,
    },
    avatar: {
      backgroundColor: ColorScheme.PRIMARY, // Make sure ColorScheme is defined in '../../utils/theme'
    },
  }),
);

const TransactionCard = ({ title, time, amount, card, transactionIcon, currencyIcon }) => {
  const classes = useTransactionCardStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ marginTop: 12 }}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label="whatever">
              {transactionIcon}
            </Avatar>
          }
          title={title}
          subheader={time}
          style={{ textAlign: 'left' }}
        />
        <CardActions style={{ marginTop: '-40px' }}>
          <ThemeProvider theme={theme}>
            <IconButton
              style={{ marginLeft: 420 }}
              color="primary"
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </ThemeProvider>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ marginTop: '-24px' }}>
            <hr
              style={{
                border: 'none',
                borderBottom: `1px solid black`,
              }}
            />
            <div className={classes.expandedText} style={{ marginTop: 12 }}>
              Apollo card: <span style={{ color: 'black' }}>{card}</span>
            </div>
            <div className={classes.expandedText}>
              Amount: <span style={{ color: 'black' }}>{currencyIcon}{amount}</span>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default TransactionCard;
