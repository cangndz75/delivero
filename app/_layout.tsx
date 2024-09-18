import CustomHeader from '@/components/CustomHeader';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{
          header:() => <CustomHeader />
        }} />
      </Stack>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
  );
}
