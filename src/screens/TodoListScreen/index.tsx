import React from 'react'
import {
  TodoListSceenNavigationProps,
  TodoListSceenRouteProps
} from 'screens/types'

import { TaskListView } from './view'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
// *
type Props = {
  navigation: TodoListSceenNavigationProps
  route: TodoListSceenRouteProps
}

export const TodoListScreen: React.FC<Props> = () => {
  const taskList = useSelector((state: RootState) => state.taskSlice)
  return <TaskListView taskList={taskList} />
}
