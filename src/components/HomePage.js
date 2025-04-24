import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Chip,
  Avatar,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BottomNav from './BottomNav';
import { useUser } from '../context/UserContext';

function HomePage() {
  const { user } = useUser();
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  
  const featuredRecipes = [
    {
      id: 1,
      title: 'Asian white noodle with extra seafood',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Plateau_van_zeevruchten.jpg',
      chef: 'James Spader',
      chefAvatar: 'https://source.unsplash.com/random/40x40/?chef',
      time: '20 Min'
    },
    {
      id: 2,
      title: 'Healthy Taco Salad with fresh veg',
      image: 'https://source.unsplash.com/random/400x300/?taco',
      chef: 'Olivia Rizka',
      chefAvatar: 'https://source.unsplash.com/random/40x40/?woman',
      time: '15 Min'
    }
  ];

  const popularRecipes = [
    {
      id: 1,
      title: 'Healthy Taco Salad with fresh vegetable',
      image: 'https://source.unsplash.com/random/400x300/?salad',
      calories: '120 Kcal',
      time: '20 Min'
    },
    {
      id: 2,
      title: 'Japanese-style Pancakes Recipe',
      image: 'https://source.unsplash.com/random/400x300/?pancake',
      calories: '64 Kcal',
      time: '12 Min'
    }
  ];

  return (
    <Box sx={{ pb: 7, backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="sm" sx={{ pt: 2 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Good Morning
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {user?.fullName || 'Guest'}
            </Typography>
          </Box>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Box>

        {/* Featured Section */}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Featured
        </Typography>
        <Box sx={{ mb: 4, overflow: 'auto', whiteSpace: 'nowrap', '-webkit-overflow-scrolling': 'touch', px: 1 }}>
          {featuredRecipes.map((recipe) => (
            <Paper
              key={recipe.id}
              sx={{
                display: 'inline-block',
                mr: 2,
                width: '300px',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <Box
                component="img"
                src={recipe.image}
                sx={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />
              <Box sx={{ p: 2.5 }}>
                <Typography 
                  variant="subtitle1" 
                  fontWeight="bold" 
                  sx={{ 
                    mb: 1.5, 
                    fontSize: '1rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: 1.3,
                    height: '2.6em',
                  }}
                >
                  {recipe.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={recipe.chefAvatar} sx={{ width: 28, height: 28, mr: 1 }} />
                  <Typography variant="body2">{recipe.chef}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                    <AccessTimeIcon sx={{ fontSize: 18, mr: 0.5 }} />
                    <Typography variant="body2">{recipe.time}</Typography>
                  </Box>
                </Box>
              </Box>
              <IconButton 
                sx={{ 
                  position: 'absolute', 
                  top: 12, 
                  right: 12,
                  backgroundColor: 'white',
                  boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </Paper>
          ))}
        </Box>

        {/* Categories */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" fontWeight="bold">
              Category
            </Typography>
            <Typography variant="body2" color="primary">
              See All
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
            {categories.map((category, index) => (
              <Chip
                key={category}
                label={category}
                sx={{
                  borderRadius: '20px',
                  backgroundColor: index === 0 ? '#2B4865' : 'transparent',
                  color: index === 0 ? 'white' : 'inherit',
                  '&:hover': { backgroundColor: index === 0 ? '#2B4865' : 'rgba(0,0,0,0.04)' },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Popular Recipes */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Popular Recipes
            </Typography>
            <Typography variant="body2" color="primary">
              See All
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            {popularRecipes.map((recipe) => (
              <Grid item xs={12} key={recipe.id}>
                <Paper
                  sx={{
                    display: 'flex',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                    height: '170px',
                    backgroundColor: 'white',
                  }}
                >
                  <Box
                    component="img"
                    src={recipe.image}
                    sx={{
                      width: '170px',
                      height: '170px',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <Box 
                    sx={{ 
                      p: 2.5, 
                      flex: 1, 
                      pr: 7,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      fontWeight="bold" 
                      sx={{ 
                        mb: 2, 
                        fontSize: '1.1rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: 1.3,
                        height: '2.6em',
                      }}
                    >
                      {recipe.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                        {recipe.calories}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                          {recipe.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <IconButton 
                    sx={{ 
                      position: 'absolute', 
                      top: 12, 
                      right: 12,
                      backgroundColor: 'white',
                      boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                      padding: '8px',
                      '&:hover': {
                        backgroundColor: 'white',
                      },
                    }}
                  >
                    <FavoriteIcon sx={{ fontSize: '1.3rem' }} />
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <BottomNav />
    </Box>
  );
}

export default HomePage; 