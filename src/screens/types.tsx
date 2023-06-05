import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  AuthenticatedStackNavigatorParamList,
  NoAuthenticationStackNavigatorParamList
} from 'navigators/types'
import { Routes } from 'routes/routes'

export type NoAuthenticationTopSceenNavigationProps = StackNavigationProp<
  NoAuthenticationStackNavigatorParamList,
  Routes.NoAuthenticationTop
>
export type NoAuthenticationTopSceenRouteProps = RouteProp<
  NoAuthenticationStackNavigatorParamList,
  Routes.NoAuthenticationTop
>

export type TodoListSceenNavigationProps = StackNavigationProp<
  AuthenticatedStackNavigatorParamList,
  Routes.TaskList
>
export type TodoListSceenRouteProps = RouteProp<
  AuthenticatedStackNavigatorParamList,
  Routes.TaskList
>
