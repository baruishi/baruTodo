// TaskAddComponent is a component on the bottom of task list screen.
// It allows the user to add the task to the list.

import React, { useState } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import { taskAddComponentStyle } from './style'
import { useDispatch } from 'react-redux'
import { addTask } from 'redux/tasksSlice'

type Props = {}

export const TaskAddComponent: React.FC<Props> = ({}) => {
  const dispatch = useDispatch()

  const [newTaskName, setNewTaskName] = useState('')

  const onPressAddTask = () => {
    const newDate = new Date()
    const taskId = newDate.toISOString()
    dispatch(addTask({ name: newTaskName, id: taskId }))
    setNewTaskName('')
  }

  return (
    <View style={taskAddComponentStyle.mainContainer}>
      <TextInput
        hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
        style={taskAddComponentStyle.textInput}
        onChangeText={setNewTaskName}
        value={newTaskName}
        maxLength={20}
        placeholder={`Enter here`}
        placeholderTextColor={'#ADADAD'}
        focusable={true}
      />
      <TouchableOpacity
        style={taskAddComponentStyle.touchableOpacity}
        onPress={onPressAddTask}>
        <Text style={taskAddComponentStyle.text}>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}
