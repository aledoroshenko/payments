# Readme

**[WORK IN PROGRESS]**

CRUD app with NestJS and TypeORM to create contracts and payments related to them.



<img src="https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/3409/OSCISlyuWgiiG3MhxQzP2RELn79Lc0zd1t3m2Hlc.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5MF2VVMNBYBOTT5A%2F20200622%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20200622T061430Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=f9e1e1f7117b5ce50f0f6bc72ce82c72c18018d40e83cae054b87f0ea763bca5" width="500" />

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
