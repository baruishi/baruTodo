import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from 'themes/colors'
import { fonts } from 'themes/fonts'
import { metrics } from 'themes/metrics'

type TaskComponentStyleTypes = {
  text: TextStyle
  mainContainer: ViewStyle
  statusAndName: ViewStyle
  statusMark: ViewStyle
  touchableOpacity: ViewStyle
}

export const taskComponentStyle = StyleSheet.create<TaskComponentStyleTypes>({
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
    paddingVertical: metrics.marginMedium,
    paddingHorizontal: metrics.marginMedium,
    borderRadius: metrics.marginSmall,
    marginVertical: metrics.marginSmall
  },
  statusAndName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  statusMark: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.blue,
    marginRight: metrics.marginSmall
  },
  text: {
    ...fonts.subhead,
    fontWeight: '600'
  }
})
