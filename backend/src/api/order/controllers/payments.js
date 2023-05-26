"use strict";

module.exports = {
  async startPayment(ctx) {
    const { nanoid } = require("nanoid");
    const axios = require("axios");

    const { product } = ctx.request.body;

    const user = { id: ctx.state.user.id };

    const orderObj = {
      user,
      product,
      complete: false,
    };

    const productObj = await strapi.entityService.findOne(
      "api::product.product",
      product.id,
      { fields: ["price"] }
    );

    if (!productObj) {
      return ctx.unauthorized("invalid product id");
    }

    const orderAmount = productObj.price;

    const razorpayBody = {
      amount: orderAmount,
      currency: "INR",
      receipt: nanoid(),
    };

    const razorAuth = {
      username: process.env.RAZORPAY_USERNAME,
      password: process.env.RAZORPAY_PASSWORD,
    };

    try {
      const response = await axios.post(
        "https://api.razorpay.com/v1/orders",
        razorpayBody,
        { auth: razorAuth }
      );
      orderObj.orderId = response.data.id;
      orderObj.receipt = response.data.receipt;
      await strapi.entityService.create("api::order.order", {
        data: orderObj,
      });
      return { orderId: response.data.id };
    } catch (error) {
      return ctx.badRequest("Payment Failed");
    }
  },

  async onPaymentComplete(ctx) {
    const crypto = require("crypto");
    const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    shasum.update(JSON.stringify(ctx.request.body));
    const digest = shasum.digest("hex");

    if (digest !== ctx.request.headers["x-razorpay-signature"]) {
      return ctx.unauthorized("Lies");
    }

    await strapi.db.query("api::order.order").update({
      where: { orderId: ctx.request.body.payload.payment.entity["order_id"] },
      data: { complete: true },
    });

    return { status: "ok" };
  },
};
