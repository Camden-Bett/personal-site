import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { PaletteContext } from '../components/PaletteContext.jsx';
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

import baby2 from '../assets/color2/baby.png';
import dawgs2 from '../assets/color2/dawgs.png';
import gang2 from '../assets/color2/gang.png';
import suit2 from '../assets/color2/suit.png';
import jersey2 from '../assets/color2/jersey.png';
import jotch2 from '../assets/color2/jotch.png';
import moneky2 from '../assets/color2/moneky.png';
import punkin2 from '../assets/color2/punkin.png';
import root2 from '../assets/color2/root.png';
import scoot2 from '../assets/color2/scoot.png';
import stance2 from '../assets/color2/stance.png';
import traffic2 from '../assets/color2/traffic.png';
import wall2 from '../assets/color2/wall.png';
import win2 from '../assets/color2/win.png';

import baby3 from '../assets/color3/baby.png';
import dawgs3 from '../assets/color3/dawgs.png';
import gang3 from '../assets/color3/gang.png';
import suit3 from '../assets/color3/suit.png';
import jersey3 from '../assets/color3/jersey.png';
import jotch3 from '../assets/color3/jotch.png';
import moneky3 from '../assets/color3/moneky.png';
import punkin3 from '../assets/color3/punkin.png';
import root3 from '../assets/color3/root.png';
import scoot3 from '../assets/color3/scoot.png';
import stance3 from '../assets/color3/stance.png';
import traffic3 from '../assets/color3/traffic.png';
import wall3 from '../assets/color3/wall.png';
import win3 from '../assets/color3/win.png';

import baby4 from '../assets/color4/baby.png';
import dawgs4 from '../assets/color4/dawgs.png';
import gang4 from '../assets/color4/gang.png';
import suit4 from '../assets/color4/suit.png';
import jersey4 from '../assets/color4/jersey.png';
import jotch4 from '../assets/color4/jotch.png';
import moneky4 from '../assets/color4/moneky.png';
import punkin4 from '../assets/color4/punkin.png';
import root4 from '../assets/color4/root.png';
import scoot4 from '../assets/color4/scoot.png';
import stance4 from '../assets/color4/stance.png';
import traffic4 from '../assets/color4/traffic.png';
import wall4 from '../assets/color4/wall.png';
import win4 from '../assets/color4/win.png';

import baby5 from '../assets/color5/baby.png';
import dawgs5 from '../assets/color5/dawgs.png';
import gang5 from '../assets/color5/gang.png';
import suit5 from '../assets/color5/suit.png';
import jersey5 from '../assets/color5/jersey.png';
import jotch5 from '../assets/color5/jotch.png';
import moneky5 from '../assets/color5/moneky.png';
import punkin5 from '../assets/color5/punkin.png';
import root5 from '../assets/color5/root.png';
import scoot5 from '../assets/color5/scoot.png';
import stance5 from '../assets/color5/stance.png';
import traffic5 from '../assets/color5/traffic.png';
import wall5 from '../assets/color5/wall.png';
import win5 from '../assets/color5/win.png';

import '../App.css';

function Home() {
  const { palette, getColors } = useContext(PaletteContext);
  const colors = getColors();

  const paletteImages = {
    capital: [suit1, baby1, dawgs1, gang1, jersey1, jotch1, moneky1, punkin1, root1, scoot1, stance1, traffic1, wall1, win1],
    coral: [suit2, baby2, dawgs2, gang2, jersey2, jotch2, moneky2, punkin2, root2, scoot2, stance2, traffic2, wall2, win2],
    gilded: [suit3, baby3, dawgs3, gang3, jersey3, jotch3, moneky3, punkin3, root3, scoot3, stance3, traffic3, wall3, win3],
    textile: [suit4, baby4, dawgs4, gang4, jersey4, jotch4, moneky4, punkin4, root4, scoot4, stance4, traffic4, wall4, win4],
    wash: [suit5, baby5, dawgs5, gang5, jersey5, jotch5, moneky5, punkin5, root5, scoot5, stance5, traffic5, wall5, win5]
  };

  const [imageIndex, setImageIndex] = useState(0);

  const quotes = ['Try clicking everything on the page!... Except the sidebar links. Those don\'t go to anything yet.',
                  '\"Geese are just battle ducks.\" - Me, 2016',
                  '\"It takes two to tango,\" she murmured into his ear. He paused, choking back a sob. \"I only know how to waltz!\"',
                  'There is no direct equivalent to normal cheetos.',
                  'Hot take: fridge pizza is an elite breakfast food.',
                  '\"It must be 4:04, because I can\'t find the time for you right now!\" - Me, 2023',
                  '\"The argument against being a goblin master is... there is none. The argument for being a goblin master is, they\'re just little guys.\" - Me, 2022',
                  '\"Cleaning is just putting stuff in less obvious places.\" - Me, 2014',
                  '\"People make fun of my French, but I just grin and beret.\" - Me, 2020',
                  'camdenbettencourt.com/secret'];
  const [quoteIndex, setQuoteIndex] = useState(0);
  
  const handleImageClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * paletteImages[palette].length); // Generate a random index
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
    <Grid container>
      <Grid item xs={12} md={4} sx={{ textAlign: 'center', padding: 2 }}>
        {/* photo, splash text */}
        <Stack spacing={2} alignItems='center'>
          <img
              src={paletteImages[palette][imageIndex]}
              alt="Random profile"
              className="profile-image"
              onClick={handleImageClick}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '50vh', 
                objectFit: 'contain',
                borderRadius: '8px' }}
            />
          <Typography
          onClick={handleQuoteClick}
            sx={{
              color: colors.primary,
              fontFamily: 'HeyGorgeous, sans',
            }}>
              <i>{quotes[quoteIndex]}</i>
            </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={8} sx={{ textAlign: 'center', padding: 2 }}>
        {/* blurb */}
        <Typography
          sx={{
            color: colors.accentContrast,
            fontFamily: 'Manrope, sans'
          }}>
            <b>
              {bioString}<Link href="mailto:camden.r.bettencourt@gmail.com" sx={{color: colors.accentExtra}}>email</Link>.
            </b>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;