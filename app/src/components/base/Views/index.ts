import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screenHeight = `${Dimensions.get("window").height}px`;
const screenWidth = `${Dimensions.get("window").width}px`;

export const FullScreen = styled.View`
	flex: 1;
	height: ${screenHeight};
	width: ${screenWidth};
`;

export const FullScreenCenter = styled(FullScreen)`
	justify-content: center;
	align-items: center;
`;

export const FillView = styled.View`
	flex: 1;
	height: 100%;
	width: 100%;
`;

export const FillViewCenter = styled(FillView)`
	justify-content: center;
	align-items: center;
`;

export const Row = styled.View`
	flex-direction: row;
`;

export const RowCenter = styled(Row)`
	align-items: center;
	justify-content: center;
`;

export const Center = styled.View`
	align-items: center;
	justify-content: center;
`;
