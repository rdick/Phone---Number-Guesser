import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
    return (
        <TextInput {...props} style={{ ...styles.input, ...props.style }} />
        // with {...props} you are forwarding your props to the component 
        // -> parent props to child (you are in child)
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

export default Input