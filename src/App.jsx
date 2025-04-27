import React from 'react'
import './App.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import HomePage from './pages/beranda'
import ProfilePage from './pages/profilePage'

export default function App() {

  return (
    <>
      <HomePage />
      <LoginPage />
      <RegisterPage />
      <ProfilePage />
    </>
  )
}