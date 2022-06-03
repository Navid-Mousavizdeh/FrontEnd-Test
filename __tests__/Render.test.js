/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import { useEffect } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import HomePage from '../src/Pages/HomePage'
import { sampleData } from '../src/Data'

const FakeTimers = require('@sinonjs/fake-timers')
const clock = FakeTimers.install()

test('everything rendered correctly', async () => {
  render(<HomePage weatherData={sampleData} />)
  const appBar = await screen.getByTestId('app-bar')
  const weatherCastPanel = await screen.getByTestId('weather-cast-panel')
  const titleBar = await screen.getByTestId('title-bar')
  const dayWeather = await screen.getByTestId('day-weather')
  const weekWeather = await screen.getByTestId('week-weather')
  expect(appBar).toBeInTheDocument()
  expect(weatherCastPanel).toBeInTheDocument()
  expect(titleBar).toBeInTheDocument()
  expect(dayWeather).toBeInTheDocument()
  expect(weekWeather).toBeInTheDocument()
})
