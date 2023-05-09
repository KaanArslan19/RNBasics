import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  const onDeleteHandler = () => {
    props.onDeleteItem(props.id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#eeeeee" }}
        onPress={onDeleteHandler}
        style={({ pressed }) => pressed && styles.pressedItem} //pressData.pressed which provided by Pressable
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 2,
    backgroundColor: "#d5f2f2",
  },
  pressedItem: {
    color: "#eeeeee",
  },
  goalText: {
    color: "#242424",
    padding: 8,
    fontWeight: "600",
  },
});
