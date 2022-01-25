import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { Video } from 'expo-av';
import tw from 'tailwind-react-native-classnames';
import YoutubePlayer from 'react-native-youtube-iframe';

const MentorshipVideos = () => {
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});
	return (
		<SafeAreaView>
			<Header title="Mentorship Videos" />
			<View style={tw`m-5`}>
				<YoutubePlayer
					style={tw``}
					height={200}
					play={false}
					videoId={'CSQgyKRj_Fo'}
				/>
			</View>

			<View style={tw`m-5`}>
				<YoutubePlayer
					style={tw``}
					height={200}
					play={false}
					videoId={'gFvr_9MCfsw'}
				/>
			</View>

			<View style={tw`m-5`}>
				<YoutubePlayer
					style={tw``}
					height={200}
					play={false}
					videoId={'VA-UN_6oNG8'}
				/>
			</View>
		</SafeAreaView>
	);
};

export default MentorshipVideos;
