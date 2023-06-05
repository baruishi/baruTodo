// NoAuthenticationStackNavigator gathers screens that are available to the user before authentication

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NoAuthenticationStackNavigatorParamList } from 'navigators/types'
import { Routes } from 'routes/routes'
import { NoAuthenticationTopSceen } from 'screens/NoAuthenticationTopScreen'
import React from 'react'

const NoAuthenticationStack =
  createNativeStackNavigator<NoAuthenticationStackNavigatorParamList>()

export const NoAuthenticationStackNavigator = (): JSX.Element => {
  return (
    <NoAuthenticationStack.Navigator>
      <NoAuthenticationStack.Screen
        name={Routes.NoAuthenticationTop}
        component={NoAuthenticationTopSceen}
      />
    </NoAuthenticationStack.Navigator>
  )
}
