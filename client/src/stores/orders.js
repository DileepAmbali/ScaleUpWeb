import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrdersStore = defineStore("orders", () => {
    const orders = ref([
        {
            id: 1,
            name: "Product 1",
            price: 1000,
            quantity: 1,
        },
        {
            id: 2,
            name: "Product 2",
            price: 2000,
            quantity: 1,
        },
    ]); 
    const addOrder = (order) => {
        orders.value.push(order);
    };
    const removeOrder = (order) => {
        const index = orders.value.indexOf(order);
        orders.value.splice(index, 1);
    };
    return {
        orders,
        addOrder,
        removeOrder,
    };
});