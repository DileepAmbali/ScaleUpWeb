module.exports = {
  routes: [
    {
      method: "POST",
      path: "/orders/pay",
      handler: "payments.startPayment",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/orders/paymentComplete",
      handler: "payments.onPaymentComplete",
      config: {
        policies: [],
      },
    },
  ],
};
