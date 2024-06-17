import { StyleSheet } from 'react-native'

export const gStyle = StyleSheet.create({
	main: {
		flex: 1,
	},
	PostContainer: {
		width: '95%',
		marginRight: 'auto',
		marginLeft: 'auto',
		marginTop: 20,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
	},
	PostTitle: {
		fontSize: 18,
		fontFamily: 'mt-bold',
		marginTop: 10,
	},
	PostImage: {
		width: '100%',
		height: 200,
		borderRadius: 10,
	},
	PostDate: {
		fontSize: 14,
		color: 'gray',
		marginTop: 5,
	},
	FullPostTitle: {
		fontSize: 24.3,
		lineHeight: 24.3,
		width: '89%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: 20,
		fontFamily: 'mt-bold',
	},
	FullPostImage: {
		marginTop: 20,
		borderRadius: 20,
		width: '90%',
		height: 200,
		marginBottom: 20,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	FullPostPublishedAt: {
		fontSize: 18,
		lineHeight: 24,
		width: '89%',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontFamily: 'mt-medium',
		color: 'rgba(0, 0, 0, 0.6)',
	},
	FullPostText: {
		fontSize: 19.3,
		lineHeight: 24,
		width: '89%',
		marginLeft: 'auto',
		marginRight: 'auto',
		fontFamily: 'mt-medium',
	},
	FullPostLinkText: {
		fontSize: 18.3,
		color: '#007aff',
		textAlign: 'center',
		marginTop: 20,
		fontFamily: 'mt-bold',
	},
})
