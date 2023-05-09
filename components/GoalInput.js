import { useState } from "react";

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b4b8bf" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f22613" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: "#f22613",
  },
  textInput: {
    borderWidth: 3,
    borderColor: "#d5f2f2",
    color: "#d5f2f2",
    borderTopRightRadius: 50,
    fontSize: 16,
    width: "100%",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    tintColor: "#d5f2f2",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
