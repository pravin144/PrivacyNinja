import React, { useState } from 'react';
import {
  Button,
  Box,
  TextField,
  Typography,
  Grid,
} from '@mui/material';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [outputTextUpper,setOutputTextUpper]= useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const removeVowels = (text) => {
    const vowels = 'aeiouAEIOU';
    const withoutVowels = text.split('').filter((char) => !vowels.includes(char)).join('');
    return withoutVowels;
  };

  const handleButtonClick = () => {
    const upperCase =inputText.toUpperCase();
    const result = removeVowels(inputText);
    setOutputTextUpper(upperCase)
    setOutputText(result);


  };

  return (
      <Box mt={4} mx={2}>
        {/* Header */}
        <Box mb={2}>
          <Typography variant="h4">Text Formatter</Typography>
        </Box>

        <Grid container spacing={2} justify="center">
          <Grid item xs={12} marginTop={'300px'}>
          <Typography variant="h4" textAlign="center" style={{ fontFamily: 'Roboto' }} paddingBottom={'15px'}>Enter the terms and condition</Typography>  
            <TextField
              label="Enter text"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={inputText}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Output - Remove Vowel"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={outputText}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Output - To Upper case"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={outputTextUpper}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" mt={2}>
              {/* Apply upper margin to the Box component */}
              <Button variant="contained" color="primary" onClick={handleButtonClick}>
                Apply Formatting
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
};

export default App;
