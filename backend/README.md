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

### POST /api/users-permissions/request-upgrade

header: `Authorization: Bearer $userToken`

response: `{success: true}`

> this will have to be manually approved in the admin panel. (change the role from user to seller)

### GET /api/users/me

header: `Authorization: Bearer $userToken or $sellerToken`

response:
todo update the handler with all the new shit

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
    "title": "test product",
    "description": "die",
    "image": {
      "id": 1
    },
    "price": 102.32,
    "seller": {
      "id": 1
    }
  }
}
```

response

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "test product",
      "description": "die",
      "price": 102.32,
      "createdAt": "2023-05-26T14:28:15.294Z",
      "updatedAt": "2023-05-26T14:28:15.294Z",
      "publishedAt": "2023-05-26T14:28:15.286Z"
    }
  },
  "meta": {}
}
```

### GET /api/products

response

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "test product",
        "description": "die",
        "price": 102.32,
        "createdAt": "2023-05-26T14:28:15.294Z",
        "updatedAt": "2023-05-26T14:28:15.294Z",
        "publishedAt": "2023-05-26T14:28:15.286Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

### GET /api/products/:id

response

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "test product",
      "description": "die",
      "price": 102.32,
      "createdAt": "2023-05-26T14:28:15.294Z",
      "updatedAt": "2023-05-26T14:28:15.294Z",
      "publishedAt": "2023-05-26T14:28:15.286Z"
    }
  },
  "meta": {}
}
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
