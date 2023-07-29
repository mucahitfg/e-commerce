import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    DeliveryFee: 15,
    freeDeliveryFrom: 200,
}

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        AddCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartItem = state.items.find((item) => item.product.id === newProduct.id)

            if (cartItem) {
                cartItem.quantity += 1;
            }
            else {
                state.items.push({ product: newProduct, quantity: 1 })
            }

        },
        ChangeQuantity: (state, action) => {
            const { productId, amount } = action.payload;
            const cartItem = state.items.find((item) => item.product.id === productId)
            if (cartItem) {
                cartItem.quantity += amount;
            }
            if (cartItem.quantity <= 0) {
                state.items = state.items.filter((item) => item !== cartItem)
            }

        },
    }
})

export const selectNumberOfItems = (state) => state.carts.items.length;

export const selectSubTotal = (state) =>
    state.carts.items.reduce(
        (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
        0
    );

    const cartSelector = (state) => state.carts;
export const selectDeliveryPrice = createSelector(
    cartSelector,
    selectSubTotal,
    (cart, subTotal) => subTotal > cart.freeDeliveryFrom ? 0 : cart.DeliveryFee
)

export const selectTotalPrice = createSelector(
    selectSubTotal,
    selectDeliveryPrice,
    (sum, delivery) => sum + delivery
)