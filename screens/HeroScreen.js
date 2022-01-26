import {
	View,
	Text,
	Button,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth';
import CourseList from '../components/CourseList';

const HeroScreen = () => {
	const navigation = useNavigation();
	const { user } = useAuth();
	return (
		<SafeAreaView>
			<Header title="Zero to Full Stack Hero" />
			<CourseList />
		</SafeAreaView>
	);
};

export default HeroScreen;
