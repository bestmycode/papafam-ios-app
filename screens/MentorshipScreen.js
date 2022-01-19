import {
	View,
	Text,
	Button,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

const MentorshipScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<Header title="Mentorship" />
		</SafeAreaView>
	);
};

export default MentorshipScreen;
