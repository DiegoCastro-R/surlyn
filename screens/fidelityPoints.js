import * as React from "react";
import { Image, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Images from '../utils/images';

const FidelityPoints = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Pontos de fidelidade</Text>
        <Text style={styles.pointsNumber}>Voce tem 2 pontos acumulados</Text>
        <Text style={styles.message}>Faça mais 3 compras no aplicativo para ganhar seu primeiro cupom</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={Images.fidelity_screen_img} />
        </View>
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
  topContent: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 20,
    padding: 1,
    marginBottom: 0,
  },
  content: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '87.20%'
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    color: '#264224',
    marginBottom: 60
  },
  pointsNumber: {
    fontFamily: 'NunitoSemiBold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 10
  },
  message: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain'
  }
});

export default FidelityPoints;
