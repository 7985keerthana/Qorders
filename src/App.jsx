import React, { useState, useEffect } from 'react'
import SplashPage from './components/SplashPage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import ForgotPasswordPage from './components/ForgotPasswordPage'
import VerifyEmailPage from './components/VerifyEmailPage'
import HomePage from './components/HomePage'
import ProfilePage from './components/profile/ProfilePage'
import MenuPage from './components/MenuPage'
import EditItemPage from './components/EditItemPage'

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash') // 'splash'|'login'|'signUp'|'forgotPassword'|'verifyEmail'|'home'|'main'|'menu'|'editItem'

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('login')
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [currentScreen])

  if (currentScreen === 'splash') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <SplashPage onStart={() => setCurrentScreen('login')} />
      </div>
    )
  }

  if (currentScreen === 'login') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <LoginPage
          onLogin={() => setCurrentScreen('home')}
          onSignUp={() => setCurrentScreen('signUp')}
          onForgotPassword={() => setCurrentScreen('forgotPassword')}
        />
      </div>
    )
  }

  if (currentScreen === 'signUp') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <SignUpPage
          onSignUpSuccess={() => setCurrentScreen('login')}
          onBackToLogin={() => setCurrentScreen('login')}
        />
      </div>
    )
  }

  if (currentScreen === 'forgotPassword') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <ForgotPasswordPage
          onBackToLogin={() => setCurrentScreen('login')}
          onSubmit={() => setCurrentScreen('verifyEmail')}
        />
      </div>
    )
  }

  if (currentScreen === 'verifyEmail') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <VerifyEmailPage
          onVerify={() => setCurrentScreen('home')}
          onResend={() => {}}
        />
      </div>
    )
  }

  if (currentScreen === 'home') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <HomePage
          onNavigateProfile={() => setCurrentScreen('main')}
          onNavigateMenu={() => setCurrentScreen('menu')}
          onLogout={() => setCurrentScreen('login')}
        />
      </div>
    )
  }

  if (currentScreen === 'menu') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <MenuPage
          onBack={() => setCurrentScreen('home')}
          onAddItem={() => setCurrentScreen('editItem')}
          onNavigateHome={() => setCurrentScreen('home')}
        />
      </div>
    )
  }

  if (currentScreen === 'editItem') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
        <EditItemPage
          onBack={() => setCurrentScreen('menu')}
          onSubmit={() => setCurrentScreen('menu')}
        />
      </div>
    )
  }

  return (
    <ProfilePage
      onLogout={() => setCurrentScreen('login')}
      onBack={() => setCurrentScreen('home')}
    />
  )
}

export default App