import * as React from 'react'
import { styled } from '@mui/system'
// import MUI components
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const BoxContainer = styled(Box)(({ theme }) => ({ flexGrow: 1 }))

function TopBar(props) {
  return (
    <BoxContainer>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>{props.Title}</Typography>
        </Toolbar>
      </AppBar>
    </BoxContainer>
  )
}

export default TopBar
