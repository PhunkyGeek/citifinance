import React from 'react';
import { Typography } from '@material-ui/core';
import { ColorScheme } from '../../utils/theme';

const Title = ({ title, fontSize }) => {
  return (
    <Typography
      style={{ fontWeight: 'bold', fontSize, color: ColorScheme.PRIMARY }}
    >
      {title}
    </Typography>
  );
};

export default Title;
