import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	const { user } = useAuth();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Group>
				{user ? (
					<Stack.Screen name="Home" component={HomeScreen} />
				) : (
					<Stack.Screen name="Login" component={LoginScreen} />
				)}
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default StackNavigator;
