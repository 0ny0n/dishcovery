import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
  Avatar,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

function NotificationsPage() {
  const navigate = useNavigate();

  const notifications = {
    today: [
      {
        id: 1,
        title: 'Weekly New Recipes!',
        message: 'Discover our new recipes of the week!',
        time: '2 Min Ago',
        icon: 'star',
      },
      {
        id: 2,
        title: 'Meal Reminder',
        message: 'Time to cook your healthy meal of the day',
        time: '35 Min Ago',
        icon: 'bell',
      },
    ],
    wednesday: [
      {
        id: 3,
        title: 'New Update Available',
        message: 'Performance improvements and bug fixes.',
        time: '25 April 2024',
        icon: 'bell',
      },
      {
        id: 4,
        title: 'Reminder',
        message: "Don't forget to complete your profile to access all app features",
        time: '25 April 2024',
        icon: 'star',
      },
      {
        id: 5,
        title: 'Important Notice',
        message: 'Remember to change your password regularly to keep your account secure',
        time: '25 April 2024',
        icon: 'star',
      },
    ],
    monday: [
      {
        id: 6,
        title: 'New Update Available',
        message: 'Performance improvements and bug fixes.',
        time: '22 April 2024',
        icon: 'star',
      },
    ],
  };

  const NotificationItem = ({ notification }) => (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        p: 2,
        mb: 2,
        borderRadius: 3,
        backgroundColor: '#E6EEF2',
      }}
    >
      <Avatar
        sx={{
          bgcolor: 'white',
          width: 40,
          height: 40,
          mr: 2,
        }}
      >
        {notification.icon === 'star' ? (
          <StarIcon sx={{ color: '#1B4965' }} />
        ) : (
          <NotificationsIcon sx={{ color: '#1B4965' }} />
        )}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {notification.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {notification.message}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {notification.time}
        </Typography>
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ pb: 7, backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="sm" sx={{ pt: 2 }}>
        {/* Header with back button */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">
            Notifications
          </Typography>
        </Box>

        {/* Today's Notifications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Today
          </Typography>
          {notifications.today.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </Box>

        {/* Wednesday's Notifications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Wednesday
          </Typography>
          {notifications.wednesday.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </Box>

        {/* Monday's Notifications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Monday
          </Typography>
          {notifications.monday.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </Box>
      </Container>
      <BottomNav />
    </Box>
  );
}

export default NotificationsPage; 