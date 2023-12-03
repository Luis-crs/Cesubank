import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Banco from '../model/banco.js';
import Logo from '../components/Logo.js';

export default function ConsultarChequeEspecial({route}){
    const {cheque} = route.params;

    let banco = new Banco(null, null, null, null, null, null, null, cheque);
    let uso = banco.verificarUsoCheque();
    function cliquesLogo(){
        banco.cliquesLogo();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={cliquesLogo}>
                <Logo />
            </TouchableOpacity>
            <Text style={styles.texto}>{uso}</Text>
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
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
    },
});