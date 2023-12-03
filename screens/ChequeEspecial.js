import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo.js';

export default function ChequeEspecial({route}){
    const {cheque} = route.params;

    function cliquesLogo(){
        banco.cliquesLogo();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={cliquesLogo}>
                <Logo />
            </TouchableOpacity>
            <Text style={styles.titulo}>Valor do cheque especial</Text>
            <Text style={styles.texto}>R${cheque}</Text>
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