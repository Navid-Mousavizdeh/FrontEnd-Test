import * as React from 'react'
import { styled } from '@mui/system'
// import MUI components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
// Import components
import TitleBar from './TitleBar'
import DayWeather from './DayWeather'
import WeekWeather from './WeekWeather'

const BoxMargin = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginTop: theme.spacing(2),
}))

function WeatherCastPanel(props) {
  return (
    <BoxMargin data-testid='weather-cast-panel'>
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
                CityName={props.Data.CityName}
                CountryName={props.Data.CountryName}
                Date={props.Data.Date}
                Time={props.Data.Time}
                WeatherCast={props.Data.WeatherCast}
              />
            </Grid>
            <Grid item container>
              <DayWeather
                WeatherIcon={props.Data.TodayIcon}
                Temperature={props.Data.Temperature}
                Data={props.Data.weatherData}
              />
            </Grid>
            <Grid item container>
              <WeekWeather Data={props.Data.weatherWeeklyData} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </BoxMargin>
  )
}

export default WeatherCastPanel
