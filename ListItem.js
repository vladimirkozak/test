import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ name, move, moveEnd, isActive }) => {
  return (
    <TouchableOpacity
      style={[styles.root, isActive && styles.active]}
      onLongPress={move}
      onPressOut={moveEnd}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: {},
  active: {},
  text: {}
});

export default ListItem;