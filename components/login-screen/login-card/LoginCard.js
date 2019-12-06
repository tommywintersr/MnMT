import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class LoginCard extends React.Component {
    constructor() {
        super();

        this.state = {
            value: 1
        }
    }
    
    componentDidMount() {
    }

    add = () => {
        this.setState((prevState) => {value: prevState.value + 1})
    }

    render() {
        return ( 
            <View>
                <Text>{this.state.value}</Text>

                <Button title = "Right button" onPress={add()}>
                </Button>
            </View>
        );
    }

}