// BudgetEntryListingScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const BudgetEntryListingScreen = () => {
  const budgetEntries = useSelector((state) => state.budgetReducer.budgetEntries);

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
