import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Card from './Card';
import PostBox from '../PostBox'

export default class LoginCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showPostBox: true,
        cardArray: [],
        cardText: "",
        image: null
      }
      this.postBox = React.createRef();
    }

    handleCard = (data) => {
      if(data) {
        var date = new Date();
        this.state.cardArray.push({
          'date': date.toString(),
          'note': data.cardText,
          'img': data.image
        });
        this.setState({ cardArray: this.state.cardArray });
        }
    }
    showPostBox = (val) => {
      if(this.state.showPostBox || !val) {
        this.postBox.current.hideModal();
        this.setState({showPostBox: false})
      } else {
        this.setState({showPostBox: true})
        this.postBox.current.showModal();
      }
    }
    _renderPostBox = () => {
        return (
          <View style={styles.footer}>
            <PostBox ref={this.postBox} style={[{width: 0, height: 0}, this.state.showPostBox && {width: 400, height: 400,}]} showPostBox={this.showPostBox} card={this.handleCard} />
          </View>
        );
    }

    render() {

      let cards = this.state.cardArray.map((val, key) => {
        return <Card key={key} 
                    keyval={key} 
                    val={val}
                    deleteMethod={ () => this.deleteCard(key) }>

                </Card>
      })

      return ( 
          <View style={styles.container}>
              {this._renderPostBox()}
              <View style={styles.header}>
                <Text style={styles.headerText}>Mind & Matters - {this.state.cardText.toString()}</Text>
              </View>
              <ScrollView style={styles.scrollContainer}>
                {cards}
              </ScrollView>
              <TouchableOpacity onPress={ this.showPostBox } style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
          </View>
        );
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
    displayNone:{
      display: 'none'
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
        marginBottom: 150,
        padding: 10
      },
      footer: {
        position: 'absolute',
        alignSelf: 'stretch',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 11
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
        bottom: 30,
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