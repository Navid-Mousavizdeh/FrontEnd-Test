import * as React from 'react'
import './WeekWeather.css'
// import MUI components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function WeekWeather(props) {
  return (
    <Box sx={{ width: '100%', mx: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {props.Data.map((item) => (
          <Box
            sx={{
              flexDirection: 'column',
            }}
          >
            <Box>
              <Typography
                variant='body1'
                sx={{ flexGrow: 1, textAlign: 'center' }}
              >
                {item.Day}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={item.Icon} className='image-weekly-icon' alt={'Icon'} />
            </Box>
            <Box>
              <Typography
                variant='body1'
                sx={{ flexGrow: 1, textAlign: 'center' }}
              >
                {item.Max + '° ' + item.Min + '°'}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default WeekWeather
