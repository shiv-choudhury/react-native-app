import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartPage from "./startpage";
import RegisterPage from "./components/auth_pages/register";
import LoginPage from "./components/auth_pages/login";
import GoogleLogin from "./components/auth_pages/GoogleLogin";
import DoJob from "./components/job_doer/DoJob";
import GiveJob from "./components/job_giver/GiveJob";
import FindOnMap from "./components/job_giver/FindOnMap";
import DashboardPage from "./components/dashboard";
import JobSelectionPage from "./components/job_doer/JobSelection";
import JobDoerInfoPage from "./components/job_doer/JobDoerInfo";
import ChatScreen from "./components/ChatPage";
import JobFeedPage from "./components/job_doer/JobFeed";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen
          name="StartPage"
          component={StartPage}
          options={{ title: "Start Page" }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="GoogleLogin"
          component={GoogleLogin}
          options={{ title: "Google Login" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardPage}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="DoJob"
          component={DoJob}
          options={{ title: "Do a Job" }}
        />
        <Stack.Screen
          name="GiveJob"
          component={GiveJob}
          options={{ title: "Give a Job" }}
        />
        <Stack.Screen
          name="FindOnMap"
          component={FindOnMap}
          options={{ title: "Find on Map" }}
        />
        <Stack.Screen
          name="JobSelectionPage"
          component={JobSelectionPage}
          options={{ title: "Job Selection" }}
        />
        <Stack.Screen
          name="JobDoerInfoPage"
          component={JobDoerInfoPage}
          options={{ title: "Job Doer Info" }}
        />
        <Stack.Screen
          name="JobFeedPage"
          component={JobFeedPage}
          options={{ title: "Delect a job from the feed" }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ title: "Job Doer Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
