import * as React from 'react'
import { styled } from '@mui/system'
import './WeekWeather.css'
// import MUI components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const BoxContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  width: '100%',
}))

const BoxCenter = styled(Box)(({ theme }) => ({
  display: 'center',
  justifyContent: 'center',
}))

const BoxFlexSpace = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
  flexWrap: 'wrap',
}))

const TypographyFull = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
}))

function WeekWeather(props) {
  return (
    <BoxContainer>
      <BoxFlexSpace>
        {props.Data.map((item) => (
          <Box key={item.Day}>
            <Box>
              <TypographyFull variant='h5'>{item.Day}</TypographyFull>
            </Box>
            <BoxCenter>
              <img src={item.Icon} className='image-weekly-icon' alt={'Icon'} />
            </BoxCenter>
            <Box>
              <TypographyFull variant='body1'>
                {item.Max + '° ' + item.Min + '°'}
              </TypographyFull>
            </Box>
          </Box>
        ))}
      </BoxFlexSpace>
    </BoxContainer>
  )
}

export default WeekWeather
