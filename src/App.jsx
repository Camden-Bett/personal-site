import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Box,
  Button, 
  Card, 
  Divider, 
  Grid, 
  Link, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText,
  Stack, 
  Typography 
} from '@mui/material';
import Home from './pages/Home.jsx';
import Socials from './pages/Socials';
import Portfolio from './pages/Portfolio';
import Redirect from './components/Redirect';
import { PaletteContext } from './components/PaletteContext.jsx';
import CBLogoWhite from './assets/CB-Logo-White.png';
import './styles/palettes.css';

function App() {
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

  const paletteNames = ['capital', 'coral', 'gilded', 'textile', 'wash'];
  const { palette, switchPalette, getColors } = useContext(PaletteContext);
  const [paletteNum, setPaletteNum] = useState(0);
  const [colors, setColors] = useState(getColors());

  const nextPalette = () => {
    const newPaletteNum = (paletteNum + 1) % paletteNames.length;
    setPaletteNum(newPaletteNum);
    switchPalette(paletteNames[newPaletteNum]);
  }

  useEffect(() => {
    document.body.className = palette;
    setColors(getColors());
  }, [palette]);

  /*
  useEffect(() => {
    document.body.style.backgroundColor = colors.background;
  }, [colors]);
  */

  return (
    <Grid 
    container 
    sx={{ 
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'stretch' }}>
    <Grid item xs={12}>
      {/* website header */}
      <Stack>
        <Typography 
          sx={{ 
            fontSize: 'clamp(1rem, 5vw, 7rem)', 
            textAlign: 'center',
            color: colors.primary,
            fontFamily: 'Cinzel, serif'
          }}>
            <b>
              <Link href="/" underline="none" color="inherit">
                CamdenBettencourt.com
              </Link>
            </b>
        </Typography>

        <Divider 
          aria-hidden="true" 
          sx={{
            width: '100%',
            borderColor: colors.primary }}
        />
      </Stack>
    </Grid> 

    {/* main content area */}
    <Grid
      container
      item
      xs={12}
      md={9}
      sx={{
        alignItems: 'flex-start'
      }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* funny rickroll */}
          <Route path="/secret" element={<Redirect to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />} /> 
        </Routes>
      </Router>
    </Grid>

    {/* directory, spacer, & logo */}
    <Grid 
      item 
      xs={12} 
      md={3} 
      sx={{ 
        textAlign: 'center',
        alignItems: 'flex-start', 
        paddingTop: '1rem' }}>
        <Card sx={{
          background: colors.accentSimilar, 
          alignItems: 'space-between', 
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          mr: 1,
          ml: 1,
          mb: 1}} >
          {/* directory (layout also viewport-width-dependent) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
            <List disablePadding>
              {navItems.map((item) => (
                    <React.Fragment key={item.path}>
                      {item.name !== navItems[0].name ? <Divider variant='middle' /> : null}
                      <ListItem disablePadding>
                        <ListItemButton component='a' href={item.path} sx={{justifyContent: 'center'}}>
                          <Typography sx={{
                            fontSize: '24px', 
                            textAlign: 'center',
                            fontFamily: 'Cinzel, serif'
                          }}
                            color={item.path === location.pathname ? colors.accentContrast : colors.background}
                          >
                            <b>{item.name}</b>
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    </React.Fragment>
                  ))}
            </List>
          </Box>

          {/* palette changer */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
            <Button>
              <img
                  src={CBLogoWhite}
                  alt="Palette Swapper"
                  width='100px'
                  height='100px'
                  onClick={() => nextPalette()}/>
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default App;
