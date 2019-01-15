# patient-payment

## Development

### Prerequisites

``` bash
npm install --save sequelize-cli
```

### Database

Commands used to create db.  
*Note: `local` configuration should exist in `config/sequelize.json`.*

``` bash
cd backend
yarn run sequelize init
yarn run sequelize model:generate --name Provider --attributes "drgDefinition:string,providerId:string,providerName:string,providerStreetAddress:string,providerCity:string,providerState:string,providerZipCode:string,hospitalReferralRegionDescription:string,totalDischarges:integer,averageCoveredCharges:decimal,averageTotalPayments:decimal,averageMedicarePayments:decimal"
yarn run sequelize db:migrate --config config/sequelize.json --env local
```

## TODO

 [ ] Catch database not available
 [ ] Add linter

## Hints

### VS Code tests debugging

launch.json

``` json
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