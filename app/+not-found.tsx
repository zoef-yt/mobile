import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View>
				<Text>This screen doesn't .</Text>
				<Link href='/' style={styles.link}>
					<Text>Go to home screen!</Text>
				</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});
