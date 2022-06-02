import * as React from 'react'
import { styled } from '@mui/system'
// import MUI components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const BoxFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
}))

const CenterBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'margin',
})(({ theme, margin }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    marginBottom: margin ? theme.spacing(3) : 0,
  },
  flexWrap: 'wrap',
  justifyContent: 'center',
  flexGrow: 1,
}))

const BoxMargin = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}))

function DayWeather(props) {
  return (
    <BoxFlex data-testid='day-weather'>
      <CenterBox>
        <Box>
          <img src={props.WeatherIcon} alt='Clear Icon' />
        </Box>
      </CenterBox>
      <CenterBox margin>
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
      </CenterBox>
    </BoxFlex>
  )
}

export default DayWeather
