import * as React from 'react'
// import Theme
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/ThemeGenerator'
import { styled } from '@mui/system'
// import MUI components
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import { Typography } from '@mui/material'
// import Icons
import SunnyIcon from './Assets/Sunny-Icon.png'
import RainyIcon from './Assets/Rainy-Icon.png'
import CloudyIcon from './Assets/Cloudy-Icon.png'
import AtmosphereIcon from './Assets/Atmosphere-Icon.png'
import DrizzleIcon from './Assets/Drizzle-Icon.png'
import ExtremeIcon from './Assets/Extreme-Icon.png'
import PartlyCloudyIcon from './Assets/Partly-cloudy-Icon.png'
import SleetIcon from './Assets/Sleet-Icon.png'
import SnowIcon from './Assets/Snow-Icon.png'
import ThunderstormIcon from './Assets/Thunderstorm-Icon.png'
import HomePage from './Pages/HomePage'
// import Data
const MY_API_KEY = '4fffc86fd4312ae8091f515f812bf7a6'

const GridContainerPageCenter = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}))

function GetWeatherIcon(weatherString) {
  switch (weatherString) {
    case 'Thunderstorm':
      return ThunderstormIcon
    case 'Drizzle':
      return DrizzleIcon
    case 'Rain':
      return RainyIcon
    case 'Snow':
      return SnowIcon
    case 'Atmosphere':
      return AtmosphereIcon
    case 'Clear':
      return SunnyIcon
    case 'Clouds':
      return CloudyIcon
    case 'Sleet':
      return SleetIcon
    case 'Extreme':
      return ExtremeIcon
    default:
      return PartlyCloudyIcon
  }
}

function App() {
  const [weatherData, setWeatherData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=35.7219&lon=51.3347&exclude=minutely,hourly,alerts&units=metric&appid=${MY_API_KEY}`
    )
      .then((response) => {
        response.json().then((data) => {
          console.log(data)
          setTimeout(() => {
            let result = data
            let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            setWeatherData({
              AppBarTitle: 'Weather App',
              CityName: 'Tehran',
              CountryName: 'Iran',
              Date: new Date(result.current.dt * 1000).toDateString(),
              Time: new Date().toLocaleTimeString(),
              WeatherCast:
                result.current.weather[0].description.charAt(0).toUpperCase() +
                result.current.weather[0].description.slice(1),
              TodayIcon: GetWeatherIcon(result.current.weather[0].main),
              Temperature: Math.round(result.current.temp),
              weatherData: {
                Humidity: Math.round(result.current.humidity) + '%',
                Wind: `${result.current.wind_speed} m/s ${result.current.wind_deg}°`,
                Cloudiness: Math.round(result.current.clouds) + '%',
                Pressure: Math.round(result.current.pressure) + ' hPa',
              },
              weatherWeeklyData: result.daily.slice(1).map((day) => ({
                Day: weekday[new Date(day.dt * 1000).getDay()],
                Icon: GetWeatherIcon(day.weather[0].main),
                Max: Math.round(day.temp.max),
                Min: Math.round(day.temp.min),
              })),
            })
            setLoading(false)
          }, 1000)
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {loading ? (
          <GridContainerPageCenter container data-testid='loading'>
            <Grid item>
              <CircularProgress />
            </Grid>
            <Grid item>
              <Typography variant='h6'>Loading</Typography>
            </Grid>
          </GridContainerPageCenter>
        ) : (
          <HomePage weatherData={weatherData} />
        )}
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
