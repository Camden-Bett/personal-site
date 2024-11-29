import React, { useEffect } from 'react';

const Redirect = ({ to }) => {
  useEffect(() => {
    window.location.replace(to); // Perform the redirection
  }, [to]);

  return null; // Render nothing
};

export default Redirect;