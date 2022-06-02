/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

test('everything rendered correctly', () => {
  render(<App />)
  const appBar = screen.getByTestId('app-bar')
  const weatherCastPanel = screen.getByTestId('weather-cast-panel')
  const titleBar = screen.getByTestId('title-bar')
  const dayWeather = screen.getByTestId('day-weather')
  const weekWeather = screen.getByTestId('week-weather')
  expect(appBar).toBeInTheDocument()
  expect(weatherCastPanel).toBeInTheDocument()
  expect(titleBar).toBeInTheDocument()
  expect(dayWeather).toBeInTheDocument()
  expect(weekWeather).toBeInTheDocument()
})
