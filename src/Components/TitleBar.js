import * as React from 'react'
// import MUI components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function TitleBar(props) {
  return (
    <Box data-testid='title-bar'>
      <Typography variant='h4'>
        {props.CityName + ', ' + props.CountryName}
      </Typography>
      <Typography variant='h5'>{props.Date + ', ' + props.Time}</Typography>
      <Typography variant='h5'>{props.WeatherCast}</Typography>
    </Box>
  )
}

export default TitleBar
