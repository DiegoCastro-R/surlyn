import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import RatingStars from '../components/ratingStars';

const SellerItem = (props) => {
  const {
    item,
    customStyle = {}
  } = props;

  const containerStyle = { ...styles.container, ...customStyle };

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.content}>
        <RatingStars count={item.rating} disabled={true} customStyle={styles.stars} starSize={16} />
        <Text style={styles.price}>RS {item.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 86,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 8,
    paddingHorizontal: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.18,
    shadowRadius: 3.84,
    elevation: 3,
  },
  title: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 4,
  },
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stars: {
    marginRight: 3
  },
  price: {
    fontFamily: 'NunitoBold',
    fontSize: 14,
    marginLeft: 3,
    color: '#264224'
  }
});

export default SellerItem;
