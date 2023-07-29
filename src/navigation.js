import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from "./screens/ProductScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { FontAwesome5 } from '@expo/vector-icons'
import { Pressable, Text } from "react-native";
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from "./store/cartSlice";
const Stack = createNativeStackNavigator();

const Navigation = () => {
    const NumberOfItems = useSelector(selectNumberOfItems)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }} >
                <Stack.Screen name="Product" component={ProductScreen} options={({ navigation }) => ({
                    headerRight: () =>
                        <Pressable onPress={() =>
                            navigation.navigate('Cart')}
                            style={{ flexDirection: 'row' }} >
                            <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                            <Text style={{ marginLeft: 5, fontWeight: '500' }} >{NumberOfItems}</Text>
                        </Pressable>
                })} />
                <Stack.Screen name="Product Details" component={ProductDetailsScreen} options={{ presentation: 'modal' }} />
                <Stack.Screen name="Cart" component={ShoppingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;