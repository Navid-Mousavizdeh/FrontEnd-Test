import * as React from 'react'
// import MUI components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
// Import components
import TitleBar from './TitleBar'
import DayWeather from './DayWeather'
import WeekWeather from './WeekWeather'
// import icons
import SunnyIcon from '../Assets/Sunny-Icon.png'
import RainyIcon from '../Assets/Rainy-Icon.png'
import CloudyIcon from '../Assets/Cloudy-Icon.png'

// Initialize Weather data
var weatherData = {
  Humidity: '89%',
  Wind: '3.14 m/s 38°',
  Cloudiness: '0%',
  Pressure: '1006 hPa',
}

var weatherWeeklyData = [
  {
    Day: 'Wed',
    Icon: CloudyIcon,
    Max: '26',
    Min: '21',
  },
  {
    Day: 'Thu',
    Icon: RainyIcon,
    Max: '26',
    Min: '22',
  },
  {
    Day: 'Fri',
    Icon: RainyIcon,
    Max: '24',
    Min: '19',
  },
  {
    Day: 'Sat',
    Icon: RainyIcon,
    Max: '27',
    Min: '19',
  },
  {
    Day: 'Sun',
    Icon: SunnyIcon,
    Max: '27',
    Min: '17',
  },
  {
    Day: 'Mon',
    Icon: RainyIcon,
    Max: '28',
    Min: '22',
  },
  {
    Day: 'Tue',
    Icon: RainyIcon,
    Max: '24',
    Min: '21',
  },
]

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
            <Grid item container>
              <WeekWeather Data={weatherWeeklyData} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default WeatherCastPanel
