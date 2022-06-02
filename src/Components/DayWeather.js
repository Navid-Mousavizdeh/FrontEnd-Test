import * as React from 'react'
import { styled } from '@mui/system'
// import MUI components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const BoxFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
}))

const BoxMargin = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}))

function DayWeather(props) {
  return (
    <BoxFlex>
      <Box>
        <img src={props.WeatherIcon} alt='Clear Icon' />
      </Box>
      <BoxMargin>
        <Typography variant='h1'>{props.Temperature + '°'}</Typography>
      </BoxMargin>
      <BoxMargin>
        {Object.entries(props.Data).map((item) => (
          <Typography variant='h5' key={item[0]}>
            {item[0] + ': ' + item[1]}
          </Typography>
        ))}
      </BoxMargin>
    </BoxFlex>
  )
}

export default DayWeather
