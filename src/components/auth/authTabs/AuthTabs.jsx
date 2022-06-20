import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { boxStyle, paperStyle, tabStyle } from './AuthTabs.styled';
import { LoginContainer, SignUpContainer } from '../../../containers';

export const AuthTabComponent = ({ initialTab, handleAuthOpenClose }) => {
  const [tab, setTab] = React.useState(initialTab);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Paper elevation={12} sx={paperStyle}>
      <Tabs
        value={tab}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { background: '#000000' },
        }}
      >
        <Tab label="Вход" sx={tabStyle} />
        <Tab label="Регистрация" sx={tabStyle} />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <LoginContainer handleAuthOpenClose={handleAuthOpenClose} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <SignUpContainer handleAuthOpenClose={handleAuthOpenClose} />
      </TabPanel>
    </Paper>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
      {value === index && <Box sx={boxStyle}>{children}</Box>}
    </div>
  );
}
