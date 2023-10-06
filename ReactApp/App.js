import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import View1 from "./src/view/View1.js";
import View2 from "./src/view/View2.js";
import View3 from "./src/view/View3.js";
import View4 from "./src/view/View4.js";
import View5 from "./src/view/View5.js";
import View6 from "./src/view/View6.js";
import View7 from "./src/view/View7.js";
import View8 from "./src/view/View8.js";

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "red",
  tabBarIconStyle: { display: "none" },
  tabBarLabelPosition: "beside-icon",
  tabBarLabelStyle: {
    fontWeight: "700",
    fontSize: 15,
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="1" component={View1} />
        <Tab.Screen name="2" component={View2} />
        <Tab.Screen name="3" component={View3} />
        <Tab.Screen name="4" component={View4} />
        <Tab.Screen name="5" component={View5} />
        <Tab.Screen name="6" component={View6} />
        <Tab.Screen name="7" component={View7} />
        <Tab.Screen name="8" component={View8} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}