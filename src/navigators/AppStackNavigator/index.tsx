// AppStackNavigator is the main navigator of the application.
// It controls which screens are rendered depending on the authentication status.

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NoAuthenticationStackNavigator } from 'navigators/NoAuthenticationStackNavigator'
import { AppStackParamList } from '../types'
import * as React from 'react'
import { Routes } from 'routes/routes'
import { AuthenticatedStackNavigator } from 'navigators/AuthenticatedStackNavigator'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const AppStack = createNativeStackNavigator<AppStackParamList>()

export const AppStackNavigator: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.userSlice.isAuthenticated
  )

  return (
    <AppStack.Navigator>
      {!isAuthenticated ? (
        <AppStack.Screen
          name={Routes.NoAuthentication}
          component={NoAuthenticationStackNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <AppStack.Screen
          name={Routes.Authenticated}
          component={AuthenticatedStackNavigator}
          options={{ headerShown: false }}
        />
      )}
    </AppStack.Navigator>
  )
}
