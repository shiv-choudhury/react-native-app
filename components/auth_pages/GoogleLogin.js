import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Auth0 from "react-native-auth0";

const GoogleLogin = () => {
  const navigation = useNavigation();

  const auth0 = new Auth0({
    domain: "dev-pgi25t52e4kxj3sp.us.auth0.com",
    clientId: "j8VutB8SZsGdMCj3D3ooOUiLtCCV4mA3"
  });

  const handleGoogleAuth = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        connection: "google-oauth2",
        scope: "openid profile email"
      });
      console.log("Google Auth Success:", credentials);
      // Handle successful authentication, e.g., store user data in AsyncStorage
      // Navigate to the main app screen
      navigation.navigate("MainAppScreen");
    } catch (error) {
      console.error("Google Auth Error:", error);
      // Handle authentication error
    }
  };

  return <Button title="Sign in with Google" onPress={handleGoogleAuth} />;
};

export default GoogleLogin;
