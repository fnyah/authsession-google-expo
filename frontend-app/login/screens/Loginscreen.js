import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { StyleSheet, Pressable, Text } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    // Your google client ID goes here!
    responseType: "id_token",
    expoClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    iosClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const token = response.params.id_token;
      navigation.navigate("Profile", { token });
    }
  }, [response]);

  return (
    <Pressable style={styles.button} onPress={() => promptAsync()}>
      <Text style={styles.text}>Login</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: "40px",
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
});
