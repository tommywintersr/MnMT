import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

export default class ProfilePicture extends React.Component {
    render() {
        return ( 
            <View>
                <Image
                    style={{width: 200, height: 200, borderRadius: 200, borderColor: 'yellow', borderWidth: 4}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({

});