import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Banco from '../model/banco.js';
import Logo from '../components/Logo.js';

export default function LancarDebito({route}){
    const {saldo, setSaldo, extrato, setExtrato, extratoDebitos, setExtratoDebitos, cheque, setCheque} = route.params;
    const [debito, setDebito] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [data, setData] = useState("");

    let banco = new Banco(saldo, null, data, extrato, debito, null, extratoDebitos, cheque);

    function cliquesLogo(){
        banco.cliquesLogo();
    }

    function LancarDebito(params) {
        let debitar = banco.LancarDebito();
        setFeedback(debitar);
        setSaldo(banco.saldo);
        setExtrato(banco.extrato);
        setExtratoDebitos(banco.extratoDebitos);
        setCheque(banco.cheque)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={cliquesLogo}>
                <Logo />
            </TouchableOpacity>
            <Text style={styles.titulo}>Lançar débito</Text>
            <Text style={styles.texto}>Insira o valor do débito</Text>
            <TextInput onChangeText = {setDebito} style={styles.entrada}/>
            <Text style={styles.texto}>Insira a data</Text>
            <TextInput onChangeText = {setData} style={styles.entrada}/>
            <Text style={styles.texto}>{feedback}</Text>
            <Button onPress={LancarDebito} title='Lançar'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    texto: {
        fontSize:20,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
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