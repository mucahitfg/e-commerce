import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import products from "../data/products";

const ProductScreen = () => {
    return (
        <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
                <View style={styles.container} >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.imageStyle}
                    />
                </View>
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
