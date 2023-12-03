import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Banco from '../model/banco.js';
import Logo from '../components/Logo.js';

export default function ConfigurarPoupanca({route}){
    const {porcentagemPoupanca,setPorcentagemPoupanca} = route.params;
    const [entrada, setEntrada] = useState("");
    let banco = new Banco(null, null, null, null, null, null, null, null, porcentagemPoupanca);
    const [feedback, setFeedback] = useState("");

    function configurar(params) {
        setFeedback(banco.configurarPorcentagem(entrada));
        setPorcentagemPoupanca(banco.porcentagem);
    }

    function cliquesLogo(){
        banco.cliquesLogo();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={cliquesLogo}>
                <Logo />
            </TouchableOpacity>
            <Text style={styles.titulo}>Configurar poupança</Text>
            <Text style={styles.texto}>Insira a porcentagem da poupança {"(0 - 100)%"}</Text>
            <TextInput onChangeText={setEntrada} style={styles.entrada} />
            <Text style={styles.texto}>{feedback}</Text>
            <Button onPress={configurar} title='Configurar poupança'/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    texto: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10
    },
    entrada: {
        padding: 4,
        borderWidth: 2,
        marginBottom: 10,
        marginTop: 10,
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
    },
});