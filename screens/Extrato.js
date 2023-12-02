import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Extrato({route}){
    const {extrato, setExtrato} = route.params;

    let aux = extrato

    if (aux == "") {
        aux = "Não há extrato disponível"
    }
    

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Extrato</Text>
            <Text style={styles.texto}>{aux}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 50,
    },
});