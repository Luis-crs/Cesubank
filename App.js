import Menu from "./screens/Menu.js";
import LancarCredito from "./screens/LancarCredito.js";
import LancarDebito from "./screens/LancarDebito.js";
import Extrato from "./screens/Extrato.js";
import ExtratoEspecial from "./screens/ExtratoEspecial.js";
import ChequeEspecial from "./screens/ChequeEspecial.js";
import ConsultarChequeEspecial from "./screens/ConsultarChequeEspecial.js";
import ConfigurarPoupanca from "./screens/ConfigurarPoupanca.js";
import VerSaldoPoupanca from "./screens/VerSaldoPoupanca.js";
import Marcopolo from "./screens/Marcopolo.js";

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
        <Pilha.Screen component={ChequeEspecial} name="ChequeEspecial"/>
        <Pilha.Screen component={ConsultarChequeEspecial} name="ConsultarChequeEspecial"/>
        <Pilha.Screen component={ConfigurarPoupanca} name="ConfigurarPoupanca"/>
        <Pilha.Screen component={VerSaldoPoupanca} name="VerSaldoPoupanca"/>
        <Pilha.Screen component={Marcopolo} name="Marcopolo"/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}