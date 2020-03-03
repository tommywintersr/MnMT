import React from 'react';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import { 
    StyleSheet,
    View
} from 'react-native';

import ProfilePicture from './profile-component/ProfilePicture';
import ProfileTopText from './profile-component/ProfileTopText';
import ProfileDesc from './profile-component/ProfileDesc';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
    }

    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.topText}>
                        <ProfileTopText />
                    </View>

                    <View style={styles.iconBox}>
                        <Icon name="md-more" style={styles.icon}></Icon>
                    </View>  
                </View>
                
                <View style={styles.mid}>
                    <ProfilePicture />
                    
                    <StarRating
                        disabled={false}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'#F2DA00'}
                    />
                </View>

                <View style={styles.bottom}>
                    <ProfileDesc />
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginBottom: 20,
        flexDirection: 'row',
    },
    mid: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 20,
          flex: 4,
    },
    topText: {
        flex: 1,
    },
    iconBox: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    icon: {
        fontSize: 45,
    },
    bottom: {
        flex: 5,
        height: 500,
    },
  });