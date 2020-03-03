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
                    style={{width: 250, height: 250, borderRadius: 250, borderColor: '#F2DA00', borderWidth: 6}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({

});