const SequelizeMock = require('sequelize-mock')
const DBConnectionMock = new SequelizeMock()

const ProviderMock = DBConnectionMock.define('Provider', {
  drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
  providerId: '10001',
  providerName: 'SOUTHEAST ALABAMA MEDICAL CENTER',
  providerStreetAddress: '1108 ROSS CLARK CIRCLE',
  providerCity: 'DOTHAN',
  providerState: 'AL',
  providerZipCode: '36301',
  hospitalReferralRegionDescription: 'AL - Dothan',
  totalDischarges: 91,
  averageCoveredCharges: 32963.07,
  averageTotalPayments: 5777.24,
  averageMedicarePayments: 4763.73
})

module.exports = ProviderMock

const mocks = [
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10001',
    providerName: 'SOUTHEAST ALABAMA MEDICAL CENTER',
    providerStreetAddress: '1108 ROSS CLARK CIRCLE',
    providerCity: 'DOTHAN',
    providerState: 'AL',
    providerZipCode: '36301',
    hospitalReferralRegionDescription: 'AL - Dothan',
    totalDischarges: 91,
    averageCoveredCharges: 32963.07,
    averageTotalPayments: 5777.24,
    averageMedicarePayments: 4763.73
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10005',
    providerName: 'MARSHALL MEDICAL CENTER SOUTH',
    providerStreetAddress: '2505 U S HIGHWAY 431 NORTH',
    providerCity: 'BOAZ',
    providerState: 'AL',
    providerZipCode: '35957',
    hospitalReferralRegionDescription: 'AL - Birmingham',
    totalDischarges: 14,
    averageCoveredCharges: 15131.85,
    averageTotalPayments: 5787.57,
    averageMedicarePayments: 4976.71
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10006',
    providerName: 'ELIZA COFFEE MEMORIAL HOSPITAL',
    providerStreetAddress: '205 MARENGO STREET',
    providerCity: 'FLORENCE',
    providerState: 'AL',
    providerZipCode: '35631',
    hospitalReferralRegionDescription: 'AL - Birmingham',
    totalDischarges: 24,
    averageCoveredCharges: 37560.37,
    averageTotalPayments: 5434.95,
    averageMedicarePayments: 4453.79
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10011',
    providerName: "ST VINCENT'S EAST",
    providerStreetAddress: '50 MEDICAL PARK EAST DRIVE',
    providerCity: 'BIRMINGHAM',
    providerState: 'AL',
    providerZipCode: '35235',
    hospitalReferralRegionDescription: 'AL - Birmingham',
    totalDischarges: 25,
    averageCoveredCharges: 13998.28,
    averageTotalPayments: 5417.56,
    averageMedicarePayments: 4129.16
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10016',
    providerName: 'SHELBY BAPTIST MEDICAL CENTER',
    providerStreetAddress: '1000 FIRST STREET NORTH',
    providerCity: 'ALABASTER',
    providerState: 'AL',
    providerZipCode: '35007',
    hospitalReferralRegionDescription: 'AL - Birmingham',
    totalDischarges: 18,
    averageCoveredCharges: 31633.27,
    averageTotalPayments: 5658.33,
    averageMedicarePayments: 4851.44
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10023',
    providerName: 'BAPTIST MEDICAL CENTER SOUTH',
    providerStreetAddress: '2105 EAST SOUTH BOULEVARD',
    providerCity: 'MONTGOMERY',
    providerState: 'AL',
    providerZipCode: '36116',
    hospitalReferralRegionDescription: 'AL - Montgomery',
    totalDischarges: 67,
    averageCoveredCharges: 16920.79,
    averageTotalPayments: 6653.8,
    averageMedicarePayments: 5374.14
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10029',
    providerName: 'EAST ALABAMA MEDICAL CENTER AND SNF',
    providerStreetAddress: '2000 PEPPERELL PARKWAY',
    providerCity: 'OPELIKA',
    providerState: 'AL',
    providerZipCode: '36801',
    hospitalReferralRegionDescription: 'AL - Birmingham',
    totalDischarges: 51,
    averageCoveredCharges: 11977.13,
    averageTotalPayments: 5834.74,
    averageMedicarePayments: 4761.41
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10033',
    providerName: 'UNIVERSITY OF ALABAMA HOSPITAL',
    providerStreetAddress: '619 SOUTH 19TH STREET',
    providerCity: 'BIRMINGHAM',
    providerState: 'AL',
    providerZipCode: '35233',
    hospitalReferralRegionDescription: 'AL - Birmingham',
    totalDischarges: 32,
    averageCoveredCharges: 35841.09,
    averageTotalPayments: 8031.12,
    averageMedicarePayments: 5858.5
  },
  {
    drgDefinition: '039 - EXTRACRANIAL PROCEDURES W/O CC/MCC',
    providerId: '10039',
    providerName: 'HUNTSVILLE HOSPITAL',
    providerStreetAddress: '101 SIVLEY RD',
    providerCity: 'HUNTSVILLE',
    providerState: 'AL',
    providerZipCode: '35801',
    hospitalReferralRegionDescription: 'AL - Huntsville',
    totalDischarges: 135,
    averageCoveredCharges: 28523.39,
    averageTotalPayments: 6113.38,
    averageMedicarePayments: 5228.4
  }
]
