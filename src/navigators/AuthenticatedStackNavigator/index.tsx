// AuthenticatedStackNavigator gathers screens that are available to the user after authentication is successful

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthenticatedStackNavigatorParamList } from 'navigators/types'
import { Routes } from 'routes/routes'
import React from 'react'
import { TodoListScreen } from 'screens/TodoListScreen'

const AuthenticatedStack =
  createNativeStackNavigator<AuthenticatedStackNavigatorParamList>()

export const AuthenticatedStackNavigator = (): JSX.Element => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name={Routes.TaskList}
        component={TodoListScreen}
        options={{ headerShown: false }}
      />
    </AuthenticatedStack.Navigator>
  )
}
