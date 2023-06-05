// TaskComponent is used to render the list of tasks.

import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { taskComponentStyle } from './style'
import { colors } from 'themes/colors'
import { useDispatch } from 'react-redux'
import { removeTask } from 'redux/tasksSlice'

type Props = {
  name: string
  id: string
}

export const TaskComponent: React.FC<Props> = ({ name, id }) => {
  const dispatch = useDispatch()

  const onPressAddTask = () => {
    dispatch(removeTask(id))
  }

  return (
    <View id={id} style={taskComponentStyle.mainContainer}>
      <View style={taskComponentStyle.statusAndName}>
        <View style={taskComponentStyle.statusMark} />
        <Text style={[taskComponentStyle.text, { color: colors.textGrey }]}>
          {name}
        </Text>
      </View>
      <TouchableOpacity
        style={taskComponentStyle.touchableOpacity}
        onPress={onPressAddTask}>
        <Text style={[taskComponentStyle.text, { color: colors.textGrey }]}>
          REMOVE
        </Text>
      </TouchableOpacity>
    </View>
  )
}
