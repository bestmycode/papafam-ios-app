import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MentorshipScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Mentorship</Text>
			<Text>Mentorship</Text>
			<Text>Mentorship</Text>
			<Button title="go back" onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default MentorshipScreen;
