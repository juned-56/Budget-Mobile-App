// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', 
    backgroundColor: '#292929', 
  },
  input: {
    height: 50,
    borderColor: '#ddd', 
    borderBottomWidth: 2, 
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    color: 'black', 
    fontFamily: 'Arial',
  },
  button: {
    height: 50,
    marginTop: 20,
    backgroundColor: '#24bfd4', 
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase', 
  },
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: '#24bfd4', 
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
