import React from 'react';
import firebase from '../firebase/firebase';

import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Card from './Card';

export default class MainCard extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        cardArray: [],
        cardText: '',
        uid: ''
      }
    }

    signOut = () => {
      firebase.auth().signOut().then(() => {
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }  

    render() {
      this.state = { 
        displayName: firebase.auth().currentUser.displayName,
        uid: firebase.auth().currentUser.uid
      }  

      let cards = this.state.cardArray.map((val, key) => {
        return <Card key={key} 
                    keyval={key} 
                    val={val}
                    deleteMethod={ () => this.deleteCard(key) }>

                </Card>
      })

      return ( 
          <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.headerText}>Mind & Matters</Text>
              </View>

              <Button
                color="#3740FE"
                title="Logout"
                onPress={() => this.signOut()}
              />

              <ScrollView style={styles.scrollContainer}>
                {cards}
              </ScrollView>

              <View style={styles.footer}>
                  <TextInput 
                      style={styles.textInput}
                      onChangeText={(cardText) => this.setState({cardText})}
                      value={this.state.cardText}
                      placeholder='>Name for new card...'
                      placeholderTextColor='white'
                      underlineColorAndroid='transparent'>
                  </TextInput>
              </View>

              <TouchableOpacity onPress={ this.addCard.bind(this) } style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>

          </View>
        );
    }

    addCard() {
      if(this.state.cardText) {
        var date = new Date();
        this.state.cardArray.push({
          'date': date.getFullYear() + 
          "/" + (date.getMonth() + 1) + 
          "/" + date.getDate(),

          'note': this.state.cardText
        });
        this.setState({ cardArray: this.state.cardArray });
        this.setState({ cardText: '' });
      }
    }

    deleteCard(key) {
      this.state.cardArray.splice(key, 1);
      this.setState({cardArray: this.state.cardArray});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
      },
      headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
      },
      scrollContainer: {
        flex: 1,
        marginBottom: 100,
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      },
      textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
      },
      addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
      },
      addButtonText: {
        color: '#fff',
        fontSize: 24,
      },
});