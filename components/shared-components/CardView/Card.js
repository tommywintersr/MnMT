import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Avatar,
  Card as MyCard,
} from "react-native-paper";

var moment = require('moment');

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
export default class Card extends React.Component {
  render() {
    var cardDate = Date.parse(this.props.val.date);
    return (
      <MyCard>
        <MyCard.Title
          title="Daphne Lun"
          subtitle={moment.utc(cardDate).local().startOf('seconds').fromNow()}
          left={LeftContent}
        />
        <MyCard.Content>
          <Text>{this.props.val.note}</Text>
          {this.props.val.img && (
            <View style={styles.imgcontainer}>
              <Image source={{ uri: this.props.val.img }} style={styles.img} />
            </View>
          )}
        </MyCard.Content>
        <MyCard.Actions>
          <TouchableOpacity
            onPress={this.props.deleteMethod}
            style={styles.noteDelete}
          >
            <Text style={styles.noteDeleteText}>X</Text>
          </TouchableOpacity>
        </MyCard.Actions>
      </MyCard>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#e91e63",
  },
  noteDelete: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    height: 50,
    width: 50,
    padding: 10,
  },
  img: {
    padding: 200,
    width: 150,
    height: 150,
  },
  imgcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  noteDeleteText: {
    color: "black",
  },
});
