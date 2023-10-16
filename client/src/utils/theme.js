import { createTheme } from '@material-ui/core/styles';

// Define your custom color scheme
export const ColorScheme = {
  PRIMARY: '#29AABB',
  SECONDARY: '#F15742',
  // Add more colors as needed
};


export const theme = createTheme({
  palette: {
    primary: {
      main: ColorScheme.PRIMARY,
    },
  },
});
