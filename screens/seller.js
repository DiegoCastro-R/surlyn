import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import SellerItem from '../components/sellerItem';
import { Button } from 'react-native-paper';
const Seller = ({ routes, navigation }) => {
  let itemIndex = 1;

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Button color="#5A9C54" icon="arrow-left" mode="text" onPress={() => navigation.goBack()}>Voltar</Button>
        <Button style={{ backgroundColor: "#5A9C54" }} mode="contained" onPress={() => navigation.navigate("NewItem")}>NOVO ITEM</Button>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Sou comerciante</Text>
        <Text style={styles.myItensText}>Meus itens</Text>
        <View style={styles.itensContainer}>
          <SellerItem
            customStyle={((itemIndex++ % 2) === 0) ? styles.rightItem : styles.leftItem}
            item={{ 'title': 'Pillow pouch', 'price': 7.00, 'rating': 4 }}
          />
          <SellerItem
            customStyle={((itemIndex++ % 2) === 0) ? styles.rightItem : styles.leftItem}
            item={{ 'title': 'Tampa de Bebida Alcoólica', 'price': 12.00, 'rating': 5 }}
          />
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
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: 'baseline',
    width: '100%',
    marginTop: 30,
    padding: 5,
  },
  content: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '87.20%'
  },
  leftItem: {
    marginRight: 10,
  },
  rightItem: {
    marginLeft: 10,
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 24,
    color: '#264224',
    marginBottom: 20
  },
  myItensText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: '#264224',
    marginBottom: 10
  },
  itensContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%'
  }
});

export default Seller;
