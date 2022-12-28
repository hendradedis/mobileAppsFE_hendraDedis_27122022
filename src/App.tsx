/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootNavigation from './navigator/RootNavigation';
import {ToastProvider} from 'react-native-toast-notifications';

const App = (): React.ReactElement => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot override={false}>
        <ToastProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </ToastProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
