import React from "react";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";
const ProductScreen = () => {
    const navigation = useNavigation()

    function goToDetails() {
        navigation.navigate('Product Details')
    }

    return (
        <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
                <Pressable onPress={goToDetails} style={styles.container} >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.imageStyle}
                    />
                </Pressable>
            )}
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
