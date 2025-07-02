import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';


import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [opendropdown, setOpendropdown] = React.useState(true);

  const handleClick = () => {
    setOpendropdown(!opendropdown);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 300,
            p: 2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
          role="presentation"
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Nested List Items
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
              {/* Dashboard dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard 1" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard 2" />
                  </ListItemButton>
                </List>
              </Collapse>
              {/* Projects dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="All Projects" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Add Projects" />
                  </ListItemButton>
                </List>
              </Collapse>

              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Estimate" />
                  </ListItemButton>
                </List>
              </Collapse>

              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Project Details" />
                  </ListItemButton>
                </List>
              </Collapse>
              {/* Employees dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Employees" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="All Employees" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Add Employees" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Edit Employees" />
                  </ListItemButton>
                </List>
              </Collapse> <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Employee Shift" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Employee Profile" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Leave dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Leave Management" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="All Leave Request" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Leave Balance" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Leave Types" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Leave Settings" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Attendance dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Attendance" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Today's Attendance" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Employee Attendance" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Attendance Sheet" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Holidays dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Holidays" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="All Holidays" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Add Holiday" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Edit Holiday" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Clients dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Clients" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="All Clients" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Add Clients" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Edit Clients" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Payroll dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Payroll" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Employee Salary" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Pay Slip" />
                  </ListItemButton>
                </List>
              </Collapse>


              {/* Leader dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Leader" />
              </ListItemButton>


 {/* JObs dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Jobs List" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Candidates" />
                  </ListItemButton>
                </List>
              </Collapse>
                 <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Shortlist Candidates" />
                  </ListItemButton>
                </List>
              </Collapse>


{/* Departments dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Departments" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="All Departments" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Add Departments" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Edit Departments" />
                  </ListItemButton>
                </List>
              </Collapse>
              
{/* Training dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Training" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Training List" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Trainers" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Training Type" />
                  </ListItemButton>
                </List>
              </Collapse>

{/* Accounts dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Accounts" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Client Payments" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Add Payment" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Invoice" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* Reports dropdown */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
                {opendropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Leave Report" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={opendropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Expense Report" />
                  </ListItemButton>
                </List>
              </Collapse>
          















































            </List>
          </Typography>
          {/* Add your navigation links or other content here */}
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar