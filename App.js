import Menu from "./screens/Menu.js";
import LancarCredito from "./screens/LancarCredito.js";
import LancarDebito from "./screens/LancarDebito.js";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App(){
  
  const Pilha = createStackNavigator();

  return(
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen component={Menu} name="Menu"/>
        <Pilha.Screen component={LancarCredito} name="LancarCredito"/>
        <Pilha.Screen component={LancarDebito} name="LancarDebito"/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}