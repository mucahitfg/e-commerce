import React from "react";
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";

const ShoppingCartTotal = () => {
    return (
        <View style={styles.textContainer} >
            <View style={styles.itemsRow}>
                <Text style={styles.text} >Subtotal</Text>
                <Text style={styles.text}>410 US$</Text>
            </View>
            <View style={styles.itemsRow}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>10 US$</Text>
            </View>
            <View style={styles.itemsRow}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>420 US$</Text>
            </View>
        </View>
    )
}

const ShoppingCart = () => {
    return (
        <>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotal}
            />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Check out</Text>
            </Pressable>
        </>
    )
}
export default ShoppingCart;

const styles = StyleSheet.create({
    textContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    itemsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    textBold: {
        fontWeight: '500',
        fontSize: 16,
    },
    text: {
        color: 'grey',
        fontSize: 16,
    },
    button: {
        backgroundColor: 'black',
        width: '90%',
        padding: 18,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    },
})