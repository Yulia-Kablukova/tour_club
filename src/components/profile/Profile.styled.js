import { orangeColor, yellowColor } from '../../consts';

export const paperStyle = {
  marginTop: '1em',
  marginRight: '12%',
  minHeight: '35em',
};

export const settingsStyle = {
  fontSize: '1.3rem',
  textAlign: 'center',
  fontFamily: 'Open Sans',
  marginTop: '2%',
};

export const listItemIconStyle = {
  margin: '0em',
  minWidth: '2em',
};

export const muiDrawerPaperStyle = {
  width: '70%',
  boxSizing: 'border-box',
  marginTop: '1em',
  marginLeft: '30%',
  paddingBottom: '7%',
  borderRadius: '4px',
  marginRight: '5%',
  boxShadow:
    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
};

export const createButtonStyle = {
  alignSelf: 'end',
  margin: '2em',
  background: orangeColor,
  height: '3em',
  width: '15em',
  maxHeight: '60%',
  maxWidth: '60%',
  fontWeight: '600',
  fontFamily: 'Open Sans',
};

export const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '75%',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '1em',
};

export const overviewBoxStyle = {
  marginLeft: '3em',
  marginRight: '3em',
  borderWidth: '10px',
  borderRadius: '10px',
  borderColor: '#000000',
  maxWidth: '95%',
  height: '25em',
};

export const tableInfoStyle = {
  display: 'flex',
  textAlign: 'center',
};

export const createPaperStyle = {
  position: 'absolute',
  top: '60%',
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
  padding: '1em',
  overflow: 'scroll',
  maxHeight: '90%',
};

export const labelStyle = {
  marginTop: '0.5em',
  marginBottom: '0.5em',
  fontWeight: '500',
  fontSize: '1.5em',
  fontFamily: 'Open Sans',
};

export const textFieldStyle = {
  margin: '0.5em',
  fontFamily: 'Open Sans',
};

export const createFormButtonStyle = {
  marginTop: '1em',
  width: '80%',
  marginBottom: '2em',
  fontWeight: '600',
  background: orangeColor,
  '&:hover': {
    backgroundColor: yellowColor,
  },
  fontFamily: 'Open Sans',
};

export const deleteButtonStyle = {
  width: '80%',
  marginBottom: '2em',
  fontWeight: '600',
  background: orangeColor,
  '&:hover': {
    backgroundColor: yellowColor,
  },
  fontFamily: 'Open Sans',
};

export const queryButtonStyle = {
  alignSelf: 'end',
  margin: '2em',
  background: orangeColor,
  height: '3em',
  width: '20em',
  maxHeight: '60%',
  maxWidth: '60%',
  fontWeight: '600',
  fontFamily: 'Open Sans',
};
