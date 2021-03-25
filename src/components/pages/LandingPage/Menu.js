import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink as RRNavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

// eslint-disable-next-line import/prefer-default-export
export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Link tag={RRNavLink} href='/profile'><PeopleIcon /></Link>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link tag={RRNavLink} href='/LandingPage'><HomeIcon /></Link>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link tag={RRNavLink} href='/LandingPage'><ExitToApp /></Link>
      </ListItemIcon>
      <ListItemText primary="LogOut" />
    </ListItem>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
