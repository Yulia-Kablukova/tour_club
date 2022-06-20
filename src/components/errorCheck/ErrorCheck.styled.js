import { orangeColor, yellowColor } from '../../consts';

export const paperStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -60%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '24em',
  maxWidth: '90%',
  '& .MuiTextField-root': {
    width: '80%',
  },
};

export const headerTextStyle = {
  fontFamily: 'Open Sans',
  textAlign: 'center',
  marginTop: '6%',
};

export const errorLinkStyle = {
  marginTop: '1em',
  marginBottom: '2em',
  fontWeight: '600',
  fontFamily: 'Open Sans',
  textDecoration: 'none',
};

export const errorButtonStyle = {
  width: '16em',
  fontWeight: '600',
  background: orangeColor,
  '&:hover': {
    backgroundColor: yellowColor,
  },
  fontFamily: 'Open Sans',
};

export const homeButtonStyle = {
  width: '10em',
  fontWeight: '600',
  background: orangeColor,
  '&:hover': {
    backgroundColor: yellowColor,
  },
  fontFamily: 'Open Sans',
  marginRight: '1em',
};

export const logoutButtonStyle = {
  width: '10em',
  maxWidth: '50%',
  fontWeight: '600',
  background: orangeColor,
  '&:hover': {
    backgroundColor: yellowColor,
  },
  fontFamily: 'Open Sans',
  marginRight: '3em',
};

export const ButtonGroupStyle = {
  display: 'flex',
  width: '100%',
  justifyContent: 'right',
  marginTop: '1em',
};
