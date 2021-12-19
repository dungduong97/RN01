import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import styles from './App.components.style';
import Task from './components/Task';
import Form from './components/Form';

export default function App() {

  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "THÔNG BÁO",
      "Xóa công việc?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);
          },
        },
        {
          text: "Cancel", onPress: () => { }
        }
      ]
    );
  }
  return (
    <View style={styles.container} >
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>

        <ScrollView style={styles.itemView}>
          {
            taskList.map((item, index) => {
              return <Task key={index} title={item} number={index + 1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>

      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  )
}


