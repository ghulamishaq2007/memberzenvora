/**
 * ZENVORA SHOOP - Comprehensive Pakistan Cities & Localities Dataset
 * Organized hierarchically: Province / Region -> City -> Areas / Localities
 *
 * Covers all 7 Pakistani Administrative Regions:
 * 1. Punjab
 * 2. Sindh
 * 3. Khyber Pakhtunkhwa (KPK)
 * 4. Balochistan
 * 5. Islamabad Capital Territory
 * 6. Azad Jammu & Kashmir (AJK)
 * 7. Gilgit-Baltistan
 *
 * Each city has its own custom, non-duplicated list of authentic neighborhoods,
 * sectors, colonies, markets, or local divisions, easily expandable.
 */

var PAKISTAN_LOCATIONS = {
    "Punjab": {
      "Lahore": [
        "Gulberg (I, II, III, IV, V)",
        "DHA Phase 1 - 4",
        "DHA Phase 5 - 8",
        "DHA Phase 9 Prism",
        "Johar Town (Phase 1 & 2)",
        "Model Town (Blocks A - M)",
        "Bahria Town (Sector A - F)",
        "Cantonment (Cantt) & Cavalry Ground",
        "Faisal Town & Garden Town",
        "Allama Iqbal Town",
        "Wapda Town & PCSIR Society",
        "Shadman & Shah Jamal",
        "Anarkali & Mall Road",
        "Mughalpura & Dharampura",
        "Samanabad & Chauburji",
        "Township & Green Town",
        "Walled City (Androon Shehr)",
        "Raiwind Road & Lake City",
        "EME Society & Canal View",
        "Valencia & Audit & Accounts Society",
        "Askari (1, 2, 5, 10, 11)",
        "Sabzazar Housing Scheme",
        "Paragon City & Imperial Garden",
        "State Life Housing Society",
        "Shahdara & Ravi Road",
        "Chung & Multan Road",
        "Thokar Niaz Baig",
        "Harbanspura & Tajpura",
        "Other Area / Main Town"
      ],
      "Faisalabad": [
        "Madina Town",
        "Peoples Colony #1",
        "Peoples Colony #2",
        "D-Type Colony",
        "Ghulam Muhammad Abad",
        "Samanabad",
        "Jinnah Colony",
        "Civil Lines & Club Road",
        "Kohinoor City & Jaranwala Road",
        "Canal Road & Gatwala",
        "Gulberg & Millat Town",
        "Satyana Road",
        "Susan Road & D-Ground",
        "Eden Garden & Citi Housing",
        "FDA City",
        "Mansoorabad & Motorway City",
        "Batala Colony",
        "Saeedabad & Gulfishan Colony",
        "Clock Tower (Ghanta Ghar) 8 Bazars",
        "Samundri Road & Novelty Bridge",
        "Other Area / Main Town"
      ],
      "Rawalpindi": [
        "Saddar & Bank Road",
        "Satellite Town (Blocks A - F)",
        "Bahria Town (Phase 1 - 8)",
        "Chaklala Scheme 3",
        "Chaklala Scheme 1 & 2",
        "Cantonment (Cantt)",
        "Westridge (1, 2, 3)",
        "Adyala Road & Gulshanabad",
        "Gulraiz Housing Scheme",
        "Peshawar Road",
        "Murree Road & Chandni Chowk",
        "DHA Phase 1 (Rawalpindi)",
        "DHA Phase 2 (Rawalpindi)",
        "Askari (1, 7, 13, 14)",
        "Shamsabad & Commercial Market",
        "Tench Bhatta & Korang Town",
        "Lalazar & Tulsa Road",
        "Morgah & Attock Oil Refinery Area",
        "Harley Street",
        "Ayub Park Area & Topi Rakh",
        "Other Area / Main Town"
      ],
      "Multan": [
        "Cantonment (Cantt) & Tariq Road",
        "Gulgasht Colony",
        "Bosan Road",
        "Shamsabad Colony",
        "Shah Rukn-e-Alam Colony",
        "New Multan (Blocks A - T)",
        "Model Town (A, B, C)",
        "Wapda Town Phase 1 & 2",
        "Officers Colony",
        "Mumtazabad & Industrial Estate",
        "Chungi No. 9 & Gol Bagh",
        "DHA Multan",
        "Garden Town",
        "Suraj Miani & Northern Bypass",
        "Shah Shams Colony",
        "MDA Officers Colony",
        "Old City (Haram Gate / Bohar Gate)",
        "Other Area / Main Town"
      ],
      "Gujranwala": [
        "Civil Lines & Trust Plaza",
        "Satellite Town (Blocks A - D)",
        "Model Town",
        "DC Road & Commissioner Colony",
        "Wapda Town (Phase 1 & 2)",
        "Master City",
        "Gujranwala Cantt & Rahwali",
        "G.T. Road Corridors",
        "Garden Town",
        "Peoples Colony",
        "Citi Housing Scheme Phase 1 & 2",
        "Fazaia Housing Scheme",
        "Kangniwala",
        "Shaheenabad & Khiyaban-e-Iqbal",
        "Gondlanwala Road",
        "Other Area / Main Town"
      ],
      "Sialkot": [
        "Sialkot Cantt & Mall Road",
        "Model Town & Mag Town",
        "Kashmir Road",
        "Defence Road",
        "Citi Housing Sialkot",
        "Paris Road",
        "Sialkot Fort & Circular Road",
        "Ugoki Road",
        "Daska Road & Pul Aik",
        "Khadim Ali Road",
        "Rangpura & Commissioner Road",
        "Haji Pura & Shahabpura",
        "Gohadpur & Hunter Pura",
        "Small Industrial Estate",
        "Sambrial Link Road",
        "Other Area / Main Town"
      ],
      "Bahawalpur": [
        "Model Town A",
        "Model Town B",
        "Model Town C",
        "Bahawalpur Cantt",
        "Satellite Town",
        "University Chowk & Baghdad Campus",
        "Dubai Mahal Road",
        "Cheema Town & Shadman City",
        "One Unit Chowk & Circular Road",
        "Farid Gate & Shahi Bazar",
        "Sadiq Colony & Welcome Chowk",
        "Other Area / Main Town"
      ],
      "Sargodha": [
        "Satellite Town (Blocks A - Z)",
        "University Road",
        "Fatima Jinnah Colony",
        "Sargodha Cantt",
        "PAF Colony / Shaheen Base",
        "Club Road & Civil Lines",
        "Shaheenabad",
        "Sillanwali Road",
        "Mujahid Colony & Muslim Bazar",
        "Tariqabad",
        "Kachehri Bazar",
        "Other Area / Main Town"
      ],
      "Sheikhupura": [
        "Housing Colony",
        "Civil Lines & Stadium Road",
        "Lahore Road & Hiran Minar Road",
        "Tariq Road & Company Bagh",
        "Jandiala Road & Purana City",
        "Farooqabad Road",
        "Sharqpur Road",
        "Ferozewala Link",
        "Other Area / Main Town"
      ],
      "Rahim Yar Khan": [
        "Model Town",
        "Gulshan-e-Usman",
        "Abbasia Town",
        "Rahim Yar Khan Cantt",
        "Trust Colony",
        "Satellite Town",
        "Thali Chowk & Shahi Road",
        "Airport Road & Gulshan-e-Iqbal",
        "Factory Area & City Center",
        "Other Area / Main Town"
      ],
      "Jhang": [
        "Satellite Town",
        "Civil Lines & Session Chowk",
        "Ayub Chowk",
        "Yousaf Shah Road",
        "Gojra Road",
        "Chiniot Road",
        "Kot Lakhnana",
        "Jhang Saddar",
        "Jhang City (Purana)",
        "Other Area / Main Town"
      ],
      "Dera Ghazi Khan (D.G. Khan)": [
        "Model Town",
        "Cantt Area",
        "Khyaban-e-Sarwar",
        "Blocks 1 to 20",
        "Blocks 21 to 40",
        "Housing Colony",
        "Multan Road & Pul Dat",
        "Jampur Road",
        "Airport Road & Choti Zareen",
        "Other Area / Main Town"
      ],
      "Gujrat": [
        "Model Town & Servis Mor",
        "Rehman Shaheed Road",
        "Shadman Town",
        "Court Road & Circular Road",
        "G.T. Road Gujrat",
        "Jalalpur Road",
        "Marghzar Colony",
        "Bhimber Road & GTS Chowk",
        "Kunjah Road",
        "Other Area / Main Town"
      ],
      "Sahiwal": [
        "Farid Town",
        "Satellite Town",
        "High Street & Jinnah Chowk",
        "Civil Lines",
        "Tariq Bin Ziyad Colony",
        "Fateh Sher Colony",
        "Shadman Town",
        "Stadium Road & College Road",
        "Noor Shah Road",
        "Other Area / Main Town"
      ],
      "Kasur": [
        "Model Town Kasur",
        "Railway Road & Baldia Chowk",
        "Kachehri Road",
        "Kot Radha Kishan Road",
        "Chunian Link",
        "Pattoki Link",
        "Khudian Khas",
        "Bhedian Road & Shahbaz Khan Road",
        "Other Area / Main Town"
      ],
      "Okara": [
        "Mandi Road & Benazir Road",
        "Faisalabad Road",
        "Depalpur Chowk",
        "Civil Lines & Stadium Road",
        "Renala Khurd Area",
        "Depalpur Area",
        "Haveli Lakha Link",
        "G.T. Road Okara",
        "Other Area / Main Town"
      ],
      "Wah Cantt": [
        "Aslam Market & Lala Rukh",
        "Anwar Chowk & Officers Colony",
        "New City Phase 1",
        "New City Phase 2",
        "Gudwal & Basti",
        "POF Barrier 1 to 6",
        "Wah Model Town",
        "Other Area / Main Town"
      ],
      "Taxila": [
        "HMC Colony",
        "Museum Road",
        "Faisal Shaheed Road",
        "Taxila Cantt",
        "Kohsar Colony",
        "Timber Market & Station Road",
        "Other Area / Main Town"
      ],
      "Chiniot": [
        "Mohallah Raja Chowk",
        "Faisalabad Road",
        "Lahore Road & Badshahi Masjid Area",
        "Sargodha Road",
        "Chenab Nagar (Rabwah)",
        "Bhawana Road",
        "Other Area / Main Town"
      ],
      "Kamoke": [
        "G.T. Road Kamoke",
        "Model Town",
        "Mandiala Tega",
        "City Center & Grain Market",
        "Raja Sadhoke Link",
        "Other Area / Main Town"
      ],
      "Hafizabad": [
        "Model Town",
        "Vanike Road",
        "Gujranwala Road",
        "Kassoke Road",
        "Sukheke Mandi Link",
        "Pindi Bhattian Link",
        "Other Area / Main Town"
      ],
      "Mandi Bahauddin": [
        "Model Town",
        "Kachehri Road",
        "Phalia Road",
        "Canal Road & Gurha Mohallah",
        "Phalia City",
        "Malakwal City",
        "Other Area / Main Town"
      ],
      "Jhelum": [
        "Jhelum Cantt",
        "Civil Lines & River Bank",
        "Machine Mohallah (1, 2, 3)",
        "Kala Gujran",
        "Dina City Link",
        "Sohawa Link",
        "G.T. Road Jhelum",
        "Other Area / Main Town"
      ],
      "Khanewal": [
        "People's Colony",
        "Model Town",
        "Tariqabad",
        "Civil Lines",
        "Kabirwala Link",
        "Mian Channu Link",
        "Jahanian Link",
        "Other Area / Main Town"
      ],
      "Muzaffargarh": [
        "Al-Haram City",
        "Housing Colony",
        "Multan Road & Jhang Road",
        "Kot Addu Link",
        "Alipur Link",
        "Jatoi Link",
        "Other Area / Main Town"
      ],
      "Burewala": [
        "Model Town",
        "Satellite Town",
        "Multan Road",
        "Chichawatni Road",
        "Vehari Road",
        "Gaggoo Mandi",
        "Grain Market Area",
        "Other Area / Main Town"
      ],
      "Bahawalnagar": [
        "Model Town",
        "Minchinabad Road",
        "Haroonabad Road",
        "Chishtian Link",
        "Fort Abbas Link",
        "Circular Road",
        "Other Area / Main Town"
      ],
      "Pakpattan": [
        "Faridkot & Dargah Sharif Area",
        "Nagina Chowk",
        "Malka Hans Road",
        "Arifwala Road",
        "College Road",
        "Other Area / Main Town"
      ],
      "Toba Tek Singh": [
        "Housing Colony",
        "Rajana Road",
        "Jhang Road",
        "Gojra Link",
        "Kamalia Link",
        "Pir Mahal Link",
        "Other Area / Main Town"
      ],
      "Chakwal": [
        "Rawalpindi Road",
        "Talagang Road",
        "Mohallah Line Park",
        "Choa Saidan Shah Link",
        "Kallar Kahar Area",
        "Balkassar Link",
        "Other Area / Main Town"
      ],
      "Murree": [
        "Mall Road",
        "Kashmir Point",
        "Pindi Point",
        "Lower Topa & Upper Topa",
        "Bhurban",
        "Ghora Gali & Lawrence College Area",
        "Changla Gali Link",
        "Other Area / Main Town"
      ],
      "Mianwali": [
        "PAF Colony / Base Area",
        "Ballo Khel Road",
        "Zafar Town & Civil Lines",
        "Piplan Link",
        "Isa Khel Link",
        "Kalabagh Area",
        "Kundian Link",
        "Other Area / Main Town"
      ],
      "Attock": [
        "Attock Cantt",
        "Civil Lines",
        "People's Colony",
        "Kamra Air Base Area",
        "Hazro Link",
        "Hassan Abdal Link",
        "Fateh Jang Link",
        "Pindi Gheb Link",
        "Other Area / Main Town"
      ],
      "Vehari": [
        "Danewal Town",
        "People's Colony",
        "Multan Road",
        "Club Road",
        "Mailsi Link",
        "Luddan Road",
        "Other Area / Main Town"
      ],
      "Layyah": [
        "Housing Scheme No. 1 & 2",
        "College Road",
        "Chaubara Road",
        "Karor Lal Esan",
        "Fatehpur Link",
        "Other Area / Main Town"
      ],
      "Kot Addu": [
        "Thermal Power Colony",
        "G.T. Road Kot Addu",
        "Daira Din Panah",
        "Sanawan Area",
        "Chowk Sarwar Shaheed",
        "Other Area / Main Town"
      ],
      "Khushab & Jauharabad": [
        "Civil Lines Jauharabad",
        "Satellite Town",
        "Muzaffargarh Road",
        "Quaidabad Link",
        "Noorpur Thal Link",
        "Naushera (Soon Valley)",
        "Other Area / Main Town"
      ],
      "Bhakkar": [
        "Model Town",
        "Darya Khan Link",
        "Mankera Link",
        "Kalur Kot Link",
        "Jhang Road",
        "Other Area / Main Town"
      ],
      "Lodhran": [
        "Super Town",
        "Bahawalpur Road",
        "Dunyapur Link",
        "Kahror Pacca Link",
        "Railway Colony",
        "Other Area / Main Town"
      ],
      "Wazirabad": [
        "Nizamabad",
        "Circular Road",
        "Sialkot Road",
        "Ali Pur Chatha Link",
        "G.T. Road Wazirabad",
        "Other Area / Main Town"
      ],
      "Daska": [
        "Sambrial Road",
        "Wazirabad Road",
        "College Road & Civil Hospital Area",
        "Gujranwala Road",
        "Jamke Cheema",
        "Other Area / Main Town"
      ],
      "Gojra": [
        "Railway Road",
        "Samundri Road",
        "Toba Road",
        "Faisalabad Road",
        "Main Grain Market",
        "Other Area / Main Town"
      ],
      "Samundri": [
        "Tandlianwala Road",
        "Rajana Road",
        "Faisalabad Road",
        "Kachehri Bazar",
        "Other Area / Main Town"
      ],
      "Jalalpur Jattan": [
        "Circular Road",
        "Gujrat Road",
        "Tanda Road",
        "Main Bazar & Kulachor Chowk",
        "Other Area / Main Town"
      ],
      "Bhalwal": [
        "Satellite Town",
        "Mandi Bahauddin Road",
        "Sargodha Road",
        "Kot Momin Link",
        "Other Area / Main Town"
      ],
      "Pattoki": [
        "Multan Road Pattoki",
        "Railway Station Area",
        "Phool Nagar (Bhai Pheru)",
        "Habibabad Link",
        "Other Area / Main Town"
      ],
      "Ahmedpur East": [
        "Dera Nawab Sahib",
        "KLP Road",
        "Model Town Ahmedpur",
        "Uch Sharif Link",
        "Other Area / Main Town"
      ],
      "Haroonabad": [
        "Faqirwali Road",
        "Baldia Colony",
        "Model Town",
        "Fort Abbas Road",
        "Other Area / Main Town"
      ],
      "Chichawatni": [
        "Kamalia Road",
        "Burewala Road",
        "G.T. Road Chichawatni",
        "Blocks 1 to 12",
        "Other Area / Main Town"
      ],
      "Mailsi": [
        "Tibba Sultanpur",
        "Multan Road Mailsi",
        "Colony Area",
        "Karampur Link",
        "Other Area / Main Town"
      ],
      "Taunsa Sharif": [
        "Mangrotha Road",
        "Indus Highway Taunsa",
        "D.G. Khan Road",
        "Main Bazar",
        "Other Area / Main Town"
      ],
      "Shakargarh": [
        "Railway Road",
        "Zafarwal Road",
        "Narowal Road",
        "City Center & Main Bazar",
        "Other Area / Main Town"
      ],
      "Narowal": [
        "Circular Road",
        "Pasrur Road",
        "Zafarwal Link",
        "New Lahore Road",
        "Other Area / Main Town"
      ],
      "Talagang": [
        "Chakwal Road",
        "Mianwali Road",
        "Tamman Road",
        "Traffic Chowk & City Center",
        "Other Area / Main Town"
      ]
    },

    "Sindh": {
      "Karachi": [
        "Clifton (Blocks 1 - 9)",
        "DHA Phase 1 - 4",
        "DHA Phase 5 - 8",
        "DHA Phase 8 Extension & Emaar",
        "Gulshan-e-Iqbal (Blocks 1 - 19)",
        "North Nazimabad (Blocks A - N)",
        "PECHS (Blocks 1 - 6)",
        "Bahadurabad & Tariq Road",
        "Gulistan-e-Johar (Blocks 1 - 20)",
        "Federal B Area (Blocks 1 - 22)",
        "Nazimabad (Nos. 1 - 5)",
        "Saddar & Regal Chowk",
        "Malir Cantt & Malir City",
        "Korangi Industrial Area & Town",
        "Landhi & Babar Market",
        "North Karachi (Sectors 1 - 11)",
        "Gulshan-e-Maymar (Sectors Q - Z)",
        "Scheme 33 (Gulshan-e-Kaneez Fatima, Saadi Town, etc.)",
        "Manzoor Colony & Baloch Colony",
        "Model Colony & Airport Area",
        "Shah Faisal Colony",
        "Liaquatabad (Laloo Khait)",
        "Jamshed Road & Gurumandir",
        "Garden East & Garden West",
        "Kharadar & Mithadar",
        "Defence View Phase 1 - 2",
        "Askari (1, 2, 3, 4, 5)",
        "Karachi Cantt & Civil Lines",
        "Orangi Town (Sectors 1 - 16)",
        "Baldia Town & Saeedabad",
        "Keamari & Mauripur",
        "Lyari (All Sectors)",
        "Steel Town & Gulshan-e-Hadeed",
        "Surjani Town (Sectors 1 - 10)",
        "Qaidabad & Dawood Chowrangi",
        "Korangi Creek & Mehran Town",
        "Mehmoodabad & Chanesar Goth",
        "Other Area / Main Town"
      ],
      "Hyderabad": [
        "Latifabad Unit 1 - 6",
        "Latifabad Unit 7 - 12",
        "Qasimabad (Phase 1 & 2)",
        "Hirabad",
        "Hyderabad Cantt",
        "Auto Bhan Road",
        "Thandi Sarak",
        "Saddar Hyderabad",
        "Citizen Colony",
        "GOR Colony",
        "Kohsar Housing Society",
        "Wadhu Wah Road",
        "Nasim Nagar",
        "Gulshan-e-Hali",
        "Phuleli & Paretabad",
        "Other Area / Main Town"
      ],
      "Sukkur": [
        "Military Road",
        "Minara Road",
        "Barrage Colony",
        "Shalimar & New Sukkur",
        "Workshop Road",
        "Queens Road",
        "Old Sukkur",
        "Lab-e-Mehran Riverfront",
        "Bunder Road",
        "Rohri Link Area",
        "Other Area / Main Town"
      ],
      "Larkana": [
        "VIP Road",
        "Station Road",
        "Sachal Colony",
        "Waleed & Civil Lines",
        "Lahori Mohallah",
        "Resham Gali & Shahi Bazar",
        "Ratodero Link",
        "Bakrani Link",
        "Dokri Link",
        "Other Area / Main Town"
      ],
      "Nawabshah (Shaheed Benazirabad)": [
        "Society Area",
        "Manuabad",
        "Kazi Ahmed Road",
        "Sakrand Road",
        "Jam Sahib Road",
        "Hospital Road & Civil Hospital Area",
        "Qazi Ahmed Link",
        "Daur Link",
        "Other Area / Main Town"
      ],
      "Mirpur Khas": [
        "Satellite Town",
        "Ring Road",
        "Hirabad",
        "Sir Syed Road",
        "Station Road & Shahi Bazar",
        "Digri Link",
        "Kot Ghulam Muhammad Link",
        "Other Area / Main Town"
      ],
      "Thatta": [
        "Makli Hill Area",
        "Gharo Town",
        "Gujjo Link",
        "Mirpur Sakro",
        "Sujawal Link",
        "Jhok Sharif",
        "National Highway Thatta",
        "Other Area / Main Town"
      ],
      "Jacobabad": [
        "Quetta Road",
        "Shikarpur Road",
        "Civil Lines",
        "Family Lines",
        "Garhi Khairo Link",
        "Thul Link",
        "DC Office Road",
        "Other Area / Main Town"
      ],
      "Shikarpur": [
        "Station Road",
        "Hathi Gate",
        "Stuart Ganj",
        "Lakhi Gate",
        "Garhi Yasin Link",
        "Khanpur Link",
        "Shahi Bazar",
        "Other Area / Main Town"
      ],
      "Khairpur": [
        "Mall Road & Faiz Mahal Area",
        "Luqman Town",
        "Gambat Link",
        "Kot Diji Link",
        "Pir Jo Goth Link",
        "Ranipur Link",
        "Thari Mirwah",
        "Other Area / Main Town"
      ],
      "Dadu": [
        "Station Road Dadu",
        "Cinema Road",
        "Kachehri Road",
        "Mehar Link",
        "Khairpur Nathan Shah (KN Shah)",
        "Johi Link",
        "Makhdoom Bilawal Town",
        "Other Area / Main Town"
      ],
      "Tando Allahyar": [
        "Station Road",
        "Mirwah Road",
        "Chamber Road",
        "Nasarpur Link",
        "Jhanda Mari",
        "Sultanabad Link",
        "Other Area / Main Town"
      ],
      "Tando Adam": [
        "Station Road",
        "Johar Colony",
        "Hyderabad Road",
        "Berani Road",
        "Muhammadi Colony",
        "Chowk Bazar",
        "Other Area / Main Town"
      ],
      "Tando Muhammad Khan": [
        "Station Road",
        "Hyderabad Road",
        "Bulri Shah Karim Link",
        "Tando Ghulam Hyder",
        "Matli Road",
        "Other Area / Main Town"
      ],
      "Badin": [
        "Kadhan Road",
        "Shahnawaz Chowk",
        "Seerani Road",
        "Matli Link",
        "Golarchi (Shaheed Fazil Rahu)",
        "Talhar Link",
        "Tando Bago Link",
        "Other Area / Main Town"
      ],
      "Umerkot": [
        "Fort Area Umerkot",
        "Station Road",
        "Mirpur Khas Road",
        "Kunri Link",
        "Samaro Link",
        "Pithoro Link",
        "Other Area / Main Town"
      ],
      "Ghotki": [
        "Station Road Ghotki",
        "National Highway Area",
        "Mirpur Mathelo Link",
        "Daharki Link",
        "Ubauro Link",
        "Khangarh Link",
        "Other Area / Main Town"
      ],
      "Kashmore & Kandhkot": [
        "Kashmore Colony",
        "Guddu Barrage Colony",
        "Kandhkot Main Bazar",
        "Tangwani Link",
        "Bakhshapur Link",
        "Indus Highway Corridor",
        "Other Area / Main Town"
      ],
      "Sanghar": [
        "Housing Society Sanghar",
        "Shahdadpur Link",
        "Sinjhoro Link",
        "Tando Adam Link",
        "Khipro Link",
        "Jam Nawaz Ali Link",
        "Other Area / Main Town"
      ],
      "Kotri & Jamshoro": [
        "University of Sindh Campus Area",
        "Jamshoro Housing Society",
        "Kotri SITE Area",
        "Bolhari Town",
        "Sehwan Road Corridor",
        "LUMHS Campus Area",
        "Other Area / Main Town"
      ],
      "Shahdadkot": [
        "Kamber City",
        "Kotoo Motoo Chowk",
        "Station Road",
        "Mirokhan Link",
        "Qubo Saeed Khan",
        "Other Area / Main Town"
      ],
      "Naushahro Feroze": [
        "Moro Link",
        "Bhiria City",
        "Mehrabpur Link",
        "Kandiaro Link",
        "Padidan Link",
        "Tharushah",
        "Other Area / Main Town"
      ],
      "Moro": [
        "National Highway Moro",
        "Dadu Road",
        "Main Bazar Moro",
        "New Bus Stand Area",
        "Other Area / Main Town"
      ],
      "Daharki": [
        "Engro Chemical Colony",
        "Fauji Fertilizer Colony",
        "National Highway Daharki",
        "Main Bazar",
        "Other Area / Main Town"
      ],
      "Pano Akil": [
        "Pano Akil Cantt",
        "Sukkur Road",
        "Station Road",
        "National Highway Area",
        "Other Area / Main Town"
      ],
      "Rohri": [
        "Railway Junction Area",
        "Bedil Bekas Colony",
        "Ali Wahan",
        "National Highway Rohri",
        "Other Area / Main Town"
      ],
      "Mirpur Mathelo": [
        "Engro Enclave",
        "FFC Township",
        "Station Road",
        "Main Bazar",
        "Other Area / Main Town"
      ],
      "Ranipur": [
        "Dargah Bodla Bahar Area",
        "National Highway Ranipur",
        "Gambat Road",
        "Station Area",
        "Other Area / Main Town"
      ],
      "Sehwan Sharif": [
        "Dargah Lal Shahbaz Qalandar Area",
        "Indus Highway Sehwan",
        "Jahaz Chowk",
        "Bhan Syedabad Link",
        "Other Area / Main Town"
      ],
      "Hala": [
        "Hala Old",
        "Hala New",
        "Bhit Shah (Dargah Shah Abdul Latif)",
        "National Highway Hala",
        "Other Area / Main Town"
      ],
      "Matiari": [
        "National Highway Matiari",
        "Hala Road",
        "Khyber Area",
        "New Saeedabad Link",
        "Other Area / Main Town"
      ],
      "Khipro": [
        "Sanghar Road Khipro",
        "Station Road",
        "Hathungo Link",
        "Bilawal Town",
        "Other Area / Main Town"
      ],
      "Mithi (Tharparkar)": [
        "Naukot Road",
        "Islamkot Road",
        "Chelhar Road",
        "Gadro Link",
        "Main Bazar Mithi",
        "Other Area / Main Town"
      ],
      "Islamkot": [
        "Engro Coal Township",
        "Mithi Road",
        "Nagarparkar Road",
        "Main Bazar Islamkot",
        "Other Area / Main Town"
      ],
      "Digri": [
        "Mirpur Khas Road Digri",
        "Tando Jan Mohammad Road",
        "Jhuddo Link",
        "Station Road",
        "Other Area / Main Town"
      ],
      "Mehar": [
        "Dadu Road Mehar",
        "Radhan Road",
        "Larkana Road",
        "Ghanta Ghar Chowk",
        "Other Area / Main Town"
      ],
      "Gambat": [
        "GIMS Hospital Area",
        "National Highway Gambat",
        "Agror Road",
        "Station Road",
        "Other Area / Main Town"
      ]
    },

    "Khyber Pakhtunkhwa (KPK)": {
      "Peshawar": [
        "Hayatabad (Phase 1, 2, 3)",
        "Hayatabad (Phase 4, 5, 6, 7)",
        "University Town",
        "Peshawar Cantonment (Cantt)",
        "Saddar & Mall Road",
        "Gulbahar (1, 2, 3, 4)",
        "Warsak Road & Warsak Colony",
        "Ring Road & Northern Bypass",
        "Dalazak Road",
        "Charsadda Road Peshawar",
        "Board Bazar & Jamrud Road",
        "Regi Model Town",
        "DHA Peshawar",
        "Shami Road & Defence Colony",
        "City Circular Road & Qissa Khwani",
        "Kohat Road Peshawar",
        "Dora Road & Kakshal",
        "Other Area / Main Town"
      ],
      "Mardan": [
        "Mardan Cantt",
        "Sheikh Maltoon Town (Sector A - K)",
        "Baghdada",
        "Bank Road & Shamsi Road",
        "Nowshera Road Mardan",
        "Malakand Road",
        "Takht Bhai Link",
        "Katlang Link",
        "Rustam Link",
        "Charsadda Road Mardan",
        "Other Area / Main Town"
      ],
      "Abbottabad": [
        "Abbottabad Cantt",
        "Supply Bazar",
        "Mandian & Ayub Medical Complex Area",
        "Kakul (PMA Road)",
        "Jinnahabad",
        "Murree Road Abbottabad",
        "Nawan Shehr",
        "Mansehra Road Abbottabad",
        "Havelian Link Area",
        "Mirpur Area",
        "Other Area / Main Town"
      ],
      "Swat (Mingora)": [
        "Mingora City & Shahi Bazar",
        "Saidu Sharif",
        "Fizagat & Bypass Road",
        "Makanbagh",
        "Gulkada (1, 2, 3)",
        "Bahrain Link",
        "Madyan Link",
        "Kalam Valley Link",
        "Matta Link",
        "Kabal Link",
        "Khwazakhela Link",
        "Other Area / Main Town"
      ],
      "Kohat": [
        "Kohat Cantt",
        "KDA (Kohat Development Authority) Scheme",
        "Rawalpindi Road Kohat",
        "Hangu Road",
        "Bannu Road Kohat",
        "Shakardarra Link",
        "Lachi Link",
        "City Bazar & Circular Road",
        "Other Area / Main Town"
      ],
      "Dera Ismail Khan (D.I. Khan)": [
        "D.I. Khan Cantt",
        "University Road / Gomal University",
        "Circular Road D.I. Khan",
        "Topanwala Gate & Commissionery Bazar",
        "Paharpur Link",
        "Paroa Link",
        "Kulachi Link",
        "Bannu Road D.I. Khan",
        "Other Area / Main Town"
      ],
      "Haripur": [
        "Model Town Haripur",
        "G.T. Road Haripur",
        "Khalabat Township (Sectors 1 - 4)",
        "Hattar Industrial Estate Area",
        "Khanpur Dam Area",
        "TIP Colony",
        "Kot Najibullah Link",
        "Other Area / Main Town"
      ],
      "Bannu": [
        "Bannu Cantt",
        "Bannu Township",
        "Miran Shah Road",
        "D.I. Khan Road Bannu",
        "Kohat Road Bannu",
        "Domel Link",
        "Mandan Area",
        "Other Area / Main Town"
      ],
      "Nowshera": [
        "Nowshera Cantt",
        "Risalpur Area",
        "ASC Colony",
        "G.T. Road Nowshera",
        "Mardan Road Nowshera",
        "Pabbi Link Area",
        "Akora Khattak Link",
        "Jehangira Link",
        "Hakimabad",
        "Other Area / Main Town"
      ],
      "Charsadda": [
        "Charsadda City Bazar",
        "Tangi Link",
        "Shabqadar Link",
        "Utmanzai",
        "Mardan Road Charsadda",
        "Peshawar Road Charsadda",
        "Sardaryab Riverfront Area",
        "Other Area / Main Town"
      ],
      "Swabi": [
        "Swabi City & Main Bazar",
        "Topi City",
        "Gadoon Amazai Industrial Area",
        "Shahmansoor Township",
        "Chota Lahor",
        "Marghuz & Zaida",
        "Kalu Khan Link",
        "Other Area / Main Town"
      ],
      "Mansehra": [
        "Karakoram Highway (KKH) Corridor",
        "College Doraha",
        "Ghazikot Township",
        "Shinkiari Link",
        "Balakot Valley Road",
        "Oghi Link",
        "Baffa Link",
        "Other Area / Main Town"
      ],
      "Malakand": [
        "Batkhela City",
        "Dargai Area",
        "Thana Town",
        "Sakhakot Area",
        "Malakand Pass Area",
        "Other Area / Main Town"
      ],
      "Dir Lower (Timergara)": [
        "Timergara Bazar",
        "Balambat",
        "Munda Area",
        "Samarbagh",
        "Khall Area",
        "Lal Qila (Maidan)",
        "Other Area / Main Town"
      ],
      "Dir Upper": [
        "Dir Bazar",
        "Wari Area",
        "Sheringal (Dir Kohistan)",
        "Kalkot Link",
        "Kumrat Valley Road Area",
        "Other Area / Main Town"
      ],
      "Chitral": [
        "Chitral City & Shahi Bazar",
        "Drosh Town",
        "Booni Area",
        "Garam Chashma Road",
        "Airport Road Chitral",
        "Mastuj Link",
        "Ayun & Kalash Valley Road",
        "Other Area / Main Town"
      ],
      "Batkhela": [
        "Main Bazar Batkhela",
        "Hospital Road",
        "Ziarat Mor",
        "Thana Road",
        "Other Area / Main Town"
      ],
      "Hangu": [
        "Main Bazar Hangu",
        "Thall Town",
        "Doaba Area",
        "Kohat Road Hangu",
        "Other Area / Main Town"
      ],
      "Karak": [
        "Amberi Kalay",
        "Latamber Area",
        "Takht-e-Nasrati",
        "Sabirabad Link",
        "Indus Highway Karak",
        "Other Area / Main Town"
      ],
      "Tank": [
        "D.I. Khan Road Tank",
        "Wana Road Tank",
        "Main Bazar Tank",
        "Gomal Valley Area",
        "Other Area / Main Town"
      ],
      "Lakki Marwat": [
        "Serai Naurang",
        "Tajazai / District Complex",
        "Ghazni Khel",
        "Main Bazar Lakki",
        "Other Area / Main Town"
      ],
      "Risalpur": [
        "PAF Academy Colony",
        "Risalpur Cantt",
        "Nowshera Road Risalpur",
        "Mardan Road Risalpur",
        "Other Area / Main Town"
      ],
      "Shabqadar": [
        "Doaba Shabqadar",
        "Matta Road",
        "Peshawar Road Shabqadar",
        "Main Bazar",
        "Other Area / Main Town"
      ],
      "Topi": [
        "GIK Institute Surrounding Area",
        "Tarbela Dam Colony Area",
        "Main Bazar Topi",
        "Swabi Road Topi",
        "Other Area / Main Town"
      ],
      "Buner (Daggar)": [
        "Daggar City",
        "Pir Baba Shrine Area",
        "Sowari Bazar",
        "Totalai Area",
        "Ambela Pass Area",
        "Other Area / Main Town"
      ],
      "Shangla": [
        "Alpuri City",
        "Besham City (KKH)",
        "Chakesar Area",
        "Puran Area",
        "Karora Link",
        "Other Area / Main Town"
      ],
      "Kohistan": [
        "Dassu Town",
        "Pattan Area",
        "Komila Area",
        "Kolai-Palas Area",
        "KKH Kohistan Strip",
        "Other Area / Main Town"
      ],
      "Kurram (Parachinar)": [
        "Parachinar City Center",
        "Sadda Bazar",
        "Alizai Area",
        "Dogar Area",
        "Other Area / Main Town"
      ],
      "South Waziristan (Wana)": [
        "Wana Bazar",
        "Shakai Area",
        "Angoor Adda Road",
        "Ladha Area",
        "Sararogha Link",
        "Other Area / Main Town"
      ],
      "North Waziristan (Miranshah)": [
        "Miranshah Bazar",
        "Mir Ali Bazar",
        "Razmak Valley Area",
        "Datta Khel Link",
        "Spinwam Area",
        "Other Area / Main Town"
      ],
      "Bajaur (Khar)": [
        "Khar Bazar",
        "Nawagai Area",
        "Inayat Qila",
        "Mamund Valley",
        "Salarzai Link",
        "Other Area / Main Town"
      ],
      "Mohmand (Ghalanai)": [
        "Ghalanai Headquarter Area",
        "Ekka Ghund",
        "Mian Mandi",
        "Pandyali Link",
        "Other Area / Main Town"
      ],
      "Khyber (Landi Kotal / Jamrud)": [
        "Jamrud Bazar & Bab-e-Khyber",
        "Landi Kotal Bazar",
        "Torkham Border Road",
        "Bara Bazar",
        "Shagai Fort Area",
        "Other Area / Main Town"
      ],
      "Orakzai": [
        "Kalaya Headquarter",
        "Hangu Link Orakzai",
        "Ghiljo Bazar",
        "Dargai Area",
        "Other Area / Main Town"
      ]
    },

    "Balochistan": {
      "Quetta": [
        "Quetta Cantonment (Cantt)",
        "Jinnah Town",
        "Satellite Town Quetta",
        "Samungli Road & Airport Area",
        "Zarghoon Road",
        "Shahrah-e-Iqbal & Liaquat Bazar",
        "Model Town Quetta",
        "Nawan Killi",
        "Brewery Road & Hazara Town",
        "Double Road & Joint Road",
        "Spinny Road",
        "Chiltan Housing Scheme",
        "Sariab Road",
        "Alamdar Road & Mariabad",
        "Kansi Road",
        "Patel Bagh",
        "Other Area / Main Town"
      ],
      "Gwadar": [
        "Marine Drive Gwadar",
        "New Port City / Port Area",
        "Sangar Housing Project",
        "Airport Road Gwadar",
        "Jinnah Avenue",
        "Padizar Area",
        "West Bay Area",
        "Koh-e-Batil Area",
        "Shahi Bazar Gwadar",
        "Other Area / Main Town"
      ],
      "Hub": [
        "Hub Chowki Main",
        "Hub Industrial Trading Estate (HITE)",
        "Windar Link",
        "Gadani Road",
        "Lasbela University Area",
        "RCD Highway Corridor",
        "Other Area / Main Town"
      ],
      "Turbat (Kech)": [
        "Main Bazar Turbat",
        "Airport Road Turbat",
        "Absor Area",
        "Malikabad",
        "D-Baloch",
        "Hoshab Road Area",
        "Ginna Area",
        "Other Area / Main Town"
      ],
      "Khuzdar": [
        "Khuzdar Cantt",
        "RCD Highway Khuzdar",
        "Engineering University Area",
        "Baghbana",
        "Nal Link",
        "Wadh Link",
        "Zehri Link",
        "City Bazar Khuzdar",
        "Other Area / Main Town"
      ],
      "Chaman": [
        "Mall Road Chaman",
        "Border Gate Road",
        "Boghra Road",
        "Killa Abdullah Road",
        "Trench Road",
        "Station Bazar Chaman",
        "Other Area / Main Town"
      ],
      "Sibi": [
        "Sibi Cantt",
        "Jinnah Road Sibi",
        "Station Road Sibi",
        "Luni Road",
        "Dhadar Link",
        "Ghaibi Pir Road",
        "Other Area / Main Town"
      ],
      "Zhob": [
        "Zhob Cantt",
        "D.I. Khan Road Zhob",
        "Quetta Road Zhob",
        "Appozai Area",
        "Sambaza Link",
        "Main Bazar Zhob",
        "Other Area / Main Town"
      ],
      "Loralai": [
        "Loralai Cantt",
        "Quetta Road Loralai",
        "Duki Link",
        "Bori Area",
        "Mekhtar Link",
        "College Road Loralai",
        "Other Area / Main Town"
      ],
      "Dera Murad Jamali": [
        "National Highway Area",
        "Railway Road",
        "Temple Dera",
        "Tamboo Area",
        "City Center DM Jamali",
        "Other Area / Main Town"
      ],
      "Dera Allah Yar": [
        "National Highway Strip",
        "Station Road",
        "Jhatpat Bazar",
        "Usta Mohammad Link",
        "Other Area / Main Town"
      ],
      "Kalat": [
        "RCD Highway Kalat",
        "Shahi Bazar Kalat",
        "Mughal Garden Area",
        "Mangochar Link",
        "Surab Link",
        "Other Area / Main Town"
      ],
      "Mastung": [
        "RCD Highway Mastung",
        "Quetta Road Mastung",
        "Pringabad",
        "Dasht Area",
        "Kadh Link",
        "Other Area / Main Town"
      ],
      "Nushki": [
        "Quetta Road Nushki",
        "Taftan Highway",
        "Keshangi Area",
        "Mal Area",
        "Main Bazar Nushki",
        "Other Area / Main Town"
      ],
      "Pishin": [
        "Quetta Road Pishin",
        "Band Khushdil Khan Area",
        "Barshore Link",
        "Saranan Area",
        "Hurramzai Area",
        "Other Area / Main Town"
      ],
      "Jaffarabad": [
        "Usta Muhammad Link",
        "Gandakha Area",
        "Rojhan Jamali",
        "Sanjrani Town",
        "Other Area / Main Town"
      ],
      "Nasirabad": [
        "Dera Murad Jamali Area",
        "Chattar Link",
        "Baba Kot Area",
        "Meer Hassan Area",
        "Other Area / Main Town"
      ],
      "Kharan": [
        "Main Bazar Kharan",
        "Washuk Road",
        "Nag Road",
        "Sar-Kharan Area",
        "Other Area / Main Town"
      ],
      "Panjgur": [
        "Chitkan Bazar",
        "Tasp Area",
        "Gramkan Area",
        "Washbod Area",
        "Parom Link",
        "Other Area / Main Town"
      ],
      "Pasni": [
        "Pasni Port Area",
        "Juddi Area",
        "Ward No. 1 - 5",
        "Airport Road Pasni",
        "Coastal Highway Pasni",
        "Other Area / Main Town"
      ],
      "Ormara": [
        "Jinnah Naval Base Surrounding",
        "Coastal Highway Ormara",
        "Main Town & Fish Harbour",
        "Airport Area Ormara",
        "Other Area / Main Town"
      ],
      "Ziarat": [
        "Quetta Road Ziarat",
        "Quaid-e-Azam Residency Area",
        "Juniper Valley Area",
        "Sanjawi Link",
        "Bab-e-Ziarat & Mall Road",
        "Other Area / Main Town"
      ],
      "Kohlu": [
        "Main Bazar Kohlu",
        "Mawand Link",
        "Kahan Area",
        "Maiwand Road",
        "Other Area / Main Town"
      ],
      "Dera Bugti": [
        "Sui Town & Gas Field Area",
        "Pirkoh Link",
        "Uch Area",
        "Loti Area",
        "Dera Bugti Main City",
        "Other Area / Main Town"
      ],
      "Barkhan": [
        "Rakhni Bazar",
        "Main Bazar Barkhan",
        "Bhedi Area",
        "Vitakri Area",
        "Other Area / Main Town"
      ],
      "Harnai": [
        "Shahrag Area",
        "Spintangi Area",
        "Zardalu Area",
        "Khost Area",
        "Main Bazar Harnai",
        "Other Area / Main Town"
      ],
      "Washuk": [
        "Besima Area",
        "Mashkel Link",
        "Nag Town",
        "Shahgori Area",
        "Other Area / Main Town"
      ],
      "Qila Saifullah": [
        "Muslim Bagh Town",
        "Kanmetharzai",
        "Zhob Road Qila Saifullah",
        "Badini Area",
        "Other Area / Main Town"
      ],
      "Qila Abdullah": [
        "Jungle Pir Alizai",
        "Gulistan Town",
        "Chaman Highway",
        "Dobandi Area",
        "Other Area / Main Town"
      ],
      "Awaran": [
        "Kolwah Area",
        "Mashkay Area",
        "Jhal Jhao Link",
        "Gishkor Area",
        "Main Bazar Awaran",
        "Other Area / Main Town"
      ],
      "Usta Muhammad": [
        "Station Road Usta Muhammad",
        "Jhatpat Road",
        "Gandakha Road",
        "City Grain Market",
        "Other Area / Main Town"
      ]
    },

    "Islamabad Capital Territory": {
      "Islamabad": [
        "Sector F-6 (Super Market)",
        "Sector F-7 (Jinnah Super)",
        "Sector F-8 (Ayub Market)",
        "Sector F-10 (Markaz & Residential)",
        "Sector F-11 (Markaz & Residential)",
        "Sector G-6 (Melody / Aabpara)",
        "Sector G-7 (Sitara Market)",
        "Sector G-8 (Markaz & I-C-C-I)",
        "Sector G-9 (Karachi Company)",
        "Sector G-10 (Markaz & Residential)",
        "Sector G-11 (Markaz & Residential)",
        "Sector G-13 (All Sub-sectors)",
        "Sector G-14 & G-15",
        "Sector E-7 & Margalla Road",
        "Sector E-11 (MPCHS / FECHS)",
        "Sector H-8 & H-9 (Higher Institutions)",
        "Sector H-12 (NUST Campus & Tech Valley)",
        "Sector H-13",
        "Sector I-8 (Markaz & Residential)",
        "Sector I-9 & I-10",
        "Sector I-14 (Riphah University Area)",
        "Bahria Town Islamabad (Phases 1 - 8)",
        "Bahria Enclave (Blocks A - P)",
        "DHA Phase 1 (Islamabad)",
        "DHA Phase 2 (Islamabad)",
        "DHA Phase 3 / Serene City",
        "Gulberg Greens & Gulberg Residencia",
        "B-17 Multi Gardens (Blocks A - G)",
        "Sector D-12 & Shah Allah Ditta",
        "Bani Gala & Korang River",
        "Chak Shahzad & Park Road",
        "Park View City",
        "Soan Gardens & PWD Housing Scheme",
        "Naval Anchorage",
        "Korang Town & River Garden",
        "Tarnol & Motorway Chowk",
        "Bhara Kahu & Murree Expressway",
        "Rawal Town & Chaklala Link",
        "Diplomatic Enclave & Sector G-5 / F-5",
        "Blue Area (East & West)",
        "Lehtrar Road & Alipur Farash",
        "Other Area / Main Town"
      ]
    },

    "Azad Jammu & Kashmir (AJK)": {
      "Muzaffarabad": [
        "Upper Chatter",
        "Lower Chatter",
        "Gojra & Shahi Bazar",
        "Plate Area",
        "Tariqabad",
        "Jalalabad & Domel",
        "Garhi Dupatta Link",
        "Chehla Bandi",
        "Neelum Valley Road Entry",
        "Kohala Road Area",
        "Other Area / Main Town"
      ],
      "Mirpur": [
        "Sector F-1",
        "Sector F-2",
        "Sector F-3 & F-4",
        "Sector C-1 to C-4",
        "Sector D-1 to D-4",
        "Sector B-1 to B-4",
        "Allama Iqbal Road",
        "New City Mirpur",
        "Chowk Shaheedan & Shahi Bazar",
        "Mangla Cantt Link",
        "Islamgarh Link",
        "Kalyal Road",
        "Other Area / Main Town"
      ],
      "Rawalakot": [
        "CMH Road Rawalakot",
        "Main Bazar Rawalakot",
        "Housing Scheme Rawalakot",
        "Singola Link",
        "Hajeera Link",
        "Thorar Link",
        "Banjosa Lake Area",
        "Abbaspur Link",
        "Other Area / Main Town"
      ],
      "Kotli": [
        "Fatahpuri Area",
        "City Center & PWD Chowk",
        "Gulhar Sharif Area",
        "Housing Scheme Kotli",
        "Sehnsa Link",
        "Khuiratta Link",
        "Nakyal Link",
        "Charhoi Link",
        "Other Area / Main Town"
      ],
      "Bhimber": [
        "Chowki Bhimber",
        "Barnala Link",
        "Samahni Valley Link",
        "Kachehri Road",
        "Mirpur Road Bhimber",
        "Gujrat Road Bhimber",
        "Other Area / Main Town"
      ],
      "Bagh": [
        "Main Bazar Bagh",
        "Sudhan Gali Road",
        "Dhirkot Link",
        "Hari Ghel Area",
        "Chamankot Link",
        "Arja Link",
        "Other Area / Main Town"
      ],
      "Haveli (Kahuta)": [
        "Kahuta City (AJK)",
        "Forward Kahuta",
        "Khurshidabad Area",
        "Aliabad Link",
        "Other Area / Main Town"
      ],
      "Hattian Bala": [
        "Jhelum Valley Road",
        "Chikar Area",
        "Leepa Valley Entrance",
        "Chinari Town",
        "Other Area / Main Town"
      ],
      "Neelum Valley (Athmuqam)": [
        "Athmuqam Main Bazar",
        "Sharda Town",
        "Keran Riverside",
        "Kel Area",
        "Kutton & Jagran",
        "Taobat Border Area",
        "Dowarian Area",
        "Other Area / Main Town"
      ],
      "Sudhanoti (Pallandri)": [
        "Pallandri City Center",
        "Trarkhal Area",
        "Baloch Town",
        "Mang Area",
        "Gorah Link",
        "Other Area / Main Town"
      ],
      "Dadyal": [
        "Kachehri Road Dadyal",
        "Ratta Area",
        "Siakh Town",
        "Thara Link",
        "Amb Area",
        "Main Bazar Dadyal",
        "Other Area / Main Town"
      ],
      "Chakswari": [
        "Main Bazar Chakswari",
        "Tangdew Area",
        "Kalyal Chakswari",
        "Panyam Link",
        "Islamchora",
        "Other Area / Main Town"
      ],
      "Islamgarh": [
        "Main Bazar Islamgarh",
        "Pind Kalan",
        "Chak Haryam",
        "Kalyal Road",
        "Other Area / Main Town"
      ],
      "Mangla": [
        "Mangla Dam Colony",
        "Mangla Cantt",
        "Baral Area",
        "Old Mangla Town",
        "Other Area / Main Town"
      ],
      "Sehnsa": [
        "Main Bazar Sehnsa",
        "Kotli Road Sehnsa",
        "Sarsawa Area",
        "Panjera Link",
        "Other Area / Main Town"
      ]
    },

    "Gilgit-Baltistan": {
      "Gilgit": [
        "Jutial (Upper & Lower)",
        "Danyore City",
        "Kashrote Area",
        "Konodas Area",
        "Gilgit Cantt",
        "Airport Road Gilgit",
        "Amphary Area",
        "Khomer Area",
        "Zulfiqarabad",
        "Nomal Valley Link",
        "Oshikhandass",
        "Baseen Area",
        "Other Area / Main Town"
      ],
      "Skardu": [
        "Sadpara Road Skardu",
        "Airport Road Skardu",
        "Aliabad Skardu",
        "Gamba Skardu",
        "Hussainabad",
        "Shangrila / Lower Kachura",
        "Katpana Desert Area",
        "New Ranga Area",
        "Qomrah Valley",
        "Shigar Road Skardu",
        "Main Shahi Bazar Skardu",
        "Other Area / Main Town"
      ],
      "Hunza (Karimabad / Aliabad)": [
        "Karimabad City & Baltit Fort Area",
        "Aliabad Main Bazar",
        "Ganish Historic Settlement",
        "Altit Fort Area",
        "Nasirabad",
        "Hyderabad Hunza",
        "Gulmit (Upper Hunza)",
        "Passu Cones Area",
        "Sost Dry Port & Border Town",
        "Other Area / Main Town"
      ],
      "Chilas (Diamer)": [
        "KKH Bazar Chilas",
        "Basha Dam Site Surrounding",
        "Thor Area",
        "Babusar Pass Road",
        "Tangir Valley Link",
        "Darel Valley Link",
        "Gonar Farm Area",
        "Other Area / Main Town"
      ],
      "Ghizer (Gahkuch)": [
        "Gahkuch City Center",
        "Gupis Town",
        "Phander Valley Area",
        "Yasin Valley Link",
        "Ishkoman Valley Link",
        "Singal Area",
        "Other Area / Main Town"
      ],
      "Astore (Eidghah)": [
        "Eidghah Astore",
        "Gorikot Area",
        "Rama Valley & Meadows",
        "Ratu Area",
        "Chilam & Deosai Entrance",
        "Tarashing (Nanga Parbat Base)",
        "Other Area / Main Town"
      ],
      "Nagar": [
        "Nagarkhas",
        "Chalt Valley",
        "Minapin Village",
        "Hoper Valley & Glacier Area",
        "Sikandarabad",
        "Other Area / Main Town"
      ],
      "Shigar": [
        "Shigar Khas (Fort Area)",
        "Alchodi Area",
        "Markunja",
        "Gulabpur Link",
        "Basha Valley Link",
        "Other Area / Main Town"
      ],
      "Kharmang (Tolti)": [
        "Tolti City Center",
        "Manthoka Waterfall Area",
        "Mehdiabad Link",
        "Pari Area",
        "Shiriting Area",
        "Other Area / Main Town"
      ],
      "Ghangche (Khaplu)": [
        "Khaplu Bazar & Palace Area",
        "Machulo Town",
        "Saling Area",
        "Haldi Valley",
        "Doghani Link",
        "Hushe Valley Base",
        "Other Area / Main Town"
      ],
      "Passu & Gojal": [
        "Passu Village",
        "Sost Dry Port Town",
        "Gulmit Village",
        "Shishkat (Attabad Lake)",
        "Shimshal Valley Entrance",
        "Hussaini Village",
        "Other Area / Main Town"
      ],
      "Juglot": [
        "KKH Junction (3 Mountain Ranges)",
        "Main Bazar Juglot",
        "Damote Area",
        "Sai Valley Link",
        "Bunji Road Junction",
        "Other Area / Main Town"
      ]
    }
  };

  if (typeof window !== 'undefined') {
    window.PAKISTAN_LOCATIONS = PAKISTAN_LOCATIONS;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.PAKISTAN_LOCATIONS = PAKISTAN_LOCATIONS;
  }
