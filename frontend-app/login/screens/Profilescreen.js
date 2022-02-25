import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";

const ProfileScreen = ({ route, navigation }) => {
  const [user, setUser] = useState({
    email: "email@email.com",
    image:
      "https://i.pinimg.com/474x/ec/a2/cf/eca2cf9ca61de74ff79c495dc240bb80.jpg",
    name: "john doe",
  });

  const googleToken = route.params;
  
  const fetchUserInfo = async (token) => {
    await axios.post("http://localhost:3000/users", token);
  };

  fetchUserInfo(googleToken);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: user.image,
        }}
      />
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
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
});
