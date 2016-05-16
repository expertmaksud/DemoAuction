# Demo Auction

It is a real time demo auction application develop using  [Sails](http://sailsjs.org), [Angular js 2](https://angular.io/), [TypeScript] (https://www.typescriptlang.org/) and [DynamoDB](https://aws.amazon.com/documentation/dynamodb/)

## Getting Started

* Clone this repository.
* Install node js and npm if you don't have.
* Install sails js `npm -g install sails`.
* If you don't have TypeScript installed, install it using `npm install -g typescript`.
* Install DynamoDb locally [Running DynamoDB on Your Computer](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)
* Navigate to source directory .
* Execute following commands
```
npm install
cd .\assets
npm install
npm run tsc
cd..
```
* Run local DynamoDB
`java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb`
  OR
`java -jar DynamoDBLocal.jar -sharedDb`
  THEN
```
lift sails
```
