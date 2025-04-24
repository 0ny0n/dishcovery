import React from 'react';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Restaurant as RestaurantIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentValue = () => {
    const path = location.pathname;
    if (path === '/home') return 0;
    if (path === '/search') return 1;
    if (path === '/generate') return 2;
    if (path === '/notifications') return 3;
    if (path === '/profile') return 4;
    return 0;
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={getCurrentValue()}
        sx={{
          height: '70px',
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '6px 0',
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate('/home')}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          onClick={() => navigate('/search')}
        />
        <BottomNavigationAction
          label="Generate"
          icon={
            <Box
              sx={{
                backgroundColor: '#004D40',
                borderRadius: '50%',
                padding: '12px',
                transform: 'translateY(-20px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}
            >
              <RestaurantIcon sx={{ color: 'white' }} />
            </Box>
          }
          onClick={() => navigate('/generate')}
          sx={{
            '& .MuiBottomNavigationAction-label': {
              transform: 'translateY(-8px)',
            },
          }}
        />
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
          onClick={() => navigate('/notifications')}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          onClick={() => navigate('/profile')}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav; 