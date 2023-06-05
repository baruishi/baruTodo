import React, { useEffect, useState } from 'react'
import {
  NoAuthenticationTopSceenNavigationProps,
  NoAuthenticationTopSceenRouteProps
} from 'screens/types'
import * as LocalAuthentication from 'expo-local-authentication'
import { useDispatch } from 'react-redux'
import { NoAuthenticationTopView } from './view'
import { userAuthenticate } from 'redux/userSlice'

type Props = {
  navigation: NoAuthenticationTopSceenNavigationProps
  route: NoAuthenticationTopSceenRouteProps
}

export const NoAuthenticationTopSceen: React.FC<Props> = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      setIsBiometricSupported(compatible)
    })()
  })

  useEffect(() => {}, [isBiometricSupported])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userAuthenticate())
    }
  }, [dispatch, isAuthenticated])

  const onAuthenticate = () => {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter password'
    })
    auth.then(result => {
      setIsAuthenticated(result.success)
    })
  }

  return <NoAuthenticationTopView onAuthenticate={onAuthenticate} />
}
