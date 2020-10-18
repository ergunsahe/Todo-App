import {Dimensions, StyleSheet} from 'react-native';

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303e45',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  todoText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff9b31',
  },
  todoCount: {
    fontSize: 25,
    color: '#ff9b31',
    
  },

  emptyComponent: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
});

const todo_input = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#e0e0e0',
    margin: 10,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#a7b6bd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#4a636e',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const todo_card = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    margin: 5,
    borderRadius: 7,
  },
  todo_text: {
    fontSize: 18,
  },
});

export {main, todo_input, todo_card};
