import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

import { Card, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import RatingStars from './ratingStars';

const CategoryProducts = (props) => {
    const { Products } = props;
    const [starCount, setStarCount] = useState(4);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {Products.map((product) =>
                <TouchableOpacity key={product.id} onPress={() => {
                    navigation.navigate('ItemDetailsStack', {
                        ProductImage: product.ProductImage,
                        ProductTitle: product.ProductTitle,
                        ProductValue: product.ProductValue
                    })
                }}>
                    <Card key={product.id} style={styles.card} >
                        <Card.Content style={styles.CardContent}>
                            <Image style={{ width: 140, height: 100 }} source={{ uri: `${product.ProductImage}` }}></Image>
                            <Text style={styles.CardTitleText}>{product.ProductTitle}</Text>
                            <Text style={styles.CardTitleText}>R$ {product.ProductValue}</Text>
                            <RatingStars customStyle={styles.start} disabled={true} starSize={18} count={starCount} setter={setStarCount} />
                        </Card.Content>
                    </Card >
                </TouchableOpacity>
            )}
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: 400,
        flexWrap: "wrap"
    },
    card: {
        borderRadius: 25,
        elevation: 8,
        borderColor: "#3e3e3e",
        width: 170,
        height: 220,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    start: {
        marginTop: 10,
        width: 70,

    },
    CardTitleText: {
        fontFamily: 'NunitoRegular',
        flexWrap: "wrap",
        textAlign: "center",
        fontSize: 16.2,
        color: "#000000",
    },
    CardContent: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    }
});

export default CategoryProducts