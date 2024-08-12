import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Games',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'game-controller' : 'game-controller-outline'} color={color} />,
				}}
			/>
			<Tabs.Screen
				name='movies'
				options={{
					title: 'Movies',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'film' : 'film-outline'} color={color} />,
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />,
				}}
			/>
		</Tabs>
	);
}
