import CustomHeader from '@/components/CustomHeader';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{
          header:() => <CustomHeader />
        }} />
      </Stack>
  );
}
