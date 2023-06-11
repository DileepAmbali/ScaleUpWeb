# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
```

# Endpoints

## User

### POST /api/auth/local/register

body

```json
{
  "username": "bobby",
  "email": "bobby@email.com",
  "password": "password"
}
```

response

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg1MDk1MzcwLCJleHAiOjE2ODc2ODczNzB9.qFkkII-8tMESvbA5fbRZpoaX0MNoypJDNMRJEOkf9xo",
  "user": {
    "id": 1,
    "username": "bobby",
    "email": "bobby@email.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2023-05-26T10:02:50.781Z",
    "updatedAt": "2023-05-26T10:02:50.781Z"
  }
}
```

### POST /api/auth/local

body

```json
{
  "identifier": "username or email",
  "password": "password"
}
```

### GET /api/users/me?populate=\*

header: `Authorization: Bearer $userToken or $sellerToken`

- enable users-permissions.role.find and zone.find for seller and product

response:

```
{
  "id": 2,
  "username": "tonybussing",
  "email": "tony@email.com",
  "provider": "local",
  "confirmed": true,
  "blocked": false,
  "createdAt": "2023-05-26T10:38:10.501Z",
  "updatedAt": "2023-06-11T06:53:00.809Z",
  "role": {
    "id": 3,
    "name": "Seller",
    "description": "the seller",
    "type": "seller",
    "createdAt": "2023-05-25T13:23:53.308Z",
    "updatedAt": "2023-06-11T06:52:40.309Z"
  },
  "zone": {
    "id": 2,
    "createdAt": "2023-06-11T05:15:29.797Z",
    "updatedAt": "2023-06-11T05:15:30.739Z",
    "publishedAt": "2023-06-11T05:15:30.725Z",
    "name": "kochi"
  }
}
```

### PUT /api/users/:id

- enable users-permissions.user.update for seller and user
- this can be used to set zone and to request account upgrade

header: `Authorization: Bearer $userToken` or seller token

body

```json
{
  "accUpgradeRequested": true, //if needed
  "zone": {
    "id": 1
  }
}
```

> to make user a seller, manual approval is needed in the admin panel. (change the role from user to seller)

## Products

### POST /api/upload/

to upload an image for product listing (body is form/multipart. not json)

header: `Authorization: Bearer $sellerToken`

body

```json
# form multipart
{ "files": [array of files] }
```

response

```json
[
  {
    "id": 1,
    "name": "unixp.png",
    "url": "/uploads/unixp_1353196eba.png"
    // and some more stuff. but this should be all you need
  }
]
```

### POST /api/products

header: `Authorization: Bearer $sellerToken`

body

```json
{
  "data": {
    "name": "test product",
    "description": "die",
    "images": [
      {
        "id": 1
      },
      {
        "id": 2
      }
    ],
    "price": 102.32,
    "seller": {
      "id": 1
    },
    "highlights": ["ababa", "kakak"]
  }
}
```

response

### GET /api/products?populate=\*,seller.zone

- **enable the users-permissions.user.find permission for public to make this work**
- enable zone.find for public

response

```json

```

#### to get all the products corresponding to a merchant

- GET /api/products?filters[seller][id][$eq]=\<sellerid>
- seller-id as a param

### GET /api/products/:id?populate=\*,seller.zone

- **enable the users-permissions.user.find permission for public to make this work**
- enable zone.find for public

response

```json

```

## Orders

### POST /api/orders/pay

to create an order for an item

body

```json
{
  "product": { "id": 1 }
}
```

response

```
{
  "orderId": something
}
```

> this stuff is from an old project of mine which used razorpay, but i cant create a razorpay account rn, i imagine stripe will have a similar flow, but with different fields. some fields need to be added to get it working.

### POST /api/orders/paymentComplete

called by the payment gateway after a payment is complete.

both the above endpoints can be handled in `src/api/order/controller/payments.js`

### GET /api/orders

the query for the request is

```json
//not json, but url encoded
{
  "complete": "true"
}
// or any other query to read from the db
```
