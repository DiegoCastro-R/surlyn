import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';


import { Button } from 'react-native-paper';

const DeliveryProfile = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
            </View>
            <View style={styles.TitleContainer} >
                <Text style={styles.title}>Sou entregador(a)</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>Você ainda não se cadastrou como entregador(a)... Deseja se cadastrar ?</Text>
                <Image style={{ width: 330, height: 300 }} source={{ uri: "https://i.imgur.com/AL8LXui.png" }}></Image>
                <Button style={{ backgroundColor: "#5A9C54", width: 300 }} mode="contained" onPress={() => navigation.navigate("DeliveryRegisterStack")}>ME CADASTRAR</Button>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        justifyContent: "center",
        textAlign: "center",
        alignItems: "baseline",
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '87.20%'
    },
    TitleContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '87.20%'
    },
    title: {
        fontFamily: 'NunitoRegular',
        fontSize: 24,
        justifyContent: "flex-start",
        alignContent: "flex-start",
        color: '#264224',

    },
    myItensText: {
        fontFamily: 'NunitoBold',
        fontSize: 20,
        color: '#264224',

    },
    itensContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%'
    },
    topContent: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: 'stretch',
        width: '100%',
        marginTop: 20,
        padding: 1,
    },
});

export default DeliveryProfile;
