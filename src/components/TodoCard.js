import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {todo_card} from '../styles';

const TodoCard = (props) => {
  return (
    <TouchableOpacity
      style={todo_card.container}
      onPress={() => props.onDone(props.data.id)}
      onLongPress= {() => props.onRemove()}
    >
      <Text
        style={[
          todo_card.todo_text,
          {textDecorationLine: props.data.isDone ? 'line-through' : null},
        ]}>
        {props.data.todo}
      </Text>
    </TouchableOpacity>
  );
};

export {TodoCard};
