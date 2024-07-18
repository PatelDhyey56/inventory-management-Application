-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: inventory_management
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `city_master`
--

DROP TABLE IF EXISTS `city_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city_master` (
  `city_name` text,
  `city_id` int NOT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`city_id`),
  KEY `fk_city_master_1_idx` (`state_id`),
  CONSTRAINT `fk_city_master_1` FOREIGN KEY (`state_id`) REFERENCES `state_master` (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city_master`
--

LOCK TABLES `city_master` WRITE;
/*!40000 ALTER TABLE `city_master` DISABLE KEYS */;
INSERT INTO `city_master` VALUES ('Alipur',101,1),('Andaman Island',102,1),('Anderson Island',103,1),('Arainj-Laka-Punga',104,1),('Austinabad',105,1),('Bamboo Flat',106,1),('Barren Island',107,1),('Beadonabad',108,1),('Betapur',109,1),('Bindraban',110,1),('Bonington',111,1),('Brookesabad',112,1),('Cadell Point',113,1),('Calicut',114,1),('Chetamale',115,1),('Cinque Islands',116,1),('Defence Island',117,1),('Digilpur',118,1),('Dolyganj',119,1),('Flat Island',120,1),('Geinyale',121,1),('Great Coco Island',122,1),('Haddo',123,1),('Havelock Island',124,1),('Henry Lawrence Island',125,1),('Herbertabad',126,1),('Hobdaypur',127,1),('Inteview Island',130,1),('Jangli Ghat',131,1),('Jhon Lawrence Island',132,1),('Karen',133,1),('Kartara',134,1),('KYD Islannd',135,1),('Landfall Island',136,1),('Little Andmand',137,1),('Maimyo',140,1),('Malappuram',141,1),('Manglutan',142,1),('Manpur',143,1),('Mitha Khari',144,1),('Neill Island',145,1),('Nicobar Island',146,1),('North Brother Island',147,1),('North Passage Island',148,1),('North Sentinel Island',149,1),('Nothen Reef Island',150,1),('Outram Island',151,1),('Pahlagaon',152,1),('Palalankwe',153,1),('Passage Island',154,1),('Phaiapong',155,1),('Phoenix Island',156,1),('Port Blair',157,1),('Preparis Island',158,1),('Protheroepur',159,1),('Rangachang',160,1),('Rongat',161,1),('Rutland Island',162,1),('Sabari',163,1),('Saddle Peak',164,1),('Shadipur',165,1),('Smith Island',166,1),('Sound Island',167,1),('South Sentinel Island',168,1),('Spike Island',169,1),('Tarmugli Island',170,1),('Taylerabad',171,1),('Titaije',172,1),('Toibalawe',173,1),('Tusonabad',174,1),('West Island',175,1),('Wimberleyganj',176,1),('Yadita',177,1),('Chittoor',203,2),('Cuddapah',204,2),('East Godavari',205,2),('Guntur',206,2),('Hyderabad',207,2),('Karimnagar',208,2),('Khammam',209,2),('Krishna',210,2),('Kurnool',211,2),('Mahabubnagar',212,2),('Medak',213,2),('Nalgonda',214,2),('Nellore',215,2),('Nizamabad',216,2),('Prakasam',217,2),('Rangareddy',218,2),('Srikakulam',219,2),('Visakhapatnam',220,2),('Vizianagaram',221,2),('Warangal',222,2),('West Godavari',223,2),('Anjaw',301,3),('Changlang',302,3),('Dibang Valley',303,3),('East Kameng',304,3),('East Siang',305,3),('Itanagar',306,3),('Kurung Kumey',307,3),('Lohit',308,3),('Lower Dibang Valley',309,3),('Lower Subansiri',310,3),('Papum Pare',311,3),('Tawang',312,3),('Tirap',313,3),('Upper Siang',314,3),('Upper Subansiri',315,3),('West Kameng',316,3),('West Siang',317,3),('Barpeta',401,4),('Bongaigaon',402,4),('Cachar',403,4),('Darrang',404,4),('Dhemaji',405,4),('Dhubri',406,4),('Dibrugarh',407,4),('Goalpara',408,4),('Golaghat',409,4),('Guwahati',410,4),('Hailakandi',411,4),('Jorhat',412,4),('Kamrup',413,4),('Karbi Anglong',414,4),('Karimganj',415,4),('Kokrajhar',416,4),('Lakhimpur',417,4),('Marigaon',418,4),('Nagaon',419,4),('Nalbari',420,4),('North Cachar Hills',421,4),('Silchar',422,4),('Sivasagar',423,4),('Sonitpur',424,4),('Tinsukia',425,4),('Udalguri',426,4),('Araria',501,5),('Aurangabad',502,5),('Banka',503,5),('Begusarai',504,5),('Bhagalpur',505,5),('Bhojpur',506,5),('Buxar',507,5),('Darbhanga',508,5),('East Champaran',509,5),('Gaya',510,5),('Gopalganj',511,5),('Jamshedpur',512,5),('Jamui',513,5),('Jehanabad',514,5),('Kaimur (Bhabua)',515,5),('Katihar',516,5),('Khagaria',517,5),('Kishanganj',518,5),('Lakhisarai',519,5),('Madhepura',520,5),('Madhubani',521,5),('Munger',522,5),('Muzaffarpur',523,5),('Nalanda',524,5),('Nawada',525,5),('Patna',526,5),('Purnia',527,5),('Rohtas',528,5),('Saharsa',529,5),('Samastipur',530,5),('Saran',531,5),('Sheikhpura',532,5),('Sheohar',533,5),('Sitamarhi',534,5),('Siwan',535,5),('Supaul',536,5),('Vaishali',537,5),('West Champaran',538,5),('Chandigarh',601,6),('Mani Marja',602,6),('Bastar',701,7),('Bhilai',702,7),('Bijapur',703,7),('Bilaspur',704,7),('Dhamtari',705,7),('Durg',706,7),('Janjgir-Champa',707,7),('Jashpur',708,7),('Kabirdham-Kawardha',709,7),('Korba',710,7),('Korea',711,7),('Mahasamund',712,7),('Narayanpur',713,7),('Norh Bastar-Kanker',714,7),('Raigarh',715,7),('Raipur',716,7),('Rajnandgaon',717,7),('South Bastar-Dantewada',718,7),('Surguja',719,7),('Amal',801,8),('Amli',802,8),('Bedpa',803,8),('Chikhli',804,8),('Dadra & Nagar Haveli',805,8),('Dahikhed',806,8),('Dolara',807,8),('Galonda',808,8),('Kanadi',809,8),('Karchond',810,8),('Khadoli',811,8),('Kharadpada',812,8),('Kherabari',813,8),('Kherdi',814,8),('Kothar',815,8),('Luari',816,8),('Mashat',817,8),('Rakholi',818,8),('Rudana',819,8),('Saili',820,8),('Sili',821,8),('Silvassa',822,8),('Sindavni',823,8),('Udva',824,8),('Umbarkoi',825,8),('Vansda',826,8),('Vasona',827,8),('Velugam',828,8),('Brancavare',901,9),('Dagasi',902,9),('Daman',903,9),('Diu',904,9),('Magarvara',905,9),('Nagwa',906,9),('Pariali',907,9),('Passo Covo',908,9),('Central Delhi',1001,10),('East Delhi',1002,10),('New Delhi',1003,10),('North Delhi',1004,10),('North East Delhi',1005,10),('North West Delhi',1006,10),('Old Delhi',1007,10),('South Delhi',1008,10),('South West Delhi',1009,10),('West Delhi',1010,10),('Canacona',1101,11),('Candolim',1102,11),('Chinchinim',1103,11),('Cortalim',1104,11),('Goa',1105,11),('Jua',1106,11),('Madgaon',1107,11),('Mahem',1108,11),('Mapuca',1109,11),('Marmagao',1110,11),('Panji',1111,11),('Ponda',1112,11),('Sanvordem',1113,11),('Terekhol',1114,11),('Ahmedabad',1201,12),('Amreli',1202,12),('Anand',1203,12),('Banaskantha',1204,12),('Baroda',1205,12),('Bharuch',1206,12),('Bhavnagar',1207,12),('Dahod',1208,12),('Dang',1209,12),('Dwarka',1210,12),('Gandhinagar',1211,12),('Jamnagar',1212,12),('Junagadh',1213,12),('Kheda',1214,12),('Kutch',1215,12),('Mehsana',1216,12),('Nadiad',1217,12),('Narmada',1218,12),('Navsari',1219,12),('Panchmahals',1220,12),('Patan',1221,12),('Porbandar',1222,12),('Rajkot',1223,12),('Sabarkantha',1224,12),('Surat',1225,12),('Surendranagar',1226,12),('Vadodara',1227,12),('Valsad',1228,12),('Vapi',1229,12),('Ambala',1301,13),('Bhiwani',1302,13),('Faridabad',1303,13),('Fatehabad',1304,13),('Gurgaon',1305,13),('Hisar',1306,13),('Jhajjar',1307,13),('Jind',1308,13),('Kaithal',1309,13),('Karnal',1310,13),('Kurukshetra',1311,13),('Mahendragarh',1312,13),('Mewat',1313,13),('Panchkula',1314,13),('Panipat',1315,13),('Rewari',1316,13),('Rohtak',1317,13),('Sirsa',1318,13),('Sonipat',1319,13),('Yamunanagar',1320,13),('Bilaspur',1401,14),('Chamba',1402,14),('Dalhousie',1403,14),('Hamirpur',1404,14),('Kangra',1405,14),('Kinnaur',1406,14),('Kullu',1407,14),('Lahaul & Spiti',1408,14),('Mandi',1409,14),('Shimla',1410,14),('Sirmaur',1411,14),('Solan',1412,14),('Una',1413,14),('Anantnag',1501,15),('Baramulla',1502,15),('Budgam',1503,15),('Doda',1504,15),('Jammu',1505,15),('Kargil',1506,15),('Kathua',1507,15),('Kupwara',1508,15),('Leh',1509,15),('Poonch',1510,15),('Pulwama',1511,15),('Rajauri',1512,15),('Srinagar',1513,15),('Udhampur',1514,15),('Bokaro',1601,16),('Chatra',1602,16),('Deoghar',1603,16),('Dhanbad',1604,16),('Dumka',1605,16),('East Singhbhum',1606,16),('Garhwa',1607,16),('Giridih',1608,16),('Godda',1609,16),('Gumla',1610,16),('Hazaribag',1611,16),('Jamtara',1612,16),('Koderma',1613,16),('Latehar',1614,16),('Lohardaga',1615,16),('Pakur',1616,16),('Palamu',1617,16),('Ranchi',1618,16),('Sahibganj',1619,16),('Seraikela',1620,16),('Simdega',1621,16),('West Singhbhum',1622,16),('Bagalkot',1701,17),('Bangalore',1702,17),('Bangalore Rural',1703,17),('Belgaum',1704,17),('Bellary',1705,17),('Bhatkal',1706,17),('Bidar',1707,17),('Bijapur',1708,17),('Chamrajnagar',1709,17),('Chickmagalur',1710,17),('Chikballapur',1711,17),('Chitradurga',1712,17),('Dakshina Kannada',1713,17),('Davanagere',1714,17),('Dharwad',1715,17),('Gadag',1716,17),('Gulbarga',1717,17),('Hampi',1718,17),('Hassan',1719,17),('Haveri',1720,17),('Hospet',1721,17),('Karwar',1722,17),('Kodagu',1723,17),('Kolar',1724,17),('Koppal',1725,17),('Madikeri',1726,17),('Mandya',1727,17),('Mangalore',1728,17),('Manipal',1729,17),('Mysore',1730,17),('Raichur',1731,17),('Shimoga',1732,17),('Sirsi',1733,17),('Sringeri',1734,17),('Srirangapatna',1735,17),('Tumkur',1736,17),('Udupi',1737,17),('Uttara Kannada',1738,17),('Alappuzha',1801,18),('Alleppey',1802,18),('Alwaye',1803,18),('Ernakulam',1804,18),('Idukki',1805,18),('Kannur',1806,18),('Kasargod',1807,18),('Kochi',1808,18),('Kollam',1809,18),('Kottayam',1810,18),('Kovalam',1811,18),('Kozhikode',1812,18),('Malappuram',1813,18),('Palakkad',1814,18),('Pathanamthitta',1815,18),('Perumbavoor',1816,18),('Thiruvananthapuram',1817,18),('Thrissur',1818,18),('Trichur',1819,18),('Trivandrum',1820,18),('Wayanad',1821,18),('Agatti Island',1901,19),('Bingaram Island',1902,19),('Bitra Island',1903,19),('Chetlat Island',1904,19),('Kadmat Island',1905,19),('Kalpeni Island',1906,19),('Kavaratti Island',1907,19),('Kiltan Island',1908,19),('Lakshadweep Sea',1909,19),('Minicoy Island',1910,19),('North Island',1911,19),('South Island',1912,19),('Anuppur',2001,20),('Ashoknagar',2002,20),('Balaghat',2003,20),('Barwani',2004,20),('Betul',2005,20),('Bhind',2006,20),('Bhopal',2007,20),('Burhanpur',2008,20),('Chhatarpur',2009,20),('Chhindwara',2010,20),('Damoh',2011,20),('Datia',2012,20),('Dewas',2013,20),('Dhar',2014,20),('Dindori',2015,20),('Guna',2016,20),('Gwalior',2017,20),('Harda',2018,20),('Hoshangabad',2019,20),('Indore',2020,20),('Jabalpur',2021,20),('Jagdalpur',2022,20),('Jhabua',2023,20),('Katni',2024,20),('Khandwa',2025,20),('Khargone',2026,20),('Mandla',2027,20),('Mandsaur',2028,20),('Morena',2029,20),('Narsinghpur',2030,20),('Neemuch',2031,20),('Panna',2032,20),('Raisen',2033,20),('Rajgarh',2034,20),('Ratlam',2035,20),('Rewa',2036,20),('Sagar',2037,20),('Satna',2038,20),('Sehore',2039,20),('Seoni',2040,20),('Shahdol',2041,20),('Shajapur',2042,20),('Sheopur',2043,20),('Shivpuri',2044,20),('Sidhi',2045,20),('Tikamgarh',2046,20),('Ujjain',2047,20),('Umaria',2048,20),('Vidisha',2049,20),('Ahmednagar',2101,21),('Akola',2102,21),('Amravati',2103,21),('Aurangabad',2104,21),('Beed',2105,21),('Bhandara',2106,21),('Buldhana',2107,21),('Chandrapur',2108,21),('Dhule',2109,21),('Gadchiroli',2110,21),('Gondia',2111,21),('Hingoli',2112,21),('Jalgaon',2113,21),('Jalna',2114,21),('Kolhapur',2115,21),('Latur',2116,21),('Mahabaleshwar',2117,21),('Mumbai',2118,21),('Mumbai City',2119,21),('Mumbai Suburban',2120,21),('Nagpur',2121,21),('Nanded',2122,21),('Nandurbar',2123,21),('Nashik',2124,21),('Osmanabad',2125,21),('Parbhani',2126,21),('Pune',2127,21),('Raigad',2128,21),('Ratnagiri',2129,21),('Sangli',2130,21),('Satara',2131,21),('Sholapur',2132,21),('Sindhudurg',2133,21),('Thane',2134,21),('Wardha',2135,21),('Washim',2136,21),('Yavatmal',2137,21),('Bishnupur',2201,22),('Chandel',2202,22),('Churachandpur',2203,22),('Imphal East',2204,22),('Imphal West',2205,22),('Senapati',2206,22),('Tamenglong',2207,22),('Thoubal',2208,22),('Ukhrul',2209,22),('East Garo Hills',2301,23),('East Khasi Hills',2302,23),('Jaintia Hills',2303,23),('Ri Bhoi',2304,23),('Shillong',2305,23),('South Garo Hills',2306,23),('West Garo Hills',2307,23),('West Khasi Hills',2308,23),('Aizawl',2401,24),('Champhai',2402,24),('Kolasib',2403,24),('Lawngtlai',2404,24),('Lunglei',2405,24),('Mamit',2406,24),('Saiha',2407,24),('Serchhip',2408,24),('Dimapur',2501,25),('Kohima',2502,25),('Mokokchung',2503,25),('Mon',2504,25),('Phek',2505,25),('Tuensang',2506,25),('Wokha',2507,25),('Zunheboto',2508,25),('Angul',2601,26),('Balangir',2602,26),('Balasore',2603,26),('Baleswar',2604,26),('Bargarh',2605,26),('Berhampur',2606,26),('Bhadrak',2607,26),('Bhubaneswar',2608,26),('Boudh',2609,26),('Cuttack',2610,26),('Deogarh',2611,26),('Dhenkanal',2612,26),('Gajapati',2613,26),('Ganjam',2614,26),('Jagatsinghapur',2615,26),('Jajpur',2616,26),('Jharsuguda',2617,26),('Kalahandi',2618,26),('Kandhamal',2619,26),('Kendrapara',2620,26),('Kendujhar',2621,26),('Khordha',2622,26),('Koraput',2623,26),('Malkangiri',2624,26),('Mayurbhanj',2625,26),('Nabarangapur',2626,26),('Nayagarh',2627,26),('Nuapada',2628,26),('Puri',2629,26),('Rayagada',2630,26),('Rourkela',2631,26),('Sambalpur',2632,26),('Subarnapur',2633,26),('Sundergarh',2634,26),('Barnala',2636,28),('Bathinda',2637,28),('Faridkot',2638,28),('Fatehgarh Sahib',2639,28),('Firozpur',2640,28),('Gurdaspur',2641,28),('Hoshiarpur',2642,28),('Jalandhar',2643,28),('Kapurthala',2644,28),('Ludhiana',2645,28),('Mansa',2646,28),('Moga',2647,28),('Sri Muktsar Sahib',2648,28),('Patiala',2649,28),('Rupnagar',2650,28),('Sahibzada Ajit Singh Nagar',2651,28),('Sangrur',2652,28),('Shahid Bhagat Singh Nagar',2653,28),('Tarn Taran',2654,28),('Ajmer',2901,29),('Alwar',2902,29),('Banswara',2903,29),('Baran',2904,29),('Barmer',2905,29),('Bharatpur',2906,29),('Bhilwara',2907,29),('Bikaner',2908,29),('Bundi',2909,29),('Chittorgarh',2910,29),('Churu',2911,29),('Dausa',2912,29),('Dholpur',2913,29),('Dungarpur',2914,29),('Hanumangarh',2915,29),('Jaipur',2916,29),('Jaisalmer',2917,29),('Jalore',2918,29),('Jhalawar',2919,29),('Jhunjhunu',2920,29),('Jodhpur',2921,29),('Karauli',2922,29),('Kota',2923,29),('Nagaur',2924,29),('Pali',2925,29),('Pilani',2926,29),('Rajsamand',2927,29),('Sawai Madhopur',2928,29),('Sikar',2929,29),('Sirohi',2930,29),('Sri Ganganagar',2931,29),('Tonk',2932,29),('Udaipur',2933,29),('Barmiak',3001,30),('Be',3002,30),('Bhurtuk',3003,30),('Chhubakha',3004,30),('Chidam',3005,30),('Chubha',3006,30),('Chumikteng',3007,30),('Dentam',3008,30),('Dikchu',3009,30),('Dzongri',3010,30),('Gangtok',3011,30),('Gauzing',3012,30),('Gyalshing',3013,30),('Hema',3014,30),('Kerung',3015,30),('Lachen',3016,30),('Lachung',3017,30),('Lema',3018,30),('Lingtam',3019,30),('Lungthu',3020,30),('Mangan',3021,30),('Namchi',3022,30),('Namthang',3023,30),('Nanga',3024,30),('Nantang',3025,30),('Naya Bazar',3026,30),('Padamachen',3027,30),('Pakhyong',3028,30),('Pemayangtse',3029,30),('Phensang',3030,30),('Rangli',3031,30),('Rinchingpong',3032,30),('Sakyong',3033,30),('Samdong',3034,30),('Sombari',3036,30),('Soreng',3037,30),('Sosing',3038,30),('Tekhug',3039,30),('Temi',3040,30),('Tsetang',3041,30),('Tsomgo',3042,30),('Tumlong',3043,30),('Yangang',3044,30),('Yumtang',3045,30),('Chennai',3101,31),('Chidambaram',3102,31),('Chingleput',3103,31),('Coimbatore',3104,31),('Courtallam',3105,31),('Cuddalore',3106,31),('Dharmapuri',3107,31),('Dindigul',3108,31),('Erode',3109,31),('Hosur',3110,31),('Kanchipuram',3111,31),('Kanyakumari',3112,31),('Karaikudi',3113,31),('Karur',3114,31),('Kodaikanal',3115,31),('Kovilpatti',3116,31),('Krishnagiri',3117,31),('Kumbakonam',3118,31),('Madurai',3119,31),('Mayiladuthurai',3120,31),('Nagapattinam',3121,31),('Nagarcoil',3122,31),('Namakkal',3123,31),('Neyveli',3124,31),('Nilgiris',3125,31),('Ooty',3126,31),('Palani',3127,31),('Perambalur',3128,31),('Pollachi',3129,31),('Pudukkottai',3130,31),('Rajapalayam',3131,31),('Ramanathapuram',3132,31),('Salem',3133,31),('Sivaganga',3134,31),('Sivakasi',3135,31),('Thanjavur',3136,31),('Theni',3137,31),('Thoothukudi',3138,31),('Tiruchirappalli',3139,31),('Tirunelveli',3140,31),('Tirupur',3141,31),('Tiruvallur',3142,31),('Tiruvannamalai',3143,31),('Tiruvarur',3144,31),('Trichy',3145,31),('Tuticorin',3146,31),('Vellore',3147,31),('Villupuram',3148,31),('Virudhunagar',3149,31),('Yercaud',3150,31),('Agartala',3201,32),('Ambasa',3202,32),('Bampurbari',3203,32),('Belonia',3204,32),('Dhalai',3205,32),('Dharam Nagar',3206,32),('Kailashahar',3207,32),('Kamal Krishnabari',3208,32),('Khopaiyapara',3209,32),('Khowai',3210,32),('Phuldungsei',3211,32),('Radha Kishore Pur',3212,32),('Tripura',3213,32),('Kanpur',3214,33),('Lucknow',3215,33),('Ghaziabad',3216,33),('Agra',3217,33),('Meerut',3218,33),('Varanasi',3219,33),('Prayagraj',3220,33),('Bareilly',3221,33),('Aligarh',3222,33),('Moradabad',3223,33),('Saharanpur',3224,33),('Gorakhpur',3225,33),('Noida',3226,33),('Firozabad',3227,33),('Jhansi',3228,33),('Muzaffarnagar',3229,33),('Mathura-Vrindavan',3230,33),('Budaun',3231,33),('Rampur',3232,33),('Shahjahanpur',3233,33),('Farrukhabad-Fatehgarh',3234,33),('Ayodhya',3235,33),('Maunath Bhanjan',3236,33),('Hapur',3237,33),('Etawah',3238,33),('Mirzapur-Vindhyachal',3239,33),('Bulandshahr',3240,33),('Sambhal',3241,33),('Amroha',3242,33),('Hardoi',3243,33),('Fatehpur',3244,33),('Raebareli',3245,33),('Orai',3246,33),('Sitapur',3247,33),('Bahraich',3248,33),('Modinagar',3249,33),('Unnao',3250,33),('Jaunpur',3251,33),('Lakhimpur',3252,33),('Hathras',3253,33),('Banda',3254,33),('Pilibhit',3255,33),('Barabanki',3256,33),('Khurja',3257,33),('Gonda',3258,33),('Mainpuri',3259,33),('Lalitpur',3260,33),('Etah',3261,33),('Deoria',3262,33),('Badaun',3263,33),('Ghazipur',3264,33),('Sultanpur',3265,33),('Azamgarh',3266,33),('Bijnor',3267,33),('Sahaswan',3268,33),('Basti',3269,33),('Chandausi',3270,33),('Akbarpur',3271,33),('Ballia',3272,33),('Tanda',3273,33),('Greater Noida',3274,33),('Shikohabad',3275,33),('Shamli',3276,33),('Awagarh',3277,33),('Kasganj',3278,33),('Dehradun',3279,34),('Haridwar',3280,34),('Roorkee',3281,34),('Haldwani-cum-Kathgodam',3282,34),('Rudrapur',3283,34),('Kashipur',3284,34),('Rishikesh',3285,34),('Kolkata',3286,35),('Asansol',3287,35),('Siliguri',3288,35),('Durgapur',3289,35),('Bardhaman',3290,35),('Malda',3291,35),('Baharampur',3292,35),('Habra',3293,35),('Kharagpur',3294,35),('Shantipur',3295,35),('Dankuni',3296,35),('Dhulian',3297,35),('Ranaghat',3298,35),('Haldia',3299,35),('Raiganj',3300,35),('Krishnanagar',3301,35),('Nabadwip',3302,35),('Medinipur',3303,35),('Jalpaiguri',3304,35),('Balurghat',3305,35),('Basirhat',3306,35),('Bankura',3307,35),('Chakdaha',3308,35),('Darjeeling',3309,35),('Alipurduar',3310,35),('Purulia',3311,35),('Jangipur',3312,35),('Bolpur',3313,35),('Bangaon',3314,35),('Cooch Behar',3315,35);
/*!40000 ALTER TABLE `city_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_master`
--

DROP TABLE IF EXISTS `customer_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` char(10) NOT NULL,
  `address` varchar(150) DEFAULT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `city_id` int NOT NULL,
  `state_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_customer_master_1_idx` (`city_id`),
  KEY `fk_customer_master_2_idx` (`state_id`),
  CONSTRAINT `fk_customer_master_1` FOREIGN KEY (`city_id`) REFERENCES `city_master` (`city_id`),
  CONSTRAINT `fk_customer_master_2` FOREIGN KEY (`state_id`) REFERENCES `state_master` (`state_id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_master`
--

LOCK TABLES `customer_master` WRITE;
/*!40000 ALTER TABLE `customer_master` DISABLE KEYS */;
INSERT INTO `customer_master` VALUES (1,'Raj','Savani','raj@gmail.com','9876543210','ABC','123456',1213,12,'2024-04-09 09:10:40','2024-04-17 09:43:13',0),(3,'Vasu','Parsaniya','vasuparsaniya21@gmail.com','9586606859','','123456',1312,13,'2024-04-17 06:35:15','2024-04-18 03:27:41',0),(4,'Kunj','Savani','kunj@gmail.com','9586606850','Rajkot','123456',1223,12,'2024-04-17 06:35:40','2024-04-17 06:35:40',0),(5,'Bhumi','scscs','sedf@gmail.com','9586606850','sdf','362640',1508,15,'2024-04-17 06:36:06','2024-04-17 06:36:06',0),(6,'sdf','sdf','kunk@gmail.com','9876543210','sdf','123456',1614,16,'2024-04-17 06:36:18','2024-04-17 06:36:18',0),(7,'sdf','fefr','fwefenj@gmail.com','9586606860','','362640',1312,13,'2024-04-17 06:36:40','2024-04-18 03:29:08',0),(8,'wefwf','weffwe','fewfeaniya21@gmail.com','9586606878','ef','362640',1212,12,'2024-04-17 06:36:57','2024-04-17 06:36:57',0),(9,'wefwe','wefef','fwfesaniya21@gmail.com','1234569870','ef','123456',809,8,'2024-04-17 06:37:16','2024-04-17 08:55:45',0),(10,'Vasutest','Parsaniyatest','test@gmail.com','9638527410','sdd','362640',1311,13,'2024-04-17 09:25:02','2024-04-17 09:25:02',0),(11,'Vasu','Parsaniya','fffsdeya21@gmail.com','9586606859','sdfs','362640',1410,14,'2024-04-17 09:44:15','2024-04-17 09:44:15',0),(12,'reger','erg','gergerarsaniya21@gmail.com','9876543210','ergr','362640',1510,15,'2024-04-17 09:46:40','2024-04-17 09:46:40',0),(13,'ggj','ghjgj','vasupargjh@gmail.com','9876543210','dfgf','362640',1614,16,'2024-04-17 09:47:33','2024-04-17 09:47:33',0),(14,'hfhf','fhfh','fghniya21@gmail.com','9586606859','fhfr','362640',1407,14,'2024-04-17 09:49:11','2024-04-17 09:49:11',0),(15,'fgh','fghgh','fg@gmail.com','9876543210','fg','362640',1215,12,'2024-04-17 09:49:45','2024-04-17 09:49:45',0),(16,'Vasu','Parsaniya','frweewniya21@gmail.com','9586606859','werwer','362640',1408,14,'2024-04-17 12:37:38','2024-04-17 12:37:38',0),(17,'Raj','Shah','rajshahe@gmail.com','8529637412','','362640',101,1,'2024-04-18 06:38:23','2024-04-30 13:28:26',0),(18,'Leeanne','Natalia','leeannenatalia@yopmail.com','7495235228','Rabat','676903',101,1,'2024-04-18 06:38:23','2024-04-30 13:49:31',0),(19,'Coral','Milde','coralmilde@yopmail.com','7455328633','Kota Kinabalu','809143',101,1,'2024-04-18 06:38:23','2024-04-30 14:05:47',0),(20,'Cordi','Hoban','cordihoban@yopmail.com','8257143055','Chongqing','634446',101,1,'2024-04-18 06:38:23','2024-04-30 14:05:28',0),(21,'Lolita','Bobbee','lolitabobbee@yopmail.com','9403307571','Nakhon Ratchasima','959821',101,1,'2024-04-18 06:38:23','2024-04-30 14:06:10',0),(22,'Claudina','Kirstin','claudinakirstin@yopmail.com','7536362836','Philadelphia','707334',101,1,'2024-04-18 06:38:23','2024-04-30 13:58:55',0),(23,'Rhea','Michella','rheamichella@yopmail.com','8906398655','Nicosia','964771',101,1,'2024-04-18 06:38:23','2024-04-30 14:06:32',0),(24,'Cindelyn','Yate','cindelynyate@yopmail.com','9343669646','Santiago de Cuba','979272',101,1,'2024-04-18 06:38:23','2024-04-30 14:06:54',0),(25,'Verla','Wenda','verlawenda@yopmail.com','7273989843','Manila','736301',101,1,'2024-04-18 06:38:23','2024-04-30 14:07:09',0),(26,'Aurore','Sophronia','auroresophronia@yopmail.com','9628168002','Adelaide','746813',101,1,'2024-04-18 06:38:23','2024-04-30 14:07:43',0),(27,'Lynea','Casimir','lyneacasimir@yopmail.com','9283427665','Muscat','735019',101,1,'2024-04-18 06:38:23','2024-04-30 14:08:01',0),(28,'Kaja','Buttaro','kaja.buttaro@yopmail.com','7085890372','Providence','908781',101,1,'2024-04-18 06:38:23','2024-05-01 04:20:39',0),(29,'Berta','Loeb','berta.loeb@yopmail.com','7402667529','Kansas City','959586',101,1,'2024-04-18 06:38:23','2024-05-01 04:09:29',0),(30,'Jillayne','Marden','jillayne.marden@yopmail.com','8638827281','Port of Spain','688211',101,1,'2024-04-18 06:38:23','2024-05-01 04:19:58',0),(31,'Christy','Moseley','christy.moseley@yopmail.com','7654395871','Tamale','852186',101,1,'2024-04-18 06:38:23','2024-05-01 04:20:15',0),(32,'Camile','Bow','camile.bow@yopmail.com','9508528370','Cairo','610654',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(33,'Bertine','Hathaway','bertine.hathaway@yopmail.com','9098088032','Koulikoro','745313',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(34,'Vere','Vale','vere.vale@yopmail.com','7692716386','Simferopol','914378',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(35,'Delilah','Dreda','delilah.dreda@yopmail.com','8970482528','Puerto Williams','615971',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(36,'Jaclyn','Oriana','jaclyn.oriana@yopmail.com','8495098581','Barcelona','800515',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(37,'Letizia','Florina','letizia.florina@yopmail.com','8149208538','Bandung','756580',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(38,'Dotty','Alwin','dotty.alwin@yopmail.com','8626365238','Muscat','603080',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(39,'Berta','Christine','berta.christine@yopmail.com','9724789620','Charlottetown','718431',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(40,'Mignon','Florina','mignon.florina@yopmail.com','7931519591','Nukuʻalofa','716765',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(41,'Chickie','Talia','chickie.talia@yopmail.com','9470814298','Dresden','629097',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(42,'Correy','Velick','correy.velick@yopmail.com','7287563741','Tampa','806812',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(43,'Alyssa','Melan','alyssa.melan@yopmail.com','9385183951','Sacramento','809402',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(44,'Ida','Ortrude','lda.ortrude@yopmail.com','9699098893','Prague','607202',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(45,'Rochette','Israeli','rochette.israeli@yopmail.com','7868725469','Papeete','680150',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(46,'Jaclyn','Euridice','jaclyn.euridice@yopmail.com','9606771162','Winnipeg','849961',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(47,'Binny','Bury','binny.bury@yopmail.com','8489521358','Columbus','685377',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(48,'Adriana','Holbrook','adriana.holbrook@yopmail.com','9989164988','Gdańsk','931718',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(49,'Brooks','Vernier','brooks.vernier@yopmail.com','7725272770','Casablanca','930742',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(50,'Jemie','Cosenza','jemie.cosenza@yopmail.com','7544279237','Kunming','791932',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(51,'Tracey','Martguerita','tracey.martguerita@yopmail.com','9851571019','Port-au-Prince','777968',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(52,'Brooks','Berriman','brooks.berriman@yopmail.com','8726729628','Ponta Delgada','868620',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(53,'Sherrie','Daegal','sherrie.daegal@yopmail.com','7893089132','Santa Cruz de Tenerife','971814',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(54,'Gratia','Candy','gratia.candy@yopmail.com','7401429985','Calama','982360',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(55,'Merrie','Ioab','merrie.Ioab@yopmail.com','8805418449','Townsville','668137',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(56,'Corry','Ajay','corry.ajay@yopmail.com','9733062725','Tripoli','689085',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(57,'Sharlene','Dichy','sharlene.dichy@yopmail.com','7669740597','Santa Cruz de la Sierra','660894',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(58,'Corene','Haldas','corene.haldas@yopmail.com','9832377694','Tucson','658216',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(59,'Mireielle','Lissi','mireielle.lissi@yopmail.com','8254071227','Majuro','967205',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(60,'Genevra','McClimans','genevra.mcclimans@yopmail.com','8489450787','Kunming','797448',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(61,'Nicoli','Ellord','nicoli.ellord@yopmail.com','8483979671','Rome','736564',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(62,'Laure','Rossner','laure.rossner@yopmail.com','7436441427','Helsinki','862008',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(63,'Margette','Dawkins','margette.dawkins@yopmail.com','7384457563','Agartala','768376',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(64,'Sheelagh','Garek','sheelagh.garek@yopmail.com','8989780435','Wonsan','615616',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(65,'Noelle','Ferino','noelle.ferino@yopmail.com','9699920152','Sacramento','705598',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(66,'Helsa','Land','helsa.land@yopmail.com','7998765056','Jersey City','734100',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(67,'Felice','Travax','felice.travax@yopmail.com','9834662643','Porto Alegre','828423',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(68,'Estell','Sophronia','estell.sophronia@yopmail.com','9633103726','Tórshavn','733973',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(69,'Fernande','Estella','fernande.estella@yopmail.com','7170673334','Belgrade','672418',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(70,'Allis','Ciro','allis.ciro@yopmail.com','7332292506','Jayapura','671569',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(71,'Damaris','Mehalek','damaris.mehalek@yopmail.com','7211640002','Cincinnati','856376',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(72,'Desirae','Socha','desirae.socha@yopmail.com','7582489881','San José','872998',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(73,'Tomasina','Rogerio','tomasina.rogerio@yopmail.com','8854296487','Mexicali','881878',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(74,'Wynne','Jorgan','wynne.jorgan@yopmail.com','8157866120','Khartoum','926981',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(75,'Shandie','Sasnett','shandie.sasnett@yopmail.com','8776620032','Fukuoka','827872',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(76,'Lorenza','Nikaniki','lorenza.nikaniki@yopmail.com','8293834576','Salzburg','668294',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(77,'Merry','Brackely','merry.brackely@yopmail.com','9521286030','Wichita','604638',101,1,'2024-04-18 06:38:23','2024-05-01 04:26:23',0),(78,'Mallory','Tengdin','mallory.tengdin@yopmail.com','7196293711','Seoul','905783',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(79,'Romona','Hieronymus','romona.hieronymus@yopmail.com','9288767517','San Juan','712733',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(80,'Sue','Laverne','sue.laverne@yopmail.com','9362415258','Tamale','732860',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(81,'Elsie','Lesley','elsie.lesley@yopmail.com','8249705309','Kawasaki','631312',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(82,'Rivalee','Alejoa','rivalee.alejoa@yopmail.com','7981579400','Luanda','717667',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(83,'Peri','Adalbert','peri.adalbert@yopmail.com','7743596622','Chişinău','930319',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(84,'Merle','Poppy','merle.poppy@yopmail.com','8853102697','Chiang Mai','601615',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(85,'Fanny','Hourigan','fanny.hourigan@yopmail.com','8954413339','Naples','849556',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(86,'Emilia','Franza','emilia.franza@yopmail.com','8420319210','Yokohama','906217',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(87,'Ayn','Eachern','ayn.eachern@yopmail.com','9076415555','Assis','941047',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(88,'Darci','Faust','darci.faust@yopmail.com','9288296329','Mogadishu','864105',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(89,'Briney','Vanni','briney.vanni@yopmail.com','7556169364','Santa Cruz de la Sierra','796071',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(90,'Bobinette','Ingra','bobinette.ingra@yopmail.com','8677138745','Punta Arenas','685803',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(91,'Merci','Blake','merci.blake@yopmail.com','7695047096','Lagos','848949',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(92,'Elfreda','Damarra','elfreda.damarra@yopmail.com','9376719624','Okinawa','917069',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(93,'Stevana','Mayeda','stevana.mayeda@yopmail.com','7969086893','Johannesburg','913708',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(94,'Beatriz','Nicoline','beatriz.nicoline@yopmail.com','9788452256','Kuala Lumpur','785168',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(95,'Clary','Paton','clary.paton@yopmail.com','8070809285','Bangui','752341',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(96,'Joeann','Ries','joeann.ries@yopmail.com','8936955590','Sofia','702932',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(97,'Trixi','Raseda','trixi.raseda@yopmail.com','7922353790','İzmir','908014',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(98,'Cassandra','Chaing','cassandra.chaing@yopmail.com','9962074091','The Valley','855181',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(99,'Shannah','Kenney','shannah.kenney@yopmail.com','7539816035','Naypyidaw','905984',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(100,'Lolita','Giule','lolita.giule@yopmail.com','7055196014','Lahore','752625',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(101,'Arlina','Friede','arlina.friede@yopmail.com','7503070872','Charlottetown','671025',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(102,'Veda','Carvey','veda.carvey@yopmail.com','8546368197','Vaduz','704772',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(103,'Helsa','Nadia','helsa.nadia@yopmail.com','7311192050','Sukhumi','852083',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(104,'Kary','Adrienne','kary.adrienne@yopmail.com','7036653959','Milwaukee','697796',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(105,'Melina','Bigner','melina.bigner@yopmail.com','9295164777','Tirana','630865',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(106,'Fernande','Carlson','fernande.carlson@yopmail.com','7964210696','Semarang','963346',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(107,'Constance','Delila','constance.delila@yopmail.com','9238321493','Nassau','621808',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(108,'Yetty','Holtz','yetty.holtz@yopmail.com','7597304864','Ilhéus','835349',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(109,'Rivalee','Sparhawk','rivalee.sparhawk@yopmail.com','8051437060','Nice','671379',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(110,'Alie','Hessler','alie.hessler@yopmail.com','9355580276','Kota Bharu','913196',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(111,'Gianina','Goerke','gianina.goerke@yopmail.com','9062199198','Zürich','811791',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(112,'Kathy','Swigart','kathy.swigart@yopmail.com','7530614354','Yaoundé','808498',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(113,'Jean','Anderea','jean.anderea@yopmail.com','8683816616','Innsbruck','734836',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(114,'Dania','Leler','dania.leler@yopmail.com','8248178746','Bandung','831720',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(115,'Sabina','Celestine','sabina.celestine@yopmail.com','7106708751','Pretoria','671118',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(116,'Jemie','Annabella','jemie.annabella@yopmail.com','7285593105','Ndola','671359',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(117,'Fawne','Merna','fawne.merna@yopmail.com','7824378007','Weno','839201',101,1,'2024-04-18 06:38:23','2024-05-01 04:31:36',0),(118,'Raj','Savani','rajtest@gmail.com','9876543210','ABC','123456',1213,12,'2024-04-23 13:58:59','2024-04-23 13:58:59',0),(119,'Vasu','Parsaniya','testvasu260@gmail.com','9586606859','TEST','123456',1213,12,'2024-04-23 13:58:59','2024-04-23 13:58:59',0),(120,'Chirag','Mkawana','chirag@gmail.com','1234567890','wer4yhjuh','232211',1412,14,'2024-04-29 06:35:51','2024-04-30 14:08:34',0),(121,'decosterkumar','Savani','decosharma@gmail.com','9876543210','ABC','654321',1213,12,'2024-05-03 05:36:58','2024-05-03 05:36:58',0),(122,'mitkumar','Parsaniya','mitkuardparsa@gmail.com','9586606859','TEST','369258',1213,12,'2024-05-03 05:36:58','2024-05-03 05:36:58',0),(124,'raj','Shayam','rajshyam@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 05:50:00','2024-05-03 05:50:00',0),(125,'shyam','Parsaniya','shyam@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 05:50:00','2024-05-03 05:50:00',0),(126,'rajkumar','Shayam','rajkumartest@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 05:56:36','2024-05-03 05:56:36',0),(127,'shyamkumar','Parsaniya','shyamkumartest@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 05:56:36','2024-05-03 05:56:36',0),(128,'rajkumar','Shayam','rajjkumartest@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 06:14:29','2024-05-03 06:14:29',0),(129,'shyamkumar','Parsaniya','shyyamkumartest@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 06:14:29','2024-05-03 06:14:29',0),(130,'rajkumar','Shayam','kumartest@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 06:15:05','2024-05-03 06:15:05',0),(131,'shyamkumar','Parsaniya','amkumartest@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 06:15:05','2024-05-03 06:15:05',0),(132,'rajkumar','Shayam','kumsdfartest@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 06:15:58','2024-05-03 06:15:58',0),(133,'shyamkumar','Parsaniya','amfdskumartest@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 06:15:58','2024-05-03 06:15:58',0),(134,'rajkumar','Shayam','rajkumarsdfartest@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 06:18:04','2024-05-03 06:18:04',0),(135,'shyamkumar','Parsaniya','dfdskumartest@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 06:18:04','2024-05-03 06:18:04',0),(136,'rajkumar','Shayam','rajkumafdrsdfartest@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 06:18:24','2024-05-03 06:18:24',0),(137,'shyamkumar','Parsaniya','dfdskugmartest@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 06:18:24','2024-05-03 06:18:24',0),(138,'Parth','Verma','parthverma@gmail.com','9876543210','ABC','654321',1223,12,'2024-05-03 06:34:09','2024-05-03 06:34:09',0),(139,'kunj','verma','kunjverma@gmail.com','9586606859','TEST','369258',1201,12,'2024-05-03 06:34:09','2024-05-03 09:22:29',1);
/*!40000 ALTER TABLE `customer_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `type_id` int NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `notify` tinyint(1) DEFAULT '0',
  `seen` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_logs_1_idx` (`user_id`),
  KEY `fk_logs_2_idx` (`type_id`),
  CONSTRAINT `fk_logs_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_logs_2` FOREIGN KEY (`type_id`) REFERENCES `option_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES (1,1,13,NULL,0,0,'2024-04-11 04:51:07'),(2,1,12,NULL,0,0,'2024-04-11 04:53:55'),(3,1,13,NULL,0,0,'2024-04-11 05:29:15'),(4,1,12,NULL,0,0,'2024-04-11 09:14:44'),(5,1,12,NULL,0,0,'2024-04-11 12:35:49'),(6,1,12,NULL,0,0,'2024-04-18 04:44:35'),(7,1,12,NULL,0,0,'2024-04-18 04:45:34'),(8,1,13,NULL,0,0,'2024-04-19 05:05:59'),(9,1,12,NULL,0,0,'2024-04-19 05:07:03'),(10,1,12,NULL,0,0,'2024-04-19 05:08:44'),(11,1,12,NULL,0,0,'2024-04-19 05:39:46'),(12,1,12,NULL,0,0,'2024-04-19 05:40:43'),(13,1,12,NULL,0,0,'2024-04-19 05:41:50'),(14,1,12,NULL,0,0,'2024-04-19 07:35:22'),(15,1,12,NULL,0,0,'2024-04-19 09:52:32'),(16,1,12,NULL,0,0,'2024-04-19 11:54:30'),(17,1,12,NULL,0,0,'2024-04-19 11:54:45'),(18,1,12,NULL,0,0,'2024-04-20 04:43:14'),(19,1,12,NULL,0,0,'2024-04-20 06:46:21'),(20,1,12,NULL,0,0,'2024-04-20 09:39:21'),(21,1,12,NULL,0,0,'2024-04-20 12:10:58'),(22,1,12,NULL,0,0,'2024-04-20 12:56:59'),(23,1,12,NULL,0,0,'2024-04-22 04:27:03'),(24,1,12,NULL,0,0,'2024-04-22 04:39:08'),(25,8,13,NULL,0,0,'2024-04-23 05:35:06'),(26,1,13,NULL,0,0,'2024-04-23 07:25:58'),(27,1,13,NULL,0,0,'2024-04-23 07:26:04'),(28,1,13,NULL,0,0,'2024-04-23 07:26:06'),(29,1,13,NULL,0,0,'2024-04-23 07:26:11'),(30,1,13,NULL,0,0,'2024-04-23 07:26:32'),(31,1,13,NULL,0,0,'2024-04-23 07:26:34'),(32,1,12,NULL,0,0,'2024-04-23 07:26:54'),(33,1,12,NULL,0,0,'2024-04-23 08:52:38'),(34,1,12,NULL,0,0,'2024-04-24 04:35:04'),(35,1,20,'33-1',1,1,'2024-04-24 07:09:03'),(36,1,12,NULL,0,0,'2024-04-24 10:42:25'),(37,1,21,'2-1',1,1,'2024-04-24 12:56:27'),(38,1,12,NULL,0,0,'2024-04-24 12:57:11'),(39,1,12,NULL,0,0,'2024-04-24 13:06:53'),(40,1,20,'1-1',1,1,'2024-04-25 04:27:20'),(41,1,21,'1-1',1,1,'2024-04-25 04:29:24'),(42,1,13,NULL,0,0,'2024-04-25 05:38:19'),(43,1,12,NULL,0,0,'2024-04-25 05:38:39'),(44,1,12,NULL,0,0,'2024-04-25 05:50:17'),(45,1,12,NULL,0,0,'2024-04-25 06:08:27'),(46,1,12,NULL,0,0,'2024-04-25 06:10:11'),(47,1,13,NULL,0,0,'2024-04-25 06:40:05'),(48,1,12,NULL,0,0,'2024-04-25 06:40:11'),(49,1,12,NULL,0,0,'2024-04-25 08:14:20'),(50,1,13,NULL,0,0,'2024-04-25 08:43:19'),(51,1,13,NULL,0,0,'2024-04-25 08:43:22'),(52,1,13,NULL,0,0,'2024-04-25 08:43:22'),(53,1,12,NULL,0,0,'2024-04-25 08:43:24'),(54,1,12,NULL,0,0,'2024-04-25 10:17:36'),(55,1,12,NULL,0,0,'2024-04-25 12:19:01'),(56,1,12,NULL,0,0,'2024-04-25 13:17:35'),(57,1,12,NULL,0,0,'2024-04-25 13:59:30'),(58,1,12,NULL,0,0,'2024-04-26 03:30:16'),(59,1,12,NULL,0,0,'2024-04-26 05:59:49'),(60,1,12,NULL,0,0,'2024-04-26 07:38:25'),(61,1,21,'1-1',1,1,'2024-04-26 09:28:04'),(62,1,12,NULL,0,0,'2024-04-26 10:04:09'),(63,1,12,NULL,0,0,'2024-04-26 10:37:27'),(64,1,12,NULL,0,0,'2024-04-26 12:37:30'),(65,1,12,NULL,0,0,'2024-04-26 12:49:25'),(66,1,12,NULL,0,0,'2024-04-26 12:52:47'),(67,1,12,NULL,0,0,'2024-04-27 03:23:04'),(68,1,12,NULL,0,0,'2024-04-27 05:22:09'),(69,1,12,NULL,0,0,'2024-04-27 07:02:36'),(70,1,12,NULL,0,0,'2024-04-27 09:19:52'),(71,1,12,NULL,0,0,'2024-04-27 11:21:34'),(72,1,12,NULL,0,0,'2024-04-29 03:43:16'),(73,1,12,NULL,0,0,'2024-04-29 04:29:24'),(74,1,12,NULL,0,0,'2024-04-29 04:33:02'),(75,1,12,NULL,0,0,'2024-04-29 04:35:25'),(76,1,12,NULL,0,0,'2024-04-29 04:35:41'),(77,1,13,NULL,0,0,'2024-04-29 04:58:23'),(78,1,12,NULL,0,0,'2024-04-29 04:58:27'),(79,1,13,NULL,0,0,'2024-04-29 06:44:24'),(80,1,12,NULL,0,0,'2024-04-29 06:45:01'),(81,1,12,NULL,0,0,'2024-04-29 07:03:16'),(82,1,13,NULL,0,0,'2024-04-29 07:23:00'),(83,1,13,NULL,0,0,'2024-04-29 07:23:16'),(84,1,13,NULL,0,0,'2024-04-29 07:23:17'),(85,1,13,NULL,0,0,'2024-04-29 07:23:17'),(86,1,13,NULL,0,0,'2024-04-29 07:23:17'),(87,1,13,NULL,0,0,'2024-04-29 07:23:18'),(88,1,12,NULL,0,0,'2024-04-29 08:17:15'),(89,1,12,NULL,0,0,'2024-04-29 08:17:40'),(90,1,12,NULL,0,0,'2024-04-29 10:19:35'),(91,1,21,'7-1',1,1,'2024-04-29 11:47:41'),(92,1,12,NULL,0,0,'2024-04-29 12:19:39'),(93,1,12,NULL,0,0,'2024-04-30 03:35:09'),(94,1,21,'7-1',1,1,'2024-04-30 03:56:52'),(95,1,21,'33-1',1,1,'2024-04-30 03:56:52'),(96,1,12,NULL,0,0,'2024-04-30 05:35:53'),(97,1,21,'7-1',1,1,'2024-04-30 06:29:32'),(98,1,21,'33-1',1,1,'2024-04-30 06:29:32'),(99,1,12,NULL,0,0,'2024-04-30 07:27:59'),(100,1,12,NULL,0,0,'2024-04-30 08:16:03'),(101,1,12,NULL,0,0,'2024-04-30 08:35:44'),(102,1,12,NULL,0,0,'2024-04-30 08:38:48'),(103,1,12,NULL,0,0,'2024-04-30 09:13:50'),(104,1,12,NULL,0,0,'2024-04-30 09:25:11'),(105,1,12,NULL,0,0,'2024-04-30 11:26:57'),(106,1,13,NULL,0,0,'2024-05-02 09:43:42'),(107,1,12,NULL,0,0,'2024-05-02 09:44:16'),(108,1,12,NULL,0,0,'2024-05-02 11:44:58'),(109,1,12,NULL,0,0,'2024-05-02 13:45:41'),(110,1,12,NULL,0,0,'2024-05-02 14:01:54'),(111,1,12,NULL,0,0,'2024-05-02 14:03:24'),(112,1,12,NULL,0,0,'2024-05-02 14:18:30'),(113,1,12,NULL,0,0,'2024-05-02 14:19:58'),(114,1,12,NULL,0,0,'2024-05-02 14:20:34'),(115,1,12,NULL,0,0,'2024-05-03 03:31:07'),(116,1,12,NULL,0,0,'2024-05-03 03:32:59'),(117,1,12,NULL,0,0,'2024-05-03 03:34:03'),(118,1,12,NULL,0,0,'2024-05-03 03:35:24'),(119,1,12,NULL,0,0,'2024-05-03 03:36:09'),(120,1,12,NULL,0,0,'2024-05-03 03:37:15'),(121,1,12,NULL,0,0,'2024-05-03 03:40:59'),(122,1,12,NULL,0,0,'2024-05-03 03:47:31'),(123,1,21,'1-1',1,1,'2024-05-03 03:50:16'),(124,1,12,NULL,0,0,'2024-05-03 03:58:57'),(125,1,12,NULL,0,0,'2024-05-03 04:05:35'),(126,1,12,NULL,0,0,'2024-05-03 04:18:44'),(127,1,12,NULL,0,0,'2024-05-03 04:24:50'),(128,1,12,NULL,0,0,'2024-05-03 04:24:56'),(129,1,12,NULL,0,0,'2024-05-03 04:28:33'),(130,1,12,NULL,0,0,'2024-05-03 04:29:05'),(131,1,12,NULL,0,0,'2024-05-03 04:51:19'),(132,1,12,NULL,0,0,'2024-05-03 06:43:36'),(133,1,12,NULL,0,0,'2024-05-03 06:43:44'),(134,1,12,NULL,0,0,'2024-05-03 06:46:21'),(135,1,12,NULL,0,0,'2024-05-03 06:58:29'),(136,1,12,NULL,0,0,'2024-05-03 07:06:46'),(137,1,12,NULL,0,0,'2024-05-03 07:17:23'),(138,1,12,NULL,0,0,'2024-05-03 07:22:03'),(139,1,12,NULL,0,0,'2024-05-03 07:23:13'),(140,1,12,NULL,0,0,'2024-05-03 07:28:45'),(141,1,12,NULL,0,0,'2024-05-03 07:31:36'),(142,1,12,NULL,0,0,'2024-05-03 07:39:38'),(143,1,12,NULL,0,0,'2024-05-03 08:01:06'),(144,1,12,NULL,0,0,'2024-05-03 08:55:24'),(145,1,21,'1-1',1,1,'2024-05-03 08:56:18'),(146,1,12,NULL,0,0,'2024-05-03 08:58:57'),(147,1,12,NULL,0,0,'2024-05-03 08:59:55'),(148,1,12,NULL,0,0,'2024-05-03 10:40:57'),(149,1,12,NULL,0,0,'2024-05-03 10:41:05'),(150,1,12,NULL,0,0,'2024-05-03 12:27:49'),(151,1,12,NULL,0,0,'2024-05-03 12:37:56'),(152,1,12,NULL,0,0,'2024-05-03 13:06:58');
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager_details`
--

DROP TABLE IF EXISTS `manager_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `storage_id` int NOT NULL,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_manager_details_1_idx` (`user_id`),
  KEY `fk_manager_details_2_idx` (`storage_id`),
  CONSTRAINT `fk_manager_details_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_manager_details_2` FOREIGN KEY (`storage_id`) REFERENCES `storage_space_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager_details`
--

LOCK TABLES `manager_details` WRITE;
/*!40000 ALTER TABLE `manager_details` DISABLE KEYS */;
INSERT INTO `manager_details` VALUES (1,8,1,0),(2,9,2,0),(3,10,3,0),(4,11,4,0),(5,12,5,0),(6,13,9,0),(7,14,7,0),(8,15,8,0),(9,16,5,0),(11,18,9,0),(12,19,1,0),(14,21,4,0);
/*!40000 ALTER TABLE `manager_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option_master`
--

DROP TABLE IF EXISTS `option_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `select_id` int NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `is_delete` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_option_master_1_idx` (`select_id`),
  CONSTRAINT `fk_option_master_1` FOREIGN KEY (`select_id`) REFERENCES `select_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_master`
--

LOCK TABLES `option_master` WRITE;
/*!40000 ALTER TABLE `option_master` DISABLE KEYS */;
INSERT INTO `option_master` VALUES (4,1,'admin','Admin',0),(5,1,'manager','Manager',0),(6,2,'active','Active',0),(7,2,'inactive','Inactive',0),(8,3,'sales','Sales',0),(9,3,'returned','Returned',0),(10,4,'pending','Pending',0),(11,4,'paid','Paid',0),(12,5,'successful_logged_in','Successful Logged In',0),(13,5,'unsuccessful_logged_in','Unsuccessful Logged In',0),(15,7,'stationary','Stationary',0),(16,8,'warehouses','Warehouses',0),(17,8,'stores','Stores',0),(18,8,'distribution_centers','Distribution Centers',0),(19,7,'home','Home',0),(20,5,'stock_out_item','Stock out product',0),(21,5,'near_stock_out','Less Stock',0),(22,3,'partial','Partial',0),(23,7,'Electronics','Electronics',0),(24,7,'Temp','Temp',1),(25,7,'Test','Test',1);
/*!40000 ALTER TABLE `option_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_master`
--

DROP TABLE IF EXISTS `product_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `sku_id` int NOT NULL,
  `category_id` int NOT NULL,
  `cost` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_product_master_3_idx` (`category_id`),
  CONSTRAINT `fk_product_master_3` FOREIGN KEY (`category_id`) REFERENCES `option_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=364 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_master`
--

LOCK TABLES `product_master` WRITE;
/*!40000 ALTER TABLE `product_master` DISABLE KEYS */;
INSERT INTO `product_master` VALUES (1,'Apsara Pencil',14,15,10,'Pencil ka raja',0),(2,'Safari Book',173,15,20,'Animations wise story',0),(3,'Clock',316,15,150,'Best clock',1),(4,'Cello Pen',126127,15,10,'Sabse fast',1),(5,'Table',746,19,400,'Good quality',1),(6,'Chair',467,19,200,'Good woods',1),(7,'LG TV',316112,19,10000,'Led',0),(8,'Samusng TV',348,19,10000,'Best brand',0),(9,'Jeans',36,19,600,'Comfortable clothes',1),(10,'Science book',46,15,150,'Knowledble',1),(11,'Files',70,15,25,'Foldable',0),(12,'Doms Pencil',618999,15,5,'Best items',0),(13,'Eraser',100100,15,5,'Doms eraser',0),(14,'Rounder',936,15,20,'Lid rounder',0),(15,'Camps-box',133,15,30,'Big , small boxes',0),(16,'Stapler',454,15,5,'Kangaroo',0),(17,'Lid-pencil',902,15,10,'Cello',0),(18,'Marke-pen',165,15,20,'Best quality',0),(19,'Highlighter',312,15,30,'Best Highlightr',0),(20,'Fan',281,19,600,'Lighting avilable in fan',0),(21,'Washing machine',121,19,6000,'Good range and budgetable',0),(22,'MI Tv',719,19,10000,'Smart tv',0),(23,'Oneplus TV',128,19,10000,'Best brand',0),(24,'Bajaj Fan',675,19,2000,'Good qual;ity',0),(25,'Tubelight',353,19,1000,'Ujala brand and no expensive',0),(26,'Microwave',868,19,1000,'Micro ',0),(27,'Tshirt',641,19,400,'Polo tshiert avalible',0),(28,'HP laptop',586,19,4000,'Best brand',0),(29,'Plastic Bottle',183,15,101,'No medical issue',0),(30,'Steel Bottle',310,15,500,'Temp. Mantain',0),(31,'Classmate book',327,15,100,'Best pages',0),(32,'Yuva book ',442,15,100,'Jamboo book',0),(33,'Lunch box',603,15,120,'Best quality',0),(34,'Room freshner',652,15,101,'Best quality',0),(35,'CCTV camera',946,19,500,'Best quality',0),(36,'sharpner',929,15,5,'Best quality',0),(37,'Sofa',987,19,2000,'Best quality',0),(38,'Shirt',798,19,400,'Best quality',0),(39,'half sleeve shirt',974,19,500,'Great quality',0),(40,'full sleeve shirt',512,19,600,'Best quality',0),(41,'capri',867,19,500,'Best quality',0),(42,'frok',139,19,400,'Best quality',0),(43,'oversized shirt',470,19,500,'Best quality',0),(44,'Tooth paste',345,19,100,'Best quality',0),(45,'Brush',969,19,20,'Best quality',0),(46,'Dabar toothpaste',1000,19,120,'Best quality',0),(47,'Closeup',852,19,100,'Great quality',0),(48,'colage max fresh',284,19,100,'Great quality',0),(49,'Pounch',573,15,30,'Best quality',0),(50,'SS pen',173,15,10,'Best quality',0),(51,'Map',338,15,5,'Best quality',0),(52,'Sicker',404,15,10,'Best quality',0),(53,'Paper role',527,15,100,'Great quality',0),(54,'File-20',453,15,20,'Great quality',0),(55,'Fiel-25',811,15,25,'Good quality',0),(56,'Keychain',101,15,30,'Best quality',0),(57,'Key stand',393,15,35,'Best quality',0),(58,'Mobiles',625,19,6000,'Best quality',0),(59,'Large white coffee cup',941,15,100,'Best quality',0),(60,'Large blue soda cup',946,15,100,'Best quality',0),(61,'Tv',777,15,10000,'Best quality',0),(62,'Large brown coffee stirrer',90,15,101,'Great quality',0),(63,'Large brown coffee lid',46,15,101,'Great quality',0),(64,'Large white coffee lid',399,15,350,'Best quality',0),(65,'Tv',638,15,101,'Great quality',0),(66,'Large brown coffee stirrer',702,15,101,'Best quality',0),(67,'Large white coffee lid',60,15,101,'Great quality',0),(68,'Large white coffee sleeve',996,15,101,'Great quality',0),(69,'Large white coffee cup',752,15,650,'Great quality',0),(70,'Tv',662,15,101,'Best quality',0),(71,'Tv',761,15,101,'Great quality',0),(72,'Tv',801,15,101,'Great quality',0),(73,'Fridge',313,19,101,'Best quality',0),(74,'Large brown coffee sleeve',45,15,101,'Best quality',0),(75,'Large white coffee sleeve',901,15,650,'Best quality',0),(76,'Fridge',948,19,101,'Great quality',0),(77,'Large brown coffee lid',710,15,101,'Great quality',0),(78,'Fridge',588,19,101,'Great quality',0),(79,'Tv',662,15,650,'Great quality',0),(80,'Fridge',167,19,20000,'Great quality',0),(81,'Large brown coffee sleeve',732,15,101,'Best quality',0),(82,'Large brown coffee stirrer',602,15,101,'Best quality',0),(83,'Fridge',883,19,650,'Great quality',0),(84,'Large blue soda cup',700,15,101,'Best quality',0),(85,'Large white coffee sleeve',917,15,101,'Great quality',0),(86,'Tv',879,15,10000,'Best quality',0),(87,'Dish',669,19,20,'Best quality',0),(88,'Mug',330,15,21,'Best quality',0),(89,'Cup',607,15,50,'Great quality',0),(90,'Blub',761,19,60,'Best quality',0),(91,'Blackberry pen',833,15,15,'Great quality',0),(92,'Large pen',763,15,20,'Best quality',0),(93,'Pencil color',845,19,30,'Great quality',0),(94,'Water color',782,15,60,'Best quality',0),(95,'Color',927,15,50,'Great quality',0),(96,'Sketch book',154,15,90,'Best quality',0),(97,'Drawing Book',221,19,80,'Best quality',0),(98,'Chain',206,15,90,'Great quality',0),(99,'Belt',347,19,100,'Best quality',0),(100,'Nataraj pen',243,19,15,'Best quality',0),(101,'RoomFreshner',271,15,100,'Best quality',0),(357,'Books',256413,19,120,'best books',0),(358,'Apsara Pencil',145434,15,10,'Best quality',0),(359,'Safari Book',173654,15,20,'Best quality',0),(360,'Table',746754,19,40,'Good quality',0),(361,'Science book',464588,15,200,'Knowledble',1),(362,'Science book',464588,15,150,'Knowledble',0),(363,'Test',123456,23,20,'Nothing',0);
/*!40000 ALTER TABLE `product_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_details`
--

DROP TABLE IF EXISTS `products_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_details` (
  `product_id` int NOT NULL,
  `storage_id` int NOT NULL,
  `stock` int DEFAULT '0',
  `is_delete` varchar(45) DEFAULT '0',
  PRIMARY KEY (`product_id`,`storage_id`),
  KEY `fk_products_details_2_idx` (`storage_id`),
  CONSTRAINT `fk_products_details_1` FOREIGN KEY (`product_id`) REFERENCES `product_master` (`id`),
  CONSTRAINT `fk_products_details_2` FOREIGN KEY (`storage_id`) REFERENCES `storage_space_master` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_details`
--

LOCK TABLES `products_details` WRITE;
/*!40000 ALTER TABLE `products_details` DISABLE KEYS */;
INSERT INTO `products_details` VALUES (1,1,33,'0'),(1,2,180,'0'),(1,3,1000,'0'),(1,5,500,'0'),(1,7,545,'0'),(2,1,65,'0'),(2,5,10,'0'),(2,7,545,'0'),(3,1,371,'0'),(3,5,900,'0'),(3,9,745,'0'),(4,1,504,'0'),(4,5,800,'0'),(6,4,256,'0'),(7,1,5,'0'),(8,3,723,'0'),(9,7,941,'1'),(11,7,559,'0'),(12,1,367,'0'),(12,5,700,'0'),(13,1,335,'0'),(13,5,708,'0'),(14,1,846,'0'),(14,9,8,'0'),(15,1,237,'0'),(16,1,994,'0'),(17,3,542,'0'),(18,3,478,'0'),(19,1,183,'0'),(20,5,400,'0'),(20,7,320,'0'),(21,1,700,'0'),(21,5,456,'0'),(22,1,793,'0'),(23,3,384,'1'),(24,4,619,'0'),(25,4,378,'0'),(26,1,179,'0'),(27,4,846,'0'),(28,1,26,'0'),(29,3,585,'0'),(30,3,489,'0'),(31,1,496,'0'),(32,1,450,'0'),(32,9,587,'0'),(33,1,2,'0'),(34,4,346,'0'),(35,4,207,'0'),(36,1,700,'0'),(37,4,285,'0'),(38,1,949,'0'),(39,4,183,'0'),(40,1,862,'0'),(41,4,800,'0'),(41,5,987,'0'),(41,9,245,'0'),(42,1,486,'0'),(43,5,697,'0'),(44,1,238,'0'),(45,1,845,'0'),(46,5,538,'0'),(47,5,997,'0'),(48,1,488,'0'),(49,1,473,'0'),(50,1,144,'0'),(50,5,876,'0'),(51,1,314,'0'),(52,1,801,'0'),(52,9,36,'0'),(53,1,545,'0'),(54,1,775,'0'),(55,9,1000,'0'),(56,1,710,'0'),(57,1,538,'0'),(58,1,342,'0'),(59,9,878,'0'),(60,1,736,'0'),(60,5,545,'0'),(61,1,981,'0'),(62,1,481,'0'),(62,9,745,'0'),(63,1,413,'0'),(64,9,144,'0'),(65,1,978,'0'),(65,5,6543,'0'),(66,5,805,'0'),(67,1,445,'0'),(68,1,873,'0'),(69,9,601,'0'),(70,1,256,'0'),(71,5,314,'0'),(72,1,768,'0'),(73,1,751,'0'),(74,1,795,'0'),(74,9,654,'0'),(75,1,313,'0'),(75,9,4514,'0'),(76,5,873,'0'),(77,1,934,'0'),(78,2,406,'0'),(79,1,588,'0'),(80,1,771,'0'),(81,1,458,'0'),(82,1,233,'0'),(83,1,525,'0'),(84,1,828,'0'),(85,1,995,'0'),(85,9,541,'0'),(86,1,913,'0'),(87,1,784,'0'),(87,9,547,'0'),(88,1,975,'0'),(89,2,52,'0'),(90,1,1824,'0'),(91,1,812,'0'),(92,1,80,'0'),(93,1,118,'0'),(94,1,630,'0'),(95,1,707,'0'),(96,1,324,'0'),(97,2,932,'0'),(98,2,80,'0'),(99,1,783,'0'),(99,9,587,'0'),(100,1,843,'0'),(101,1,458,'0'),(357,2,98,'0'),(358,1,22,'0'),(359,1,216,'0'),(360,1,353,'0'),(362,1,200,'0'),(362,3,295,'0');
/*!40000 ALTER TABLE `products_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `sales_ins_stock_out_log` AFTER INSERT ON `products_details` FOR EACH ROW begin
if new.stock = 0 then
insert into logs
(user_id, type_id, `description`, `notify`)
SELECT
(SELECT
users.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
JOIN
users
ON
users.role_id = opt.id
WHERE
sel.key = 'roles'
AND
opt.key = 'admin'
),
            (SELECT
opt.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
WHERE
sel.key = 'logType'
AND
opt.key = 'stock_out_item'
),
            CONCAT_WS("-", new.product_id, new.storage_id),
            1;
end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `sales_ins_near_stock_out_log` AFTER INSERT ON `products_details` FOR EACH ROW begin
if new.stock <= 5 and new.stock > 0 then
insert into logs
(user_id, type_id, `description`, `notify`)
SELECT
(SELECT
users.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
JOIN
users
ON
users.role_id = opt.id
WHERE
sel.key = 'roles'
AND
opt.key = 'admin'
),
            (SELECT
opt.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
WHERE
sel.key = 'logType'
AND
opt.key = 'near_stock_out'
),
            CONCAT_WS("-", new.product_id, new.storage_id),
            1;
end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `sales_update_stock_out_log` BEFORE UPDATE ON `products_details` FOR EACH ROW begin
if new.stock = 0 then
insert into logs
(user_id, type_id, `description`, `notify`)
SELECT
(SELECT
users.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
JOIN
users
ON
users.role_id = opt.id
WHERE
sel.key = 'roles'
AND
opt.key = 'admin'
),
            (SELECT
opt.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
WHERE
sel.key = 'logType'
AND
opt.key = 'stock_out_item'
),
            CONCAT_WS("-", new.product_id, new.storage_id),
            1;
end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `sales_update_near_stock_out_log` BEFORE UPDATE ON `products_details` FOR EACH ROW begin
if new.stock <= 5 and new.stock > 0 then
insert into logs
(user_id, type_id, `description`, `notify`)
SELECT
(SELECT
users.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
JOIN
users
ON
users.role_id = opt.id
WHERE
sel.key = 'roles'
AND
opt.key = 'admin'
),
            (SELECT
opt.id as id
FROM
option_master as opt
JOIN
select_master as sel
ON
opt.select_id = sel.id
WHERE
sel.key = 'logType'
AND
opt.key = 'near_stock_out'
),
            CONCAT_WS("-", new.product_id, new.storage_id),
            1;
end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `purchase_order`
--

DROP TABLE IF EXISTS `purchase_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `supplier_id` int NOT NULL,
  `storage_id` int NOT NULL,
  `amount` int DEFAULT '0',
  `payment_status` int NOT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_purchase_order_1_idx` (`supplier_id`),
  KEY `fk_purchase_order_2_idx` (`payment_status`),
  KEY `fk_purchase_order_3_idx` (`storage_id`),
  CONSTRAINT `fk_purchase_order_1` FOREIGN KEY (`supplier_id`) REFERENCES `supplier_master` (`id`),
  CONSTRAINT `fk_purchase_order_2` FOREIGN KEY (`payment_status`) REFERENCES `option_master` (`id`),
  CONSTRAINT `fk_purchase_order_3` FOREIGN KEY (`storage_id`) REFERENCES `storage_space_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=226 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_order`
--

LOCK TABLES `purchase_order` WRITE;
/*!40000 ALTER TABLE `purchase_order` DISABLE KEYS */;
INSERT INTO `purchase_order` VALUES (1,'Pens',1,1,500,10,NULL,'2024-04-11 12:11:52','2024-04-30 04:15:02',0),(2,'Pens',37,2,500,10,NULL,'2024-04-11 12:24:15','2024-04-30 09:44:35',0),(3,'abc',20,2,200,11,'2024-04-19 04:00:00','2024-04-18 04:46:05','2024-04-30 05:23:51',0),(4,'product',37,5,683,11,'2021-10-15 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',1),(5,'product',6,4,848,11,'2023-11-15 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(6,'product',19,5,128,11,'2022-04-24 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(7,'product',7,2,687,10,'2022-04-22 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(8,'product',14,2,404,10,'2021-11-14 05:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(9,'product',15,1,339,11,'2021-02-24 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(10,'product',10,6,383,10,'2021-05-18 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(11,'product',16,5,592,11,'2021-06-21 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(12,'product',6,3,551,11,'2022-07-20 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(13,'product',20,3,175,11,'2021-07-23 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(14,'product',4,2,387,10,'2022-01-08 05:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(15,'product',10,1,902,11,'2020-02-26 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(16,'product',12,4,382,11,'2021-06-09 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(17,'product',12,1,785,10,'2021-06-02 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(18,'product',15,5,272,11,'2021-05-16 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(19,'product',10,6,936,11,'2022-08-12 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(20,'product',19,3,789,10,'2023-02-24 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(21,'product',15,1,881,10,'2021-07-05 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(22,'product',18,2,935,10,'2023-10-03 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(23,'product',7,5,520,11,'2021-10-23 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(24,'product',15,1,769,10,'2022-01-24 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(25,'product',2,1,765,10,'2020-02-17 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(26,'product',8,5,775,10,'2021-01-03 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(27,'product',14,5,685,11,'2023-07-28 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(28,'product',2,6,491,11,'2022-03-26 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(29,'product',10,5,678,10,'2020-01-21 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(30,'product',19,5,793,10,'2023-10-25 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(31,'product',35,7,542,10,'2021-05-10 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(32,'product',14,7,109,10,'2023-03-20 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(33,'product',14,5,851,11,'2023-12-24 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(34,'product',9,2,811,11,'2022-10-05 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(35,'product',11,2,367,10,'2022-07-11 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(36,'product',19,3,113,11,'2022-07-29 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(37,'product',7,2,257,11,'2020-09-01 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(38,'product',17,3,477,10,'2021-12-28 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(39,'product',19,1,872,10,'2023-03-08 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(40,'product',20,4,126,11,'2023-04-23 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(41,'product',6,4,550,11,'2021-12-09 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(42,'product',13,4,829,10,'2021-07-22 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(43,'product',11,1,425,11,'2023-09-12 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(44,'product',3,4,769,10,'2020-01-27 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(45,'product',8,1,1000,10,'2023-04-07 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(46,'product',16,4,315,10,'2020-07-11 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(47,'product',6,1,190,10,'2023-12-07 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(48,'product',11,5,475,10,'2021-04-15 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(49,'product',3,1,919,10,'2020-05-13 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(50,'product',12,5,213,10,'2020-02-11 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(51,'product',4,1,753,11,'2021-12-21 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(52,'product',18,5,349,11,'2021-08-29 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(53,'product',3,5,326,10,'2022-07-20 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(54,'product',12,5,542,10,'2022-03-07 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(55,'product',13,6,230,11,'2021-10-09 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(56,'product',14,6,165,10,'2020-06-12 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(57,'product',18,6,590,10,'2021-02-09 05:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(58,'product',6,7,706,11,'2020-05-09 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(59,'product',20,7,214,10,'2020-11-07 05:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(60,'product',5,7,228,10,'2023-07-22 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(61,'product',6,5,215,11,'2020-11-15 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(62,'product',17,5,216,10,'2021-06-20 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(63,'product',7,5,364,10,'2020-02-22 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(64,'product',35,3,318,10,'2020-06-06 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(65,'product',10,3,222,11,'2022-03-22 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(66,'product',4,2,327,11,'2023-06-08 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(67,'product',16,1,682,10,'2020-02-07 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(68,'product',16,2,123,11,'2020-07-21 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(69,'product',3,3,193,11,'2023-12-24 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(70,'product',19,4,356,10,'2023-05-12 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(71,'product',14,5,968,10,'2022-12-14 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(72,'product',9,6,426,11,'2023-07-05 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(73,'product',18,2,311,11,'2023-12-03 05:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(74,'product',6,5,242,11,'2021-09-26 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(75,'product',1,2,652,10,'2022-06-25 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(76,'product',10,2,237,10,'2021-08-27 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(77,'product',16,2,601,10,'2020-08-07 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(78,'product',8,4,452,11,'2023-06-27 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(79,'product',19,1,523,11,'2023-10-04 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(80,'product',19,5,393,10,'2021-10-10 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(81,'product',17,1,728,11,'2022-11-10 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(82,'product',7,1,918,10,'2020-02-25 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(83,'product',18,1,892,11,'2023-10-03 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(84,'product',13,5,416,10,'2021-01-20 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(85,'product',9,1,511,10,'2021-06-14 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(86,'product',3,5,913,11,'2020-04-04 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(87,'product',17,1,786,10,'2022-04-30 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(88,'product',11,1,467,11,'2023-07-09 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(89,'product',7,1,602,10,'2020-05-25 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(90,'product',35,1,539,10,'2023-08-07 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(91,'product',18,1,188,11,'2023-08-30 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(92,'product',7,1,977,10,'2020-07-12 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(93,'product',4,1,535,10,'2022-11-26 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(94,'product',20,1,648,11,'2020-04-28 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(95,'product',19,1,183,10,'2020-03-11 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(96,'product',9,1,775,11,'2023-10-25 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(97,'product',19,1,485,11,'2022-09-22 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(98,'product',7,1,275,11,'2020-01-13 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(99,'product',17,1,237,11,'2022-01-20 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(100,'product',20,1,652,10,'2022-01-13 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(101,'product',6,1,602,10,'2023-03-04 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(102,'product',30,1,166,10,'2023-08-25 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(103,'product',7,1,711,10,'2022-12-01 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(104,'product',3,9,483,11,'2021-12-29 05:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(105,'product',10,1,388,10,'2020-12-11 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(106,'product',12,9,4801,10,'2011-11-10 18:30:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(107,'product',9,1,389,11,'2023-03-09 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(108,'product',15,1,545,10,'2021-01-28 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(109,'product',19,1,552,11,'2021-01-30 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(110,'product',18,1,289,10,'2022-05-18 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(111,'product',28,9,253,10,'2022-01-27 05:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(112,'product',3,9,360,11,'2023-02-16 05:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(113,'product',27,1,935,10,'2022-11-01 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(114,'product',16,1,679,11,'2022-05-22 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(115,'product',3,9,403,11,'2021-08-09 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(116,'product',12,1,875,11,'2021-08-16 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(117,'product',27,9,157,10,'2021-12-02 05:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(118,'product',10,1,342,11,'2023-04-15 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(119,'product',11,1,312,11,'2022-08-29 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(120,'product',6,9,694,10,'2020-12-13 05:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(121,'product',1,1,162,10,'2023-12-04 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(122,'product',17,1,421,11,'2022-05-23 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(123,'product',4,1,471,10,'2021-12-23 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(124,'product',25,1,928,10,'2022-04-22 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(125,'product',14,1,710,10,'2023-06-11 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(126,'product',20,1,519,10,'2021-11-29 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(127,'product',7,9,248,10,'2023-04-10 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(128,'product',26,9,968,10,'2022-06-16 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(129,'product',25,9,278,10,'2020-11-21 05:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(130,'product',8,1,618,10,'2023-06-22 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(131,'product',18,1,152,11,'2021-04-04 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(132,'product',4,1,960,11,'2023-11-15 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(133,'product',11,9,846,11,'2023-11-24 05:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(134,'product',14,1,438,11,'2020-06-24 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(135,'product',12,1,758,11,'2023-04-03 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(136,'product',17,9,957,10,'2023-02-12 05:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(137,'product',5,5,613,10,'2022-01-18 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(138,'product',8,1,107,10,'2022-05-30 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(139,'product',6,1,466,11,'2022-11-15 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(140,'product',19,1,569,10,'2022-02-14 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(141,'product',16,1,938,10,'2022-12-14 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(142,'product',15,1,902,10,'2023-08-12 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(143,'product',20,1,957,10,'2021-07-22 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(144,'product',20,1,314,10,'2020-04-17 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(145,'product',6,5,733,10,'2022-01-27 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(146,'product',20,1,975,11,'2023-09-20 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(147,'product',4,5,498,11,'2023-06-02 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(148,'product',2,1,945,10,'2022-02-09 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(149,'product',9,1,740,11,'2022-03-12 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(150,'product',23,5,518,10,'2023-04-19 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',1),(151,'product',11,1,340,11,'2021-06-23 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(152,'product',29,1,674,11,'2023-07-25 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(153,'product',19,1,280,11,'2023-06-10 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(154,'product',9,1,728,10,'2020-08-16 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(155,'product',2,1,539,10,'2022-03-27 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(156,'product',16,1,642,11,'2020-10-17 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(157,'product',17,1,914,10,'2023-07-27 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(158,'product',17,1,742,10,'2021-04-25 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(159,'product',3,1,358,10,'2023-10-02 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(160,'product',9,1,410,10,'2020-07-21 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(161,'product',14,1,802,10,'2021-02-12 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(162,'product',19,1,276,11,'2021-07-23 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(163,'product',5,1,198,11,'2023-08-27 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(164,'product',2,5,784,10,'2021-01-22 05:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(165,'product',12,1,189,10,'2023-09-08 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(166,'product',1,5,593,11,'2022-10-07 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(167,'product',20,7,922,10,'2020-02-25 05:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(168,'product',12,1,958,10,'2023-07-19 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(169,'product',13,4,966,10,'2022-09-24 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(170,'product',12,1,341,11,'2023-07-02 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(171,'product',15,2,650,10,'2021-12-16 05:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(172,'product',14,2,718,11,'2022-06-24 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(173,'product',13,5,557,10,'2021-11-26 05:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',1),(174,'product',20,1,503,10,'2022-08-21 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(175,'product',18,1,789,10,'2022-01-28 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(176,'product',8,1,867,10,'2021-01-15 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(177,'product',8,7,945,11,'2020-05-15 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(178,'product',13,7,699,11,'2023-09-20 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(179,'product',19,1,390,10,'2021-06-18 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(180,'product',15,7,759,11,'2022-07-06 04:00:00','2024-04-18 07:48:57','2024-04-30 06:29:04',0),(181,'product',17,4,687,10,'2022-08-28 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(182,'product',8,4,505,11,'2023-12-27 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(183,'product',1,1,633,10,'2022-07-13 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(184,'product',11,6,729,11,'2020-02-06 05:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(185,'product',16,1,404,10,'2021-12-09 05:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(186,'product',11,6,372,10,'2021-05-09 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(187,'product',16,1,486,11,'2023-03-26 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(188,'product',15,5,842,11,'2022-04-17 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(189,'product',25,1,547,10,'2023-09-11 04:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',0),(190,'product',2,5,981,10,'2020-07-15 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(191,'product',21,5,440,11,'2020-12-06 05:00:00','2024-04-18 07:48:57','2024-04-30 09:44:35',1),(192,'product',14,4,339,11,'2023-01-23 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(193,'product',18,4,433,10,'2021-05-08 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(194,'product',20,4,861,10,'2021-05-26 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(195,'product',12,5,873,10,'2020-09-13 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(196,'product',11,2,220,11,'2020-09-22 04:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(197,'product',13,3,103,11,'2023-09-03 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(198,'product',7,1,620,10,'2022-08-24 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(199,'product',8,4,561,11,'2020-12-25 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(200,'product',16,5,470,10,'2021-03-17 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(201,'product',17,4,739,10,'2021-06-26 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(202,'product',17,6,698,11,'2023-11-01 04:00:00','2024-04-18 07:48:57','2024-04-30 06:30:07',1),(203,'product',13,4,588,11,'2020-01-10 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(204,'product',11,5,399,10,'2022-09-21 04:00:00','2024-04-18 07:48:57','2024-04-30 07:26:56',1),(205,'product',16,4,578,10,'2020-10-06 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(206,'product',14,2,304,10,'2020-02-07 05:00:00','2024-04-18 07:48:57','2024-04-30 05:23:51',0),(207,'product',8,1,351,11,'2020-10-19 04:00:00','2024-04-18 07:48:57','2024-04-30 04:15:02',0),(208,'product',11,4,434,10,'2020-07-03 04:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(209,'product',7,8,242,11,'2021-03-09 05:00:00','2024-04-18 07:48:57','2024-04-24 10:59:27',0),(210,'vbc',1,5,111,10,'2001-11-10 18:30:00','2024-04-24 05:09:23','2024-04-30 07:26:56',1),(211,'Akai TV',9,2,152,11,'2011-11-10 18:30:00','2024-04-24 10:48:46','2024-04-30 05:23:51',0),(212,'dfgdfgdfgdf',12,1,15,11,'2036-11-10 18:30:00','2024-04-25 05:30:52','2024-04-30 04:15:02',0),(213,'Mi Tv',16,8,1200,11,'2011-11-10 18:30:00','2024-04-29 06:12:23','2024-04-29 06:12:23',0),(214,'Mi Tv',19,8,5000,11,'2011-11-10 18:30:00','2024-04-29 06:18:08','2024-04-29 06:18:08',0),(215,'Mi Tv',21,8,20000,11,'2011-11-10 18:30:00','2024-04-29 06:20:05','2024-04-29 06:20:05',0),(216,'ASWDFSGHJ',18,1,2000,10,'2024-04-01 18:30:00','2024-04-29 06:39:33','2024-04-30 09:54:12',0),(217,'GSDRTSDR',29,1,100,10,'2024-04-07 18:30:00','2024-04-29 07:04:46','2024-04-30 09:44:35',0),(218,'dzxfgbs',26,1,10,10,'2024-04-28 18:30:00','2024-04-29 07:10:18','2024-04-30 09:44:35',0),(219,'Test',19,1,400,10,'2024-05-01 18:30:00','2024-05-02 09:04:58','2024-05-02 09:05:04',0),(220,'Test',16,1,400,10,'2024-05-01 18:30:00','2024-05-02 09:05:37','2024-05-02 09:05:44',0),(221,'Order Test',22,1,6000,10,'2024-05-01 18:30:00','2024-05-02 13:47:34','2024-05-02 13:47:53',0),(222,'Test',15,3,400,10,'2024-05-02 18:30:00','2024-05-03 04:23:18','2024-05-03 04:23:34',0),(223,'Science Book',12,1,4000,10,'2024-05-02 18:30:00','2024-05-03 04:54:05','2024-05-03 04:54:35',0),(224,'Test',5,2,4000,10,'2024-05-02 18:30:00','2024-05-03 07:41:19','2024-05-03 07:41:25',0),(225,'Test',1,1,1040,10,'2024-05-02 18:30:00','2024-05-03 13:02:47','2024-05-03 13:03:05',0);
/*!40000 ALTER TABLE `purchase_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_products`
--

DROP TABLE IF EXISTS `purchase_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `purchase_id` int NOT NULL,
  `product_id` int NOT NULL,
  `unit_price` int NOT NULL,
  `quantity` int NOT NULL,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`product_id`,`purchase_id`),
  KEY `fk_purchase_details_1_idx` (`purchase_id`),
  KEY `fk_purchase_details_2_idx` (`product_id`),
  CONSTRAINT `fk_purchase_details_1` FOREIGN KEY (`purchase_id`) REFERENCES `purchase_order` (`id`),
  CONSTRAINT `fk_purchase_details_2` FOREIGN KEY (`product_id`) REFERENCES `product_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_products`
--

LOCK TABLES `purchase_products` WRITE;
/*!40000 ALTER TABLE `purchase_products` DISABLE KEYS */;
INSERT INTO `purchase_products` VALUES (1,12,17,22,15,0),(2,8,99,88,10,0),(3,16,27,28,9,0),(4,18,47,20,13,0),(5,11,67,82,20,0),(6,13,98,40,15,0),(7,19,61,72,10,0),(8,15,77,93,10,0),(9,4,98,10,10,0),(10,2,14,38,17,0),(11,11,73,76,16,0),(12,20,49,32,20,0),(13,1,14,10,4,0),(14,15,61,71,13,0),(15,19,56,74,14,0),(16,19,12,78,16,0),(17,20,29,45,4,0),(18,12,28,36,8,0),(19,15,62,21,3,0),(20,8,79,2,10,0),(21,8,10,12,18,0),(22,17,68,83,7,0),(23,16,67,72,18,0),(24,11,20,38,20,0),(25,20,55,9,11,0),(26,15,19,78,20,0),(27,6,37,9,4,0),(28,9,90,74,19,0),(29,5,64,14,4,0),(30,10,26,75,12,0),(31,11,9,67,16,0),(32,7,23,21,14,0),(33,9,80,93,1,0),(34,15,79,7,18,0),(35,8,58,63,18,0),(36,2,60,1,3,0),(37,8,52,69,18,0),(38,6,92,56,14,0),(39,18,53,25,10,0),(40,15,36,25,17,0),(41,7,43,33,12,0),(42,18,54,8,16,0),(43,16,21,34,14,0),(44,7,94,72,14,0),(45,16,99,81,15,0),(46,17,7,51,11,0),(47,15,50,2,18,0),(48,14,37,30,7,0),(49,9,16,97,20,0),(50,16,79,74,17,0),(51,20,32,74,18,0),(52,8,33,37,1,0),(53,13,10,1,12,0),(54,14,73,57,8,0),(55,13,61,66,13,0),(56,5,92,46,3,0),(57,20,54,69,1,0),(58,7,99,75,13,0),(59,9,44,87,10,0),(60,8,9,56,13,0),(61,11,67,89,10,0),(62,13,81,79,17,0),(63,7,24,89,12,0),(64,2,69,52,14,0),(65,3,92,25,4,0),(66,12,85,63,8,0),(67,14,95,72,10,0),(68,9,33,89,3,0),(69,12,4,10,1,0),(70,12,32,99,2,0),(71,6,1,44,13,0),(72,11,34,77,14,0),(73,6,48,20,16,0),(74,5,97,97,19,0),(75,8,41,84,19,0),(76,19,22,20,10,0),(77,5,8,30,7,0),(78,1,6,3,3,0),(79,20,77,70,15,0),(80,13,6,31,20,0),(81,3,79,59,3,0),(82,4,1,71,8,0),(83,14,98,22,12,0),(84,2,27,39,5,0),(85,12,87,31,7,0),(86,4,39,41,18,0),(87,9,17,76,17,0),(88,15,22,76,5,0),(89,14,77,79,18,0),(90,12,40,98,8,0),(91,9,66,74,9,0),(92,16,27,46,11,0),(93,5,98,44,18,0),(94,15,11,32,12,0),(95,13,59,51,2,0),(96,3,89,84,9,0),(97,2,85,27,19,0),(98,5,10,76,16,0),(99,19,79,89,16,0),(100,4,2,79,11,0),(101,4,15,73,4,0),(102,6,55,26,18,0),(103,16,3,7,17,0),(104,11,8,81,6,0),(105,14,100,30,20,0),(106,20,62,62,18,0),(107,17,54,44,5,0),(108,20,97,37,4,0),(109,6,52,66,20,0),(110,2,15,83,8,0),(111,18,55,71,15,0),(112,2,3,74,19,0),(113,16,62,18,10,0),(114,5,45,13,19,0),(115,7,28,29,20,0),(116,7,66,57,12,0),(117,16,18,39,19,0),(118,1,27,39,20,0),(119,5,16,46,2,0),(120,5,41,33,18,0),(121,4,96,74,10,0),(122,9,23,95,2,0),(123,17,20,2,9,0),(124,5,84,97,3,0),(125,17,49,73,11,0),(126,9,39,19,15,0),(127,17,30,42,16,0),(128,17,26,90,16,0),(129,15,37,98,2,0),(130,9,21,56,5,0),(131,15,71,77,9,0),(132,3,97,53,13,0),(133,5,8,47,16,0),(134,20,45,27,4,0),(135,10,20,63,11,0),(136,10,5,84,15,0),(137,18,71,30,11,0),(138,6,94,85,3,0),(139,18,87,5,20,0),(140,2,9,77,15,0),(141,5,43,49,2,0),(142,11,56,55,1,0),(143,17,24,33,14,0),(144,6,86,25,14,0),(145,6,1,3,20,0),(146,5,29,6,12,0),(147,5,28,61,12,0),(148,8,99,88,8,0),(149,13,93,21,11,0),(150,1,71,7,1,0),(151,14,81,70,14,0),(152,18,4,65,13,0),(153,19,6,11,6,0),(154,2,30,57,14,0),(155,12,17,11,20,0),(156,4,75,21,9,0),(157,5,79,71,6,0),(158,19,11,23,20,0),(159,13,54,14,11,0),(160,19,75,23,14,0),(161,17,4,79,13,0),(162,3,51,60,7,0),(163,1,40,55,14,0),(164,8,62,100,12,0),(165,16,73,86,16,0),(166,1,12,52,19,0),(167,19,70,97,5,0),(168,11,5,51,16,0),(169,16,6,18,19,0),(170,15,91,30,10,0),(171,12,17,60,11,0),(172,16,48,42,9,0),(173,9,34,92,15,0),(174,13,40,83,4,0),(175,13,99,49,15,0),(176,18,67,26,9,0),(177,20,72,19,7,0),(178,14,91,71,5,0),(179,4,36,32,12,0),(180,6,98,87,190,0),(181,2,8,60,7,0),(182,18,58,86,1,0),(183,9,99,40,6,0),(184,9,73,81,13,0),(185,9,94,58,7,0),(186,11,38,4,14,0),(187,17,74,51,5,0),(188,16,84,7,19,0),(189,19,100,75,17,0),(190,10,36,41,12,0),(191,3,81,51,3,0),(192,17,54,25,4,0),(193,5,78,73,14,0),(194,20,19,11,4,0),(195,19,5,86,10,0),(196,6,73,18,8,0),(197,3,58,50,17,0),(198,18,70,67,19,0),(199,16,58,88,4,0),(200,8,36,56,20,0),(201,3,8,40,16,0),(202,1,4,14,20,0),(203,20,5,16,17,0),(204,15,13,39,16,0),(205,1,15,53,8,0),(206,4,6,20,4,0),(207,2,63,29,11,0),(208,212,7,15000,5,0),(209,213,1,10,60,0),(210,213,5,1000,60,0),(211,213,34,200,10,0),(212,213,20,600,20,0),(213,214,1,100,100,0),(214,215,1,10,200,0),(215,217,1,10,20,0),(216,219,1,20,20,0),(217,220,2,20,20,0),(218,221,3,30,200,0),(219,222,23,20,20,0),(220,223,362,20,200,0),(221,224,1,20,200,0),(222,225,1,20,26,0),(223,225,2,20,26,0);
/*!40000 ALTER TABLE `purchase_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `update_product_stock_while_insert` AFTER INSERT ON `purchase_products` FOR EACH ROW begin
UPDATE purchase_order SET amount = amount + new.unit_price * new.quantity WHERE id = new.purchase_id;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `update_product_stock_while_update` AFTER UPDATE ON `purchase_products` FOR EACH ROW begin
	if new.is_delete = 1 then
		UPDATE purchase_order SET amount = amount - (old.unit_price * old.quantity) WHERE id = old.purchase_id;
	else
		UPDATE purchase_order SET amount = amount + ((new.unit_price * new.quantity) - (old.unit_price * old.quantity)) WHERE id = new.purchase_id;
	end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `sales_order`
--

DROP TABLE IF EXISTS `sales_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sales_name` varchar(100) DEFAULT NULL,
  `customer_id` int NOT NULL,
  `type` int NOT NULL,
  `amount` int DEFAULT NULL,
  `shipping_address` varchar(100) NOT NULL,
  `payment_status` int DEFAULT NULL,
  `order_date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  `storage_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_master_2_idx` (`customer_id`),
  KEY `fk_order_master_1_idx` (`type`),
  KEY `fk_sales_order_1_idx` (`storage_id`),
  CONSTRAINT `fk_order_master_1` FOREIGN KEY (`type`) REFERENCES `option_master` (`id`),
  CONSTRAINT `fk_order_master_2` FOREIGN KEY (`customer_id`) REFERENCES `customer_master` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_sales_order_1` FOREIGN KEY (`storage_id`) REFERENCES `storage_space_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_order`
--

LOCK TABLES `sales_order` WRITE;
/*!40000 ALTER TABLE `sales_order` DISABLE KEYS */;
INSERT INTO `sales_order` VALUES (1,'product',1,8,133720,'adadad',10,'2024-04-18 18:30:00','2024-04-09 09:11:28','2024-04-30 04:14:34',0,1),(2,'product',6,8,70498,'Muscat',10,'2024-04-17 18:30:00','2024-04-18 07:16:23','2024-04-30 08:55:53',0,2),(3,'product',3,8,116655,'fdmjhlo;',10,'2024-03-18 18:30:00','2024-04-18 07:16:23','2024-04-30 09:29:33',0,1),(4,'product',5,8,61408,'Tskhinvali',10,'2024-03-19 18:30:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,9),(5,'product',20,8,581,'Malabo',11,'2024-02-18 05:00:00','2024-02-18 07:16:23','2024-04-30 09:30:12',0,1),(6,'product',19,9,934,'Split (city)',11,'2024-01-21 05:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,5),(7,'product',67,9,362,'Skopje',11,'2024-01-16 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,5),(8,'product',74,8,174,'Dalian',10,'2023-11-05 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,5),(9,'product',8,9,906,'Rosario',10,'2023-11-15 05:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(10,'product',14,8,713,'Honolulu',11,'2024-02-22 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(11,'product',64,9,539,'Kandahar',11,'2024-01-02 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(12,'product',89,9,857,'Gaza',10,'2021-02-19 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(13,'product',78,8,760,'Jayapura',11,'2023-01-15 05:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(14,'product',87,8,233,'Split (city)',11,'2024-02-20 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(15,'product',89,9,829,'Surabaya',10,'2024-03-21 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,9),(16,'product',87,8,194,'Huế',11,'2024-01-18 05:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(17,'product',53,9,165,'Tamale',10,'2023-11-26 05:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(18,'product',48,9,604,'Mexico City',11,'2021-05-22 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(19,'product',40,8,678,'Gothenburg',11,'2021-03-19 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(20,'product',58,8,356,'Muscat',11,'2023-12-24 05:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(21,'product',83,9,765,'Darwin',11,'2023-12-04 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,9),(22,'product',31,9,179,'Mashhad',10,'2023-11-01 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(23,'product',46,8,535,'Kaesong',10,'2023-12-24 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(24,'product',73,9,836,'Rosario',10,'2023-11-05 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(25,'product',24,9,812,'Barcelona',10,'2024-01-26 05:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(26,'product',97,8,141,'Rotterdam',11,'2024-02-08 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,9),(27,'product',49,8,834,'Funafuti',11,'2024-02-28 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(28,'product',26,9,803,'Dalian',10,'2023-12-01 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(29,'product',84,8,147,'Nicosia',11,'2024-03-03 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(30,'product',8,8,650,'Kuching',11,'2020-11-24 05:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(31,'product',25,8,400,'Timbuktu',11,'2022-03-19 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(32,'product',38,8,304,'Sacramento',10,'2020-12-03 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(33,'product',90,9,986,'St. George\'s',11,'2023-06-15 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(34,'product',26,9,196,'Atlanta',11,'2020-12-06 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(35,'product',15,8,468,'Ljubljana',10,'2021-03-01 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(36,'product',40,9,860,'San José',11,'2022-07-27 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(37,'product',16,9,565,'Rotterdam',10,'2022-08-21 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(38,'product',12,9,654,'Ilhéus',11,'2023-10-03 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(39,'product',14,8,363,'Yamoussoukro',10,'2021-02-05 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(40,'product',60,9,600,'Manama',11,'2023-12-03 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(41,'product',100,9,158,'Enugu',10,'2023-02-15 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(42,'product',11,9,843,'Mumbai',11,'2020-08-10 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(43,'product',65,9,934,'Qingdao',10,'2023-10-13 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(44,'product',18,8,684,'Chaguanas',11,'2020-11-29 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(45,'product',66,9,642,'Juneau',11,'2023-11-12 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(46,'product',41,9,755,'Calgary',10,'2020-01-16 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(47,'product',37,8,641,'Fukuoka',11,'2021-09-14 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(48,'product',42,8,330,'George Town',10,'2023-04-16 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(49,'product',36,9,413,'Tskhinvali',11,'2022-12-04 05:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(50,'product',71,9,675,'Cardiff',10,'2021-10-18 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(51,'product',72,8,193,'Banjul',10,'2022-09-30 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(52,'product',86,8,737,'Toronto',10,'2020-09-23 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(53,'product',50,9,770,'Jaipur',11,'2020-04-10 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(54,'product',96,8,977,'Dhaka',10,'2021-02-15 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(55,'product',42,8,498,'Pristina',11,'2022-02-11 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(56,'product',69,8,899,'Roseau',11,'2022-11-09 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(57,'product',92,9,169,'Lilongwe',11,'2021-10-08 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(58,'product',94,9,269,'Managua',11,'2020-01-14 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(59,'product',29,8,524,'Pattaya',11,'2022-05-24 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(60,'product',21,9,557,'Phoenix',10,'2023-12-01 05:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,9),(61,'product',35,8,626,'Semarang',10,'2023-11-15 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(62,'product',83,8,922,'Perth',10,'2024-04-10 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(63,'product',27,9,784,'Xi\'an',10,'2021-11-05 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(64,'product',48,8,131,'Luxembourg (city)',10,'2020-06-17 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(65,'product',39,9,984,'Brasília',10,'2022-12-27 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(66,'product',63,8,184,'Oslo',11,'2020-03-17 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(67,'product',13,9,769,'Tallinn',11,'2023-07-29 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,5),(68,'product',20,9,428,'Mandurah',11,'2023-07-15 04:00:00','2024-04-18 07:16:23','2024-04-30 09:35:15',0,1),(69,'product',20,9,131,'Tórshavn',10,'2023-04-05 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(70,'product',54,8,400,'Phnom Penh',11,'2023-11-02 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(71,'product',48,9,600,'Providence',10,'2022-10-19 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(72,'product',17,8,746,'Liverpool',10,'2020-09-13 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(73,'product',28,9,134,'Accra',10,'2020-03-21 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(74,'product',39,9,220,'Bishkek',11,'2022-11-03 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(75,'product',7,9,379,'Medellín',10,'2020-11-01 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(76,'product',31,8,886,'Yaoundé',10,'2022-04-22 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(77,'product',75,9,934,'Ulan Bator',10,'2022-05-26 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(78,'product',83,9,868,'Praia',11,'2020-07-22 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(79,'product',10,9,874,'Moroni',11,'2020-12-20 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(80,'product',7,9,763,'Rabat',10,'2020-12-12 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(81,'product',68,9,955,'Sana\'a',11,'2022-07-29 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(82,'product',87,8,265,'Bloemfontein',10,'2020-06-16 04:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(83,'product',21,9,705,'Antwerp',10,'2020-10-06 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(84,'product',50,8,174,'Vientiane',11,'2020-07-16 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(85,'product',27,8,794,'Nantes',11,'2021-12-16 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(86,'product',23,9,950,'Ambon',11,'2021-12-03 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(87,'product',79,8,502,'Curitiba',10,'2020-08-24 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(88,'product',26,9,679,'Bucharest',11,'2021-05-27 04:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(89,'product',91,8,175,'Damascus',10,'2021-05-17 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(90,'product',64,9,953,'Toulouse',10,'2023-11-07 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(91,'product',29,9,755,'Belfast',11,'2021-11-22 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(92,'product',42,9,412,'Cairns',11,'2023-05-10 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(93,'product',14,8,596,'Ouagadougou',11,'2022-01-21 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(94,'product',56,8,552,'Yaren District',10,'2023-01-22 05:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(95,'product',1,8,153,'Ushuaia',10,'2020-04-01 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(96,'product',76,9,561,'Hilo',11,'2023-11-15 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(97,'product',60,8,169,'Perm',11,'2020-08-20 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(98,'product',60,9,798,'Medan',10,'2023-01-07 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(99,'product',35,8,521,'Vaduz',10,'2022-01-06 05:00:00','2024-04-18 07:16:23','2024-04-30 08:41:37',0,5),(100,'product',42,9,372,'Manchester',10,'2023-08-15 04:00:00','2024-04-18 07:16:23','2024-04-30 04:14:34',0,1),(101,'product',50,8,665,'Malacca Town',11,'2020-12-20 05:00:00','2024-04-18 07:16:23','2024-04-30 06:28:58',0,9),(102,'product',20,8,200,'dfgsdfgsf',11,'2020-12-20 05:00:00','2024-04-18 07:16:23','2024-04-30 08:55:53',0,1),(103,'product',6,8,1245,'dtfryhrfgytrdee',10,'2024-04-18 18:30:00','2024-04-19 07:35:08','2024-04-30 08:55:53',0,1),(104,'product',90,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:10:38','2024-04-30 08:55:53',0,9),(105,'product',46,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:12:23','2024-04-30 08:55:53',0,1),(106,'product',98,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:13:55','2024-04-30 08:55:53',0,5),(107,'product',1,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:14:54','2024-04-30 08:55:53',0,1),(108,'product',4,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:20:17','2024-04-30 08:55:53',0,5),(109,'product',36,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:21:03','2024-04-30 08:55:53',0,9),(110,'product',48,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:35:22','2024-04-30 08:55:53',0,5),(111,'product',6,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:35:47','2024-04-30 08:55:53',0,1),(112,'product',110,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:36:38','2024-04-30 08:55:53',0,5),(113,'product',5,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:38:01','2024-04-30 08:55:53',0,1),(114,'product',55,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:39:00','2024-04-30 08:55:53',0,9),(115,'product',4,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:39:49','2024-04-30 08:55:53',0,9),(116,'product',7,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:40:17','2024-04-30 08:55:53',0,1),(117,'product',65,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:42:45','2024-04-30 08:55:53',0,9),(118,'product',5,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:46:12','2024-04-30 08:55:53',0,1),(119,'product',33,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:46:55','2024-04-30 08:55:53',0,9),(120,'product',7,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:47:28','2024-04-30 08:55:53',0,1),(121,'product',75,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:47:47','2024-04-30 08:55:53',0,1),(122,'product',19,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:48:33','2024-04-30 08:55:53',0,5),(123,'product',12,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:49:11','2024-04-30 08:55:53',0,1),(124,'product',1,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:50:26','2024-04-30 08:55:53',0,5),(125,'product',64,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:50:41','2024-04-30 08:55:53',0,1),(126,'product',1,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:51:17','2024-04-30 08:55:53',0,9),(127,'product',42,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:51:27','2024-04-30 08:55:53',0,1),(128,'product',5,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:51:43','2024-04-30 08:55:53',0,1),(129,'product',68,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:52:15','2024-04-30 08:55:53',0,9),(130,'product',1,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:58:16','2024-04-30 08:55:53',0,9),(131,'product',68,8,504,'sdgvesdg',10,'2024-04-18 18:30:00','2024-04-19 08:59:12','2024-04-30 08:55:53',0,5),(132,'product',1,8,525600,'sdgvesdg',10,'2024-04-17 18:30:00','2024-04-19 09:00:05','2024-04-30 08:55:53',0,5),(133,'product',76,8,1231,'hcgxggmj',11,'2024-04-17 18:30:00','2024-04-19 09:21:36','2024-04-30 08:55:53',0,1),(134,'product',77,8,1231,'hcgxggmj',10,'2024-04-17 18:30:00','2024-04-19 09:23:30','2024-04-30 08:55:53',0,1),(135,'product',1,8,1010,'rdtgfhjk',10,'2024-04-19 18:30:00','2024-04-20 04:43:41','2024-04-30 08:55:53',0,1),(136,'product',56,8,1010,'cfvgbhnjmk',10,'2024-04-19 18:30:00','2024-04-20 04:46:21','2024-04-30 08:55:53',0,1),(137,'product',69,8,1010,'cfvgbhnjmk',10,'2024-04-19 18:30:00','2024-04-20 05:16:04','2024-04-30 08:55:53',0,9),(138,'product',1,8,5858,'cfvgbhnjmk',10,'2024-04-19 18:30:00','2024-04-20 05:17:14','2024-04-30 08:55:53',0,1),(139,'product',5,8,2255,'cfvgbhnjmk',10,'2024-04-19 18:30:00','2024-04-20 05:17:32','2024-04-30 08:55:53',0,1),(140,'product',5,8,500,'gfd',10,'2024-04-19 18:30:00','2024-04-20 06:30:35','2024-04-30 08:55:53',0,1),(141,'product',4,8,5000,'dxfcgvhj',10,'2024-04-19 18:30:00','2024-04-20 10:37:53','2024-04-30 08:55:53',0,9),(142,'product',44,8,1000,'dxfcgvhj',10,'2024-04-19 18:30:00','2024-04-20 10:40:40','2024-04-30 08:55:53',0,3),(143,'product',1,8,300,'safwef',10,'2024-04-19 18:30:00','2024-04-20 12:49:20','2024-04-30 08:55:53',0,3),(144,'product',56,8,506,'dfghjnkm',10,'2024-04-21 18:30:00','2024-04-22 04:31:08','2024-04-30 08:55:53',0,3),(145,'product',99,8,1300,'kjufhygtfrde',10,'2024-04-21 18:30:00','2024-04-22 05:02:07','2024-04-30 08:55:53',0,1),(146,'product',44,8,2020,'xyz',10,'2021-11-27 18:30:00','2024-04-24 06:53:51','2024-04-30 08:55:53',0,1),(147,'product',55,8,200,'xyz2',10,'2021-11-28 18:30:00','2024-04-24 12:34:58','2024-04-30 08:55:53',0,5),(148,'product',36,8,600,'xyz2',10,'2021-10-27 18:30:00','2024-04-24 12:37:38','2024-04-30 08:55:53',0,9),(149,'product',78,8,42200,'rajkot',10,'2024-04-02 18:30:00','2024-04-25 04:25:27','2024-04-30 08:55:53',0,1),(150,'product',3,8,808,'da',11,'2022-02-10 18:30:00','2024-04-25 05:31:45','2024-04-30 08:55:53',0,1),(151,'product',5,8,2525,'FASDFSD',11,'2011-11-10 18:30:00','2024-04-25 05:35:01','2024-04-30 08:55:53',0,1),(152,'product',115,8,10310,'ahd',11,'2003-10-10 18:30:00','2024-04-26 09:27:41','2024-04-30 08:55:53',0,1),(153,'product',115,8,500,'goa',11,'2013-11-10 18:30:00','2024-04-29 06:10:23','2024-04-30 08:55:53',0,8),(154,'product',22,8,700,'goa',11,'2011-11-10 18:30:00','2024-04-29 06:17:15','2024-04-30 08:55:53',0,8),(155,'product',4,8,840,'SDFGI',10,'2024-03-31 18:30:00','2024-04-29 06:56:11','2024-04-30 08:56:10',0,1),(156,'product',53,8,985,'goa',10,'2001-11-10 18:30:00','2024-04-29 11:46:44','2024-04-30 08:56:42',0,2),(157,'product',65,8,10,'goa',10,'2001-11-09 18:30:00','2024-04-29 11:47:03','2024-04-30 08:56:42',0,1),(158,'product',77,8,20350,'goa',11,'2001-11-09 18:30:00','2024-04-29 11:47:10','2024-04-30 09:28:09',0,1),(159,'product',95,8,20,'goa',10,'2001-11-10 18:30:00','2024-04-29 12:05:17','2024-04-30 08:56:42',0,1),(160,NULL,10,8,20,'Rajkot',10,'2024-05-01 18:30:00','2024-05-02 12:12:22','2024-05-02 12:12:27',0,1),(161,NULL,21,8,200,'Rajkot',10,'2024-05-01 18:30:00','2024-05-02 13:49:54','2024-05-02 13:49:59',0,1),(162,NULL,1,8,100,'Rajkot',11,'2024-05-01 18:30:00','2024-05-02 13:52:47','2024-05-02 13:52:56',0,1),(163,NULL,1,8,-20,'ATR',10,'2024-05-02 18:30:00','2024-05-03 03:50:11','2024-05-03 11:25:48',0,1),(164,NULL,4,8,0,'Rajkot',10,'2024-05-02 18:30:00','2024-05-03 07:40:46','2024-05-03 07:40:46',0,2),(165,NULL,5,8,200,'Rajkot',11,'2024-05-02 18:30:00','2024-05-03 07:41:58','2024-05-03 07:42:57',0,2),(166,NULL,3,8,20,'Rajkot',11,'2024-05-02 18:30:00','2024-05-03 08:56:15','2024-05-03 08:56:18',0,1);
/*!40000 ALTER TABLE `sales_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_products`
--

DROP TABLE IF EXISTS `sales_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `order_type` int NOT NULL,
  `quantity` int NOT NULL,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`product_id`,`order_id`),
  KEY `fk_order_details_1_idx` (`order_id`),
  KEY `fk_order_details_2_idx` (`product_id`),
  KEY `fk_order_details_3_idx` (`order_type`),
  CONSTRAINT `fk_order_details_1` FOREIGN KEY (`order_id`) REFERENCES `sales_order` (`id`),
  CONSTRAINT `fk_order_details_2` FOREIGN KEY (`product_id`) REFERENCES `product_master` (`id`),
  CONSTRAINT `fk_order_details_3` FOREIGN KEY (`order_type`) REFERENCES `option_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=287 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_products`
--

LOCK TABLES `sales_products` WRITE;
/*!40000 ALTER TABLE `sales_products` DISABLE KEYS */;
INSERT INTO `sales_products` VALUES (1,38,32,9,423,0),(2,25,3,9,123,0),(3,97,14,9,799,0),(4,68,14,8,212,0),(5,40,35,9,419,0),(6,50,5,9,880,0),(7,56,40,8,408,0),(8,95,11,9,193,0),(9,84,94,9,707,0),(10,13,89,8,245,0),(11,66,99,8,132,0),(12,39,93,8,981,0),(13,8,19,9,858,0),(14,76,83,9,121,0),(15,56,52,8,223,0),(16,59,89,9,431,0),(17,76,1,8,186,0),(18,83,84,8,138,0),(19,36,32,9,112,0),(20,39,56,9,839,0),(21,41,95,9,729,0),(22,42,33,8,124,0),(23,38,96,8,729,0),(24,42,65,9,627,0),(25,51,50,8,419,0),(26,62,100,9,119,0),(27,8,51,8,916,0),(28,35,25,9,914,0),(29,73,82,9,679,0),(30,42,76,9,924,0),(31,92,31,8,977,0),(32,96,100,8,877,0),(33,62,91,9,773,0),(34,10,39,8,359,0),(35,57,26,9,896,0),(36,97,23,8,388,0),(37,10,24,8,726,0),(38,11,52,8,663,0),(39,78,54,8,955,0),(40,66,63,8,173,0),(41,80,89,8,249,0),(42,89,24,9,154,0),(43,63,25,8,883,0),(44,26,20,9,184,0),(45,38,31,8,186,0),(46,16,1,8,460,0),(47,21,59,9,895,0),(48,30,79,8,346,0),(49,18,71,8,236,0),(50,58,36,9,965,0),(51,65,71,8,666,0),(52,46,93,8,784,0),(53,35,8,8,810,0),(54,77,49,8,506,0),(55,84,17,9,801,0),(56,37,70,9,914,0),(57,84,42,9,622,0),(58,44,51,8,624,0),(59,21,89,8,628,0),(60,28,67,9,588,0),(61,44,78,8,258,0),(62,79,23,8,835,0),(63,10,10,9,149,0),(64,83,53,9,525,0),(65,51,49,9,869,0),(66,61,96,9,960,0),(67,1,34,9,378,0),(68,42,96,8,234,0),(69,56,98,9,374,0),(70,8,60,8,801,0),(71,61,24,8,306,0),(72,1,64,9,692,0),(73,37,45,8,208,0),(74,96,74,8,666,0),(75,81,30,8,469,0),(76,67,14,9,286,0),(77,52,32,8,852,0),(78,35,74,8,480,0),(79,54,59,9,769,0),(80,80,89,9,254,0),(81,47,40,9,153,0),(82,85,89,9,336,0),(83,2,88,8,342,0),(84,34,48,8,794,0),(85,76,54,9,872,0),(86,14,3,9,980,0),(87,26,68,9,716,0),(88,81,34,8,435,0),(89,45,31,9,620,0),(90,9,45,9,210,0),(91,27,60,9,673,0),(92,46,47,8,917,0),(93,2,52,8,937,0),(94,27,98,8,586,0),(95,65,18,9,714,0),(96,52,54,8,315,0),(97,46,94,8,524,0),(98,100,8,9,564,0),(99,88,87,8,119,0),(100,70,69,8,955,0),(101,47,18,9,958,0),(102,35,32,9,742,0),(103,70,39,9,882,0),(104,45,91,8,611,0),(105,17,94,9,710,0),(106,18,31,9,739,0),(107,33,89,9,289,0),(108,25,12,8,615,0),(109,26,68,8,131,0),(110,12,69,9,154,0),(111,27,60,8,318,0),(112,33,52,8,351,0),(113,12,96,8,708,0),(114,62,58,8,172,0),(115,38,25,8,170,0),(116,78,96,9,325,0),(117,14,74,8,127,0),(118,48,49,8,673,0),(119,97,89,9,401,0),(120,59,16,9,816,0),(121,73,72,9,913,0),(122,57,20,8,293,0),(123,84,83,9,977,0),(124,64,81,9,650,0),(125,63,76,8,483,0),(126,77,22,9,562,0),(127,38,43,8,841,0),(128,9,55,8,534,0),(129,35,70,8,125,0),(130,74,47,8,742,0),(131,47,7,9,483,0),(132,10,92,8,209,0),(133,93,90,9,472,0),(134,22,80,9,251,0),(135,34,11,9,801,0),(136,96,40,9,495,0),(137,42,21,9,309,0),(138,82,4,9,534,0),(139,96,27,9,612,0),(140,24,85,8,377,0),(141,19,68,8,860,0),(142,90,11,9,419,0),(143,41,89,9,976,0),(144,6,9,9,510,0),(145,84,56,8,463,0),(146,74,15,9,245,0),(147,99,48,8,780,0),(148,52,73,9,319,0),(149,57,23,9,980,0),(150,32,56,8,169,0),(151,92,23,9,805,0),(152,67,97,8,244,0),(153,99,5,9,953,0),(154,64,89,8,741,0),(155,79,20,9,887,0),(156,75,2,8,599,0),(157,7,68,8,754,0),(158,3,46,9,839,0),(159,79,6,9,722,0),(160,3,55,9,316,0),(161,72,24,8,937,0),(162,6,86,9,808,0),(163,19,50,9,985,0),(164,49,56,9,114,0),(165,4,44,8,608,0),(166,5,25,8,381,0),(167,93,69,8,600,0),(168,33,57,8,451,0),(169,75,6,8,223,0),(170,33,25,8,563,0),(171,40,64,8,211,0),(172,5,8,8,184,0),(173,76,35,9,234,0),(174,61,25,8,823,0),(175,79,73,9,890,0),(176,81,25,9,597,0),(177,22,81,8,802,0),(178,82,34,9,280,0),(179,31,67,9,394,0),(180,63,70,9,211,0),(181,13,44,8,773,0),(182,78,53,9,415,0),(183,26,32,8,767,0),(184,6,8,9,872,0),(185,57,98,9,977,0),(186,14,82,8,270,0),(187,31,53,8,407,0),(188,44,83,8,394,0),(189,80,73,9,804,0),(191,99,54,9,236,0),(192,36,100,9,216,0),(193,2,16,9,316,0),(194,14,9,9,115,0),(195,69,45,9,113,0),(196,31,12,9,812,0),(197,53,60,9,417,0),(198,72,19,9,669,0),(199,2,91,9,806,0),(200,6,71,8,549,0),(201,131,99,9,100,0),(202,132,97,8,100,0),(203,132,97,8,100,0),(204,132,97,8,100,0),(205,132,97,8,100,0),(206,132,97,8,100,0),(207,132,97,8,100,0),(208,132,97,8,100,0),(209,132,97,8,100,0),(218,133,97,9,120,0),(219,133,97,8,120,0),(220,2,97,9,10,0),(221,2,99,9,5,0),(222,2,99,9,5,0),(223,2,99,9,5,0),(224,2,99,9,5,0),(225,2,99,9,5,0),(226,2,99,9,5,0),(227,2,99,8,5,0),(228,1,97,9,10,0),(229,1,97,9,10,0),(230,1,97,9,10,0),(231,1,97,9,10,0),(232,1,97,9,10,0),(233,1,97,9,100,0),(234,1,1,9,100,0),(235,1,1,9,100,0),(236,1,1,9,10,0),(237,135,97,9,10,0),(238,136,1,8,10,0),(239,136,2,8,10,0),(240,137,2,8,10,0),(241,140,1,8,10,0),(242,139,1,8,10,0),(243,154,92,8,5,0),(244,139,10,8,5,0),(245,139,6,8,5,0),(246,139,1,8,5,0),(247,139,2,8,5,0),(248,139,9,8,5,0),(249,154,3,8,3,0),(250,145,1,8,10,0),(251,145,1,8,0,0),(252,145,1,8,5,0),(253,145,1,8,0,0),(254,145,1,8,10,0),(255,145,1,8,0,0),(256,145,1,8,0,0),(257,146,1,8,1,0),(258,145,1,8,0,0),(259,145,1,8,0,0),(260,145,1,8,0,0),(261,146,33,8,2,0),(262,146,2,8,18,0),(263,149,1,8,0,0),(264,149,1,8,844,0),(265,150,3,8,6,0),(266,150,7,8,2,0),(267,151,10,8,25,0),(268,152,22,8,1,0),(269,156,1,8,1,0),(270,152,19,8,10,0),(271,155,7,8,0,0),(272,158,1,9,1,0),(273,158,3,9,2,0),(274,158,7,9,2,0),(275,158,2,8,2,0),(276,159,1,8,2,0),(277,159,5,9,3,0),(278,155,2,8,2,0),(279,155,5,8,2,0),(280,157,13,8,2,0),(281,160,1,8,2,0),(282,161,1,8,20,0),(283,162,1,8,10,0),(284,163,1,9,2,0),(285,165,1,8,20,0),(286,166,1,8,2,0);
/*!40000 ALTER TABLE `sales_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `select_master`
--

DROP TABLE IF EXISTS `select_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `select_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(45) NOT NULL,
  `value` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `select_master`
--

LOCK TABLES `select_master` WRITE;
/*!40000 ALTER TABLE `select_master` DISABLE KEYS */;
INSERT INTO `select_master` VALUES (1,'roles','Roles'),(2,'accountStatus','Account Status'),(3,'orderType','Order Type'),(4,'paymentStatus','Payment Status'),(5,'logType','Log Type'),(7,'productCategory','Product Category'),(8,'storageType','Storage Type'),(9,'location','Location');
/*!40000 ALTER TABLE `select_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state_master`
--

DROP TABLE IF EXISTS `state_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state_master` (
  `state_id` int NOT NULL,
  `state_name` text,
  `country_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state_master`
--

LOCK TABLES `state_master` WRITE;
/*!40000 ALTER TABLE `state_master` DISABLE KEYS */;
INSERT INTO `state_master` VALUES (1,'Andaman & Nicobar [AN]','+91'),(2,'Andhra Pradesh [AP]','+91'),(3,'Arunachal Pradesh [AR]','+91'),(4,'Assam [AS]','+91'),(5,'Bihar [BH]','+91'),(6,'Chandigarh [CH]','+91'),(7,'Chhattisgarh [CG]','+91'),(8,'Dadra & Nagar Haveli [DN]','+91'),(9,'Daman & Diu [DD]','+91'),(10,'Delhi [DL]','+91'),(11,'Goa [GO]','+91'),(12,'Gujarat [GU]','+91'),(13,'Haryana [HR]','+91'),(14,'Himachal Pradesh [HP]','+91'),(15,'Jammu & Kashmir [JK]','+91'),(16,'Jharkhand [JH]','+91'),(17,'Karnataka [KR]','+91'),(18,'Kerala [KL]','+91'),(19,'Lakshadweep [LD]','+91'),(20,'Madhya Pradesh [MP]','+91'),(21,'Maharashtra [MH]','+91'),(22,'Manipur [MN]','+91'),(23,'Meghalaya [ML]','+91'),(24,'Mizoram [MM]','+91'),(25,'Nagaland [NL]','+91'),(26,'Orissa [OR]','+91'),(28,'Punjab [PJ]','+91'),(29,'Rajasthan [RJ]','+91'),(30,'Sikkim [SK]','+91'),(31,'Tamil Nadu [TN]','+91'),(32,'Tripura [TR]','+91'),(33,'Uttar Pradesh [UP]','+91'),(34,'Uttaranchal [UT]','+91'),(35,'West Bengal [WB]','+91');
/*!40000 ALTER TABLE `state_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage_space_master`
--

DROP TABLE IF EXISTS `storage_space_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage_space_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `storage_type` int NOT NULL,
  `location_id` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_storage_space_master_1_idx` (`storage_type`),
  KEY `fk_storage_space_master_2_idx` (`location_id`),
  CONSTRAINT `fk_storage_space_master_1` FOREIGN KEY (`storage_type`) REFERENCES `option_master` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_storage_space_master_2` FOREIGN KEY (`location_id`) REFERENCES `city_master` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage_space_master`
--

LOCK TABLES `storage_space_master` WRITE;
/*!40000 ALTER TABLE `storage_space_master` DISABLE KEYS */;
INSERT INTO `storage_space_master` VALUES (1,'City Center',18,1201,'2024-04-16 06:12:41',0),(2,'Silver',16,1211,'2024-04-16 06:12:41',0),(3,'Ramm',17,1201,'2024-04-17 08:53:52',0),(4,'Krishna',16,1210,'2024-04-18 00:44:57',0),(5,'Radhey',18,1210,'2024-04-18 00:49:51',0),(6,'Vyavk',17,1114,'2024-04-18 00:50:30',1),(7,'Rajaplace',18,1506,'2024-04-18 04:20:09',0),(8,'A-One',16,1212,'2024-04-18 05:17:55',0),(9,'Dashh',17,1208,'2024-04-18 05:18:04',0);
/*!40000 ALTER TABLE `storage_space_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier_master`
--

DROP TABLE IF EXISTS `supplier_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` char(10) NOT NULL,
  `companyname` varchar(100) NOT NULL,
  `address` varchar(150) DEFAULT NULL,
  `zipcode` varchar(10) NOT NULL,
  `city_id` int NOT NULL,
  `state_id` int NOT NULL,
  `gst` char(15) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_supplier_master_1_idx` (`city_id`),
  KEY `fk_supplier_master_2_idx` (`state_id`),
  CONSTRAINT `fk_supplier_master_1` FOREIGN KEY (`city_id`) REFERENCES `city_master` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier_master`
--

LOCK TABLES `supplier_master` WRITE;
/*!40000 ALTER TABLE `supplier_master` DISABLE KEYS */;
INSERT INTO `supplier_master` VALUES (1,'Bharat','Makawana','bharat@gmail.com','1234569870','Apsara','','362640',213,2,'36DBOPA9199A1ZF','2024-04-11 11:16:12','2024-04-19 05:38:10',0),(2,'Cordi','ABC','abc@gmail.com','1234569870','LG','','362640',101,1,'38DBOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(3,'Dotty','Parsaniya','dotty@gmail.com','9876543210','OPRT','','362640',101,1,'40DBOZA9199A1ZE','2024-04-18 07:23:30','2024-04-19 13:23:24',0),(4,'Giustina','Savani','giustina@gmail.com','9876543210','TPOP','','362640',1508,15,'96DBOPA9099A2ZQ','2024-04-18 07:23:30','2024-04-30 13:40:24',0),(5,'Kathi','tata','kathi@gmail.com','7896543210','Samsung','','362640',101,1,'98DBOPA9199A2ZE','2024-04-18 07:23:30','2024-04-30 13:37:40',0),(6,'Daphne','Test','test@gmail.com','9876541230','Nataraj','','362640',112,1,'98DBOPA9199A2ZE','2024-04-18 07:23:30','2024-04-30 13:40:48',0),(7,'Imojean','Parsaniya','imojean@gmail.com','7894561230','Akai','','362640',1405,14,'23AAAAA0000A1Z4','2024-04-18 07:23:30','2024-04-30 13:36:25',0),(8,'Kittie','parsaniya','kunj@gmail.com','6549873210','Yuva','','362640',101,1,'38DBOPA9199A1ZW','2024-04-18 07:23:30','2024-04-30 13:40:56',0),(9,'Kimmy','Parsaniya','kimmy@gmail.com','9876543210','Classmate','','362640',101,1,'87DBOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(10,'Steffane','Savani','steffane@gmail.com','3216549870','Mi','','362640',101,1,'39DBOPA9199A1ZE','2024-04-18 07:23:30','2024-04-30 13:41:43',0),(11,'Melanie','Savani','sm@gmail.com','9586606868','Nokai','','362640',101,1,'38DBOPA9187A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(12,'Wendi','Parsaniya','kunjwendi@gmail.com','1234569870','Siska','','362640',101,1,'38DBOPA9199A1ZR','2024-04-18 07:23:30','2024-04-30 13:41:53',0),(13,'Lory','parsaniya','lory@gmail.com','9638527410','Cello','','362640',101,1,'21DBOPA9199A1ZR','2024-04-18 07:23:30','2024-04-30 13:42:08',0),(14,'Daryl','Shah','daryl@gmail.com','9876543211','LG-lap','','362640',101,1,'87DBITA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(15,'Florie','Shah','florie@gmail.com','6543219870','New dash','','362640',101,1,'38ABCDA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(16,'Leeanne','Parsaniya','leeanne@gmail.com','9586606855','Infotech','','362640',1713,17,'87AQOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(17,'Cyndie','Sharma','cyndiesharma@gmail.com','9638527410','Esparkbiz','','362640',1812,18,'56EYOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(18,'Sheree','dfsf','sheree@gmail.com','7896543210','Newesparkbiz','','362640',1509,15,'87DBOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(19,'Veda','Shah','veda@gmail.com','9638527410','Toyota','','362640',1408,14,'87DBOPA9199A1ZD','2024-04-18 07:23:30','2024-04-30 13:42:24',0),(20,'Chastity','Savani','vasu123@gmail.com','9638527410','Audi','','362640',1713,17,'37DBOPA9089A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(21,'Nicoli','Shah','nicolishah@gmail.com','9876543215','Logitech','','362640',1508,15,'21GTOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(22,'Merle','scscs','scscsmerle@gmail.com','9638527410','genral','','362640',1615,16,'74AQOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(23,'Sashenka','ABCTEST','abcsashenka@gmail.com','9876543210','Hitachi','','362640',1714,17,'88WTOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(24,'Orsola','dfsf','orsoladfsf@gmail.com','9638527410','Oneplus','','362640',1611,16,'38DBOOA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(25,'Ida','ideateat','ida@gmail.com','9638527410','reamle','','362640',1313,13,'89YTOPA9199A1ZC','2024-04-18 07:23:30','2024-04-24 10:55:13',0),(26,'Dulce','parsaniya','dulceparsaniya@gmail.com','9876543210','TRYF','','362640',1816,18,'74DBOPA9199A1ZT','2024-04-18 07:23:30','2024-04-30 13:42:53',0),(27,'Elena','Parsaniya','dfgdfga21@gmail.com','9586606859','dfg','','362640',101,1,'38ETOPA9199A1ZC','2024-04-18 07:23:30','2024-04-19 13:18:54',0),(28,'Vasu','Parsaniya','vasuparsaniya21@gmail.com','9586606859','asaa','','362640',1212,12,'22AAAAA0000A1Z5','2024-04-18 13:07:07','2024-04-18 13:25:31',0),(29,'Vasu','Parsaniya','fdsya21@gmail.com','9586606859','asaa','','362640',1408,14,'22AAAAA0000A1Z5','2024-04-19 09:01:53','2024-04-19 09:01:53',0),(30,'dfg','sdf','dgdganiya21@gmail.com','9586606859','asaa','','362640',1408,14,'22AAAAA0000A1Z5','2024-04-19 09:02:43','2024-04-19 09:02:43',0),(31,'werr','Parsaniya','werraniya21@gmail.com','9586606859','asaa','','362640',813,8,'23AAAAA0000A1Z6','2024-04-19 09:05:22','2024-04-30 13:40:30',0),(32,'sf','Parsaniya','sdgdgya21@gmail.com','9586606857','asaa','','362640',1404,14,'22AAAAA0000A1Z8','2024-04-19 09:20:07','2024-04-30 13:43:38',0),(33,'sfg','df','dfgdniya21@gmail.com','9586606880','asaa','','362640',1511,15,'98DBOPA9199A2ZW','2024-04-19 09:21:41','2024-04-30 13:40:06',0),(34,'ete','Parsaniya','eeeaniya21@gmail.com','9586606859','ABC','','362640',1506,15,'22AAAAA0000A1Z3','2024-04-19 09:35:34','2024-04-30 13:40:06',0),(35,'sdf','Parsaniya','fsfsdaniya21@gmail.com','9586606859','asaa','','362640',1713,17,'98DBOPA9199A2ZW','2024-04-19 10:24:13','2024-04-30 13:44:02',0),(36,'ergrg','rgg','gergeriya21@gmail.com','9638527412','asaa','','362640',1211,12,'22AAAAA0000A1Z8','2024-04-19 10:26:25','2024-04-30 13:45:45',0),(37,'swfef','sdfsdf','sdfsdfiya21@gmail.com','9586606887','asaa','','362640',1005,10,'22AAAAA0000A1ZO','2024-04-19 11:45:53','2024-04-30 13:43:18',0),(38,'Vasukumar','Parsaniya','vasup23@gmail.com','9876543210','ABC','','362640',1409,14,'22AAAAA0000A1Z5','2024-04-19 11:50:11','2024-04-19 11:51:29',0),(39,'Vasu','Parsaniya','vasutest21@gmail.com','9586606878','asaa','','362644',1002,10,'22AAAAA0000A1Z5','2024-04-19 12:47:45','2024-04-30 13:44:12',0),(40,'Eti','Savani','dsfsft@gmail.com','9876543210','TTT','ABC','123456',1213,12,'28DBOPA9199A5ZW','2024-05-03 06:27:22','2024-05-03 06:27:22',0),(41,'Shayam','Sharma','sdfsarmarr@gmail.com','9586606859','TVA','TEST','123456',1213,12,'78DBOPA9199A5ZE','2024-05-03 06:27:22','2024-05-03 06:27:22',0),(42,'Shyam','Verma','shyamverma@gmail.com','9876543210','Tata','ABC','123456',1213,12,'30DBOPA9199A5ZQ','2024-05-03 06:35:54','2024-05-03 06:35:54',0),(44,'Shyam','Verma','shgg@gmail.com','9876543210','Tata','ABC','123456',1213,12,'30DBOPA9199A5ZQ','2024-05-03 06:36:29','2024-05-03 06:36:29',0),(45,'Queen','Sharma','queensharma@gmail.com','9586606859','Bata','TEST','123456',1213,12,'80DBOPA9199A5ZW','2024-05-03 06:36:29','2024-05-03 06:36:29',0),(46,'Shyam','Verma','shgsfg@gmail.com','9876543210','Tata','ABC','123456',1213,12,'30DBOPA9199A5ZQ','2024-05-03 06:36:59','2024-05-03 06:36:59',0),(47,'Queen','Sharma','queesdfnsharma@gmail.com','9586606859','Bata','TEST','123456',1213,12,'80DBOPA9199A5ZW','2024-05-03 06:36:59','2024-05-03 06:36:59',0);
/*!40000 ALTER TABLE `supplier_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `unique_code` varchar(45) DEFAULT NULL,
  `expiry` datetime DEFAULT NULL,
  `status` int DEFAULT '6',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint NOT NULL DEFAULT '0',
  `img_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_creds_1_idx` (`status`),
  KEY `fk_creds_2_idx` (`role_id`),
  CONSTRAINT `fk_creds_1` FOREIGN KEY (`status`) REFERENCES `option_master` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_creds_2` FOREIGN KEY (`role_id`) REFERENCES `option_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,4,'Admin','Boss','admin@gmail.com','2019-06-02','$2b$10$8NraVrDz179x1TyLTgqsY.oCtU6ciBI/V7amgjrFmCAJCg0V0A02W',NULL,'2024-05-02 15:14:06',6,'2024-04-08 11:04:58','2024-05-03 12:36:37',0,'1714739284418-profileimage-GEC_Bhavnagar_logo.jpeg'),(8,5,'ABC','Testt','abc@abc.com','1995-12-29','$2b$10$i7VPrDdF4uGFpDUA2qFEsuMmI9LBth4LF9sBnAvTFk3QztprZlczi','342095021714','2024-04-29 11:54:13',6,'2024-04-20 12:16:21','2024-05-03 10:36:33',0,'1714732593376-profileimage-Screenshot from 2024-03-19 12-37-37.png'),(9,5,'Manager1','bro','manager1@gmail.com','1998-02-28','$2b$10$m9O.Vv3BmCRfEFvZlyG40OJCarXvXLEYi45B9LKgGi1RCbnRytSgy',NULL,'2024-05-03 09:11:50',6,'2024-04-23 04:22:38','2024-05-03 03:41:49',0,NULL),(10,5,'Manager2','rao','manager2@gmail.com','1989-09-13','$2b$10$tjL/TVYG2.9zj6nD2J14Repb5K6Mm54952seMtf8sjtD3gX8MP5JW','760061829902','2024-04-23 09:54:07',6,'2024-04-23 04:23:41','2024-04-30 09:15:28',0,NULL),(11,5,'Ravi','Makwana','r@gmail.com','2000-12-21','$2b$10$v5YunhWN8aRu5rOTVABM3.tuNCMcBbjqlwSIB72iQciFMNgDwyL8y','880288626929','2024-04-30 14:41:38',6,'2024-04-29 06:06:49','2024-04-30 09:15:28',0,NULL),(12,5,'Jyot','khant','jyot@gmail.com','2003-03-01','$2b$10$LC8dwoKu1v1Ndch9L2NQfeFh25Em7nuR9mmyKzcyUzPcha1t989sK','654705016477','2024-04-30 14:42:15',6,'2024-04-29 06:21:51','2024-04-30 09:15:28',0,NULL),(13,5,'Ayesha','mehta','ayesha@gmail.com','1997-05-04','$2b$10$2POOmKun2kJauHM.cRlNv.kql9guZBnLUlJMERO.sdS9/PEAwaMT.','996497598409','2024-04-30 14:42:40',6,'2024-04-29 06:24:57','2024-04-30 09:15:28',0,NULL),(14,5,'Rushikesh','Oza','ra@gmail.com','1998-06-08','$2b$10$.MZyhW.ZU5C93Pnf7t34WO2WPoQWWu39aVjVLAh6vg1G1WTho42Xe','224245951469','2024-04-30 14:42:59',6,'2024-04-29 06:49:51','2024-04-30 09:15:28',0,NULL),(15,5,'Vijay','Vyas','v@gmail.com','1998-06-08',NULL,'47256437418','2024-04-30 14:42:59',7,'2024-04-29 06:49:51','2024-04-30 11:22:15',0,NULL),(16,5,'Vasu','Parsaniya','vasu@gmail.com',NULL,'$2b$10$GkbYnW8QLbDaDL2294BXD.w4GmTaY4K.u2D7y6xVoABkWcp1Yxjq6',NULL,'2024-05-02 17:24:24',6,'2024-05-02 11:53:58','2024-05-02 11:54:24',0,NULL),(18,5,'Adnan','Khan','adnankhan@gmail.com',NULL,'$2b$10$s1pBMcAHyKePd.WngaFikOovh4RsfNrJBYiK5SP9ME/gOSPq5jU/e',NULL,'2024-05-03 12:35:30',6,'2024-05-03 06:59:06','2024-05-03 07:05:30',0,NULL),(19,5,'Surbhi','Rank','surbhirank@gmail.com',NULL,'$2b$10$.YGLcQk5Cw3JYVHugA6SNeCTTlU8fiNdkcoAtBK6UwqEJ4DtYSpRy',NULL,'2024-05-03 12:38:12',6,'2024-05-03 07:07:51','2024-05-03 07:08:12',0,NULL),(21,5,'Test','Bug','testbug@gmail.com',NULL,'$2b$10$omeFPtBrJMzRN3rzWPF4cuJjvD2iF..Bmj1b4woBYR19PmIcRpu6C',NULL,'2024-05-03 14:49:48',6,'2024-05-03 09:19:12','2024-05-03 09:19:48',0,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-03 20:01:09
