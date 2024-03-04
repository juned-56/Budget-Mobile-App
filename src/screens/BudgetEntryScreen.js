// BudgetEntryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from '../store/actions/budgetActions';
import { styles } from '../screens/styles'; // Import styles

const BudgetEntryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const handleSave = () => {
    dispatch(addBudgetEntry({ itemName, plannedAmount, actualAmount }));
    // You can clear the input fields here if needed
    navigation.navigate('BudgetEntryListing');
  };

  return (
    <View style={styles.container}>
      <Text>Name of the item:</Text>
      <TextInput
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
        placeholder="Enter item name"
      />
      <Text>Planned amount:</Text>
      <TextInput
        style={styles.input}
        value={plannedAmount}
        onChangeText={setPlannedAmount}
        placeholder="Enter planned amount"
        keyboardType="numeric"
      />
      <Text>Actual amount:</Text>
      <TextInput
        style={styles.input}
        value={actualAmount}
        onChangeText={setActualAmount}
        placeholder="Enter actual amount"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BudgetEntryListing')}>
        <Text style={styles.buttonText}>Show Items</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BudgetEntryScreen;