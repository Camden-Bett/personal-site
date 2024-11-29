import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Divider, Grid, Stack, Typography } from '@mui/material';
import "@fontsource/cinzel";
import "@fontsource/manrope";
import '../styles/fonts.css'; 

import baby1 from '../assets/color1/baby.png';
import dawgs1 from '../assets/color1/dawgs.png';
import gang1 from '../assets/color1/gang.png';
import suit1 from '../assets/color1/suit.png';
import jersey1 from '../assets/color1/jersey.png';
import jotch1 from '../assets/color1/jotch.png';
import moneky1 from '../assets/color1/moneky.png';
import punkin1 from '../assets/color1/punkin.png';
import root1 from '../assets/color1/root.png';
import scoot1 from '../assets/color1/scoot.png';
import stance1 from '../assets/color1/stance.png';
import traffic1 from '../assets/color1/traffic.png';
import wall1 from '../assets/color1/wall.png';
import win1 from '../assets/color1/win.png';

import '../App.css';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const images = [suit1, baby1, dawgs1, gang1, jersey1, jotch1, moneky1, punkin1, root1, scoot1, stance1, traffic1, wall1, win1];
  const [imageIndex, setImageIndex] = useState(0);

  const quotes = ['Try clicking everything on the page!',
                  '\"Geese are just battle ducks.\" - Me, 2016',
                  '\"It takes two to tango,\" she murmured into his ear. He paused, choking back a sob. \"I only know how to waltz!\"',
                  'There is no direct equivalent to normal cheetos.',
                  'Hot take: fridge pizza is an elite breakfast food.',
                  '\"It must be 4:04, because I can\'t find the time for you right now!\" - Me, 2023',
                  '\"The argument against being a goblin master is... there is none. The argument for being a goblin master is, they\'re just little guys.\" - Me, 2022',
                  '\"Cleaning is just putting stuff in less obvious places.\" - Me, 2014',
                  'camdenbettencourt.com/secret'];
  const [quoteIndex, setQuoteIndex] = useState(0);
  
  const handleImageClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length); // Generate a random index
    } while (newIndex === imageIndex); // Ensure it's not the same as the current index
    setImageIndex(newIndex);
  };
  
  const handleQuoteClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
    } while (newIndex === quoteIndex); // Ensure it's not the same as the current index
    setQuoteIndex(newIndex);
  };

  const bioString = "Welcome to my personal website. I'm a recent computer science graduate with a passion for game development, full-stack web development, and creative projects! My site is still a work in progress, but I am enjoying coding it by hand in React. Try clicking my profile photo! For inquiries, please reach out via ";

  return (
    <>
      <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
        {/* photo, splash text */}
        <Stack spacing={2}>
          <img
              src={images[imageIndex]}
              alt="Random profile"
              className="profile-image"
              onClick={handleImageClick}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '50vh', 
                width: 'auto', 
                height: 'auto', 
                objectFit: 'contain',
                borderRadius: '8px' }}
            />
          <Typography
          onClick={handleQuoteClick}
            sx={{
              color: '#513450',
              fontFamily: 'HeyGorgeous, sans',
            }}><i>{quotes[quoteIndex]}</i></Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        {/* blurb */}
        <Typography
          sx={{
            color: '#080705',
            fontFamily: 'Manrope, sans'
          }}>
            <b>
              {bioString}<a href="mailto:camden.r.bettencourt@gmail.com">email</a>.
            </b>
        </Typography>
      </Grid>
    </>
  );
}

export default Home;