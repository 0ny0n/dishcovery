import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LaunchScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to login page after 2 seconds
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        position: 'relative',
      }}
    >
      {/* Back button placeholder */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        ←
      </Box>

      {/* Logo placeholder */}
      <Box
        sx={{
          width: 120,
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            color: '#1a237e',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          🍳
        </Typography>
      </Box>

      {/* App name */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          color: '#1a237e',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        DISHCOVERY
      </Typography>
    </Box>
  );
};

export default LaunchScreen; 