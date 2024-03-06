// BudgetEntryListingScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import {items} from '../store/reducers/budgetReducer'

const BudgetEntryListingScreen = ({navigation}) => {
  const budgetEntries = useSelector(items);  //(state) => state.budgetReducer.
                       
  return (
    <View>
      <Text>Budget Entry Listing</Text>
      <FlatList
        data={budgetEntries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.itemName}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default BudgetEntryListingScreen;
