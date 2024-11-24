import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, Grid, Stack, Typography } from '@mui/material';
import "@fontsource/cinzel"
import baby from '../assets/color1/baby.png';
import dawgs from '../assets/color1/dawgs.png';
import gang from '../assets/color1/gang.png';
import suit from '../assets/color1/suit.png';
import jersey from '../assets/color1/jersey.png';
import jotch from '../assets/color1/jotch.png';
import moneky from '../assets/color1/moneky.png';
import punkin from '../assets/color1/punkin.png';
import root from '../assets/color1/root.png';
import scoot from '../assets/color1/scoot.png';
import stance from '../assets/color1/stance.png';
import traffic from '../assets/color1/traffic.png';
import wall from '../assets/color1/wall.png';
import win from '../assets/color1/win.png';
import '../App.css';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const images = [suit, baby, dawgs, gang, jersey, jotch, moneky, punkin, root, scoot, stance, traffic, wall, win];
  const [imageIndex, setImageIndex] = useState(0);
  
  const handleImageClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length); // Generate a random index
    } while (newIndex === imageIndex); // Ensure it's not the same as the current index
    setImageIndex(newIndex);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Socials', path: '/socials' },
    { name: 'Digibug', path: '/digibug' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'About', path: '/about' },
    { name: 'Blog...?', path: '/blog' },
  ];

  const bioString = "Welcome to my personal website. I'm a recent computer science graduate with a passion for game development, full-stack web development, and creative projects! My site is still a work in progress, but I am enjoying coding it by hand in React. For inquiries, please reach out via ";

  return (
    <Grid 
      container 
      spacing={2} 
      wrap="wrap" 
      columns={12} 
      sx={{ 
        width: '100vw', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh', 
        paddingTop: '0vh',
        flexDirection: { xs: 'column', md: 'row' } }}>
      <Grid item xs={12}>
        {/* website header */}
        <Typography 
          sx={{ 
            fontSize: 'clamp(1rem, 5vw, 5rem)', 
            textAlign: 'center',
            padding: '4vh',
            color: '#513450',
            fontFamily: 'Cinzel, serif' }}>
            <b>CamdenBettencourt.com</b>
        </Typography>
      </Grid>

      <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
        {/* photo, splash text */}
        <Stack spacing={2}>
          <img
              src={images[imageIndex]}
              alt="Random profile"
              className="profile-image"
              onClick={handleImageClick}
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          <Typography><i>"Geese are just battle ducks." - Me, 2016</i></Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        {/* blurb */}
        <Typography>
          {bioString}<a href="mailto:camden.r.bettencourt@gmail.com">email</a>.
        </Typography>
      </Grid>

      <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
        {/* directory (layout also viewport-width-dependent) */}
        <Typography>
          {navItems.map((item) => (
                <li
                  key={item.name}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </li>
              ))}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;