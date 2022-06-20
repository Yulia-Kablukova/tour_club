import { orangeColor } from '../../../consts';

export const textFieldStyle = {
  margin: '0.3em',
  fontFamily: 'Open Sans',
};

export const loginButtonStyle = {
  marginTop: '1em',
  width: '80%',
  marginBottom: '2em',
  fontWeight: '600',
  background: orangeColor,
  '&:hover': {
    backgroundColor: orangeColor,
  },
  fontFamily: 'Open Sans',
};

export const loginLabelStyle = {
  marginTop: '0.5em',
  marginBottom: '0.5em',
  fontWeight: '500',
  fontSize: '1.5em',
  fontFamily: 'Open Sans',
};

export const restoreLabelStyle = {
  alignSelf: 'end',
  marginRight: '15%',
  fontFamily: 'Open Sans',
};
