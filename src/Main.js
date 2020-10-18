import React, {useState} from 'react';
import {View, Text, FlatList, KeyboardAvoidingView} from 'react-native';

import {main} from './styles';
import {TodoCard, TodoInput} from './components';

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */
const Main = () => {
  const [list, setList] = useState([]);
  function addTodo(text) {
    if (text!==""){
      const element = {
      id: list.length,
      todo: text,
      isDone: false,
    };
    const newArray = [element, ...list];
    // newArray.push(element);
    setList(newArray);
    }    
  }

  const doneTodo = (todoId) => {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id == todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  };

  function removeTodo(todoId) {
    const newArray = [...list];
    const todoIndex = list.findIndex((item) => item.id === todoId);
    newArray.splice(todoIndex, 1);
    setList(newArray);
  }

  const renderTodo = ({item}) => {
    return (
      <TodoCard
        data={item}
        onDone={(id) => doneTodo(id)}
        onRemove={() => removeTodo(item.id)}
      />
    );
  };
  return (
    <View style={main.container}>
      <View style={main.container} behavior="padding">
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={[main.todoCount]}>
            {list.filter((t) => t.isDone === false).length}
          </Text>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={renderTodo}
          ListEmptyComponent={() => (
            <Text style={main.emptyComponent}>Nothing todo..</Text>
          )}
        />
        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </View>
    </View>
  );
};
export default Main;
