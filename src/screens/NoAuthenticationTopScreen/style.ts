import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { colors } from 'themes/colors'
import { fonts } from 'themes/fonts'
import { metrics } from 'themes/metrics'

type NoAuthenticationTopStyleTypes = {
  safeAreaView: ViewStyle
  text: TextStyle
  button: ViewStyle
  buttonText: TextStyle
}

export const noAuthenticationTopStyle =
  StyleSheet.create<NoAuthenticationTopStyleTypes>({
    safeAreaView: { flex: 1 },
    text: {
      ...fonts.subhead,
      marginVertical: metrics.marginMedium,
      marginHorizontal: metrics.marginLarge
    },
    button: {
      // iOS HumanInterfaceGuidelines states that the minimum of touchables should be 44x44
      height: 50,
      width: metrics.screenWidth - metrics.marginLarge * 2,
      backgroundColor: colors.blue,
      marginBottom: 25,
      marginHorizontal: metrics.marginLarge,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25
    },

    buttonText: {
      ...fonts.headline
    }
  })
