import * as React from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import { Container, Content, Text, Button } from "native-base";
import Colors from "../constants/Colors";

function goToNextScreen(props) {
  props.navigation.navigate("Next");
}

export default function ContactScreen(props) {
  return (
    <Container style={styles.body}>
      <Content padder>
        <Button
          onPress={() => {
            goToNextScreen(props);
          }}
        >
          <Text>Go to next screen</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#cccccc",
  },
});
