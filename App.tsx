import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import Colors from "./styles/Colors";
import FloatingButton from "./components/FloatingButton";
import AddTaskModal from "./components/AddTaskModal";
import TaskCard from "./components/TaskCard";

export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [toDoList, setToDoList] = useState<any>([]);

  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }
  function addTask(taskContent: string) {
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find(
      (todo: any) => todo.task.trim().toLowerCase() === taskContentCheck
    );
    if (taskContentCheck == "") {
      Alert.alert("Please enter a valid task");
    } else {
      if (checkDublicate) {
        Alert.alert("You already added this task");
      } else {
        const newTask = {
          id: toDoList.length + 1,
          task: taskContent,
          isCompleted: false,
        };
        setToDoList((oldTasks: any) => [...oldTasks, newTask]);
        setModalVisible(false);
      }
    }
  }

  function deleteTask(task: any) {
    if (task.isCompleted == false) {
      const newList = toDoList.map((todo: any) => {
        if (todo.id == task.id) {
          todo.isCompleted = true;
        }
        return todo;
      });
      setToDoList(newList);
    } else {
      setToDoList(toDoList.filter((item: any) => item.id !== task.id));
    }
  }

  const renderToDoList = ({ item }: any) => (
    <TaskCard
      item={item}
      isCompleted={item.isCompleted}
      onDelete={() => deleteTask(item)}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}># Things To Do</Text>
      <FlatList data={toDoList} renderItem={renderToDoList} />
      <FloatingButton onPress={handleModalVisible} />
      <StatusBar style="light" />
      <AddTaskModal
        isVisible={modalVisible}
        onClose={handleModalVisible}
        onAddTask={addTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    color: Colors.defaultWhiteColor,
    fontFamily: "Helvetica",
    fontSize: 36,
    marginTop: 70,
  },
});
