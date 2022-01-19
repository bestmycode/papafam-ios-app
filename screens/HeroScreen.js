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

const HeroScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			{/* Header */}
			<View style={tw`flex-row items-center justify-between px-5 mb-5`}>
				<TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
					<Ionicons name="chevron-back-outline" size={34} color="#F8ad05" />
				</TouchableOpacity>

				<Text style={tw`text-xl font-bold pl-2`}>Zero to Full Stack Hero</Text>

				<TouchableOpacity onPress={() => navigation.navigate('Testimonial')}>
					<Image
						style={tw`h-10 w-10 rounded-full`}
						source={require('../assets/papareactlogo.png')}
					/>
				</TouchableOpacity>
			</View>
			{/* End of Header */}
		</SafeAreaView>
	);
};

export default HeroScreen;
