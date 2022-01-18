import React from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
	const { logout } = useAuth();
	return (
		<View>
			<Text>Home</Text>
			<Button onPress={logout} title="Log out" />
		</View>
	);
};

export default HomeScreen;
