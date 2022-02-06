import React from 'react'
import {AutoComplete} from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'


const Header = () =>{
  const classes = useStyles();
  return(
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" classname={classes.title}>
          Travelio
        </Typography>
        <Box display="flex">
          <Typography variant="h6" classname={classes.title}>
            Explore New Places
          </Typography>
          {/* <AutoComplete> */}
             <div classname={classes.search}>
               <div classname={classes.searchIcon}>
                 <SearchIcon/>
               </div>
               <InputBase placeholder="Search ... "  classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
             </div>
          {/* </AutoComplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
} 


export default Header;