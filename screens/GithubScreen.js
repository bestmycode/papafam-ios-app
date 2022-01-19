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

const GithubScreen = () => {
	return (
		<SafeAreaView>
			<Header title="GitHub" />
		</SafeAreaView>
	);
};

export default GithubScreen;
