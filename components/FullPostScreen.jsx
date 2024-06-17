import React, { useState, useEffect } from 'react'
import {
	View,
	StatusBar,
	Alert,
	TouchableOpacity,
	Linking,
	Text,
	Image,
} from 'react-native'
import { Loading } from './Loading'
import { gStyle } from '../styles/style'

export default function FullPostScreen({ route, navigation }) {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState({})
	const { article } = route.params

	useEffect(() => {
		if (article) {
			setData({
				title: article.title,
				imageUrl: article.urlToImage,
				text: article.description,
				content: article.content,
				publishedAt: article.formattedDate,
				url: article.url, // добавляем URL статьиr
			})
		} else {
			Alert.alert('Error', 'Article not found')
		}
	}, [article])

	if (isLoading) {
		return <Loading />
	}

	const handlePress = () => {
		if (data.url) {
			Linking.openURL(data.url)
		} else {
			Alert.alert('Error', 'No URL available')
		}
	}

	return (
		<View>
			<StatusBar barStyle='dark-content' backgroundColor='white' />
			<Text style={gStyle.FullPostTitle}>{data.title}</Text>
			<Text style={gStyle.FullPostPublishedAt}>{data.publishedAt}</Text>
			<Image style={gStyle.FullPostImage} source={{ uri: data.imageUrl }} />
			<Text style={gStyle.FullPostText}>{data.content}</Text>
			<TouchableOpacity onPress={handlePress}>
				<Text style={gStyle.FullPostLinkText}>Read Full Article</Text>
			</TouchableOpacity>
		</View>
	)
}
