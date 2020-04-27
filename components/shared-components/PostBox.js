import React from "react";
import Modal from "react-native-modal";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default class PostBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      cardText: "",
      image: null,
    };
  }

  componentDidMount() {
    this.getPermissionAsync();
    this.setState({
      showModal: this.props.showPostBox,
    });
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  showModal = () => {
    this.setState({ showModal: true });
  };
  hideModal = () => {
    if(this.state.cardText || this.state.image) {
      let card = {cardText: this.state.cardText, image: this.state.image}
      this.props.card(card);
      this.setState({ showModal: false, cardText: "", image: null });
    }

    this.setState({ showModal: false });
  };
  uploadImage = async () => {
    //handle image upload here
    let {image} = this.state;
  }
  openImagePicker = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.showModal} style={styles.view}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(cardText) => this.setState({ cardText })}
            value={this.state.cardText}
            placeholder="> What do you want to share?"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          ></TextInput>

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, padding: 50}}
            />
          )}

          <TouchableOpacity
            onPress={this.openImagePicker}
            style={styles.uploadButton}
          >
            <FontAwesomeIcon
              icon={faPaperclip}
              size={50}
              style={{ padding: 10, color: "white" }}
            />
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
};
const displayWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  view: {
    justifyContent: "stretch",
    margin: 0,
    width: displayWidth,
    opacity: 1,
  },
  closeButton: {
    position: "relative",
    zIndex: 11,
    backgroundColor: "#E91E63",
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    textAlignVertical: "top",
    height: 150,
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: "#E91E63",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  uploadButton: {
    position: "absolute",
    zIndex: 11,
    left: 10,
    bottom: 10,
    backgroundColor: "skyblue",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
});
