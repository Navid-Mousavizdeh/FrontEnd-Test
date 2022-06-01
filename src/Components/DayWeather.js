import * as React from 'react'
// import MUI components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import icons
import SunnyIcon from '../Assets/Sunny-Icon.png'

function DayWeather(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <Box sx={{ mx: 0 }}>
        {/* --------- Weather icon --------- */}
        <img src={SunnyIcon} alt='Clear Icon' />
      </Box>
      <Box sx={{ mx: 1 }}>
        {/* --------- Temperature --------- */}
        <Typography variant='h1'>{props.Temperature + '°'}</Typography>
      </Box>
      <Box sx={{ flexDirection: 'column', mx: 1 }}>
        {Object.entries(props.Data).map((item) => (
          <Typography variant='h5' key={item[0]}>
            {item[0] + ': ' + item[1]}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default DayWeather
