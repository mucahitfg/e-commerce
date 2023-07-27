import React from "react";
import products from "../data/products";
import { FlatList, View, Image, StyleSheet, useWindowDimensions, Text, ScrollView, Pressable, Alert } from "react-native";
import {useSelector} from 'react-redux'


const ProductDetailsScreen = () => {

    const { width } = useWindowDimensions();
    const product = useSelector((state) => state.products.selectedProduct)
    
    function addToCart() {
        Alert.alert('Item added.')
    }

    return (
        <View>
            <ScrollView>
                <FlatList data={product.images} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
                )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                <View style={styles.containerText}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            <Pressable onPress={addToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
        </View>
    )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    containerText: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginVertical: 10,
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5
    },
    description: {
        fontWeight: '300',
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30
    },
    button:{
        backgroundColor:'black',
        width:'90%',
        padding:18,
        borderRadius:30,
        position:'absolute',
        bottom:30,
        alignSelf:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'white',
        textAlign:'center'
    },
})