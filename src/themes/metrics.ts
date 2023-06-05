import { Dimensions } from 'react-native'

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window')

export const metrics = {
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  marginSmall: 10,
  marginMedium: 15,
  marginLarge: 25
}
