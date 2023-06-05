import { Routes } from 'routes/routes'

export type AppStackParamList = {
  [Routes.NoAuthentication]: undefined
  [Routes.Authenticated]: undefined
}

export type NoAuthenticationStackNavigatorParamList = {
  [Routes.NoAuthenticationTop]: undefined
}
export type AuthenticatedStackNavigatorParamList = {
  [Routes.TaskList]: undefined
}
