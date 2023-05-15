import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoal, setGoal] = useState("");
  const [listGoal, pushGoal] = useState([]);
  const deleteGoal = (goal) => {
    pushGoal(listGoal.filter((itm) => itm !== goal));
  };
  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goal."
          value={enteredGoal}
          onChangeText={(inptText) => setGoal(inptText)}
        />
        <Button
          title="Add Goal"
          onPress={() => {
            pushGoal((prevState) =>
              enteredGoal && !listGoal.includes(enteredGoal)
                ? [...prevState, enteredGoal]
                : [...prevState]
            );
            setGoal("");
          }}
        />
      </View>
      <View style={styles.listGoalContainer}>
        <Text>List of your goal.....</Text>
        <ScrollView>
          {listGoal.length > 0 &&
            listGoal.map((item) => {
              return (
                <Pressable onPress={() => deleteGoal(item)} key={item}>
                  <View style={styles.goalItem}>
                    <Text style={styles.goalText}>{item}</Text>
                  </View>
                </Pressable>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50,
    flex: 1,
  },
  goalContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    padding: 3,
    marginRight: 5,
  },
  listGoalContainer: {
    flex: 11,
    flexDirection: "column",
  },
  goalItem: {
    padding: 8,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
