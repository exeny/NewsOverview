// Post.jsx
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { gStyle } from '../styles/style'

const Post = ({ title, urlToImage, publishedAt }) => (
	<View style={gStyle.PostContainer}>
		<Image source={{ uri: urlToImage }} style={gStyle.PostImage} />
		<Text style={gStyle.PostTitle}>{title}</Text>
		<Text style={gStyle.PostDate}>{publishedAt}</Text>
	</View>
)

export default Post
