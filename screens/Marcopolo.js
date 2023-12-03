import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo.js';
import Banco from '../model/banco.js';

export default function Marcopolo() {
  const [numSorteado, setNumSorteado] = useState(0);
  const [tentativa, setTentativa] = useState('');
  const [numTentativas, setNumTentativas] = useState(0);
  const [output, setOutput] = useState("Nenhum número sorteado ainda.");

  let banco = new Banco();

  function cliquesLogo(){
    banco.cliquesLogo();
  }

  function sortearNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    setNumSorteado(numeroAleatorio);
    setNumTentativas(0);
    setOutput(`Número sorteado! Boa sorte!`); 
  }

  function verificarTentativa() {
    let palpiteUsuario = parseInt(tentativa, 10);
    
    if (palpiteUsuario < 0 || palpiteUsuario > 9) {
      setOutput("Por favor, insira um número válido entre 0 e 9.");
    } else {
      if (palpiteUsuario === numSorteado) {
        setOutput("Parabéns! Você acertou!");
      } else {
        let tentativasRestantes = 2 - numTentativas;
  
        if (tentativasRestantes > 0) {
          if (palpiteUsuario < numSorteado) {
            setOutput(`O número sorteado é maior. Número de chances restantes: ${tentativasRestantes}.`)
          }else {
            setOutput(`O número sorteado é menor. Número de chances restantes: ${tentativasRestantes}`)
          }
          setNumTentativas(numTentativas + 1);
        } else {
          setOutput(`Você perdeu! O número sorteado foi ${numSorteado}.`);
        }
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={cliquesLogo}>
        <Logo />
      </TouchableOpacity>
      <Text style={styles.title}>Marco Polo</Text>
      <Text>Insira sua tentativa:</Text>
      <TextInput style={styles.input} onChangeText={setTentativa}/>
      <Button style={styles.botao} title="Sortear Número" onPress={sortearNumero}/>
      <Text> </Text>
      <Button style={styles.botao} title="Jogar" onPress={verificarTentativa}/>
      <Text>{output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    padding: 4,
    borderWidth: 2,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 3,
  },
});