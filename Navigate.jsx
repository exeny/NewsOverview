import React, { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import FullPostScreen from './components/FullPostScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()
export default function Navigate() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='HomeScreen'
					component={HomeScreen}
					options={{
						title: 'NewsOverview',
						headerTitleAlign: 'center',
						headerTitleStyle: { fontFamily: 'mt-bold' },
					}}
				/>
				<Stack.Screen
					name='FullPostScreen'
					component={FullPostScreen}
					options={{
						title: 'Article overview',
						headerTitleAlign: 'center',
						headerTitleStyle: { fontFamily: 'mt-bold' },
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
