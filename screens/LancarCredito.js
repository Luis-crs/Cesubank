import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import Banco from '../model/banco.js';
import Logo from '../components/Logo.js';

export default function LancarCredito({route}){
    const {saldo, setSaldo, extrato, setExtrato, extratoCreditos, setExtratoCreditos, cheque, setCheque, porcentagemPoupanca, poupanca, setPoupanca} = route.params;
    const [credito, setCredito] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [data, setData] = useState("");

    let banco = new Banco(saldo, credito, data, extrato, null, extratoCreditos, null, cheque, porcentagemPoupanca, poupanca);

    function LancarCredito(params) {
        let creditar = banco.LancarCredito();
        setFeedback(creditar);
        setSaldo(banco.saldo);
        setExtrato(banco.extrato);
        setExtratoCreditos(banco.extratoCreditos);
        setCheque(banco.cheque);
        setPoupanca(banco.poupanca)
    }
    function cliquesLogo(){
        banco.cliquesLogo();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={cliquesLogo}>
                <Logo />
            </TouchableOpacity>
            <Text style={styles.titulo}>Lançar crédito</Text>
            <Text style={styles.texto}>Insira o valor do crédito</Text>
            <TextInput onChangeText = {setCredito} style={styles.entrada}/>
            <Text style={styles.texto}>Insira a data</Text>
            <TextInput onChangeText = {setData} style={styles.entrada}/>
            <Text style={styles.texto}>{feedback}</Text>
            <Button onPress={LancarCredito} title='Lançar'/>
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
        fontSize: 20,
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