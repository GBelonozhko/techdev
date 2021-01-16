import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FcHome } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
const useStyles = makeStyles({
  root: {
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      color='primary'
    >
      <BottomNavigationAction label="Home" icon={<FcHome />} />
      <BottomNavigationAction label="Portfolio" icon={<FcFlowChart />} />
      <BottomNavigationAction label="Contact" icon={<FcContacts />} />
    </BottomNavigation>
  );
}
