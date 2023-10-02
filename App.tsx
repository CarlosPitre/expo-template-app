import Button from '@/presentation/components/ui/atoms/buttons';
import Typography from '@/presentation/components/ui/atoms/typography';
import { themeApp } from '@/presentation/theme/theme';
import { View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

const ViewWrapper = styled.ScrollView`
  display: flex;
  flex: 1;
  /* align-items: center; */
  /* background-color: ${({ theme: { colors } }) => colors.info}; */
  padding: ${({ theme: { spacing } }) => spacing.md};
  gap: 10px;
`;

const TextWrapper = styled.Text`
  color: ${({ theme: { colors } }) => colors.neutral};
  font-size: ${({ theme: { typography } }) => typography.size.xlg};
  font-weight: ${({ theme: { typography } }) => typography.weight['semi-bold']};
`;

export default function App() {
  return (
    <ThemeProvider theme={themeApp}>
      <ViewWrapper>
        <View style={{ display: 'flex', gap: 10 }}>
          <TextWrapper>
            Open up App.tsx to start working on your app!
          </TextWrapper>
          <Typography variant="heading" color="brand">
            Heading
          </Typography>
          <Typography variant="title" color="brand">
            Title
          </Typography>
          <Typography variant="subtitle" color="brand">
            Subtitle
          </Typography>
          <Typography variant="body" color="brand">
            Body
          </Typography>
          <Typography variant="small" color="brand">
            Small
          </Typography>
          <Button text="Button" icon='arrow-right' positionIcon='right' disabled isLoading />
          <Button text="Button" variant="outline" icon='user' disabled />
          <Button text="Button" variant="ghost" icon='user' disabled />
          <Button text="Button SM" size="sm" icon='user' />
          <Button text="Button SM" variant="outline" size="sm" icon='user' isLoading />
          <Button text="Button SM" variant="ghost" size="sm" icon='user' />
          <Button text="Button LG" size="lg" icon='user' isLoading />
          <Button text="Button LG" variant="outline" size="lg" icon='user' isLoading />
          <Button text="Button LG" variant="ghost" size="lg" icon='user' />
        </View>
      </ViewWrapper>
    </ThemeProvider>
  );
}
