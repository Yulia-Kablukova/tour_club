import { orangeColor, yellowColor } from '../../consts';

export const backgroundImageStyle = {
  width: '100%',
};

export const divStyle = {
  backgroundColor: '#0b252e',
  display: 'flex',
  justifyContent: 'center',
  backgroundImage: "url('/home_wallpaper.jpg')",
};

export const loginButtonStyle = {
  marginLeft: '1em',
  backgroundColor: '#efefef',
  color: orangeColor,
  borderColor: orangeColor,
  '&:hover': {
    borderColor: yellowColor,
    color: yellowColor,
  },
};

export const signUpButtonStyle = {
  backgroundColor: orangeColor,
  '&:hover': {
    backgroundColor: yellowColor,
  },
};

export const mainPageStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '65%',
  margin: 'auto',
};

export const contentStyle = {
  padding: '1.5em',
  marginBottom: '2em',
  backgroundColor: '#d3e1e3',
};

export const footerStyle = {
  marginBottom: '1em',
  opacity: '60%',
  color: '#efefef',
};
