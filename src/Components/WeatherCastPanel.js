import * as React from 'react'
// import MUI components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
// Import components
import TitleBar from './TitleBar'

function WeatherCastPanel() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Card>
        <CardContent>
          <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Grid item>
              <TitleBar
                CityName='Chicago'
                CountryName='US'
                Date='Tue Aug 15 2017'
                Time='10:41:34 PM'
                WeatherCast='Sky is clear.'
              />
            </Grid>
            <Grid item></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default WeatherCastPanel
