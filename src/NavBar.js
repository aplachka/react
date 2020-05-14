import React from 'react'
import { Toolbar, AppBar, Typography } from '@material-ui/core';


const NavBar = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography
          color="inherit"
        >
          React simple application
        </Typography>
      </Toolbar>
    </AppBar>

  )
}

export default NavBar;