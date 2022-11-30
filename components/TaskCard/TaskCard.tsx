import React, { FC } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import styles from "./TaskCard.style";
interface ICardProps {
  isCompleted: boolean;
  onDelete: () => void;
  item: any;
}
const TaskCard: FC<ICardProps> = ({ isCompleted, onDelete, item }) => {
  return isCompleted ? (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.completedContainer}>
        <Text style={styles.completedTaskText}>{item.task}</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onLongPress={onDelete}>
      <View style={styles.container}>
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TaskCard;
