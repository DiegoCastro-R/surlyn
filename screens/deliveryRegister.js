import React, { useRef } from "react";
import { useState } from 'react'
import SimplePicker from 'react-native-simple-picker';
import { StyleSheet, View, Text } from 'react-native';
import Toast from 'react-native-toast-message';

import { Button, TextInput } from 'react-native-paper';


const DeliveryRegister = ({ route, navigation }) => {
    const deliveryOptions = ['Automovel/Motocicleta', 'Bicicleta', 'Entrega a pé'];
    const labelsDeliveryOptions = ['Automovel/Motocicleta', 'Bicicleta', 'Entrega a pé'];
    const distanceOptions = ['De 1 até 5', 'De 6 até 10', 'De 11 até 15', 'De 16 até 20', 'De 21 ou Mais']
    const disatenceOptions = ['De 1 até 5', 'De 6 até 10', 'De 11 até 15', 'De 16 até 20', 'De 21 ou Mais']
    const refPickerDeliveryOptions = useRef(null)
    const refPickerDistanceOptions = useRef(null)
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedDistanceOption, setSelectedDistanceOption] = useState('')


    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
            </View>
            <View style={styles.TitleContainer} >
                <Text style={styles.title}>Cadastro de entregador(a)</Text>
            </View>

            <View style={styles.content}>

                <View style={{ width: 300, height: 10 }}>
                    <Text style={{ marginBottom: 10 }}>Tipo de veículo:</Text>
                    <Button color="#5A9C54" mode="outlined" onPress={() => refPickerDeliveryOptions.current.show()}>{selectedOption}</Button>
                    <View style={{ marginBottom: 25 }}>
                        <SimplePicker
                            ref={refPickerDeliveryOptions}
                            options={deliveryOptions}
                            labels={labelsDeliveryOptions}
                            confirmText="Confirmar"
                            cancelText="Cancelar"
                            onSubmit={(option) => {
                                setSelectedOption(option)
                            }}

                        />
                    </View>
                    <TextInput mode="flat" placeholder="Seu Endereço" placeholderTextColor="#5A9C54" backgroundColor="light-grey" style={{ height: 40, marginTop: 10, marginBottom: 25 }}></TextInput>
                    <Text style={{ marginBottom: 10 }}>Raio de retirada e entrega (KM):</Text>
                    <Button color="#5A9C54" mode="outlined" onPress={() => refPickerDistanceOptions.current.show()}>{selectedDistanceOption}</Button>
                    <SimplePicker
                        ref={refPickerDistanceOptions}
                        options={distanceOptions}
                        labels={disatenceOptions}
                        confirmText="Confirmar"
                        cancelText="Cancelar"
                        onSubmit={(option) => {
                            setSelectedDistanceOption(option)
                        }}
                    />
                </View>
                <Toast ref={(ref) => Toast.setRef(ref)} />
                <View style={{ width: 300, height: 10 }}>
                </View>
                <Button style={{ backgroundColor: "#5A9C54", width: 300 }} mode="contained" onPress={() => { Toast.show({ type: 'success', text1: "Cadastro Realizado com Sucesso" }) }}>CADASTRAR</Button>
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
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: -110,
        padding: 14,
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
        marginBottom: 18
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

export default DeliveryRegister;
