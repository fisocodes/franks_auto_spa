const brands = [
    {
        name: "ABARTH",
        models: [ 
            '124 SPIDER',
            '500',
            'PUNTO',
            'PUNTO EVO'
        ]
    },
    {
        name: "ACURA",
        models: [
            'CL',
            'ILX',
            'INTEGRA',
            'LEGEND',
            'MDX',
            'NSX',
            'RDX',
            'RL',
            'RLX',
            'RSX',
            'SLX',
            'TL',
            'TLX',
            'TSX',
            'ZDX'
          ]
    },
    {
        name: "ALFA ROMEO",
        models: [
            '145',
            '146',   
            '147',
            '155',   
            '156',
            '159',   
            '164',
            '166',   
            '4C',
            'BRERA', 
            'CROSSWAGON',
            'GIULIA',
            'GIULIETTA',
            'GT',    
            'GTV',
            'MITO',  
            'SPIDER',
            'STELVIO'
          ]
    },
    {
        name: "ALPINA",
        models: [
            'B10',
            'B12', 
            'B3',
            'B3 S',
            'B4',
            'B5',  
            'B6',
            'B7',  
            'B8',
            'D10', 
            'D3',
            'D4',  
            'D5',
            'ROADSTER',
            'ROADSTER S',
            'ROADSTER V8',
            'XD3'
          ]
    },
    {
        name: "ASTON MARTIN",
        models: [
            'CYGNET',
            'DB11',
            'DB7',
            'DB9',
            'DBS',
            'GT12',
            'RAPIDE',
            'V12 VANTAGE',
            'V12 ZAGATO',
            'V8',
            'V8 VANTAGE',
            'VANQUISH',
            'VANTAGE',
            'VIRAGE',
            'VOLANTE'
          ]
    },
    {
        name: "AUDI",
        models: [
            '80',
            '90',
            'A1',
            'A2',
            'A3',
            'A4',
            'A4 ALLROAD QUATTRO',
            'A5',
            'A6',
            'A6 ALLROAD QUATTRO',
            'A7',
            'A8',
            'ALLROAD QUATTRO',
            'CABRIOLET', 'COUPE',
            'Q2',
            'Q3',
            'Q5',
            'Q7',
            'Q8',
            'R8',
            'RS Q3',
            'RS3',
            'RS4',
            'RS5',
            'RS6',
            'RS7',
            'S1',
            'S2',
            'S3',
            'S4',
            'S5',
            'S6',
            'S7',
            'S8',
            'SQ5',
            'SQ7',
            'TT',
            'TT RS',
            'TTS'
          ]
    },
    {
        name: "BENTLEY",
        models: [
            'ARNAGE',
            'AZURE',
            'BENTAYGA',
            'BROOKLANDS',
            'CONTINENTAL',
            'CONTINENTAL FLYING SPUR',
            'CONTINENTAL GT',
            'CONTINENTAL GTC',        
            'CONTINENTAL SUPERSPORTS',
            'FLYING SPUR',
            'MULSANNE',
            'TURBO'
          ]
    },
    {
        name: "BMW",
        models: [
            'I3',
            'I8',
            'M2',
            'M5',
            'SERIES 1',
            'SERIES 2',
            'SERIES 2 ACTIVE TOURER',
            'SERIES 2 GRAN TOURER',
            'SERIES 3',
            'SERIES 4',
            'SERIES 5',
            'SERIES 6',
            'SERIES 7',
            'SERIES 8',
            'Series 6 Gran Turismo',
            'X1',
            'X2',
            'X3',
            'X4',
            'X5',
            'X6',
            'Z3',
            'Z4',
            'Z8',
          ]
    },
    {
        name: "BUGATTI",
        models: [ 
            'CHIRON',
            'EB 110'
        ]
    },
    {
        name: "BUICK",
        models: [
            'CASCADA',
            'CENTURY',
            'ENCLAVE',
            'ENCORE',
            'ENVISION',
            'LACROSSE',
            'LESABRE',
            'LUCERNE',
            'PARK AVENUE',
            'RAINIER',
            'REGAL',
            'RENDEZVOUS',
            'RIVIERA',
            'ROADMASTER',
            'SKYLARK',
            'TERRAZA',
            'VERANO'
          ]
    },
    {
        name: "CADILLAC",
        models: [
            'ATS',
            'BLS',
            'CATERA',
            'CT6',
            'CTS',
            'DE VILLE',
            'DTS',
            'ELDORADO',
            'ELR',
            'ESCALADE',
            'ESCALADE ESV',
            'ESCALADE EXT',
            'FLEETWOOD',
            'SEVILLE',
            'SRX',
            'STS',
            'XLR',
            'XT5',
            'XTS'
          ]
    },
    {
        name: "CATERHAM",
        models: [ 
            '21',
            'SEVEN',
            'SUPER 7'
        ]
    },
    {
        name: "CHEVROLET",
        models: [
            'ALERO',
            'ASTRO',
            'ASTRO CARGO',
            'AVALANCHE',
            'AVEO',
            'BERETTA',
            'BLAZER',
            'BOLT EV',
            'C1500',
            'C2500',
            'C3500',
            'CAMARO',
            'CAPRICE',
            'CAPTIVA',
            'CAVALIER',
            'CHEVY VAN',
            'CITY EXPRESS',
            'CLASSIC',
            'COBALT',
            'COLORADO',
            'CORSICA',
            'CORVETTE',
            'CRUZE',
            'CRUZE LIMITED',
            'EPICA',
            'EQUINOX',
            'EVANDA',
            'EXPRESS',
            'EXPRESS CARGO',
            'HHR',
            'IMPALA',
            'IMPALA LIMITED',
            'K1500',
            'K2500',
            'K3500',
            'KALOS',
            'LACETTI',
            'LOW CAB FORWARD',
            'LUMINA',
            'LUMINA MINIVAN',
            'MALIBU',
            'MALIBU CLASSIC',
            'MALIBU LIMITED',
            'MALIBU MAXX',
            'MATIZ',
            'METRO',
            'MONTE CARLO',
            'NUBIRA',
            'ORLANDO',
            'PRIZM',
            'REZZO',
            'S-10',
            'SILVERADO',
            'SILVERADO 1500',
            'SILVERADO 2500HD',
            'SILVERADO 3500HD',
            'SILVERADO 3500HD CHASSIS CAB',
            'SILVERADO CLASSIC',
            'SONIC',
            'SPARK',
            'SPORTVAN',
            'SS',
            'SSR',
            'SUBURBAN',
            'TACUMA',
            'TAHOE',
            'TRACKER',
            'TRAILBLAZER',
            'TRANS SPORT',
            'TRAVERSE',
            'TRAX',
            'UPLANDER',
            'VENTURE',
            'VENTURE CARGO',
            'VOLT'
          ]
    },
    {
        name: "CHRYSLER",
        models: [
            '200',
            '300',
            '300M',
            'ASPEN',
            'CIRRUS',
            'CONCORDE',
            'CROSSFIRE',
            'DELTA',
            'GRAND VOYAGER',
            'LEBARON',
            'LHS',
            'NEON',
            'NEW YORKER',
            'PACIFICA',
            'PROWLER',
            'PT CRUISER',
            'SEBRING',
            'STRATUS',
            'TOWN & COUNTRY',
            'VIPER',
            'VISION',
            'VOYAGER',
            'YPSILON'
          ]
    },
    {
        name: "CITROEN",
        models: [
            'AX',
            'BERLINGO',
            'BERLINGO FIRST',
            'C-CROSSER',
            'C-ELYSEE',
            'C-ZERO',
            'C1',
            'C2',
            'C3',
            'C3 AIRCROSS',
            'C3 FIRST',
            'C3 PICASSO',
            'C3 PLURIEL',
            'C4',
            'C4 AIRCROSS',
            'C4 CACTUS',
            'C4 PICASSO',
            'C5',
            'C6',
            'C8',
            'DISPATCH',
            'DS3',
            'DS4',
            'DS5',
            'E-MEHARI',
            'EVASION',
            'GRAND C4 PICASSO',
            'NEMO',
            'RELAY',
            'SAXO',
            'SPACETOURER',
            'SYNERGIE',
            'XANTIA',
            'XM',
            'XSARA',
            'XSARA PICASSO',
            'ZX'
          ]
    },
    {
        name: "DACIA",
        models: [ 
            'DOKKER',
            'DUSTER',
            'LODGY',
            'LOGAN',
            'SANDERO'
        ]
    },
    {
        name: "DODGE",
        models: [
            'AVENGER',
            'CALIBER',
            'CARAVAN',
            'CHALLENGER',
            'CHARGER',
            'DAKOTA',
            'DART',
            'DURANGO',
            'GRAND CARAVAN',
            'INTREPID',
            'JOURNEY',
            'MAGNUM',
            'NEON',
            'NITRO',
            'RAM',
            'RAM 1500',
            'RAM 2500',
            'RAM 3500',
            'RAM 3500 CHASSIS CAB',
            'RAM 4500 CHASSIS CAB',
            'RAM PICKUP',
            'RAM VAN',
            'RAM WAGON',
            'SPIRIT',
            'SPRINTER',
            'SRT-10',
            'STEALTH',
            'STRATUS',
            'VIPER'
          ]
    },
    {
        name: "DS",
        models: [
            'DS 3',
            'DS 4',
            'DS 4 CROSSBACK',
            'DS 5',
            'DS 7 CROSSBACK'
        ]
    },
    {
        name: "FERRARI",
        models: [
            '348',
            '360',
            '456',
            '456M',
            '458',
            '488',
            '512 TR',
            '550 MARANELLO',
            '575M MARANELLO',
            '599',
            '612',
            'CALIFORNIA',
            'ENZO',
            'F12',
            'F355',
            'F430',
            'F50',
            'F512 M',
            'FF',
            'GTC4',
            'LAFERRARI',
            'SUPERAMERICA'
        ]
    },
    {
        name: "FIAT",
        models: [
            '124 SPIDER',
            '500',
            '500L',
            '500L LIVING',
            '500L MPW',
            '500X',
            'BARCHETTA',
            'BRAVA',
            'BRAVO',
            'CINQUECENTO',
            'COUPE',
            'CROMA',
            'DOBLO',
            'FREEMONT',
            'FULLBACK',
            'IDEA',
            'LINEA',
            'MAREA',
            'MULTIPLA',
            'PALIO',
            'PANDA',
            'PANDA CLASSIC',
            'PUNTO',
            'PUNTO EVO',
            'QUBO',
            'SEDICI',
            'SEICENTO',
            'STILO',
            'TEMPRA',
            'TIPO',
            'ULYSSE',
            'UNO'
        ]
    },
    {
        name: "FISKER",
        models: [ 'KARMA' ]
    },
    {
        name: "FORD",
        models: [
            'AEROSTAR',
            'ASPIRE',
            'B-MAX',
            'BRONCO',
            'C-MAX',
            'CLUB WAGON',
            'CONTOUR',
            'COUGAR',
            'COURIER',
            'CROWN VICTORIA',
            'E-SERIES',
            'ECONOLINE VAN',
            'ECONOLINE WAGON',
            'ECOSPORT',
            'EDGE',
            'ESCAPE',
            'ESCORT',
            'EXCURSION',
            'EXPEDITION',
            'EXPLORER',
            'EXPLORER SPORT',
            'EXPLORER SPORT TRAC',
            'F-150',
            'F-150 HERITAGE',
            'F-150 RAPTOR',
            'F-250',
            'F-250 SUPER DUTY',
            'F-350',
            'F-350 SD CHASSIS CAB',
            'F-350 SUPER DUTY',
            'F-350 SUPER DUTY CHASSIS CAB',
            'F-450 SUPER DUTY',
            'F-450 SUPER DUTY CHASSIS CAB',
            'FIESTA',
            'FIESTA ACTIVE',
            'FIVE HUNDRED',
            'FLEX',
            'FOCUS',
            'FOCUS C-MAX',
            'FREESTAR',
            'FREESTAR VAN',
            'FREESTYLE',
            'FUSION',
            'GALAXY',
            'GRAND C-MAX',
            'GRAND TOURNEO CONNECT',
            'GT',
            'KA',
            'KA+',
            'KA+ ACTIVE',
            'KUGA',
            'MAVERICK',
            'MONDEO',
            'MUSTANG',
            'PROBE',
            'PUMA',
            'RANGER',
            'S-MAX',
            'SCORPIO',
            'STREETKA',
            'TAURUS',
            'TAURUS X',
            'THUNDERBIRD',
            'TOURNEO CONNECT',
            'TOURNEO COURIER',
            'TRANSIT',
            'TRANSIT CONNECT',
            'WINDSTAR',
            'WINDSTAR VAN'
        ]
    },
    {
        name: 'GEO',
        models: [
            'METRO',
            'PRIZM',
            'TRACKER'
        ]
    },
    {
        name: "GMC",
        models: [
            'ACADIA',
            'ACADIA LIMITED',
            'CANYON',
            'ENVOY',
            'JIMMY',
            'RALLY',
            'SAFARI',
            'SAFARI CARGO',
            'SAVANA',
            'SAVANA CARGO',
            'SIERRA',
            'SIERRA 1500',
            'SIERRA 2500HD',
            'SIERRA 3500HD',
            'SIERRA 3500HD CHASSIS CAB',
            'SIERRA CLASSIC',
            'SONOMA',
            'SUBURBAN',
            'TERRAIN',
            'YUKON',
            'YUKON XL'
        ]
    },
    {
        name: "HONDA",
        models: [
            'ACCORD',
            'ACCORD CROSSTOUR',
            'CIVIC',
            'CLARITY',
            'CR-V',
            'CR-Z',
            'CROSSTOUR',
            'CRX',
            'DEL SOL',
            'ELEMENT',
            'EV PLUS',
            'FIT',
            'FR-V',
            'HR-V',
            'INSIGHT',
            'INTEGRA',
            'JAZZ',
            'LEGEND',
            'LOGO',
            'NSX',
            'ODYSSEY',
            'PASSPORT',
            'PILOT',
            'PRELUDE',
            'RIDGELINE',
            'S2000',
            'SHUTTLE',
            'STREAM'
          ]
    },
    {
        name: 'HUMMER',
        models: [
            'H1',
            'H2',
            'H3',
            'H3T'
        ]
    },
    {
        name: "HYUNDAI",
        models: [
            'ACCENT',
            'AMICA',
            'ATOS',
            'ATOS PRIME',
            'ATOZ',
            'AZERA',
            'COUPE',
            'ELANTRA',
            'ENTOURAGE',
            'EQUUS',
            'GENESIS',
            'GETZ',
            'GRAND SANTA FE',
            'GRANDEUR',
            'I10',
            'I20',
            'I30',
            'I30 FASTBACK',
            'I30 N',
            'I40',
            'I800',
            'IONIQ',
            'IX20',
            'IX35',
            'IX55',
            'KONA',
            'LANTRA',
            'MATRIX',
            'SANTA FE',
            'SANTA FE SPORT',
            'SCOUPE',
            'SONATA',
            'STAREX',
            'TERRACAN',
            'TIBURON',
            'TRAJET',
            'TUCSON',
            'VELOSTER',
            'VERACRUZ',
            'XG',
            'XG300',
            'XG350'
        ]
    },
    {
        name: "INFINITI",
        models: [
            'EX',
            'FX',
            'G',
            'G20',
            'G35',
            'I30',
            'I35',
            'J30',
            'JX',
            'M',
            'M45',
            'Q',
            'Q30',
            'Q40',
            'Q45',
            'Q50',
            'Q60',
            'Q70',
            'QX',
            'QX30',
            'QX4',
            'QX50',
            'QX56',
            'QX60',
            'QX70',
            'QX80'
        ]
    },
    {
        name: "ISUZU",
        model: [
            'AMIGO',
            'ASCENDER',
            'AXIOM',
            'HOMBRE',
            'I-SERIES',
            'OASIS',
            'PICKUP',
            'RODEO',
            'RODEO SPORT',
            'TF',
            'TROOPER',
            'VEHICROSS'
        ]
    },
    {
        name: "JAGUAR",
        models: [
            'E-PACE',
            'F-PACE',
            'F-TYPE',
            'I-PACE',
            'S-TYPE',
            'X-TYPE',
            'XE',
            'XF',
            'XF SPORTBRAKE',
            'XJ',
            'XJ SERIES',
            'XK SERIES'
        ]
    },
    {
        name: "JEEP",
        models: [
            'CHEROKEE',
            'COMMANDER',
            'COMPASS',
            'GRAND CHEROKEE',
            'LIBERTY',
            'PATRIOT',
            'RENEGADE',
            'WRANGLER'
        ]
    },
    {
        name: "KIA",
        models: [
            'AMANTI',
            'BORREGO',
            'CADENZA',
            'CARENS',
            'CARNIVAL',
            'CEED',
            'CERATO',
            'CLARUS',
            'FORTE',
            'JOICE',
            'K900',
            'MAGENTIS',
            'MENTOR',
            'MENTOR II',
            'NIRO',
            'OPIRUS',
            'OPTIMA',
            'PICANTO',
            'PRIDE',
            'RETONA',
            'RIO',
            'ROADSTER',
            'RONDO',
            'SEDONA',
            'SEPHIA',
            'SHUMA',
            'SORENTO',
            'SOUL',
            'SPECTRA',
            'SPORTAGE',
            'STINGER',
            'STONIC',
            'VENGA'
          ]
    },
    {
        name: "LADA",
        models: [
            '110',
            '111',   
            '112',
            '4X4',   
            'FORMA',
            'GRANTA',
            'KALINA',
            'NIVA',  
            'NOVA',
            'PRIORA',
            'RIVA',
            'SAMARA',
            'TAIGA',
            'VESTA'
          ]
    },
    {
        name: "LAMBORGHINI",
        models: [
            'AVENTADOR',
            'DIABLO',
            'GALLARDO',
            'HURACAN',
            'MURCIELAGO',
            'URUS'
        ]
    },
    {
        name: "LANCIA",
        models: [
            'DEDRA',
            'DELTA',
            'FLAVIA',
            'K',
            'LYBRA',
            'MUSA',
            'PHEDRA',
            'THEMA',
            'THESIS',
            'VOYAGER',
            'Y',
            'Y10',
            'YPSILON',
            'Z'
          ]
    },
    {
        name: "LAND ROVER",
        models: [
            'DEFENDER',
            'DISCOVERY',
            'DISCOVERY SPORT',
            'FREELANDER',
            'LR2',
            'LR3',
            'LR4',
            'RANGE ROVER',
            'RANGE ROVER EVOQUE',
            'RANGE ROVER SPORT',
            'RANGE ROVER SV',
            'RANGE ROVER VELAR'
        ]
    },
    {
        name: "LEXUS",
        models: [
            'CT',
            'ES',
            'ES300',
            'ES330',
            'GS',
            'GS300',
            'GS400',
            'GS430',
            'GX',
            'GX470',
            'HS',
            'IS',
            'IS200',
            'IS250',
            'IS300',
            'IS350',
            'LC',
            'LFA',
            'LS',
            'LS400',
            'LS430',
            'LX',
            'LX450',
            'LX470',
            'NX',
            'RC',
            'RX',
            'RX300',
            'RX330',
            'RX350',
            'RX400H',
            'SC300',
            'SC400',
            'SC430'
        ]
    },
    {
        name: "LINCOLN",
        models: [
            'AVIATOR',
            'BLACKWOOD',
            'CONTINENTAL',
            'LS',
            'MARK LT',
            'MARK VIII',
            'MKC',
            'MKS',
            'MKT',
            'MKX',
            'MKZ',
            'NAVIGATOR',
            'TOWN CAR',
            'ZEPHYR'
        ]
    },
    {
        name: 'LOTUS',
        models: [
            '2-ELEVEN',
            '3-ELEVEN',
            '340R',
            'ELAN',    
            'ELISE',
            'ESPRIT',  
            'EUROPA',
            'EVORA',  
            'EXIGE'
        ]
    },
    {
        name: 'MASERATI',
        models: [
            '3200 GT',
            'COUPE',
            'GHIBLI',
            'GRANCABRIO',
            'GRANTURISMO',
            'LEVANTE',
            'QUATTROPORTE',
            'SHAMAL',
            'SPYDER'
        ]
    },
    {
        name: 'MAZDA',
        models: [
            '121',
            '323',
            '626',
            '929',
            'B-SERIES',
            'BT-50',
            'CX-3',
            'CX-5',
            'CX-7',
            'CX-9',
            'DEMIO',
            'MAZDA2',
            'MAZDA3',
            'MAZDA5',
            'MAZDA6',
            'MILLENIA',
            'MPV',
            'MX-3',
            'MX-5',
            'MX-5 MIATA',
            'MX-6',
            'PREMACY',
            'PROTEGE',
            'PROTEGE5',
            'RX-7',
            'RX-8',
            'TRIBUTE',
            'TRUCK',
            'XEDOS 6',
            'XEDOS 9'
        ]
    },
    {
        name: 'MCLAREN',
        models: [
            '12C',
            '540C',
            '570GT',
            '570S',
            '600LT',
            '650S',
            '675LT',
            '720S',
            'F1',
            'MP4-12C',
            'P1'
        ]
    },
    {
        name: 'MERCEDES',
        models: [
            'A-CLASS',
            'AMG GT',
            'B-CLASS',
            'C-CLASS',
            'CITAN',
            'CL-CLASS',
            'CLA-CLASS',
            'CLC-CLASS',
            'CLK-CLASS',
            'CLS-CLASS',
            'E-CLASS',
            'G-CLASS',
            'GL-CLASS',
            'GLA-CLASS',
            'GLC COUPE',
            'GLC-CLASS',
            'GLE-CLASS',
            'GLE-CLASS COUPE',
            'GLK-CLASS',
            'GLS-CLASS',
            'M-CLASS',
            'METRIS',
            'R-CLASS',
            'S-CLASS',
            'SL-CLASS',
            'SLC-CLASS',
            'SLK-CLASS',
            'SLR MCLAREN',
            'SLS AMG',
            'SPRINTER',
            'V-CLASS',
            'VANEO',
            'VIANO',
            'X-CLASS'
        ]
    },
    {
        name: 'MERCURY',
        models: [
            'COUGAR',
            'GRAND MARQUIS',
            'MARAUDER',
            'MARINER',
            'MILAN',
            'MONTEGO',
            'MONTEREY',
            'MOUNTAINEER',
            'MYSTIQUE',
            'SABLE',
            'TRACER',
            'VILLAGER'
        ]
    },
    {
        name: 'MINI',
        models: [
            'CLUBMAN',
            'COUNTRYMAN',
            'MINI',
            'PACEMAN'
        ]
    },
    {
        name: 'MITSUBISHI',
        models: [
            '3000 GT',
            'ASX',
            'CARISMA',
            'CHALLENGER',
            'COLT',
            'COLT SPACE STAR',
            'DIAMANTE',
            'ECLIPSE',
            'ECLIPSE CROSS',
            'ECLIPSE SPYDER',
            'ENDEAVOR',
            'GALANT',
            'GRANDIS',
            'I',
            'L200',
            'L300',
            'LANCER',
            'MIGHTY MAX',
            'MIRAGE',
            'MONTERO',
            'MONTERO SPORT',
            'OUTLANDER',
            'OUTLANDER SPORT',
            'PAJERO',
            'PAJERO CLASSIC',
            'PAJERO PININ',
            'PAJERO SPORT',
            'RAIDER',
            'SHOGUN',
            'SHOGUN PININ',
            'SHOGUN SPORT',
            'SIGMA',
            'SPACE GEAR',
            'SPACE RUNNER',
            'SPACE STAR',
            'SPACE WAGON'
        ]
    },
    {
        name: 'NISSAN',
        models: [
            '200 SX',
            '240 SX',
            '300 ZX',
            '350Z',
            '370Z',
            'ALMERA',
            'ALMERA TINO',
            'ALTIMA',
            'ARMADA',
            'CUBE',
            'EVALIA',
            'FRONTIER',
            'GT-R',
            'JUKE',
            'KICKS',
            'LEAF',
            'MAXIMA',
            'MAXIMA QX',
            'MICRA',
            'MURANO',
            'NAVARA',
            'NOTE',
            'NP300',
            'NP300 NAVARA',
            'NV',
            'NV200',
            'PATHFINDER',
            'PATHFINDER ARMADA',
            'PATROL',
            'PATROL GR',
            'PICKUP',
            'PIXO',
            'PRIMERA',
            'PULSAR',
            'QASHQAI',
            'QASHQAI+2',
            'QUEST',
            'QX',
            'ROGUE',
            'ROGUE SELECT',
            'ROGUE SPORT',
            'SENTRA',
            'SERENA',
            'SKYLINE',
            'SUNNY',
            'TERRANO',
            'TERRANO II',
            'TIIDA',
            'TITAN',
            'TITAN XD',
            'TRUCK',
            'VERSA',
            'VERSA NOTE',
            'X-TRAIL',
            'XTERRA'
        ]
    },
    {
        name: 'OPEL',
        models: [
            'ADAM',
            'AGILA',
            'AMPERA',
            'AMPERA-E',
            'ANTARA',
            'ASTRA',
            'CALIBRA',
            'CASCADA',
            'COMBO',
            'COMBO TOUR',
            'CORSA',
            'CROSSLAND X',
            'FRONTERA',
            'GRANDLAND X',
            'GT',
            'INSIGNIA',
            'KARL',
            'MERIVA',
            'MOKKA',
            'MOKKA X',
            'MONTEREY',
            'OMEGA',
            'SIGNUM',
            'SINTRA',
            'SPEEDSTER',
            'TIGRA',
            'VECTRA',
            'ZAFIRA',
            'ZAFIRA TOURER'
        ]
    },
    {
        name: 'PEUGEOT',
        models: [
            '1007',
            '106',
            '107',
            '108',
            '2008',
            '205',
            '206',
            '206 +',
            '206 SW',
            '207',
            '208',
            '3008',
            '306',
            '307',
            '307 SW',
            '308',
            '4007',
            '4008',
            '405',
            '406',
            '407',
            '407 SW',
            '5008',
            '508',
            '605',
            '607',
            '806',
            '807',
            'BIPPER',
            'EXPERT',
            'ION',
            'PARTNER',
            'PARTNER ORIGIN',
            'RCZ',
            'TRAVELLER'
        ]
    },
    {
        name: 'PONTIAC',
        models: [
            'AZTEK',
            'BONNEVILLE',
            'FIREBIRD',
            'G3',
            'G5',
            'G6',
            'G8',
            'GRAND AM',
            'GRAND PRIX',
            'GTO',
            'MONTANA',
            'MONTANA SV6',
            'SOLSTICE',
            'SUNFIRE',
            'TORRENT',
            'TRANS SPORT',
            'VIBE'
        ]
    },
    {
        name: 'PORSCHE',
        models: [
            '718',
            '911',
            '918',
            '928',
            '968',
            'BOXSTER',
            'CARRERA GT',
            'CAYENNE',
            'CAYMAN',
            'MACAN',
            'PANAMERA',
            'PANAMERA SPORT TURISMO'
        ]
    },
    {
        name: 'RAM',
        models: [
            'DAKOTA',
            'PROMASTER',
            'PROMASTER CITY',
            'RAM 1500',
            'RAM 2500',
            'RAM 3500',
            'RAM 3500 CHASSIS CAB',
            'RAM 4500 CHASSIS CAB',
            'RAM CARGO VAN'
        ]
    },
    {
        name: 'RENAULT',
        models: [
            '19',
            '5',
            'AVANTIME',
            'CAPTUR',
            'CLIO',
            'ESPACE',
            'FLUENCE',
            'GRAND ESPACE',
            'GRAND KANGOO',
            'GRAND MODUS',
            'GRAND SCENIC',
            'KADJAR',
            'KANGOO',
            'KOLEOS',
            'LAGUNA',
            'LATITUDE',
            'MEGANE',
            'MEGANE RS',
            'MODUS',
            'NEVADA',
            'RAPID',
            'SAFRANE',
            'SAVANNA',
            'SCENIC',
            'SPIDER',
            'TALISMAN',
            'TWINGO',
            'VEL SATIS',
            'WIND',
            'ZOE'
        ]
    },
    {
        name: 'ROLLS-ROYCE',
        models: [
            'CORNICHE',
            'CULLINAN',
            'DAWN',
            'FLYING SPUR',
            'GHOST',
            'PARK WARD',
            'PHANTOM',
            'SILVER DAWN',
            'SILVER SERAPH',
            'SILVER SPIRIT',
            'SILVER SPUR',
            'TOURING',
            'WRAITH'
        ]
    },
    {
        name: 'SATURN',
        models: [
            'ASTRA',
            'AURA',
            'EV1',
            'ION',
            'L-SERIES',
            'L300',
            'OUTLOOK',
            'RELAY',
            'S-SERIES',
            'SKY',
            'VUE'
        ]
    },
    {
        name: 'SCION',
        models: [
            'FR-S',
            'IA',
            'IM',
            'IQ',
            'TC',
            'XA',
            'XB',
            'XD'
        ]
    },
    {
        name: 'SEAT',
        models: [
            'ALHAMBRA',
            'ALTEA',
            'ALTEA FREETRACK',
            'ALTEA XL',
            'ARONA',
            'AROSA',
            'ATECA',
            'CORDOBA',
            'EXEO',
            'IBIZA',
            'INCA','LEON',
            'MARBELLA',
            'MII',
            'TOLEDO'
        ]
    },
    {
        name: 'SKODA',
        models: [
            'CITIGO',
            'FABIA',
            'FAVORIT',
            'FELICIA',
            'FORMAN',
            'KAROQ',
            'KODIAQ',
            'OCTAVIA',
            'RAPID',
            'ROOMSTER',
            'SUPERB',
            'YETI'
        ]
    },
    {
        name: 'SMART',
        models: [
            'CABRIO',
            'CITY-COUPE',
            'CROSSBLADE',
            'FORFOUR',
            'FORTWO',
            'ROADSTER'
        ]
    },
    {
        name: 'SSANGYONG',
        models: [
            'ACTYON',
            'KORANDO',
            'KYRON',
            'MUSSO',
            'MUSSO SPORTS',
            'REXTON',
            'REXTON W',
            'RODIUS',
            'TIVOLI',
            'TURISMO',
            'XLV'
        ]
    },
    {
        name: 'SUBARU',
        models: [
            'ASCENT',
            'B9 TRIBECA',
            'BAJA',
            'BRZ',
            'CROSSTREK',
            'FORESTER',
            'G3X JUSTY',
            'IMPREZA',
            'JUSTY',
            'LEGACY',
            'LEVORG',
            'LIBERO',
            'OUTBACK',
            'SVX',
            'TREZIA',
            'TRIBECA',
            'VIVIO',
            'WRX',
            'WRX STI',
            'XV'
        ]
    },
    {
        name: 'SUZUKI',
        models: [
            'AERIO',
            'ALTO',
            'BALENO',
            'CAPPUCCINO',
            'CELERIO',
            'EQUATOR',
            'ESTEEM',
            'FORENZA',
            'GRAND VITARA',
            'GRAND VITARA XL-7',
            'IGNIS',
            'JIMNY',
            'KIZASHI',
            'LIANA',
            'RENO',
            'SAMURAI',
            'SIDEKICK',
            'SPLASH',
            'SWIFT',
            'SX4',
            'SX4 S-CROSS',
            'VERONA',
            'VITARA',
            'WAGON R+',
            'X-90',
            'XL7'
        ]
    },
    {
        name: 'TESLA',
        models: [
            'MODEL S',
            'MODEL X',
            'ROADSTER'
        ]
    },
    {
        name: 'TOYOTA',
        models: [
            '4RUNNER',
            '86',
            'AURIS',
            'AVALON',
            'AVENSIS',
            'AVENSIS VERSO',
            'AYGO',
            'C-HR',
            'CAMRY',
            'CARINA E',
            'CELICA',
            'COROLLA',
            'COROLLA IM',
            'COROLLA VERSO',
            'ECHO',
            'FJ CRUISER',
            'GT86',
            'HIGHLANDER',
            'HILUX',
            'IQ',
            'LANDCRUISER',
            'LANDCRUISER 100',
            'LANDCRUISER 90',
            'LANDCRUISER AMAZON',
            'LANDCRUISER COLORADO',
            'LANDCRUISER V8',
            'MATRIX',
            'MIRAI',
            'MR2',
            'MR2 SPYDER',
            'PASEO',
            'PICNIC',
            'PREVIA',
            'PRIUS',
            'PRIUS C',
            'PRIUS PRIME',
            'PRIUS V',
            'PRIUS+',
            'PROACE VERSO',
            'RAV4',
            'SEQUOIA',
            'SIENNA',
            'STARLET',
            'SUPRA',
            'T100',
            'TACOMA',
            'TERCEL',
            'TUNDRA',
            'URBAN CRUISER',
            'VENZA',
            'VERSO',
            'VERSO-S',
            'YARIS',
            'YARIS GRMN',
            'YARIS IA',
            'YARIS VERSO'
        ]
    },
    {
        name: 'VAUXHALL',
        models: [
            'ADAM',
            'AGILA',
            'AMPERA',
            'ANTARA',
            'ASTRA',
            'BRAVA',
            'CALIBRA',
            'CASCADA',
            'CAVALIER',
            'CORSA',
            'CROSSLAND X',
            'FRONTERA',
            'Grandland X',
            'INSIGNIA',
            'Insignia Country Tourer',
            'MALOO',
            'MERIVA',
            'MOKKA',
            'MOKKA X',
            'MONARO',
            'MONTEREY',
            'OMEGA',
            'SIGNUM',
            'SINTRA',
            'TIGRA',
            'VECTRA',
            'VIVA',
            'VX220',
            'VXR8',
            'ZAFIRA',
            'ZAFIRA TOURER'
        ]
    },
    {
        name: 'VOLKSWAGEN',
        models: [
            'AMAROK',
            'ARTEON',
            'ATLAS',
            'BEETLE',
            'BORA',
            'CABRIO',
            'CADDY',
            'CALIFORNIA',
            'CARAVELLE',
            'CC',
            'CORRADO',
            'EOS',
            'EUROVAN',
            'FOX',
            'GOLF',
            'GOLF PLUS',
            'GOLF SPORTSVAN',
            'GOLF SV',
            'GTI',
            'JETTA',
            'LUPO',
            'MULTIVAN',
            'NEW BEETLE',
            'PASSAT',
            'PASSAT CC',
            'PHAETON',
            'POLO',
            'R32',
            'RABBIT',
            'ROUTAN',
            'SCIROCCO',
            'SHARAN',
            'T-ROC',
            'TIGUAN',
            'TIGUAN ALLSPACE',
            'TOUAREG',
            'TOURAN',
            'UP',
            'VENTO',
            'XL1'
        ]
    },
    {
        name: 'VOLVO',
        models: [
            '440',
            '460',
            '480',
            '850',
            '940',
            '960',
            'C30',
            'C70',
            'S40',
            'S40 CLASSIC',
            'S60',
            'S60 CROSS COUNTRY',
            'S70',
            'S80',
            'S90',
            'V40',
            'V40 CLASSIC',
            'V40 CROSS COUNTRY',
            'V50',
            'V60',
            'V60 CROSS COUNTRY',
            'V70',
            'V70 CLASSIC',
            'V70 XC',
            'V90',
            'V90 CROSS COUNTRY',
            'XC40',
            'XC60',
            'XC70',
            'XC90'
        ]
    }
]

module.exports.brands = brands;