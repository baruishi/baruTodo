import { StyleSheet, TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { colors } from 'themes/colors'
import { fonts } from 'themes/fonts'
import { metrics } from 'themes/metrics'

type TaskAddComponentStyleTypes = {
  text: TextStyle
  mainContainer: ViewStyle
  button: ViewStyle
  textInput: TextInputProps
  touchableOpacity: ViewStyle
}

export const taskAddComponentStyle =
  StyleSheet.create<TaskAddComponentStyleTypes>({
    mainContainer: {
      width: metrics.screenWidth - 2 * metrics.marginMedium,
      marginVertical: metrics.marginSmall,
      paddingHorizontal: metrics.marginMedium,
      borderRadius: metrics.marginSmall,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    touchableOpacity: {
      backgroundColor: colors.blue,
      paddingVertical: metrics.marginMedium,
      paddingHorizontal: metrics.marginMedium,
      borderRadius: metrics.marginSmall,
      marginVertical: metrics.marginSmall
    },
    textInput: {
      width: '80%',
      minHeight: 25,
      paddingHorizontal: 10,
      borderRadius: 5
    },
    text: {
      ...fonts.subhead,
      fontWeight: '600',
      color: 'white'
    },
    button: {
      marginBottom: 25,
      marginHorizontal: metrics.marginLarge
    }
  })
