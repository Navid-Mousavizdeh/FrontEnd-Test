import * as React from 'react'
// import MUI components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function TitleBar(props) {
  return (
    <Box sx={{ flexGrow: 1, flexDirection: 'column' }}>
      {/* --------- Location --------- */}
      <Typography variant='h4' sx={{ mb: 0.5 }}>
        {props.CityName + ', ' + props.CountryName}
      </Typography>
      {/* --------- Date and Time --------- */}
      <Typography variant='h5'>{props.Date + ', ' + props.Time}</Typography>
      {/* --------- Weather casting --------- */}
      <Typography variant='h5'>{props.WeatherCast}</Typography>
    </Box>
  )
}

export default TitleBar
