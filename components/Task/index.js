import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './style';

const Task = (props) => {
    const { number } = props;
    const numberText = number < 10 ? `0${number}` : number;
    const itemBackgroundColor = number % 2 === 0 ? styles.even : styles.odd;

    return (
        <TouchableOpacity
            onPress={props.onDeleteTask}
        >
            <View style={styles.items}>
                <View style={[styles.square, itemBackgroundColor]}>
                    <Text style={styles.number}>{numberText}</Text>
                </View>
                <Text style={styles.content}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task
