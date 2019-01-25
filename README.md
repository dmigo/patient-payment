# patient-payment

## Description

This project is an example of an application, running on Node.js, React/Redux, and PostgreSQL. [zeit](https://zeit.co) is used for deployment.
The demo can be found [here](https://patient-payment-jrj2u9mui.now.sh/).

## Deployment

The project is being deployed using [zeit](https://zeit.co). There is a continous deployment hook configured for the current repository, so that every new commit/PR is being automatically deployed.
It is also possible to deploy from a local machine, though it is not recommended. To see how to do so please refer the documentaion of [now-cli](https://github.com/zeit/now-cli).

## Frontend

## Backend

The backend is implemented using Node.js/Express and PostgreSQL.
Initially the choice was between using express and zeit.co lambda deployment.
The choice of express was motivated mostly by the fact that zeit.co lambdas are still tricky to test locally. The work on it is still ongoing. Some references might be found [here](https://spectrum.chat/zeit/micro/how-to-run-now-node-lambda-functions-on-localhost~31ecc494-fa78-4654-bb56-e68b1d5a26b3).

### Local development

#### To run a dev instance locally

1. Setup local database or connect to test database in the cloud
2. Provide DB [configuration](/backend/config/index.js)
3. Run `$ yarn dev` on comman inside of the `backend` directory

#### To run tests

Execute 
``` bash
$ cd backend
$ yarn test
```

If you use VS Code, you can also configure it to debug the tests.

``` json
// launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Mocha (Test single file)",
      "type": "node",
      "request": "launch",
      "runtimeArgs": [
        "${workspaceRoot}/backend/node_modules/.bin/mocha",
        "--inspect-brk",
        "${relativeFile}"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "port": 9229
    }
  ]
}
```

### API specification

There is a plan to describe the API using [OpenAPI](https://github.com/OAI/OpenAPI-Specification) and [Swagger](https://editor.swagger.io). This would be the first step for a real-life application.

For now there is following brief description.

#### Endpoints

 `/providers` - allowed methods `[ GET ]`
 For now there is one and only endpoint.  

**Warning!** The current implementation once deployed to zeit.co, can't return unlimited amount of data. The maximum is around 5 Mbs, so please always apply `limit` parameter. The details can be found [here](https://github.com/dmigo/patient-payment/issues/16).

#### Query parameters

| Parameter                       | Description                                |
|---------------------------------|--------------------------------------------|
| `limit`                         | Amount of items to return on the result set|
| `offset`                        | Amount of items to skip on the result set  |
| `max_discharges`                | The maximum number of Total Discharges     |
| `min_discharges`                | The minimum number of Total Discharges     |
| `max_average_covered_charges`   | The maximum Average Covered Charges        |
| `min_average_covered_charges`   | The minimum Average Covered Charges        |
| `max_average_medicare_payments` | The maximum Average Medicare Payment       |
| `min_average_medicare_payments` | The minimum Average Medicare Payment       |
| `state`                         | The exact state that the provider is from  |

#### Return example

``` json
[
  {
    "Provider Name": "SOUTHEAST ALABAMA MEDICAL CENTER",
    "Provider Street Address": "1108 ROSS CLARK CIRCLE",
    "Provider City": "DOTHAN",
    "Provider State": "AL",
    "Provider Zip Code": "36301",
    "Hospital Referral Region Description": "AL - Dothan",
    "Total Discharges": 91,
    "Average Covered Charges": "$32,963.07",
    "Average Total Payments": "$5,777.24",
    "Average Medicare Payments": "$4,763.73"
  },
  {
    "Provider Name": "MARSHALL MEDICAL CENTER SOUTH",
    "Provider Street Address": "2505 U S HIGHWAY 431 NORTH",
    "Provider City": "BOAZ",
    "Provider State": "AL",
    "Provider Zip Code": "35957",
    "Hospital Referral Region Description": "AL - Birmingham",
    "Total Discharges": 14,
    "Average Covered Charges": "$32,963.07",
    "Average Total Payments": "$5,777.24",
    "Average Medicare Payments": "$4,763.73"
  }
]
```

### Database

To communicate with the database [sequelize ORM](http://docs.sequelizejs.com/) was chosen.
*Hint:* [sequelize-cli](https://github.com/sequelize/cli) comes handy once you need to wrok with migrations.
Migrations first approach was taken to work with the PostgreSQL database's schema. Migrations can be found [here](/backend/db/migrations).

Command used to create the first migration:

``` bash
$ yarn run sequelize model:generate --name Provider --attributes "drgDefinition:string,providerId:string,providerName:string,providerStreetAddress:string,providerCity:string,providerState:string,providerZipCode:string,hospitalReferralRegionDescription:string,totalDischarges:integer,averageCoveredCharges:decimal,averageTotalPayments:decimal,averageMedicarePayments:decimal"
```


## Further developments

TBD
