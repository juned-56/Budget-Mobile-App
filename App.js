// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/store/store';
import BudgetEntryScreen from './src/screens/BudgetEntryScreen';
import BudgetEntryListingScreen from './src/screens/BudgetEntryListingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BudgetEntryScreen">
            <Stack.Screen name="BudgetEntryScreen" component={BudgetEntryScreen} options={{ title: 'Budget Entry' }} />
            <Stack.Screen name="BudgetEntryListing" component={BudgetEntryListingScreen} options={{ title: 'Budget Entry Listing' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;