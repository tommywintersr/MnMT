import React from 'react';
import { 
    StyleSheet
} from 'react-native';

import ProfilePicture from './profile-component/ProfilePicture';

export default class Profile extends React.Component {
    render() {
        return ( 
            <ProfilePicture></ProfilePicture>
        );
    }
}

const styles = StyleSheet.create({

});