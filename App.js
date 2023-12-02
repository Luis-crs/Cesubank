import Menu from "./screens/Menu.js";
import LancarCredito from "./screens/LancarCredito.js";
import LancarDebito from "./screens/LancarDebito.js";
import Extrato from "./screens/Extrato.js";
import ExtratoEspecial from "./screens/ExtratoEspecial.js";

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
        <Pilha.Screen component={Extrato} name="Extrato"/>
        <Pilha.Screen component={ExtratoEspecial} name="ExtratoEspecial"/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}