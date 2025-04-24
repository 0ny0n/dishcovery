import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Paper,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BottomNav from './BottomNav';
import { SPOONACULAR_API_KEY, SPOONACULAR_API_BASE_URL } from '../config';

function SearchPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const [error, setError] = useState(null);

  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  const popularRecipes = [
    {
      id: 1,
      title: 'Egg & Avocado',
      image: 'https://source.unsplash.com/random/200x200/?egg,avocado',
    },
    {
      id: 2,
      title: 'Bowl of rice',
      image: 'https://source.unsplash.com/random/200x200/?rice,bowl',
    },
    {
      id: 3,
      title: 'Chicken Soup',
      image: 'https://source.unsplash.com/random/200x200/?chicken,soup',
    },
    {
      id: 4,
      title: 'Egg with toast',
      image: 'https://source.unsplash.com/random/200x200/?egg,toast',
    },
  ];

  const yourChoices = [
    {
      id: 1,
      title: 'Easy homemade beef burger',
      image: 'https://source.unsplash.com/random/200x200/?burger',
      chef: 'James Spader',
      chefAvatar: 'https://source.unsplash.com/random/40x40/?chef',
    },
    {
      id: 2,
      title: 'Blueberry with egg for breakfast',
      image: 'https://source.unsplash.com/random/200x200/?blueberry,egg',
      chef: 'Alice Faia',
      chefAvatar: 'https://source.unsplash.com/random/40x40/?woman',
    },
    {
      id: 3,
      title: 'Toast with egg for breakfast',
      image: 'https://source.unsplash.com/random/200x200/?toast,egg',
      chef: 'Agnes',
      chefAvatar: 'https://source.unsplash.com/random/40x40/?girl',
    },
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Making API request with:', {
        query: searchQuery,
        category: selectedCategory,
        apiKey: SPOONACULAR_API_KEY ? 'Present' : 'Missing'
      });

      if (!SPOONACULAR_API_KEY || SPOONACULAR_API_KEY === 'YOUR_API_KEY') {
        throw new Error('Please add your Spoonacular API key in src/config.js');
      }

      const response = await axios.get(`${SPOONACULAR_API_BASE_URL}/complexSearch`, {
        params: {
          apiKey: SPOONACULAR_API_KEY,
          query: searchQuery,
          type: selectedCategory.toLowerCase(),
          number: 10,
          addRecipeInformation: true,
        }
      });

      console.log('API Response:', response.data);

      if (response.data.results && response.data.results.length > 0) {
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
        setError('No recipes found. Try different keywords or category.');
      }
    } catch (error) {
      console.error('Search error:', error);
      setError(
        error.message === 'Please add your Spoonacular API key in src/config.js'
          ? error.message
          : 'Failed to fetch recipes. Please try again.'
      );
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ pb: 7, backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Container maxWidth="sm" sx={{ pt: 2 }}>
        {/* Header with back button */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton onClick={() => navigate(-1)} sx={{ mr: 2 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">
            Search
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box component="form" onSubmit={handleSearch}>
          <TextField
            fullWidth
            placeholder="Search recipes..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              mb: error ? 1 : 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: 'white',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: isLoading && (
                <InputAdornment position="end">
                  <CircularProgress size={20} />
                </InputAdornment>
              ),
            }}
          />
          {error && (
            <Typography 
              color="error" 
              variant="body2" 
              sx={{ mb: 2, ml: 1 }}
            >
              {error}
            </Typography>
          )}
        </Box>

        {/* Categories */}
        <Box sx={{ mb: 4, display: 'flex', gap: 1, overflowX: 'auto' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                borderRadius: '20px',
                backgroundColor: category === selectedCategory ? '#8CD4CB' : 'white',
                color: category === selectedCategory ? 'white' : 'inherit',
                '&:hover': { backgroundColor: category === selectedCategory ? '#8CD4CB' : 'rgba(0,0,0,0.04)' },
              }}
            />
          ))}
        </Box>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Search Results
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {searchResults.map((recipe) => (
                <Paper
                  key={recipe.id}
                  sx={{
                    display: 'flex',
                    p: 1.5,
                    borderRadius: 3,
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src={recipe.image}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ ml: 2, flex: 1 }}>
                    <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                      {recipe.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        {recipe.readyInMinutes} min • {recipe.servings} servings
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton>
                    <ArrowForwardIcon />
                  </IconButton>
                </Paper>
              ))}
            </Box>
          </Box>
        )}

        {/* Show Popular Recipes and Your Choice only when there are no search results */}
        {searchResults.length === 0 && (
          <>
            {/* Popular Recipes */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Popular Recipes
                </Typography>
                <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                  View All
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
                {popularRecipes.map((recipe) => (
                  <Card
                    key={recipe.id}
                    sx={{
                      minWidth: 140,
                      borderRadius: 3,
                      boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={recipe.image}
                      alt={recipe.title}
                    />
                    <CardContent sx={{ p: 1.5 }}>
                      <Typography variant="body2" fontWeight="medium" noWrap>
                        {recipe.title}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            {/* Your Choice */}
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  Your Choice
                </Typography>
                <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                  View All
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {yourChoices.map((choice) => (
                  <Paper
                    key={choice.id}
                    sx={{
                      display: 'flex',
                      p: 1.5,
                      borderRadius: 3,
                      boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Box
                      component="img"
                      src={choice.image}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        objectFit: 'cover',
                      }}
                    />
                    <Box sx={{ ml: 2, flex: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                        {choice.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={choice.chefAvatar}
                          sx={{ width: 24, height: 24, mr: 1 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {choice.chef}
                        </Typography>
                      </Box>
                    </Box>
                    <IconButton>
                      <ArrowForwardIcon />
                    </IconButton>
                  </Paper>
                ))}
              </Box>
            </Box>
          </>
        )}
      </Container>
      <BottomNav />
    </Box>
  );
}

export default SearchPage; 