import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { gStyle } from './styles/style'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Navigate from './Navigate'

const fonts = () =>
	Font.loadAsync({
		'mt-black': require('./assets/fonts/Montserrat-Black.ttf'),
		'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
		'mt-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
		'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
		'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
	})

export default function App() {
	const [font, setFont] = useState(false)

	if (font) {
		return (
			<SafeAreaView style={gStyle.main}>
				<Navigate />
				<StatusBar style='auto' />
			</SafeAreaView>
		)
	} else {
		return (
			<AppLoading
				startAsync={fonts}
				onFinish={() => setFont(true)}
				onError={console.warn}
			/>
		)
	}
}
