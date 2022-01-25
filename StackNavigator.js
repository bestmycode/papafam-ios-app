import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import GithubScreen from './screens/GithubScreen';
import HeroScreen from './screens/HeroScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MastermindScreen from './screens/MastermindScreen';
import MentorshipScreen from './screens/MentorshipScreen';
import MentorshipVideos from './screens/MentorshipVideos';
import TestimonialScreen from './screens/TestimonialScreen';

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
					<>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Hero" component={HeroScreen} />
						<Stack.Screen name="Mastermind" component={MastermindScreen} />
						<Stack.Screen name="Mentorship" component={MentorshipScreen} />
						<Stack.Screen
							name="MentorshipVideos"
							component={MentorshipVideos}
						/>
						<Stack.Screen name="Github" component={GithubScreen} />
						<Stack.Screen name="Testimonial" component={TestimonialScreen} />
					</>
				) : (
					<Stack.Screen name="Login" component={LoginScreen} />
				)}
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default StackNavigator;
