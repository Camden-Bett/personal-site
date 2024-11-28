import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
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
            fontSize: 'clamp(0.5rem, 5vw, 7rem)', 
            textAlign: 'center',
            padding: '4vh',
            color: '#513450',
            fontFamily: 'Cinzel, serif' 
          }}>
            <b>
              <Link href="/" underline="none" color="inherit">
                CamdenBettencourt.com
              </Link>
            </b>
        </Typography>
        <Divider aria-hidden="true" sx={{border: '1px solid', color: '#513450', spacing: 2}}/>
      </Grid> 

      {/* main content area; total grid width should always be xs=12, md=9 */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>

      {/* directory, spacer, & logo */}
      <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
        <Stack justifyContent='space-between'>
          <Card sx={{background: '#60594D', borderRadius: '16px'}} >
            {/* directory (layout also viewport-width-dependent) */}
            {/*figure out why color/onclick is bonked*/}
            {navItems.map((item) => (
                  <List disablePadding>
                    {item.name !== navItems[0].name ? <Divider variant='middle' /> : null}
                    <ListItem disablePadding>
                      <ListItemButton component='a' href={item.path} sx={{justifyContent: 'center'}}>
                        <Typography sx={{
                          fontSize: '24px', 
                          textAlign: 'center',
                          fontFamily: 'Cinzel, serif'
                        }}
                          color={item.path === location.pathname ? '#080705' : '#ECE2D0'}
                        >
                          <b>
                            {item.name}
                          </b>
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                    
                  </List>
                ))}
          </Card>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default App;
