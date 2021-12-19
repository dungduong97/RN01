import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'


import styles from "./style";
const Form = (props) => {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if (task.length === 0) {
            alert('Vui lòng nhập công việc');
            return false;
        }
        props.onAddTask(task);
        setTask('')
        Keyboard.dismiss();
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.addTask}
        >

            <TextInput
                value={task}
                placeholder='Type your task'
                style={styles.input}
                onChangeText={text => setTask(text)}
            />

            <TouchableOpacity
                onPress={handleAddTask}
            >
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default Form
