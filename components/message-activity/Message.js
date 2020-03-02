import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class Message extends React.Component {
    render() {
        return ( 
            <View style={styles.container}>
                <Text>Message Activity</Text> 
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});