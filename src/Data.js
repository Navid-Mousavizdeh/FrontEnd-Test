// import icons
import SunnyIcon from './Assets/Sunny-Icon.png'
import RainyIcon from './Assets/Rainy-Icon.png'
import CloudyIcon from './Assets/Cloudy-Icon.png'

// Initialize Weather dat
export const allData = {
  AppBarTitle: 'Weather App',
  CityName: 'Chicago',
  CountryName: 'US',
  Date: 'Tue Aug 15 2017',
  Time: '10:41:34 PM',
  WeatherCast: 'Sky is clear.',
  TodayIcon: SunnyIcon,
  Temperature: '21',
  weatherData: {
    Humidity: '89%',
    Wind: '3.14 m/s 38°',
    Cloudiness: '0%',
    Pressure: '1006 hPa',
  },
  weatherWeeklyData: [
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
  ],
}
