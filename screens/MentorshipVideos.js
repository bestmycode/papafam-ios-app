import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Video from 'react-native-video';

const MentorshipVideos = () => {
	return (
		<SafeAreaView>
			<Header title="Mentorship Videos" />

			<Video
				source={{
					uri: 'https://www.youtube.com/watch?v=I2dcpatq54o&t=9409s',
				}}
				style={{ width: 300, height: 300 }}
				controls={true}
				ref={(ref) => {
					this.player = ref;
				}}
			/>
		</SafeAreaView>
	);
};

export default MentorshipVideos;
