import * as React from 'react'
// import MUI components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
// Import components
import TitleBar from './TitleBar'
import DayWeather from './DayWeather'

// Initialize Weather data
var weatherData = {
  Humidity: '89%',
  Wind: '3.14 m/s 38°',
  Cloudiness: '0%',
  Pressure: '1006 hPa',
}

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
            <Grid item>
              <DayWeather Temperature='21' Data={weatherData} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default WeatherCastPanel
