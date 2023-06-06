import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useCartStore } from "./cart";
import { useOrdersStore } from "./orders";

export const useUserStore = defineStore("user", () => {
    const user = ref({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        phoneNumber: "08123456789",
        password: "password",
        address: "No 1, John Doe Street, Lagos",
        role: "customer",
        cart: useCartStore().cart,
        orders: useOrdersStore().orders,
        payment: [],
    });
    const changeName = (name) => {
        user.value.name = name;
    }
    const changePhoneNumber = (phoneNumber) => {
        user.value.phoneNumber = phoneNumber;
    }
    const changePassword = (password) => {
        user.value.password = password;
    }
    const changeAddress = (address) => {
        user.value.address = address;
    }
    const changeRole = (role) => {
        user.value.role = role;
    }

    return {
        user,
        changeName,
        changePhoneNumber,
        changePassword,
        changeAddress,
        changeRole,
    }
})