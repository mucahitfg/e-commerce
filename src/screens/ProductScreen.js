import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { productsSlice } from "../store/productSlice";
const ProductScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const products = useSelector((state) => state.products.products)

    return (
        <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
                <Pressable onPress={() => {
                    dispatch(productsSlice.actions.setSelectedProduct(item.id))
                    navigation.navigate('Product Details')
                }}
                    style={styles.container}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.imageStyle}
                    />
                </Pressable>
            )
            }
        />
    )
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 1
    },
    imageStyle: {
        width: '100%',
        aspectRatio: 1
    },
})
