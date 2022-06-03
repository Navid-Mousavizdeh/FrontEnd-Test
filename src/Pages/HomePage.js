import * as React from 'react'
import { styled } from '@mui/system'
// import MUI components
import Grid from '@mui/material/Grid'
import Fab from '@mui/material/Fab'
// import components
import AppBar from '../Components/AppBar'
import WeatherCastPanel from '../Components/WeatherCastPanel'
// import Icons
import AddIcon from '@mui/icons-material/Add'

const GridContainerPage = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
}))

const GridContainerFloatingButton = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  justifyContent: 'flex-end',
}))

function HomePage(props) {
  return (
    <GridContainerPage container>
      <Grid item container>
        <AppBar Title={props.weatherData.AppBarTitle} />
      </Grid>
      <Grid item container>
        <WeatherCastPanel Data={props.weatherData} />
      </Grid>
      <GridContainerFloatingButton item container>
        <Fab color='primary'>
          <AddIcon />
        </Fab>
      </GridContainerFloatingButton>
    </GridContainerPage>
  )
}

export default HomePage
