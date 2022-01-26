import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import useAuth from '../hooks/useAuth';

const courses = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'Starter Guide',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Mastermind Calls',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Success Coach Calls',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
		title: 'React Basics 101',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
		title: 'Web Dev Essentials',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d726',
		title: 'CSS Mastery',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
		title: 'JavaScript Mastery',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f638',
		title: 'The Complete React Guide',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d729',
		title: 'Redux For Dummies',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba10',
		title: 'React Native 101',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6311',
		title: 'The MERN Guide',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d7212',
		title: 'The Firebase Guide',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba13',
		title: 'Typescript For Noobs',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6314',
		title: 'Server Side Rendering For Dummies',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d7215',
		title: 'The GraphQL Guide',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6316',
		title: 'Bonus Content',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d7217',
		title: '🧑‍🎓👩‍🎓 The Student Area - Lessons, Resources + More',
	},
];

const CourseList = () => {
	const navigation = useNavigation();
	const { user } = useAuth();
	const Item = ({ title }) => (
		<TouchableOpacity
			style={[tw`w-64 p-3 rounded-xl mt-5 bg-yellow-400`]}
			onPress={() => navigation.navigate('Home')}
		>
			<Text style={tw`text-center text-white text-xl`}>{title}</Text>
		</TouchableOpacity>
	);
	const renderItem = ({ item }) => <Item title={item.title} />;
	return (
		<>
			<View style={tw`flex items-center `}>
				<Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
					Welcome {user.displayName}
				</Text>

				<FlatList
					style={tw`mb-56`}
					data={courses}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
				/>
			</View>
		</>
	);
};

export default CourseList;
