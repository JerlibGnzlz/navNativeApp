import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
// import { StackNavigator } from './presentation/routes/StackNavigator'
import { SideMenuNavigator } from './presentation/routes/StackMenuNavigator'


export const App = () => {

  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}

      <SideMenuNavigator />
    </NavigationContainer>
  )
}


