import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

export default class ProfilePicture extends React.Component {
    render() {
        return ( 
            <View style={styles.container}>
                <Text style={styles.main}>User Name</Text>
                <Text style={styles.bottom}>@username</Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    main: {
        fontSize: 16
    },
    bottom: {
        fontSize: 12
    },
  });