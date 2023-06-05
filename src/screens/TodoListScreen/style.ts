import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { fonts } from 'themes/fonts'
import { metrics } from 'themes/metrics'
import { colors } from 'themes/colors'

type TaskListStyleTypes = {
  safeAreaView: ViewStyle
  text1: TextStyle
  button: ViewStyle
  flattListContentContainerStyle: ViewStyle
}

export const taskListStyle = StyleSheet.create<TaskListStyleTypes>({
  safeAreaView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.greyBackground
  },
  flattListContentContainerStyle: {
    alignSelf: 'flex-start'
  },
  text1: {
    ...fonts.subhead2
  },
  button: {
    marginBottom: 25,
    marginHorizontal: metrics.marginLarge
  }
})
