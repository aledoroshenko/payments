# Readme

**[WORK IN PROGRESS]**

CRUD app with NestJS and TypeORM to create contracts and payments related to them.

Currently implemented endpoints:

```
GET http://localhost:3000/contracts

[
  Contract {
    id: 1,
    description: 'Some description',
    payments: [ [Payment], [Payment] ]
  }
]
```

```
POST http://localhost:3000/contracts

{
  "id": 1
}
```

```
GET http://localhost:3000/contracts/1/payments

[
  Payment {
    id: 1,
    contractId: 1,
    description: 'Rent for June',
    value: 980,
    time: 2020-06-22T05:13:26.357Z,
    isImported: false,
    createdAt: 2020-06-22T05:13:26.357Z,
    updatedAt: 2020-06-22T05:13:26.357Z,
    isDeleted: false
  },
]
```

```
POST http://localhost:3000/contracts/1/payments
Content-Type: application/json

{
  "description": "Rent for August",
  "value": 980
}
```
