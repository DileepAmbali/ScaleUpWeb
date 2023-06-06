import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cart = ref([
        {
            "id": "1",
            "name": "Vanilla Cake",
            "price": 10,
            "href": "#",
            "images": [
                {
                    "src": "https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9-SQ.jpg",
                    "alt": "Vanilla cake with white frosting and sprinkles."
                },
            ],
            quantity: 2,
        },
    ]);
    const addProduct = (product) => {
        cart.value.push(product);
    };
    const removeProduct = (product) => {
        const index = cart.value.indexOf(product);
        cart.value.splice(index, 1);
    };
    return {
        cart,
        addProduct,
        removeProduct,
    };
});

