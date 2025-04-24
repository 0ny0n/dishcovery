import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Container,
  Divider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // For now, just navigate to home on successful login
      navigate('/home');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: '#2B4865',
            mb: 4,
            fontWeight: 600,
          }}
        >
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            placeholder="example@example.com"
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#E8F6EF',
                borderRadius: '8px',
              }
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#E8F6EF',
                borderRadius: '8px',
              }
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              py: 1.5,
              borderRadius: '8px',
              backgroundColor: '#2B4865',
              '&:hover': {
                backgroundColor: '#1B3045',
              },
            }}
          >
            Log In
          </Button>

          <Button
            component={Link}
            to="/signup"
            fullWidth
            variant="contained"
            sx={{
              mb: 3,
              py: 1.5,
              borderRadius: '8px',
              backgroundColor: '#E8F6EF',
              color: '#2B4865',
              '&:hover': {
                backgroundColor: '#D5E6DF',
              },
            }}
          >
            Sign Up
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{
              mb: 2,
              color: '#666',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => {/* Handle forgot password */}}
          >
            Forgot Password?
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Divider>
              <Typography variant="body2" sx={{ color: '#666' }}>
                or sign up with
              </Typography>
            </Divider>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {['instagram', 'google', 'facebook', 'whatsapp'].map((platform) => (
              <IconButton
                key={platform}
                sx={{
                  width: 45,
                  height: 45,
                  backgroundColor: '#E8F6EF',
                  '&:hover': {
                    backgroundColor: '#D5E6DF',
                  },
                }}
              >
                {/* Replace with actual icons */}
                {platform[0].toUpperCase()}
              </IconButton>
            ))}
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Don't have an account?{' '}
              <Link
                to="/signup"
                style={{
                  color: '#2B4865',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login; 