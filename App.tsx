import Typography from '@/presentation/components/ui/typography';
import { themeApp } from '@/presentation/theme/theme';
import styled, { ThemeProvider } from 'styled-components/native';

const ViewWrapper = styled.View`
  display: flex;
  flex: 1;
  /* align-items: center; */
  justify-content: center;
  /* background-color: ${({ theme: { colors } }) => colors.info}; */
  padding: ${({ theme: { spacing } }) => spacing.md};
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
        <TextWrapper>Open up App.tsx to start working on your app!</TextWrapper>
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
      </ViewWrapper>
    </ThemeProvider>
  );
}
