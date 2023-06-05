import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from 'navigation'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { store } from 'redux/store'
import { Provider } from 'react-redux'

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
