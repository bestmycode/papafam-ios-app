import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MastermindScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Mastermind</Text>
			<Text>Mastermind</Text>
			<Text>Mastermind</Text>
			<Button title="go back" onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default MastermindScreen;
