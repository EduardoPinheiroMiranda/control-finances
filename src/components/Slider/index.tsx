import { useEffect, useRef } from "react";
import { AnimatedProgress, Background, Container, Marked, Text } from "./styles";
import { Animated } from "react-native";


interface PropsTypes {
    spent: number
}


export function Slider(props: PropsTypes){

	const progress = props.spent > 100 ? 100 : props.spent;

	const progressAnimated = useRef(new Animated.Value(0)).current;


	useEffect(() => {
		Animated.timing(
			progressAnimated,
			{
				toValue: progress,
				duration: 2000,
				useNativeDriver: false
			}
		).start();
	}, []);

	const widthInterpolated = progressAnimated.interpolate({
		inputRange: [0, 100],
		outputRange: ["0%", "100%"],
	}); 

    
	return(
		<Container>
			<Background>
				<AnimatedProgress width={widthInterpolated}>
					<Marked/>
				</AnimatedProgress>
			</Background>
			<Text>{props.spent}%</Text>
		</Container>
	);
}