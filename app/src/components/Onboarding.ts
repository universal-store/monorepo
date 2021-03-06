/** @format */

import styled from 'styled-components/native';

// Components
import { FullScreenWhite, isiPhoneX, RowView } from './Views';
import { HeaderSmallText, TextSmall, TextSmall2 } from './Text';

// Utils
import { validInput } from '&utils';

export const OnboardingMainContainer = styled(FullScreenWhite)`
  width: 100%;
  display: flex;
  padding: 0 32px;
`;

export const OnboardingScroll = styled.ScrollView`
  flex: 1;
`;

export const OnboardingHeaderContainer = styled(RowView)`
  width: 100%;
  margin: ${isiPhoneX ? 82 : 48}px 0 24px;
`;

export const LogoContainer = styled.View`
  width: 50px;
  height: 50px;
  display: flex;
  padding-top: 5px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const OnboardingHeaderTextContainer = styled.View`
  display: flex;
  margin-left: 16px;
  justify-content: space-between;
`;

export const OnboardingSubHeaderText = styled(HeaderSmallText)`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const OnboardingFormContainerHalf = styled.View`
  width: 50%;
`;

export const OnboardingFormHalfRow = styled(RowView)`
  align-items: center;
`;

export const OnboardingFormText = styled(TextSmall)`
  margin: 24px 0 20px;
  color: ${({ theme }) => theme.colors.gray[3]};
`;

interface InputValidationProp {
  valid: validInput;
}

export const OnboardingInputContainer = styled(RowView)<InputValidationProp>`
  margin-bottom: 8px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, valid }) => {
    if (valid === 'NEEDS_CHECK') return theme.colors.gray[3];
    else if (valid === 'VALID') return theme.colors.green;
    else return theme.colors.red;
  }};
`;

export const OnboardingInputIconContainer = styled.View`
  width: 16px;
  height: 16px;
`;

export const OnboardingSecureInputIconContainer = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const OnboardingTextInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.colors.gray[3],
  placeholderTextColor: theme.colors.gray[4],
}))`
  flex: 1;
  padding: 8px 16px;
  font-family: NunitoSans-Bold;
`;

export const OnboardingForgotPasswordButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 12px;
`;

export const OnboardingSmallText = styled(TextSmall2)`
  color: ${({ theme }) => theme.colors.gray[3]};
`;

export const OnboardingRequiredText = styled(TextSmall2)`
  color: ${({ theme }) => theme.colors.red};
`;

export const OnboardingRow = styled(RowView)`
  margin-top: 24px;
  justify-content: center;
`;

export const OnboardingTextButton = styled.TouchableOpacity`
  display: flex;
  margin-left: 2px;
  align-items: center;
  justify-content: center;
`;

export const OnboardingSmallerText = styled(TextSmall2)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[1]};
`;

export const OnboardingSmallerBoldText = styled(OnboardingSmallerText)`
  font-family: NunitoSans-Bold;
`;

export const OnboardingButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  display: flex;
  border-radius: 40px;
  align-items: center;
  margin: 48px 0 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple[1]};
`;

export const OnboardingButtonText = styled(HeaderSmallText)`
  color: ${({ theme }) => theme.colors.white[1]};
`;

export const OnboardingPadding = styled.View`
  height: 24px;
`;
