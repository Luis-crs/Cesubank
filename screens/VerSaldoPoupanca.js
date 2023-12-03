import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo.js';

export default function VerSaldoPoupanca({route}){
    const {poupanca} = route.params;

    function cliquesLogo(){
        banco.cliquesLogo();
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={cliquesLogo}>
                <Logo />
            </TouchableOpacity>
            <Text style={styles.titulo}>Saldo da poupança</Text>
            <Text style={styles.texto}>R${poupanca}</Text>
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