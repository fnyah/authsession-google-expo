import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import axios from "axios";

const ProfileScreen = ({ route }) => {
  const [user, setUser] = useState({
    email: "placeholder@email.com",
    image:
      "https://i.pinimg.com/474x/ec/a2/cf/eca2cf9ca61de74ff79c495dc240bb80.jpg",
    name: "Placeholder",
  });

  const googleToken = route.params;

  const fetchUserInfo = async (token) => {
    await axios.post("http://localhost:3000/", token).then(function (response) {
      setUser({
        email: response.data.email,
        image: response.data.picture,
        name: response.data.name,
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: user.image,
        }}
      />
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Pressable
        style={styles.button}
        onPress={() => fetchUserInfo(googleToken)}
      >
        <Text style={styles.text}>Get your profile data!</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  button: {
    margin: "20px",
    marginRight: "30%",
    marginLeft: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "purple",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    marginBottom: 4,
  },
});
