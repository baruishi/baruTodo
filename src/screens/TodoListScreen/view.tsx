import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { taskListStyle } from './style'
import { Task } from 'models/types/userType'
import { TaskComponent } from 'components/atoms/Task'
import { TaskAddComponent } from 'components/atoms/TaskAdd'

type Props = {
  taskList: Task[]
}

export const TaskListView: React.FC<Props> = ({ taskList }) => {
  const renderItem = ({ item: { name, id } }: { item: Task }) => {
    return <TaskComponent name={name} id={id} />
  }

  return (
    <SafeAreaView
      edges={['top', 'bottom', 'left', 'right']}
      style={[taskListStyle.safeAreaView]}>
      <FlatList
        contentContainerStyle={taskListStyle.flattListContentContainerStyle}
        data={taskList}
        renderItem={renderItem}
      />

      <TaskAddComponent />
    </SafeAreaView>
  )
}
