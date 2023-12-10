// LINZ has finally updated the address dataset to use official names.
// This means we don't need the FENZ/NZGB translation table anymore.
// This file lists a few exceptions that remain for historic reasons.
export const nzgbNamesTable: Record<string, string> = {
  // These 3 were erroneously added by us a few years ago. To
  // avoid disruption, we haven't corrected them yet.
  'Waihi Beach': 'Waihī Beach', // https://gazetteer.linz.govt.nz/place/45650
  Omihi: 'Ōmihi', // https://gazetteer.linz.govt.nz/place/57299
  Orewa: 'Ōrewa', // https://gazetteer.linz.govt.nz/place/34087

  // these ones have always been wrong in OSM, for now we want
  // to avoid changing them due to the unnecessary disruption.
  'Saint Heliers': 'St Heliers',
  'St Andrews': 'Saint Andrews',

  Opotiki: 'Ōpōtiki', // // only included here for unit tests. It's correct in the LINZ dataset
};

/**
 * Previous imports considered all addresses in these localities
 * to be urban, even the ones that are rural. To avoid disruption,
 * we will continue to use `addr:suburb` for all addresses in these
 * localities
 */
export const LEGACY_URBAN_LOCALITIES = new Set<string>([
  // 1000+ incorrect addresses:
  'Kerikeri',
  'Mangawhai',
  'Akaroa',
  'Waipu',
  'Ōhaupō',
  'Russell',
  'Raglan',
  'Waitākere',
  'Kumeū',
  'Rolleston',
  'Helensville',
  'Levin',

  // 600-1000 incorrect addresses:
  'Kaitaia',
  'Ōtorohanga',
  'Mangakino',
  'Southbridge',
  'Cable Bay',
  'Dannevirke',
  'Cambridge',
  'Manaia',
  'Waiotahe',
  'Fernside',
  'Te Puke',
  'Waverley',
  'Taupiri',
  'Maungaturoto',
  'Swanson',
  'Te Awamutu',
  'Kirwee',
  'Henderson Valley',
  'Leeston',
  'Oratia',
  'Palmerston',
  'Waimauku',
  'Tāneatua',
  'Mangōnui',
  'Morrinsville',
  'Eketāhuna',
  'Poroporo',
  'Matamata',
  'Fairlie',
  'Ōtāne',
  'Otautau',
  'Wellsford',
  'Springston',
  'Tīrau',
  'Ruawai',
  'Lincoln',
  'Waiuku',
  'Tapanui',
  'Lumsden',
  'Edendale',
  'Waipukurau',
  'Havelock',
  'Warkworth',
  'Ranfurly',
  'Brooklands',

  // 200-600 incorrect addresses:
  'Ōkato',
  'Coopers Beach',
  'Kaitangata',
  'Marton',
  'Athenree',
  'Waihi',
  'Kaikohe',
  'Maunu',
  'Taihape',
  'Wairakei',
  'Ruatoria',
  'Waiouru',
  'Otematata',
  'Pahiatua',
  'Waharoa',
  'Ashhurst',
  'Linton',
  'Sanson',
  'Tikitere',
  'Ngāruawāhia',
  'Lake Tarawera',
  'Algies Bay',
  'Tauwhare',
  'Tuatapere',
  'Seddon',
  'Waiatarua',
  'Drury',
  'Edgecumbe',
  'Mamaku',
  'Wyndham',
  'Roxburgh',
  'Pāremoremo',
  'Ōmiha',
  'Taipa',
  'Riverhead',
  'Waimate',
  'Takapau',
  'Waiheke Island',
  'Cheviot',
  'Pukekohe',
  'Outram',
  'Makauri',
  'Feilding',
  'Westmere',
  'Wallacetown',
  'Te Anau',
  'Winton',
  'Lawrence',
  'Ōtaki',
  'Longlands',
  'Kelvin Grove',
  'Amberley',
  'Omarama',
  'Westport',
  'Piopio',
  'Te Kūiti',
  'Kingston',
  'Ohai',
  'Pyes Pa',
  'Havelock North',
  'Murchison',
  'Wairoa',
  'Arrowtown',
  'Ruby Bay',
  'Owaka',
  'Turua',
  'Te Karaka',
  'Hāwera',
  'Tangimoana',
  'Foxton',
  'Huia',
  'Kainga',
  'Nightcaps',
  'Ruakākā',
  'Kurow',
  'Prebbleton',
  'Tuakau',
  'Spring Creek',
  'Ōpunake',
  'Te Awanga',
  'Waikino',
  'Martinborough',
  'Lucas Heights',
  'Ōhura',
  'Mangapai',
  'Pirongia',
  'Hampden',
  'Te Ore Ore',
  'Ōpaheke',
  'Wānaka',
  'Kaikoura Flat',
  'Huntly',
  'Lake Ōkareka',
  'Oxford',
  'Shannon',
  'Kaiata',
  'Grovetown',
  'Otaika',
  'Waitoa',
  'Brightwater',
  'Kawakawa',
  'Waipawa',
  'Waiau',
  'Putāruru',
  'Inglewood',
  'Okoia',
  'Ōkura',
  'Burnham',
  'Waikari',
  'Tākaka',
  'Normanby',
  'Te Aroha',
  'Ahipara',
  'Pareora',
  'Blackball',
  'Lorneville',
  'Spencerville',
  'Rotokauri',
  'Woodend',
  'Darfield',
  'Methven',
  'Hope',
  'Tinwald',
  'Carters Beach',
  'Waitārere',
  'Hikurangi',
  'Eltham',
  'Pātūtahi',
  'Clinton',
  'Redvale',
  'Temuka',
  'Paeroa',
  'Motueka',
  'Kaniere',
  'Taumarunui',
  'Doyleston',
  'The Pines Beach',
  'Appleby',
  'Haumoana',
  'Winchester',
  'Dobson',
  'Temple View',
  'Ohariu',
  'Marsden',
  'Ross',
  'Mosgiel',
  'Massey',
  'Woodville',
  'Bulls',
  'Tokoroa',
  'Thames',
  'Kihikihi',
  'Alexandra',
  'Renwick',
  'Weston',
  'Woodbourne',
  'Manunui',
  'Mākara',
]);
