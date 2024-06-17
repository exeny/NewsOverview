import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
	View,
	Alert,
	FlatList,
	RefreshControl,
	TouchableOpacity,
} from 'react-native'
import Post from './Post'
import Loading from './Loading'

export default function HomeScreen({ navigation }) {
	const [isLoading, setIsLoading] = useState(false)
	const [articles, setArticles] = useState([])

	const fetchPosts = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				'https://newsapi.org/v2/top-headlines?country=us&apiKey=7c283bc34b304da790ef6aa31c0635db'
			)
			const filteredArticles = response.data.articles
				.filter(article => article.urlToImage)
				.map((article, index) => ({
					...article,
					id: index + 1,
					formattedDate: formatDate(article.publishedAt),
				}))
			setArticles(filteredArticles)
		} catch (error) {
			console.error(error)
			Alert.alert('Error', "Couldn't get the articles")
		} finally {
			setIsLoading(false)
		}
	}

	const formatDate = dateString => {
		const date = new Date(dateString)
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		const year = date.getFullYear()
		return `${month}.${day}.${year}`
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<View>
			<StatusBar style='auto' />
			<FlatList
				refreshControl={
					<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
				}
				data={articles}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('FullPostScreen', {
								article: item,
							})
						}
					>
						<Post
							title={item.title}
							urlToImage={item.urlToImage}
							publishedAt={item.formattedDate}
						/>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}
