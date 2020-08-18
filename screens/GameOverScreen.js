import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../components/Card'
import Colors from "../constants/colors"

const GameOverScreen = props => {
    return (
        <View style={styles.exterior}>
            <Card style={styles.dog}>
                <View style={styles.screen}>
                    <Text style={styles.words}>The Game is Over!</Text>
                    <Text style={styles.words}>Number of rounds: {props.roundsNumber}</Text>
                    <Text style={styles.words}>Number was: {props.userNumber}</Text>
                    <Button title="New Game" onPress={props.onRestart} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    exterior: {
        flex: 1,
        marginTop: '35%'
    },
    dog: {
        margin: 40,
        height: '50%',
        alignItems: 'center'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
    words: {
        fontSize: 20,
        padding: 10
    }
});

export default GameOverScreen