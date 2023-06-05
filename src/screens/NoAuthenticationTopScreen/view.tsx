import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { noAuthenticationTopStyle } from './style'
import { colors } from 'themes/colors'

type Props = {
  onAuthenticate: () => void
}

export const NoAuthenticationTopView: React.FC<Props> = ({
  onAuthenticate
}) => {
  return (
    <SafeAreaView
      edges={['top', 'bottom', 'left', 'right']}
      style={[noAuthenticationTopStyle.safeAreaView]}>
      <Text style={[noAuthenticationTopStyle.text, { color: colors.textGrey }]}>
        Authentication required
      </Text>
      <TouchableOpacity
        testID="NoAuth_Top_OnAuthenticate"
        style={noAuthenticationTopStyle.button}
        onPress={onAuthenticate}>
        <Text style={noAuthenticationTopStyle.buttonText}>Authenticate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
