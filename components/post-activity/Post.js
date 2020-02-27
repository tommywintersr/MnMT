import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default class Post extends React.Component {
    render() {
        return ( 
            <View style={styles.container}>
                <Text>Post Activity</Text> 
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