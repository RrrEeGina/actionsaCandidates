// Everything you'll actually need to touch to re-brand this for a new poster
// or add more localized videos lives in this one file.
export const CONFIG = {
  // Compiled MindAR target file for the poster (see README: "Compiling the poster target").
  targetSrc: "assets/targets/poster.mind",

  // Geolocation timeout before giving up, in ms.
  geolocationTimeoutMs: 8000,

  // MDB ward-lookup API timeout before giving up and falling back, in ms —
  // guards against a slow/flaky mobile connection hanging the app.
  wardLookupTimeoutMs: 8000,

  // Ward-level videos, keyed by MDB WardID (e.g. "19100115"). Highest-priority
  // match — if the visitor's ward is here, this plays directly.
  wardVideoMap: {
    // "19100115": "assets/videos/ward-19100115.mp4",
  },

  // Per-ward candidate names, keyed by MDB WardID, generated from the IEC
  // certified candidate list by scripts/extract_candidates_v2.py,
  // scripts/classify_and_match.py and scripts/retry_failed.py (see README
  // "Ward candidate names"). Used for the landing page's "GATVOL? LET <name>
  // FIX IT" text when a ward has no video of its own but IS inside one of
  // the municipalityFallbacks below.
  wardCandidateMap: {
    "10501001": "Eugéne Anthony Pieterse", // Laingsburg, Ward 1
    "10501002": "Jerome Louis Wylbach", // Laingsburg, Ward 2
    "10501003": "Karel Hendrik Petrus Van Der Westhuizen", // Laingsburg, Ward 3
    "10501004": "Samuel Laban", // Laingsburg, Ward 4
    "10501005": "Tommie Anthony Wylbach", // Laingsburg, Ward 5
    "10502001": "Kiewiet Hermanus Corneluis Baadjies", // Prince Albert, Ward 1
    "10502002": "Ben Stols", // Prince Albert, Ward 2
    "10502003": "Andre Wilson Hinkman", // Prince Albert, Ward 3
    "10502004": "O'neacha Rossouw", // Prince Albert, Ward 4
    "10502005": "Danelle Macailen Fortuin", // Prince Albert, Ward 5
    "10503001": "Katrina Elna Murray", // Beaufort West, Ward 1
    "10503002": "André Gilbert Lawrence", // Beaufort West, Ward 2
    "10503003": "Agus Plaatjies", // Beaufort West, Ward 3
    "10503004": "Ivan Blouw", // Beaufort West, Ward 4
    "10503005": "Julian Eben Malow", // Beaufort West, Ward 5
    "10503006": "Maria Esau", // Beaufort West, Ward 6
    "10503007": "Aubrey Rittles", // Beaufort West, Ward 7
    "19100001": "Dereleen Elana James", // City of Cape Town, Ward 1
    "21004001": "Anellisa Mxube", // Makana, Ward 1
    "21004002": "Buhle Mdoko", // Makana, Ward 2
    "21004003": "Nontsikelelo Avonica Cunge", // Makana, Ward 3
    "21004004": "Antoinette Porcha Swartbooi", // Makana, Ward 4
    "21004005": "Ntombozuko Jacob", // Makana, Ward 5
    "21004006": "Nomangesi Dude", // Makana, Ward 6
    "21004007": "Buhle Mdoko", // Makana, Ward 7
    "21004008": "Temba Frank", // Makana, Ward 8
    "21004009": "Sinazo Ntlokwana", // Makana, Ward 9
    "21004010": "Mzwekhaya Patrick Mka", // Makana, Ward 10
    "21004011": "Siyanda Yose", // Makana, Ward 11
    "21004012": "Zamuxolo Tsana", // Makana, Ward 12
    "21004013": "Bulelwa Renah Dude", // Makana, Ward 13
    "21307001": "Phakamsile Mtitshana", // Dr AB Xuma, Ward 1
    "29200001": "Sanele Magaqa", // Buffalo City, Ward 1
    "29300001": "Vusikhaya Arthur Marwana", // Nelson Mandela Bay, Ward 1
    "29300002": "Maxwell Mgwenya", // Nelson Mandela Bay, Ward 2
    "29300003": "Julio Antonio Carrillo Venegas", // Nelson Mandela Bay, Ward 3
    "29300004": "Chimurenga Itai Mdabula", // Nelson Mandela Bay, Ward 4
    "29300005": "Sandile Rwexwana", // Nelson Mandela Bay, Ward 5
    "29300006": "Lungile Ishmael Mnukwa", // Nelson Mandela Bay, Ward 6
    "29300007": "Roydon Lee Brown", // Nelson Mandela Bay, Ward 7
    "29300008": "Lithule Nyokana", // Nelson Mandela Bay, Ward 8
    "29300009": "Luxolo Kanyisa Klaas", // Nelson Mandela Bay, Ward 9
    "29300010": "Iqbal Bangaree", // Nelson Mandela Bay, Ward 10
    "29300011": "Komkulu Venon Schultz", // Nelson Mandela Bay, Ward 11
    "29300012": "Monwabisi Magidimisi", // Nelson Mandela Bay, Ward 12
    "29300013": "Ovayo Sihle Mhlanga", // Nelson Mandela Bay, Ward 13
    "29300014": "Vuyani Galen Dyantyi", // Nelson Mandela Bay, Ward 14
    "29300015": "Magdalene Bangaree", // Nelson Mandela Bay, Ward 15
    "29300016": "Thembakazi Princess Jacobs", // Nelson Mandela Bay, Ward 16
    "29300017": "Sizwe Xolani Sandi", // Nelson Mandela Bay, Ward 17
    "29300018": "Andile Joseph Ncanywa", // Nelson Mandela Bay, Ward 18
    "29300019": "Lukhanyo Mguqulwa", // Nelson Mandela Bay, Ward 19
    "29300020": "Khayalethu Precious Siqwephu", // Nelson Mandela Bay, Ward 20
    "29300021": "Mtiwabo Michael Ndube", // Nelson Mandela Bay, Ward 21
    "29300022": "Nosipho Judith Numa", // Nelson Mandela Bay, Ward 22
    "29300023": "Ntombethemba Dila", // Nelson Mandela Bay, Ward 23
    "29300024": "Nomvuyo Veronica Mgqwanca", // Nelson Mandela Bay, Ward 24
    "29300025": "Moegamat Ayub Abrahams", // Nelson Mandela Bay, Ward 25
    "29300026": "Luzuko April", // Nelson Mandela Bay, Ward 26
    "29300027": "Veronica Yoliswa Mafanya", // Nelson Mandela Bay, Ward 27
    "29300028": "Kwakhona Boco", // Nelson Mandela Bay, Ward 28
    "29300029": "Gerald Matthews De Bruin", // Nelson Mandela Bay, Ward 29
    "29300030": "Zenande Candice Gosa", // Nelson Mandela Bay, Ward 30
    "29300031": "Bulelani Simayile", // Nelson Mandela Bay, Ward 31
    "29300032": "Alicia Zandile Hloma", // Nelson Mandela Bay, Ward 32
    "29300033": "Thembekazi Monica Mazantsi", // Nelson Mandela Bay, Ward 33
    "29300034": "Soleil Hedl Booysen", // Nelson Mandela Bay, Ward 34
    "29300035": "Karin Williams", // Nelson Mandela Bay, Ward 35
    "29300036": "Ncedolufikile Ngamlana", // Nelson Mandela Bay, Ward 36
    "29300037": "Justin Simphiwe Muku", // Nelson Mandela Bay, Ward 37
    "29300038": "Xolani Casper Jonas", // Nelson Mandela Bay, Ward 38
    "29300039": "Siyanda Ntsumpa", // Nelson Mandela Bay, Ward 39
    "29300040": "Ovayo Sihle Mhlanga", // Nelson Mandela Bay, Ward 40
    "29300041": "Thembisa Monica Bonakele", // Nelson Mandela Bay, Ward 41
    "29300042": "Bongani Makana", // Nelson Mandela Bay, Ward 42
    "29300043": "Lukhanyo Khelekethe", // Nelson Mandela Bay, Ward 43
    "29300044": "Siyabonga Antonie", // Nelson Mandela Bay, Ward 44
    "29300045": "Xolisa Eugene Sello Jama", // Nelson Mandela Bay, Ward 45
    "29300046": "Lindiswa Mafani", // Nelson Mandela Bay, Ward 46
    "29300047": "Zukisa Mafani", // Nelson Mandela Bay, Ward 47
    "29300048": "Zukisani Advocate Mkunqwana", // Nelson Mandela Bay, Ward 48
    "29300049": "Nathan Owen Swarts", // Nelson Mandela Bay, Ward 49
    "29300050": "Nomzikazi Mirriam Malgas", // Nelson Mandela Bay, Ward 50
    "29300051": "Luncedo Dlala", // Nelson Mandela Bay, Ward 51
    "29300052": "Sbahle Zenande Mtshizana", // Nelson Mandela Bay, Ward 52
    "29300053": "Kunjuzwa Koyana", // Nelson Mandela Bay, Ward 53
    "29300054": "Ntsikelelo Eric Mahambehlala", // Nelson Mandela Bay, Ward 54
    "29300055": "Ntombethemba Godongwana-Manase", // Nelson Mandela Bay, Ward 55
    "29300056": "Ziyanda Balakisi", // Nelson Mandela Bay, Ward 56
    "29300057": "Xolani Patrick Nobebe", // Nelson Mandela Bay, Ward 57
    "29300058": "Thembisile Eric Mama", // Nelson Mandela Bay, Ward 58
    "29300059": "Winty Mashaya Ngcukana", // Nelson Mandela Bay, Ward 59
    "29300060": "Nondumiso Mirriam Nodlawu", // Nelson Mandela Bay, Ward 60
    "30904001": "Gladys Keitumetse Gopane", // Phokwane, Ward 1
    "30904002": "Jacob Chris Sekgweleo", // Phokwane, Ward 2
    "30904003": "Mvuselelo Jacob Nteta", // Phokwane, Ward 3
    "30904004": "Nomangesi Mirriam Marawu", // Phokwane, Ward 4
    "30904005": "Nkagisang Irene Tsolwane", // Phokwane, Ward 5
    "30904006": "Gabaitemoge Sophy Nthako", // Phokwane, Ward 6
    "30904007": "George Lucas Du Preez", // Phokwane, Ward 7
    "30904008": "Lentikile Vincent Motaung", // Phokwane, Ward 8
    "30904009": "Neo Sylvester Pitso", // Phokwane, Ward 9
    "30904010": "Boitshoko Lesang Desiree Segwai", // Phokwane, Ward 10
    "41804001": "Ntuka Brucelee Ntuka", // Matjhabeng, Ward 1
    "41804003": "Thabang Malcom Maleke", // Matjhabeng, Ward 3
    "41804004": "Ntoahae Jeremia Khaude", // Matjhabeng, Ward 4
    "41804005": "Sheila Moledi", // Matjhabeng, Ward 5
    "41804006": "Khonzaphi Lekkersit Baleni", // Matjhabeng, Ward 6
    "41804007": "Pule Petrus Mahamo", // Matjhabeng, Ward 7
    "41804008": "Moselane Merriam Moenyane", // Matjhabeng, Ward 8
    "41804009": "Sarah Maleboya Modisaesi", // Matjhabeng, Ward 9
    "41804010": "Bafana Walter Madolo", // Matjhabeng, Ward 10
    "41804011": "Zaqueu Palmerim Mahlungulana", // Matjhabeng, Ward 11
    "41804012": "Disemelo Jeanett Mapane", // Matjhabeng, Ward 12
    "41804013": "Lungile Gedion Leeba", // Matjhabeng, Ward 13
    "41804014": "Monica Masekunu Borole", // Matjhabeng, Ward 14
    "41804015": "Dorah Moloi", // Matjhabeng, Ward 15
    "41804016": "Paballo Isaia Nhlapo", // Matjhabeng, Ward 16
    "41804017": "Nyaniso John Tshokotshela", // Matjhabeng, Ward 17
    "41804018": "Mkhuzo Jafta Kheza", // Matjhabeng, Ward 18
    "41804019": "Maserame Olga Mcholozi", // Matjhabeng, Ward 19
    "41804020": "Joy Boitumelo Kamolane", // Matjhabeng, Ward 20
    "41804021": "Mzimkhulu Makhaya", // Matjhabeng, Ward 21
    "41804022": "Motsamai Daniel Mogoje", // Matjhabeng, Ward 22
    "41804023": "Sanyboy Mahabeni", // Matjhabeng, Ward 23
    "41804024": "Levuyo Makeleng", // Matjhabeng, Ward 24
    "41804025": "Teboho Eddie Thoabala", // Matjhabeng, Ward 25
    "41804026": "Vuyo Wilson Rulashe", // Matjhabeng, Ward 26
    "41804027": "Useine Ali Ebrahimo", // Matjhabeng, Ward 27
    "41804028": "Benjamin Musawenkosi Zungu", // Matjhabeng, Ward 28
    "41804029": "Ramaketle Paul Matlokotsi", // Matjhabeng, Ward 29
    "41804030": "Kamogelo Benny Bokamosho Wessie", // Matjhabeng, Ward 30
    "41804031": "Thabang Seahloli", // Matjhabeng, Ward 31
    "41804032": "Clement Chalale", // Matjhabeng, Ward 32
    "41804033": "Mapheko Alice Hlaole", // Matjhabeng, Ward 33
    "41804034": "Moses Lehlohonolo Matuba", // Matjhabeng, Ward 34
    "41804035": "John Sabata Thipe", // Matjhabeng, Ward 35
    "41804036": "Kamogelo Gladstone Mabele", // Matjhabeng, Ward 36
    "41901001": "Lindiwe Vinolia Okam", // Setsoto, Ward 1
    "41901002": "Dimpho Mphuthi", // Setsoto, Ward 2
    "41901003": "Monica Roseline Julius", // Setsoto, Ward 3
    "41901004": "Nthabiseng Mahaotsane", // Setsoto, Ward 4
    "41901005": "Winston Tumelo Tlali", // Setsoto, Ward 5
    "41901006": "Dithole Douglas Sekonyela", // Setsoto, Ward 6
    "41901007": "Jack Moses Hlalele", // Setsoto, Ward 7
    "41901008": "Teboho Jackson Mokoakoe", // Setsoto, Ward 8
    "41901009": "Neo Paulus Letaba", // Setsoto, Ward 9
    "41901010": "Mathapelo Agnes Mohlomi", // Setsoto, Ward 10
    "41901011": "Sabelo Richman Lehalehale", // Setsoto, Ward 11
    "41901012": "Mosiuoa Benedict Mpopo", // Setsoto, Ward 12
    "41901013": "Selloane Elizabeth Lephoi", // Setsoto, Ward 13
    "41901014": "Lehlohonolo Moses Mokone", // Setsoto, Ward 14
    "41901015": "Matsietsi Alinah Mokoena", // Setsoto, Ward 15
    "41902001": "Mokete Velley Nzimande", // Dihlabeng, Ward 1
    "41902002": "Makgala Mildred Moloi", // Dihlabeng, Ward 2
    "41902003": "Moeketsi Lawrence Matjele", // Dihlabeng, Ward 3
    "41902004": "Mokete Velley Nzimande", // Dihlabeng, Ward 4
    "41902005": "Mpho David Nxala", // Dihlabeng, Ward 5
    "41902006": "Puseletso Maria Masoeu", // Dihlabeng, Ward 6
    "41902007": "Buti Petrus Masoeu", // Dihlabeng, Ward 7
    "41902008": "Ntombizodwa Selina Twala", // Dihlabeng, Ward 8
    "41902009": "Nhlanhla Mietshane Fortunate Mtolo", // Dihlabeng, Ward 9
    "41902010": "Ntlororo Simon Lethoko", // Dihlabeng, Ward 10
    "41902011": "Lisema Samson Keele", // Dihlabeng, Ward 11
    "41902012": "Thato Mathabela Mokete", // Dihlabeng, Ward 12
    "41902013": "Thabang Thembinkosi Xaba", // Dihlabeng, Ward 13
    "41902014": "David Mokhele Lenyaga", // Dihlabeng, Ward 14
    "41902015": "Rabushanku Simon Mthimkulu", // Dihlabeng, Ward 15
    "41902016": "Rebecca Maria Mokwena", // Dihlabeng, Ward 16
    "41902017": "Moleko Jantjie Sabesa", // Dihlabeng, Ward 17
    "41902018": "Teboho Johnny Khetsi", // Dihlabeng, Ward 18
    "41902019": "Mokoki Yvone Mahlaba", // Dihlabeng, Ward 19
    "42001001": "Anna Ntsilo", // Moqhaka, Ward 1
    "42001002": "Tsietso Elizabeth Lebewane", // Moqhaka, Ward 2
    "42001003": "Thahaki Edward Malakoane", // Moqhaka, Ward 3
    "42001004": "Nondhlela Agnes Mokoteli", // Moqhaka, Ward 4
    "42001005": "Samuel Moloi", // Moqhaka, Ward 5
    "42001006": "Mathoto Margaret Mathe", // Moqhaka, Ward 6
    "42001007": "Niglet Popi Kumalo", // Moqhaka, Ward 7
    "42001008": "Mabuti James Mathe", // Moqhaka, Ward 8
    "42001009": "Leonard Butiboy Mafokosi", // Moqhaka, Ward 9
    "42001010": "Moroeng George Suping", // Moqhaka, Ward 10
    "42001011": "Abraham Seabe Nthako", // Moqhaka, Ward 11
    "42001012": "Siyabonga Thomas Ntshingila", // Moqhaka, Ward 12
    "42001013": "Modiehi Elizabeth Mohalane", // Moqhaka, Ward 13
    "42001014": "Tshidi Merriam Redrie", // Moqhaka, Ward 14
    "42001015": "Moroeng George Suping", // Moqhaka, Ward 15
    "42001016": "Josephine Matshidiso Kamati", // Moqhaka, Ward 16
    "42001017": "Kenneth Thabang Makoele", // Moqhaka, Ward 17
    "42001018": "Maggy Lindiwe Mbona", // Moqhaka, Ward 18
    "42001019": "Dieketseng Jeanette Litha", // Moqhaka, Ward 19
    "42001020": "Seipati Elisa Dzina", // Moqhaka, Ward 20
    "42004001": "Tebogo Dligilili", // Metsimaholo, Ward 1
    "42004002": "Nthabiseng Annah Mophethe", // Metsimaholo, Ward 2
    "42004003": "Sello Thomas Motsoeneng", // Metsimaholo, Ward 3
    "42004004": "Nthabiseng Annah Mophethe", // Metsimaholo, Ward 4
    "42004005": "Mpotseng Augustine Matsipa", // Metsimaholo, Ward 5
    "42004006": "Seipati Maria Radebe", // Metsimaholo, Ward 6
    "42004007": "Phineas Mohapi", // Metsimaholo, Ward 7
    "42004008": "Desai Moelase Hlongwane", // Metsimaholo, Ward 8
    "42004009": "Teboho Ephraim Vandise", // Metsimaholo, Ward 9
    "42004010": "Kidibone Yvonne Motlhasedi", // Metsimaholo, Ward 10
    "42004011": "Monne Isaac Motaung", // Metsimaholo, Ward 11
    "42004012": "Mpomelelo Radebe", // Metsimaholo, Ward 12
    "42004013": "Tumelo Abel Motaung", // Metsimaholo, Ward 13
    "42004014": "Lutando Nkumbi", // Metsimaholo, Ward 14
    "42004015": "Motlalepula Lazarus Mkhwanazi", // Metsimaholo, Ward 15
    "42004016": "Nomaeza Jane Nthoroane", // Metsimaholo, Ward 16
    "42004017": "Kidibone Yvonne Motlhasedi", // Metsimaholo, Ward 17
    "42004018": "Motlalepula Lazarus Mkhwanazi", // Metsimaholo, Ward 18
    "42004019": "Richard Motobi Nqhatsetseng", // Metsimaholo, Ward 19
    "42004020": "Brian Keketso Ntlokotsi", // Metsimaholo, Ward 20
    "42004021": "Paballo Lina Mokoena", // Metsimaholo, Ward 21
    "42004022": "Teboho Phillemon Makate", // Metsimaholo, Ward 22
    "42004023": "Daniel Lekgotla Mabe", // Metsimaholo, Ward 23
    "42005001": "Lesley Sizwe Maringa", // Mafube, Ward 1
    "42005002": "David Mosikidi", // Mafube, Ward 2
    "42005003": "Kulane Meshack Tshabangu", // Mafube, Ward 3
    "42005004": "Jacob Mncedisi Mzolo", // Mafube, Ward 4
    "42005005": "Gladys Mohanuoa Mazibuko", // Mafube, Ward 5
    "42005006": "Wandile Phakamisane Thabeta", // Mafube, Ward 6
    "42005008": "Agnes Pulane Mokoena", // Mafube, Ward 8
    "49400001": "Andries Sipho Mtsweni", // Mangaung, Ward 1
    "49400002": "Themba Daniel Kumalo", // Mangaung, Ward 2
    "49400003": "Ernest Mmulelo Madolo", // Mangaung, Ward 3
    "49400004": "Zenzile Leonard Tshangezitho", // Mangaung, Ward 4
    "49400005": "Bongani Stephen Kantane", // Mangaung, Ward 5
    "49400006": "Lebohang Lehata", // Mangaung, Ward 6
    "49400007": "Bekeka Patricia Kgomphiri", // Mangaung, Ward 7
    "49400008": "Shadrack Tabang Lebakeng", // Mangaung, Ward 8
    "49400009": "Molefi William Letuka", // Mangaung, Ward 9
    "49400010": "Tumelo Sylvester Kgathole", // Mangaung, Ward 10
    "49400011": "Ntsikelelo Handrie Jafta", // Mangaung, Ward 11
    "49400012": "Lehlohonolo Vaphi", // Mangaung, Ward 12
    "49400013": "Bongane Christopher Plaatjie", // Mangaung, Ward 13
    "49400014": "Masello Merriam Thebe", // Mangaung, Ward 14
    "49400015": "Motshwanyane Victoria Sizephe", // Mangaung, Ward 15
    "49400016": "Shelly Ramatsasa", // Mangaung, Ward 16
    "49400017": "Joseph Seromo Chaaba", // Mangaung, Ward 17
    "49400018": "Zola Duncan Mkhosana", // Mangaung, Ward 18
    "49400019": "Mookho Justinah Seotlo", // Mangaung, Ward 19
    "49400020": "Matshediso Alfred Moshounyane", // Mangaung, Ward 20
    "49400021": "Itumeleng Michael Vorster", // Mangaung, Ward 21
    "49400022": "Halejoetsoe Jeremiah Ramakeoane", // Mangaung, Ward 22
    "49400023": "Tumisang Kagiso Moseki Moseki", // Mangaung, Ward 23
    "49400024": "Bekeka Patricia Kgomphiri", // Mangaung, Ward 24
    "49400025": "Kelebogile Rosy Molatudi", // Mangaung, Ward 25
    "49400026": "Tshupa Isaack Lethoko", // Mangaung, Ward 26
    "49400027": "Malefetsane Jacob Lemao", // Mangaung, Ward 27
    "49400028": "Moeketsi Daniel Moloto", // Mangaung, Ward 28
    "49400029": "Mathapelo Pridget Mbethe", // Mangaung, Ward 29
    "49400030": "Maleshoane Alice Mathopa", // Mangaung, Ward 30
    "49400031": "Phillip Nonyane Matsolo", // Mangaung, Ward 31
    "49400032": "Thamsanqa John Singonzo", // Mangaung, Ward 32
    "49400033": "Joseph Ntahle Mpinga", // Mangaung, Ward 33
    "49400034": "Joseph Ntahle Mpinga", // Mangaung, Ward 34
    "49400035": "Keyeza Joseph Makate", // Mangaung, Ward 35
    "49400036": "Thabo Koos Ceerust", // Mangaung, Ward 36
    "49400037": "Thabo Koos Ceerust", // Mangaung, Ward 37
    "49400038": "Ofeditse Kgoadi", // Mangaung, Ward 38
    "49400039": "Mokgosi Piet Moleko", // Mangaung, Ward 39
    "49400040": "Kebitsamang Kgengwe", // Mangaung, Ward 40
    "49400041": "Mojalefa Edward Masisi", // Mangaung, Ward 41
    "49400042": "Jeanett Puleng Popane", // Mangaung, Ward 42
    "49400043": "Jeanett Puleng Popane", // Mangaung, Ward 43
    "49400044": "Tshidiso Johannes Sebatana", // Mangaung, Ward 44
    "49400045": "Nthabiseng Portia Singonzo", // Mangaung, Ward 45
    "49400046": "Ntebaleng Gloria Lekoro", // Mangaung, Ward 46
    "49400047": "Lahliwe Emily Supu", // Mangaung, Ward 47
    "49400048": "Andries Sipho Mtsweni", // Mangaung, Ward 48
    "49400049": "Tsiliso Samson Mnumzana", // Mangaung, Ward 49
    "49400050": "Tebogo James Mosala", // Mangaung, Ward 50
    "49400051": "Andries Sipho Mtsweni", // Mangaung, Ward 51
    "52205001": "Qaphelani Sifiso Auther Simelane", // The Msunduzi, Ward 1
    "52205002": "Qaphelani Sifiso Auther Simelane", // The Msunduzi, Ward 2
    "52205003": "Sanele Jeffrey Ngcongo", // The Msunduzi, Ward 3
    "52205004": "Londeka Zondi", // The Msunduzi, Ward 4
    "52205005": "Londeka Zondi", // The Msunduzi, Ward 5
    "52205006": "Nosihle Nonduduzo Ngcongo", // The Msunduzi, Ward 6
    "52205007": "Gugu Precious Ngcongo", // The Msunduzi, Ward 7
    "52205008": "Nobuhle Ngcobo", // The Msunduzi, Ward 8
    "52205009": "Zinhle Ivy Mkhize", // The Msunduzi, Ward 9
    "52205010": "Nosipho Petience Ngcobo", // The Msunduzi, Ward 10
    "52205011": "Nosipho Petience Ngcobo", // The Msunduzi, Ward 11
    "52205012": "Nosipho Petience Ngcobo", // The Msunduzi, Ward 12
    "52205013": "Lindiwe Sanelisiwe Shabane", // The Msunduzi, Ward 13
    "52205014": "Phumelele Seipati Marumo", // The Msunduzi, Ward 14
    "52205015": "Sizwe Saneliso Mtshali", // The Msunduzi, Ward 15
    "52205016": "Enhle Yonela Madlanga", // The Msunduzi, Ward 16
    "52205017": "Enhle Yonela Madlanga", // The Msunduzi, Ward 17
    "52205018": "Enhle Yonela Madlanga", // The Msunduzi, Ward 18
    "52205019": "Enhle Yonela Madlanga", // The Msunduzi, Ward 19
    "52205020": "Fanelesibonge Nhlanhleni Simphiwe Mthembu", // The Msunduzi, Ward 20
    "52205021": "Zamokwakhe Makhehla Mjoli", // The Msunduzi, Ward 21
    "52205022": "Siphamandla Andrew Tshezi", // The Msunduzi, Ward 22
    "52205023": "Thabo Mofokeng", // The Msunduzi, Ward 23
    "52205024": "Mthokozisi Sakhile Mkhwanazi", // The Msunduzi, Ward 24
    "52205025": "Fanelesibonge Nhlanhleni Simphiwe Mthembu", // The Msunduzi, Ward 25
    "52205026": "Smiso Mchunu", // The Msunduzi, Ward 26
    "52205027": "Lindani Ntethelelo Mzobe", // The Msunduzi, Ward 27
    "52205028": "Portia Thandeka Majola", // The Msunduzi, Ward 28
    "52205029": "S'fiso Tressure Mbuyisa", // The Msunduzi, Ward 29
    "52205030": "Lwandise Phendulwa Yeviswa Ndlela", // The Msunduzi, Ward 30
    "52205031": "Lindani Ntethelelo Mzobe", // The Msunduzi, Ward 31
    "52205032": "Dione Bridget Adkins", // The Msunduzi, Ward 32
    "52205033": "Msizi Douglas Ngcobo", // The Msunduzi, Ward 33
    "52205034": "Lucia Nokulunga Zwane", // The Msunduzi, Ward 34
    "52205035": "Smiso Mchunu", // The Msunduzi, Ward 35
    "52205036": "Gugu Precious Ngcongo", // The Msunduzi, Ward 36
    "52205037": "Sanele Emmanuel Thembelani Ngcobo", // The Msunduzi, Ward 37
    "52205038": "Siyabonga Mjwara", // The Msunduzi, Ward 38
    "52205039": "Sanele Emmanuel Thembelani Ngcobo", // The Msunduzi, Ward 39
    "52205040": "Mfanufikile Naughty-Boy Mbambo", // The Msunduzi, Ward 40
    "52205041": "Ntombifikile Joyce Ngubane", // The Msunduzi, Ward 41
    "52502001": "Halalisani Qalokwakhe Zondi", // Newcastle, Ward 1
    "52502002": "Samantha Shaw", // Newcastle, Ward 2
    "52502003": "Ryan Pillay", // Newcastle, Ward 3
    "52502004": "Belinda Anne Ellor", // Newcastle, Ward 4
    "52502005": "Rudzani Elzevir Thangoane", // Newcastle, Ward 5
    "52502006": "Khethukuthula Ngilosi Masikana", // Newcastle, Ward 6
    "52502007": "Mpume Joyce Mahashi", // Newcastle, Ward 7
    "52502008": "Thembelani Thembinkosi Shabalala", // Newcastle, Ward 8
    "52502009": "Siyabonga Cyril Masuku", // Newcastle, Ward 9
    "52502010": "Siyabonga Arnold Hlophe", // Newcastle, Ward 10
    "52502011": "Phumlani Sydney Dlamini", // Newcastle, Ward 11
    "52502012": "Mbuyiseni Andile Ndebele", // Newcastle, Ward 12
    "52502013": "Zaki Percifon Khumalo", // Newcastle, Ward 13
    "52502014": "Sabelo Percival Dube", // Newcastle, Ward 14
    "52502015": "Sphiwe Cyrill Mavimbela", // Newcastle, Ward 15
    "52502016": "Nkosinathi Radebe", // Newcastle, Ward 16
    "52502017": "Thembeka Sizwe Bernet Mdluli", // Newcastle, Ward 17
    "52502018": "Sanele Blessing Thwala", // Newcastle, Ward 18
    "52502019": "Bandile Msibi", // Newcastle, Ward 19
    "52502020": "Stin Joseph Tshabalala", // Newcastle, Ward 20
    "52502021": "Ncamsile Cynthia Mkhize", // Newcastle, Ward 21
    "52502022": "Muziwakhe Green Dhlamini", // Newcastle, Ward 22
    "52502023": "Aarif Siphosethu Muntuwenkosi Madi", // Newcastle, Ward 23
    "52502024": "Thabo Hlanguza", // Newcastle, Ward 24
    "52502025": "Ryan Pillay", // Newcastle, Ward 25
    "52502026": "Praisegod Siyabonga Nkosi", // Newcastle, Ward 26
    "52502027": "Emmanuel Sizwe Mlotshwa", // Newcastle, Ward 27
    "52502028": "Zwelisha Stanley Nxumalo", // Newcastle, Ward 28
    "52502029": "Nsindiso Mthunzi Mbatha", // Newcastle, Ward 29
    "52502030": "Mbali Tholakele Zindela", // Newcastle, Ward 30
    "52502031": "Mbusiseni Siza Shwala", // Newcastle, Ward 31
    "52502032": "Siyabonga Prince Madlabane", // Newcastle, Ward 32
    "52502033": "Smangaliso Christopher Thabede", // Newcastle, Ward 33
    "52502034": "Nomfanelo Zwane", // Newcastle, Ward 34
    "52502035": "Khanyisani Hlabisa", // Newcastle, Ward 35
    "52502036": "Vusumuzi Michael Ndlovu", // Newcastle, Ward 36
    "52504001": "Ntokozo Marcia Masikane", // Dannhauser, Ward 1
    "52504002": "Thapelo Brian Mokoena", // Dannhauser, Ward 2
    "52504003": "Mthobisi Percyval Zondo", // Dannhauser, Ward 3
    "52504004": "Phumlani Innocent Mbambo", // Dannhauser, Ward 4
    "52504005": "Mbuyiseni Wilfred Patrick Kunene", // Dannhauser, Ward 5
    "52504006": "Thandumuzi Inocent Nxumalo", // Dannhauser, Ward 6
    "52504007": "Nontethelelo Patience Muyeni", // Dannhauser, Ward 7
    "52504008": "Khulekani Bhekithemba Hlophe", // Dannhauser, Ward 8
    "52504009": "Thembinkosi Michael Hlatshwayo", // Dannhauser, Ward 9
    "52504010": "Bongani Golden Gumede", // Dannhauser, Ward 10
    "52504011": "Sicelo Welcome Sikhakhane", // Dannhauser, Ward 11
    "52504012": "Sipho Meshack Ndhlazi", // Dannhauser, Ward 12
    "52504013": "Mbongeni Rodgers Radebe", // Dannhauser, Ward 13
    "52602001": "Nkosiyabo Mbatha", // uPhongolo, Ward 1
    "52602002": "Ntombenhle Nonhlanhla Ntshangase", // uPhongolo, Ward 2
    "52602003": "Goodness Fikile Mkhize", // uPhongolo, Ward 3
    "52602004": "Thobile Pretty Ntshali", // uPhongolo, Ward 4
    "52602005": "Ntombikayise Princess Shabalala", // uPhongolo, Ward 5
    "52602006": "Phumzile Portia Nhlengethwa", // uPhongolo, Ward 6
    "52602007": "Promise Xolile Mthembu", // uPhongolo, Ward 7
    "52602008": "Nonhlanhla Funda Gumbi", // uPhongolo, Ward 8
    "52602009": "Sibonelo Elcan Thabete", // uPhongolo, Ward 9
    "52602010": "Zwelibanzi Maseko", // uPhongolo, Ward 10
    "52602011": "Sanele Njabulo Chimane", // uPhongolo, Ward 11
    "52602012": "Eva Nomathemba Nhlabathi", // uPhongolo, Ward 12
    "52602013": "Thokozani Sibusiso Nyawo", // uPhongolo, Ward 13
    "52602014": "Asanda Ndwandwe", // uPhongolo, Ward 14
    "52602015": "Hlengiwe Londiwe Khoza", // uPhongolo, Ward 15
    "52603001": "Thoko Fikile Mdlalose", // Abaqulusi, Ward 1
    "52603002": "Sanele Christian Dlamini", // Abaqulusi, Ward 2
    "52603003": "Vusumuzi Torrance Ngcobo", // Abaqulusi, Ward 3
    "52603004": "Nikiwe Victoria Ndlovu", // Abaqulusi, Ward 4
    "52603005": "Fanele Abraham Buthelezi", // Abaqulusi, Ward 5
    "52603006": "Sindisiwe Sizakele Buthelezi", // Abaqulusi, Ward 6
    "52603007": "Mlamuli Bethwell Mkhonza", // Abaqulusi, Ward 7
    "52603008": "Racheal Sbongile Mlambo", // Abaqulusi, Ward 8
    "52603009": "Andile Percy Sithole", // Abaqulusi, Ward 9
    "52603010": "Krinah Vusumuzi Simelane", // Abaqulusi, Ward 10
    "52603011": "Gloria Nomangwane Hlongwane", // Abaqulusi, Ward 11
    "52603012": "John Sibiya", // Abaqulusi, Ward 12
    "52603013": "Zondlile Elsie Ngema", // Abaqulusi, Ward 13
    "52603014": "Zethu Promise Mtshali", // Abaqulusi, Ward 14
    "52603015": "Fanele Abraham Buthelezi", // Abaqulusi, Ward 15
    "52603016": "Sphelele Jetro Ngobese", // Abaqulusi, Ward 16
    "52603017": "Senzo Given Ngwenya", // Abaqulusi, Ward 17
    "52603018": "Minenhle Mlangeni", // Abaqulusi, Ward 18
    "52603019": "Nombuso Nomsa Zulu", // Abaqulusi, Ward 19
    "52603020": "Andile Promise Dlamini", // Abaqulusi, Ward 20
    "52603021": "Mesuli Nhlakanipho Nhlengethwa", // Abaqulusi, Ward 21
    "52603022": "Primrose Bathabile Zulu", // Abaqulusi, Ward 22
    "52603023": "Thobeka Lindelwa Nyandeni", // Abaqulusi, Ward 23
    "52603024": "Lucky Mtokozisi Mdhlalose", // Abaqulusi, Ward 24
    "52605001": "Mandla Lobolani Mbatha", // Nongoma, Ward 1
    "52605002": "Sibusiso Praise Zulu", // Nongoma, Ward 2
    "52605003": "Desmond Mpilenhle Mbokazi", // Nongoma, Ward 3
    "52605004": "Sekwanele Mpume Nene", // Nongoma, Ward 4
    "52605005": "Ntombikayise Gina", // Nongoma, Ward 5
    "52605006": "Nobuhle Nomathemba Gumede", // Nongoma, Ward 6
    "52605007": "S'phamandla Mucmillan Manqele", // Nongoma, Ward 7
    "52605008": "Monde Mfaniso Shabangu", // Nongoma, Ward 8
    "52605009": "Snethemba Nomfundo Kheswa", // Nongoma, Ward 9
    "52605010": "Thembinkosi Josias Cebekhulu", // Nongoma, Ward 10
    "52605011": "Nomusa Bongephiwe Ntshangase", // Nongoma, Ward 11
    "52605012": "Ayanda Sinethemba Mhlungu", // Nongoma, Ward 12
    "52605013": "Sihle Hezekiel Ntshangase", // Nongoma, Ward 13
    "52605014": "Ntombikayise Gina", // Nongoma, Ward 14
    "52605015": "Philile Nikiwe Zungu", // Nongoma, Ward 15
    "52605016": "Malibongwe Sbonelo Jele", // Nongoma, Ward 16
    "52605017": "Nolwazi Sbonokuhle Madonsela", // Nongoma, Ward 17
    "52605018": "Cebile Happiness Zungu", // Nongoma, Ward 18
    "52605019": "Ncamisile Nkosi", // Nongoma, Ward 19
    "52605020": "Siphesihle Kwazi Ngcobo", // Nongoma, Ward 20
    "52605021": "Nkosinathi Mandla Nsele", // Nongoma, Ward 21
    "52605022": "Sfiso Mnini", // Nongoma, Ward 22
    "52605023": "Francinah Lihle Mbonani", // Nongoma, Ward 23
    "52802001": "Nonhlanhla Fortunate Mwandla", // uMhlathuze, Ward 1
    "52802002": "Phelelani Mahaye", // uMhlathuze, Ward 2
    "52802003": "Andrew-Lee Posthumus", // uMhlathuze, Ward 3
    "52802004": "Nkosinathi Mlotshwa", // uMhlathuze, Ward 4
    "52802005": "Dumisani S'busiso Bulunga", // uMhlathuze, Ward 5
    "52802006": "Mphumuzeni Jeremiah Mdletshe", // uMhlathuze, Ward 6
    "52802007": "Willie Mosebetsie Radebe", // uMhlathuze, Ward 7
    "52802008": "Siphelele Enough Ngema", // uMhlathuze, Ward 8
    "52802009": "Zinhle Lucia Mkhize", // uMhlathuze, Ward 9
    "52802010": "Thandeka Nontobeko Caluza", // uMhlathuze, Ward 10
    "52802011": "Nkululeko Makhosonke Nzuza", // uMhlathuze, Ward 11
    "52802012": "Jabulani Themba Mbambo", // uMhlathuze, Ward 12
    "52802013": "Zazi Ndukuzakhe Nzama", // uMhlathuze, Ward 13
    "52802014": "Petros Sunblest Mthembu", // uMhlathuze, Ward 14
    "52802015": "Gcinumsebenzi Irvin Dube", // uMhlathuze, Ward 15
    "52802016": "Sifundo Zwelethu Africa Msweli", // uMhlathuze, Ward 16
    "52802017": "Siyabonga Qiniso Thabiso Sibiya", // uMhlathuze, Ward 17
    "52802018": "Velani Funuyise Mjadu", // uMhlathuze, Ward 18
    "52802019": "Thamsanqa Prince Mthiyane", // uMhlathuze, Ward 19
    "52802020": "Nkululeko Success Zondo", // uMhlathuze, Ward 20
    "52802021": "Nombulelo Nomalungelo Blose", // uMhlathuze, Ward 21
    "52802022": "Gugu Zinhle Mpungose", // uMhlathuze, Ward 22
    "52802023": "Gugu Zinhle Mpungose", // uMhlathuze, Ward 23
    "52802024": "Sbonelo Magwaza", // uMhlathuze, Ward 24
    "52802025": "Nqobi Erick Charles Nzuza", // uMhlathuze, Ward 25
    "52802026": "Colin Moses", // uMhlathuze, Ward 26
    "52802027": "Doris Lindiwe Cross", // uMhlathuze, Ward 27
    "52802028": "Thandile Jojozi", // uMhlathuze, Ward 28
    "52802029": "Xolani Gumede", // uMhlathuze, Ward 29
    "52802030": "Sibonakaliso Dube", // uMhlathuze, Ward 30
    "52802031": "Lungile Nokwazi Bridget Khanyile", // uMhlathuze, Ward 31
    "52802032": "Sakhile Prince Zulu", // uMhlathuze, Ward 32
    "52802033": "Musa Goodboy Mnyandu", // uMhlathuze, Ward 33
    "52802034": "Thulani Bhekinkosi Myeni", // uMhlathuze, Ward 34
    "52802035": "Mduduzi Christopher Ntuli", // uMhlathuze, Ward 35
    "52802036": "Gugu Zinhle Mpungose", // uMhlathuze, Ward 36
    "52902001": "Sihle Mhlongo", // KwaDukuza, Ward 1
    "52902002": "Siyabonga Lindelani Sandile Ngema", // KwaDukuza, Ward 2
    "52902003": "Nobuhle Patience Shandu", // KwaDukuza, Ward 3
    "52902004": "Mthokozisi Elvine Dasilva", // KwaDukuza, Ward 4
    "52902005": "Siphamandla Mfeka", // KwaDukuza, Ward 5
    "52902006": "Nelsing Sewraj", // KwaDukuza, Ward 6
    "52902007": "Mlungisi Zulu", // KwaDukuza, Ward 7
    "52902008": "Sipho Lwazi Mchunu", // KwaDukuza, Ward 8
    "52902009": "Siyabonga Blessing Mgobhozi", // KwaDukuza, Ward 9
    "52902010": "Alec Sakhile Nkalo", // KwaDukuza, Ward 10
    "52902011": "Siyanda Inacid Mkhabela", // KwaDukuza, Ward 11
    "52902012": "Sthembiso Comfort Mwandhla", // KwaDukuza, Ward 12
    "52902013": "Nkululeko Muzikayifani Mathew Sitshata", // KwaDukuza, Ward 13
    "52902014": "Siyabonga Godfrey Dube", // KwaDukuza, Ward 14
    "52902015": "Lindani Percival Mthethwa", // KwaDukuza, Ward 15
    "52902016": "Nomkhosi Precious Makhoba", // KwaDukuza, Ward 16
    "52902017": "Sipho Zungu", // KwaDukuza, Ward 17
    "52902018": "Nkanyiso Paulos Tembe", // KwaDukuza, Ward 18
    "52902019": "Senamile Melody Shandu", // KwaDukuza, Ward 19
    "52902020": "Kashvier Sivparsad", // KwaDukuza, Ward 20
    "52902021": "Nkosi Johan Mbonambi", // KwaDukuza, Ward 21
    "52902022": "Panagiota Fourie", // KwaDukuza, Ward 22
    "52902023": "Sabelo Brian Ndlela", // KwaDukuza, Ward 23
    "52902024": "Sindisiwe Precious Khuzwayo", // KwaDukuza, Ward 24
    "52902025": "Philani Walter Mkhize", // KwaDukuza, Ward 25
    "52902026": "Zelda Ann Fiona Dunn", // KwaDukuza, Ward 26
    "52902027": "Nhlanhla Ntethelelo Mtshali", // KwaDukuza, Ward 27
    "52902028": "Rahul Mohammad Singh", // KwaDukuza, Ward 28
    "52902029": "Rebecca Sindi Sitshata", // KwaDukuza, Ward 29
    "52902030": "Panagiota Fourie", // KwaDukuza, Ward 30
    "52903001": "Wendy Mnguni", // Ndwedwe, Ward 1
    "52903002": "Nobuhle Witness Nxumalo", // Ndwedwe, Ward 2
    "52903003": "Nompumelelo Mvuyana", // Ndwedwe, Ward 3
    "52903004": "Thamsanqa Sanele Gina", // Ndwedwe, Ward 4
    "52903005": "Sbonelo Mthethwa", // Ndwedwe, Ward 5
    "52903006": "Siphiwe Mzolo", // Ndwedwe, Ward 6
    "52903007": "Richman Nhlanhla Ngwane", // Ndwedwe, Ward 7
    "52903008": "Tom Zakhele Simamane", // Ndwedwe, Ward 8
    "52903009": "Richman Nhlanhla Ngwane", // Ndwedwe, Ward 9
    "52903010": "Siyabonga Aubrey Maphumulo", // Ndwedwe, Ward 10
    "52903011": "Bonginhlanhla Erick Ngobese", // Ndwedwe, Ward 11
    "52903013": "Bonginhlanhla Comfort Ngcobo", // Ndwedwe, Ward 13
    "52903014": "Thembinkosi Albert Nyeya", // Ndwedwe, Ward 14
    "52903015": "Bongiwe Pretty Mfeka", // Ndwedwe, Ward 15
    "52903016": "Londeka Mwandla", // Ndwedwe, Ward 16
    "52903017": "Siphiwe Shadrack Myeni", // Ndwedwe, Ward 17
    "52903018": "Zakhele Patrick Zondo", // Ndwedwe, Ward 18
    "52903019": "Sbonokuhle Hlophe", // Ndwedwe, Ward 19
    "52904001": "Nikeziwe Slindelo Mthembu", // Maphumulo, Ward 1
    "52904002": "Nhlakanipho Siyathemba Nzama", // Maphumulo, Ward 2
    "52904003": "Nothando Nomthandazo Mabaso", // Maphumulo, Ward 3
    "52904004": "Londiwe Thembeka Xulu", // Maphumulo, Ward 4
    "52904005": "Sinenhlanhla Khathi", // Maphumulo, Ward 5
    "52904006": "Silwayiphi Bongani Khathi", // Maphumulo, Ward 6
    "52904007": "Nhlakanipho Thembani Khuzwayo", // Maphumulo, Ward 7
    "52904008": "Andrias Sakhiseni Gcwensa", // Maphumulo, Ward 8
    "52904009": "Simphiwe Shangase", // Maphumulo, Ward 9
    "52904010": "Sanelisiwe Thulile Mthembu", // Maphumulo, Ward 10
    "52904011": "Sabelo Ishmael Mkhize", // Maphumulo, Ward 11
    "52904012": "Pearl Sinenhlanhla Zulu", // Maphumulo, Ward 12
    "52904013": "Simphiwe Shangase", // Maphumulo, Ward 13
    "59500001": "Thulisile Miya", // eThekwini, Ward 1
    "59500002": "Nkosikhona Ntuli", // eThekwini, Ward 2
    "59500003": "Siboniso Gift Mngomezulu", // eThekwini, Ward 3
    "59500004": "Siyabonga Mazibuko", // eThekwini, Ward 4
    "59500005": "Innocent Zwangobani Mkhize", // eThekwini, Ward 5
    "59500006": "Nkosenye Raymond Ndlovu", // eThekwini, Ward 6
    "59500007": "Sabelo Gabriel Moqebelo", // eThekwini, Ward 7
    "59500008": "Peter Wilfrid Newmarch", // eThekwini, Ward 8
    "59500009": "Bongani Timothy Madlala", // eThekwini, Ward 9
    "59500010": "Brian Edison Smith", // eThekwini, Ward 10
    "59500011": "Taryn Bianca Felicity Jones-George", // eThekwini, Ward 11
    "59500012": "Sibusiso Blessing Sibiya", // eThekwini, Ward 12
    "59500013": "Mthandeni Henry Hadebe", // eThekwini, Ward 13
    "59500014": "Mvelo Khumalo", // eThekwini, Ward 14
    "59500015": "Sifiso Nhlanhla Nxumalo", // eThekwini, Ward 15
    "59500016": "Nokwethemba Precious Shilenge", // eThekwini, Ward 16
    "59500017": "Nilesh Thirbhowon Maharaj", // eThekwini, Ward 17
    "59500018": "Thobekile Penelope Chonco", // eThekwini, Ward 18
    "59500019": "Nomfaneleko Matshebelele", // eThekwini, Ward 19
    "59500020": "Zamasomi Precious Mbonambi", // eThekwini, Ward 20
    "59500021": "Thozama Ngubane", // eThekwini, Ward 21
    "59500022": "Bongiwe Majangaza", // eThekwini, Ward 22
    "59500023": "Suraj Suriyeh Rampersad", // eThekwini, Ward 23
    "59500024": "Bongumenzi Lethukuthula Nyandeni", // eThekwini, Ward 24
    "59500025": "Jayson Govender", // eThekwini, Ward 25
    "59500026": "George David Chittock", // eThekwini, Ward 26
    "59500027": "Christopher Mark Lowe", // eThekwini, Ward 27
    "59500028": "Teresa Nortje", // eThekwini, Ward 28
    "59500029": "Wendy Samkelisiwe Soni", // eThekwini, Ward 29
    "59500030": "Jean Nompilo Mqadi", // eThekwini, Ward 30
    "59500031": "Sabelo Thokozani Mchunu", // eThekwini, Ward 31
    "59500032": "Ndimphiwe Phungula", // eThekwini, Ward 32
    "59500033": "Simphiwe Ndlela", // eThekwini, Ward 33
    "59500034": "Andrew Clint Akkers", // eThekwini, Ward 34
    "59500035": "Saul David Basckin", // eThekwini, Ward 35
    "59500036": "Bruce Lonsdale Taylor", // eThekwini, Ward 36
    "59500037": "Fikani Ephraim Khuzwayo", // eThekwini, Ward 37
    "59500038": "Sandile Ezra Dlamuka", // eThekwini, Ward 38
    "59500039": "Nkanyiso Alpheus Ndlovu", // eThekwini, Ward 39
    "59500040": "Khanyisile Dzanibe", // eThekwini, Ward 40
    "59500041": "Vukani Bruce Dlamini", // eThekwini, Ward 41
    "59500042": "Philani Thulani Dlamini", // eThekwini, Ward 42
    "59500043": "Nosiphiwe Myende", // eThekwini, Ward 43
    "59500044": "Sifiso Andrias Ngwabi", // eThekwini, Ward 44
    "59500045": "Nhlanhla Mqadi", // eThekwini, Ward 45
    "59500046": "Mthokozisi Wonderboy Tembe", // eThekwini, Ward 46
    "59500047": "Bheki Welcome Ndlovu", // eThekwini, Ward 47
    "59500048": "Berlinda Belcher", // eThekwini, Ward 48
    "59500049": "Rudiwaan Joseph", // eThekwini, Ward 49
    "59500050": "Claude Augustine Govender", // eThekwini, Ward 50
    "59500051": "Dhanila Sewnarain", // eThekwini, Ward 51
    "59500052": "Alice Louise Govender", // eThekwini, Ward 52
    "59500053": "Daniel Sotshange", // eThekwini, Ward 53
    "59500054": "Bongani Handsome Cibane", // eThekwini, Ward 54
    "59500055": "Thembinkosi Goodman Nyawo", // eThekwini, Ward 55
    "59500056": "Emmanuel Jabulani Zwane", // eThekwini, Ward 56
    "59500057": "Thandokuhle Mtembu", // eThekwini, Ward 57
    "59500058": "Dudu Rosemary Shangase", // eThekwini, Ward 58
    "59500059": "Nontobeko Zandile Mdima", // eThekwini, Ward 59
    "59500060": "Alice Louise Govender", // eThekwini, Ward 60
    "59500061": "Thembela Makhiloyi", // eThekwini, Ward 61
    "59500062": "Rodgers Snikelo M Ngidi", // eThekwini, Ward 62
    "59500063": "Jay Singh", // eThekwini, Ward 63
    "59500064": "Prem Mungal", // eThekwini, Ward 64
    "59500065": "Luhleli Leo Dinwayo", // eThekwini, Ward 65
    "59500066": "Peter John Cunningham Graham", // eThekwini, Ward 66
    "59500067": "Thamsanqa Khuzwayo", // eThekwini, Ward 67
    "59500068": "Eldrid Bradley Steenkamp", // eThekwini, Ward 68
    "59500069": "Mbali Nokwanda Bhengu", // eThekwini, Ward 69
    "59500070": "Andile Charmaine Zindela", // eThekwini, Ward 70
    "59500071": "Nilesh Thirbhowon Maharaj", // eThekwini, Ward 71
    "59500072": "Nikeziwe Dlotho", // eThekwini, Ward 72
    "59500073": "Kayleigh Runjeeth", // eThekwini, Ward 73
    "59500074": "Lindokuhle Sinethemba Mazibuko", // eThekwini, Ward 74
    "59500075": "Mthokozisi Mcclaude Zondi", // eThekwini, Ward 75
    "59500076": "Cyril Mboneni Bhekiswayo", // eThekwini, Ward 76
    "59500077": "Nosihle Premadon Khatheni", // eThekwini, Ward 77
    "59500078": "Noncedo Zibuyile Mdluli", // eThekwini, Ward 78
    "59500079": "Jabulile Shezi", // eThekwini, Ward 79
    "59500080": "Sithabile Noxolo Muthwa", // eThekwini, Ward 80
    "59500081": "Philisiwe Ngcemu", // eThekwini, Ward 81
    "59500082": "Philisiwe Ngcemu", // eThekwini, Ward 82
    "59500083": "Zamokuhle Ngcobo", // eThekwini, Ward 83
    "59500084": "Siphesihle Percival Ndlovu", // eThekwini, Ward 84
    "59500085": "Prince Jokweni", // eThekwini, Ward 85
    "59500086": "Sandile Sihle Mfeka", // eThekwini, Ward 86
    "59500087": "Timothy Thuthukani Dlamini", // eThekwini, Ward 87
    "59500088": "Happiness Sizakele Dlamini", // eThekwini, Ward 88
    "59500089": "Sabelo Dickson Zulu", // eThekwini, Ward 89
    "59500090": "Naadia Nobin", // eThekwini, Ward 90
    "59500091": "Lindani Talent Kunene", // eThekwini, Ward 91
    "59500092": "Sipho Innocent Zuma", // eThekwini, Ward 92
    "59500093": "Siyabonga Mazibuko", // eThekwini, Ward 93
    "59500094": "Thamsanqa Sphephelo Makhanya", // eThekwini, Ward 94
    "59500095": "Siphesihle Amanda Mthethwa", // eThekwini, Ward 95
    "59500096": "Benedict Menzi Biyela", // eThekwini, Ward 96
    "59500097": "Neville Howard Hazell", // eThekwini, Ward 97
    "59500098": "Brian Sbonelo Cele", // eThekwini, Ward 98
    "59500099": "Duduzile Prudence Mgobhozi", // eThekwini, Ward 99
    "59500100": "Noncedo Zibuyile Mdluli", // eThekwini, Ward 100
    "59500101": "Hlengiwe Ndlovu", // eThekwini, Ward 101
    "59500102": "Nyameko Ntuli", // eThekwini, Ward 102
    "59500103": "Siphiwe Vincent Gwala", // eThekwini, Ward 103
    "59500104": "Innocent Thobelani Dlamini", // eThekwini, Ward 104
    "59500105": "Obrey Sibahle Ngidi", // eThekwini, Ward 105
    "59500106": "Lucky Brian Mkhize", // eThekwini, Ward 106
    "59500107": "Nkosingiphile Bafana Chesters Godlwana", // eThekwini, Ward 107
    "59500108": "Cyril Mboneni Bhekiswayo", // eThekwini, Ward 108
    "59500109": "Jabulani Thembinkosi Ntshangase", // eThekwini, Ward 109
    "59500110": "Bronwynne Georgia Delaney", // eThekwini, Ward 110
    "59500111": "Thozama Ngubane", // eThekwini, Ward 111
    "59500112": "Sphumelele Noluthando Mathonsi", // eThekwini, Ward 112
    "63701001": "Berend Seleka", // Moretele, Ward 1
    "63701002": "Koketso Baldwin Mojela", // Moretele, Ward 2
    "63701003": "Ditlhashana Zacharia Seema", // Moretele, Ward 3
    "63701004": "Phildah Mmatsetse Mphokobye", // Moretele, Ward 4
    "63701005": "Paul Tsietsi Mpete", // Moretele, Ward 5
    "63701006": "Thapelo Andrew Sebola", // Moretele, Ward 6
    "63701007": "Thapelo Johannes Rahlogo", // Moretele, Ward 7
    "63701008": "Steve Resemati Nkuna", // Moretele, Ward 8
    "63701009": "Lekgutla France Mabetoa", // Moretele, Ward 9
    "63701010": "Naomi Kenosi Matlwa", // Moretele, Ward 10
    "63701011": "Lawrence Toti Jan Mbazima", // Moretele, Ward 11
    "63701012": "Mpho Fortune Ndlela", // Moretele, Ward 12
    "63701013": "Elizabeth Busisiwe Makola", // Moretele, Ward 13
    "63701014": "Isaac Shiburi", // Moretele, Ward 14
    "63701015": "Lindiwe Maureen Hadebe", // Moretele, Ward 15
    "63701016": "Joseph Batonono Mashaba", // Moretele, Ward 16
    "63701017": "Lemati Martin Mophuting", // Moretele, Ward 17
    "63701018": "Matlakala Caroline Sefolo", // Moretele, Ward 18
    "63701019": "Kirileng Lorraine Chauke", // Moretele, Ward 19
    "63701020": "Thabiso Stephen Molekwa", // Moretele, Ward 20
    "63701021": "Dinah Evah Mako", // Moretele, Ward 21
    "63701022": "Norah Mogaogedi Mako", // Moretele, Ward 22
    "63701023": "Sello Lucas Modisa", // Moretele, Ward 23
    "63701024": "Regina Luki Kgatle", // Moretele, Ward 24
    "63701025": "Sicelo Masuku", // Moretele, Ward 25
    "63702001": "Peter Modise Sebatjane", // Local Municipality of Madibeng, Ward 1
    "63702002": "Samuel Mfela Ramogomotsi Moloisane", // Local Municipality of Madibeng, Ward 2
    "63702003": "John Sello Moagi", // Local Municipality of Madibeng, Ward 3
    "63702004": "Shadrack Thabo Mashongwane", // Local Municipality of Madibeng, Ward 4
    "63702005": "Tokollo Mohau Mooketsi", // Local Municipality of Madibeng, Ward 5
    "63702006": "Cyprian Sechaba Sekhoto", // Local Municipality of Madibeng, Ward 6
    "63702007": "Petra Kedibone Pitso", // Local Municipality of Madibeng, Ward 7
    "63702008": "Winston Bheki Mokone", // Local Municipality of Madibeng, Ward 8
    "63702009": "Muziwakhe Mazibuko", // Local Municipality of Madibeng, Ward 9
    "63702010": "Elias Gasfaner Sithole", // Local Municipality of Madibeng, Ward 10
    "63702011": "Pearl Itumeleng Maserumule", // Local Municipality of Madibeng, Ward 11
    "63702012": "Sara Mogara", // Local Municipality of Madibeng, Ward 12
    "63702013": "Sello Joseph Marole", // Local Municipality of Madibeng, Ward 13
    "63702014": "Leslie Padwell Ntsetse Makeketa", // Local Municipality of Madibeng, Ward 14
    "63702015": "Portia Sophy Shabangu", // Local Municipality of Madibeng, Ward 15
    "63702016": "Queen Fumane Mabuyangwa", // Local Municipality of Madibeng, Ward 16
    "63702017": "Mojake Jeanett Motsepe", // Local Municipality of Madibeng, Ward 17
    "63702018": "Suzan Phokoane Kungoane", // Local Municipality of Madibeng, Ward 18
    "63702019": "Kgaugelo Calvin Mogajane", // Local Municipality of Madibeng, Ward 19
    "63702020": "Lesego Joseph Mphane", // Local Municipality of Madibeng, Ward 20
    "63702021": "Jeanetta Petronella Seatile", // Local Municipality of Madibeng, Ward 21
    "63702022": "Ntombizodwa Johanna Motaung", // Local Municipality of Madibeng, Ward 22
    "63702023": "Ontshedise Precious Van Wyk", // Local Municipality of Madibeng, Ward 23
    "63702024": "Dumisani Ntuli", // Local Municipality of Madibeng, Ward 24
    "63702025": "Steven Khumo Jele", // Local Municipality of Madibeng, Ward 25
    "63702026": "Theophilus Mpho Mareme", // Local Municipality of Madibeng, Ward 26
    "63702027": "Tebogo Godfrey Mokwele", // Local Municipality of Madibeng, Ward 27
    "63702028": "Strike Motseki", // Local Municipality of Madibeng, Ward 28
    "63702029": "Cyprian Sechaba Sekhoto", // Local Municipality of Madibeng, Ward 29
    "63702030": "Bothabo Alfred Mosoetsa", // Local Municipality of Madibeng, Ward 30
    "63702031": "Lerato Letta Kutume", // Local Municipality of Madibeng, Ward 31
    "63702032": "Cathrine Chishangu", // Local Municipality of Madibeng, Ward 32
    "63702033": "Thandi Evah Morelle", // Local Municipality of Madibeng, Ward 33
    "63702034": "Daphney Tshepo Mosito", // Local Municipality of Madibeng, Ward 34
    "63702035": "Peter Tsheola", // Local Municipality of Madibeng, Ward 35
    "63702036": "Lebone Petunia Mareme", // Local Municipality of Madibeng, Ward 36
    "63702037": "Moses Moeti Ngobeni", // Local Municipality of Madibeng, Ward 37
    "63702038": "Daniel Maunye", // Local Municipality of Madibeng, Ward 38
    "63702039": "Oscar Thabo Motaung", // Local Municipality of Madibeng, Ward 39
    "63702040": "Phenyo Daniel Hlongwane", // Local Municipality of Madibeng, Ward 40
    "63702041": "Lesego Bertha Masilo", // Local Municipality of Madibeng, Ward 41
    "63703001": "Matthews Tshose", // Rustenburg, Ward 1
    "63703002": "Tumelo Daniel Letsholo", // Rustenburg, Ward 2
    "63703003": "Kgaugelo Tsitsi", // Rustenburg, Ward 3
    "63703004": "Tebogo Daniel Nkuna", // Rustenburg, Ward 4
    "63703005": "Catherine Lempone Digasu", // Rustenburg, Ward 5
    "63703006": "Elvis Mpho Mputle", // Rustenburg, Ward 6
    "63703007": "Christopher Ditshele Tau", // Rustenburg, Ward 7
    "63703008": "Mmasadi Suzan Sepadile", // Rustenburg, Ward 8
    "63703009": "Oscar Reginald Olebogeng Mutle", // Rustenburg, Ward 9
    "63703010": "Tsholofelo Vincent Tsomane", // Rustenburg, Ward 10
    "63703011": "Johannes Thabo Mashishi", // Rustenburg, Ward 11
    "63703012": "Penelope Emang Kamenye", // Rustenburg, Ward 12
    "63703013": "Meriam Motswamasimo Maboke", // Rustenburg, Ward 13
    "63703014": "Willie Pretorius", // Rustenburg, Ward 14
    "63703015": "Boitumelo Perseverance Maxhetseba", // Rustenburg, Ward 15
    "63703016": "Ilse Amelia Holtzhausen", // Rustenburg, Ward 16
    "63703017": "Ntombizodwa Evelyn Molefe", // Rustenburg, Ward 17
    "63703018": "Obakeng Dipalame", // Rustenburg, Ward 18
    "63703019": "Piet Lebuang Namane", // Rustenburg, Ward 19
    "63703020": "Franscinah Mokgatlhe", // Rustenburg, Ward 20
    "63703021": "Lerato Omphile Modisakeng", // Rustenburg, Ward 21
    "63703022": "Johannes George Mogwera", // Rustenburg, Ward 22
    "63703023": "Tshegofatso Beauty Mokate", // Rustenburg, Ward 23
    "63703024": "Ofentse Jerremia Kombe", // Rustenburg, Ward 24
    "63703025": "Karabo Julia Nthaudi", // Rustenburg, Ward 25
    "63703026": "Virginia Tsholofelo Mamorare", // Rustenburg, Ward 26
    "63703027": "Mpho Kotu", // Rustenburg, Ward 27
    "63703028": "Daniel Tsietsi Phakoe", // Rustenburg, Ward 28
    "63703029": "Kagiso Gaven Mlotshwa", // Rustenburg, Ward 29
    "63703030": "Caroline Dolly Komane", // Rustenburg, Ward 30
    "63703031": "Peter Samerset Mathonsi", // Rustenburg, Ward 31
    "63703032": "Ofentse Jerremia Kombe", // Rustenburg, Ward 32
    "63703033": "Mondgomery Mmoloki Matsietsa", // Rustenburg, Ward 33
    "63703034": "Ofentse Jerremia Kombe", // Rustenburg, Ward 34
    "63703035": "Bellinda Nkhensani Makhuva", // Rustenburg, Ward 35
    "63703036": "Willie Pretorius", // Rustenburg, Ward 36
    "63703037": "Nonqaba Bhayibhile", // Rustenburg, Ward 37
    "63703038": "Ofentse Jerremia Kombe", // Rustenburg, Ward 38
    "63703039": "Gerson Rampoloane", // Rustenburg, Ward 39
    "63703040": "Primrose Nomathemba Mcondobi", // Rustenburg, Ward 40
    "63703041": "Ofentse Jerremia Kombe", // Rustenburg, Ward 41
    "63703042": "Phillip Moalusi Rampa", // Rustenburg, Ward 42
    "63703043": "Moatlhodi Thabo Isaac Mothobi", // Rustenburg, Ward 43
    "63703044": "Emmanuel Percy Metsileng", // Rustenburg, Ward 44
    "63703045": "Mogomotsi Isaac Molefe", // Rustenburg, Ward 45
    "63704001": "Motsomisi Gert Malebogo", // Kgetlengrivier, Ward 1
    "63704002": "Matlhogonolo Moletsane", // Kgetlengrivier, Ward 2
    "63704003": "Petrus Phetwe", // Kgetlengrivier, Ward 3
    "63704004": "Prince-Daniel Pula November", // Kgetlengrivier, Ward 4
    "63704005": "Comfort Kgomotso Mogale", // Kgetlengrivier, Ward 5
    "63704006": "Israel Buti Tsele", // Kgetlengrivier, Ward 6
    "63704007": "Sarah Dimakatso Malebogo", // Kgetlengrivier, Ward 7
    "63705001": "Thato Nkgabela Batleng", // Moses Kotane, Ward 1
    "63801001": "Motlathuso Irene Tladi", // Ratlou, Ward 1
    "63801002": "Daphney Raisibe Motlhamme", // Ratlou, Ward 2
    "63801003": "Itumeleng Winston Makabanyane", // Ratlou, Ward 3
    "63801004": "Godsond Gaolatlhe Mokgope", // Ratlou, Ward 4
    "63801005": "Thato Gift Willemse", // Ratlou, Ward 5
    "63801006": "Patricia Silane", // Ratlou, Ward 6
    "63801007": "Kgorosane Cherlyboy Dithobiso", // Ratlou, Ward 7
    "63801008": "Omphemetse Lamentation Mokgosi", // Ratlou, Ward 8
    "63801009": "Mosetsanagape Felicia Malebadi", // Ratlou, Ward 9
    "63801010": "Moeti Vincent Sello", // Ratlou, Ward 10
    "63801011": "Patricia Matshidiso Peloeng", // Ratlou, Ward 11
    "63801012": "Rift Rammolai Maine", // Ratlou, Ward 12
    "63801013": "Mothusi Richard Ntwagae", // Ratlou, Ward 13
    "63801014": "Samuel Motlalentwa Mosikare", // Ratlou, Ward 14
    "63802001": "Maikutleng Evelyn Moreo", // Tswaing, Ward 1
    "63802002": "Michael Modisatsona Sechogo", // Tswaing, Ward 2
    "63802003": "Kgomotso Carol Kgengwe", // Tswaing, Ward 3
    "63802004": "Keikantsemang Gloria Nchoe", // Tswaing, Ward 4
    "63802005": "Tosman Jenek Menong", // Tswaing, Ward 5
    "63802006": "Thabiso Richard Magwaba", // Tswaing, Ward 6
    "63802007": "Masego Given Mothupi", // Tswaing, Ward 7
    "63802008": "Meleko Joseph Mokae", // Tswaing, Ward 8
    "63802009": "Meriam Boitshoko Boom", // Tswaing, Ward 9
    "63802010": "Kamogelo Kleinboy Moutlwane", // Tswaing, Ward 10
    "63802011": "Ditebogo Kgasu", // Tswaing, Ward 11
    "63802012": "Jonathane Tshepo Gabanatlhake", // Tswaing, Ward 12
    "63802013": "Letlhogonolo Lucky Motji", // Tswaing, Ward 13
    "63802014": "Morwantwa Gert Dikolomela", // Tswaing, Ward 14
    "63803001": "Tshipietsile Samson Dikobe", // Mafikeng, Ward 1
    "63803002": "Abel Gaoretelelwe Setidisho", // Mafikeng, Ward 2
    "63803003": "Naphtaly Manwe Legwase", // Mafikeng, Ward 3
    "63803004": "Mashebetsane Simon Letswamotse", // Mafikeng, Ward 4
    "63803005": "Seuntjie Jack Khalane", // Mafikeng, Ward 5
    "63803006": "Tshiamo Isaac Dinao", // Mafikeng, Ward 6
    "63803007": "Boitumelo Archibald Itumeleng", // Mafikeng, Ward 7
    "63803008": "Kelebone Tsholofelo Kaizer Tawana", // Mafikeng, Ward 8
    "63803009": "Anthony Matshwisa", // Mafikeng, Ward 9
    "63803010": "Anthony Matshwisa", // Mafikeng, Ward 10
    "63803011": "Mothusi Etkins Mpame", // Mafikeng, Ward 11
    "63803012": "Mpho Richard Kgosiemang", // Mafikeng, Ward 12
    "63803013": "Keolebogile Mercy Moncho", // Mafikeng, Ward 13
    "63803014": "Gosalamang Ellen Mopako", // Mafikeng, Ward 14
    "63803015": "Ketlareng Edith Motshegwa", // Mafikeng, Ward 15
    "63803016": "Maletsatsi Mable Kgantlape", // Mafikeng, Ward 16
    "63803017": "Masego Bernice Nazo", // Mafikeng, Ward 17
    "63803018": "Galeboe Joel Marumo", // Mafikeng, Ward 18
    "63803019": "Daniel Malebadi Motladiile", // Mafikeng, Ward 19
    "63803020": "Rebaone Dube", // Mafikeng, Ward 20
    "63803021": "Jan Oupa Bogatsu", // Mafikeng, Ward 21
    "63803022": "Olehile Shadrack Gaboitsiwe", // Mafikeng, Ward 22
    "63803023": "Baipidi Portia Tsoai", // Mafikeng, Ward 23
    "63803024": "Tebele Sam Mokate", // Mafikeng, Ward 24
    "63803025": "Boitumelo Hanny Dikome", // Mafikeng, Ward 25
    "63803026": "Albert Scoma Mangayi", // Mafikeng, Ward 26
    "63803027": "Obakeng Ernest Mothupi", // Mafikeng, Ward 27
    "63803028": "Matlhabanyane Boitumelo Alice Radebe", // Mafikeng, Ward 28
    "63803029": "Matlhabanyane Boitumelo Alice Radebe", // Mafikeng, Ward 29
    "63803030": "Phineas Katiso Mahlatse", // Mafikeng, Ward 30
    "63803031": "Tshipietsile Samson Dikobe", // Mafikeng, Ward 31
    "63803032": "Mpho Emmanuel Lentswane", // Mafikeng, Ward 32
    "63803033": "Andries Katlego Moreo", // Mafikeng, Ward 33
    "63803034": "Mmaserame Cynthia Mogorosi", // Mafikeng, Ward 34
    "63803035": "Kedibone Mirriam Lethoko", // Mafikeng, Ward 35
    "63804001": "Vusindlo Phillemon Thango", // Ditsobotla, Ward 1
    "63804002": "Tshepiso David Mothibi", // Ditsobotla, Ward 2
    "63804003": "Bareng Jarious Motswapuleng", // Ditsobotla, Ward 3
    "63804004": "Philip Gert Lottering", // Ditsobotla, Ward 4
    "63804005": "Johannes Katlego Moeketsi Jaars", // Ditsobotla, Ward 5
    "63804006": "Tsienyane Onnicah Mocumi", // Ditsobotla, Ward 6
    "63804007": "Ranko Jacob Lemme", // Ditsobotla, Ward 7
    "63804008": "Lebereko Johannes Nkashe", // Ditsobotla, Ward 8
    "63804009": "Buti Adolf Emmanuel Bole", // Ditsobotla, Ward 9
    "63804010": "Phatsimo Nkashe", // Ditsobotla, Ward 10
    "63804011": "Morwa Lily Rapolai", // Ditsobotla, Ward 11
    "63804012": "Johannes Tebogo Tshabalala", // Ditsobotla, Ward 12
    "63804013": "Matshoka Norlia Maseko", // Ditsobotla, Ward 13
    "63804014": "Maria Keromamang Soke", // Ditsobotla, Ward 14
    "63804015": "Tshepo David Mokoma", // Ditsobotla, Ward 15
    "63804016": "Moses Mendle", // Ditsobotla, Ward 16
    "63804017": "Lesedi Godratius Mokone", // Ditsobotla, Ward 17
    "63804018": "Dorothy Sisimogang Matlhoko", // Ditsobotla, Ward 18
    "63804019": "Adam Olihile Machusi", // Ditsobotla, Ward 19
    "63804020": "Lebogang Brian Tshabile", // Ditsobotla, Ward 20
    "63805001": "Kgomotso Joseph Ledikwa", // Ramotshere Moiloa, Ward 1
    "63805002": "Pulenyane Philemon Mohube", // Ramotshere Moiloa, Ward 2
    "63805003": "Kgomotso Joseph Ledikwa", // Ramotshere Moiloa, Ward 3
    "63805004": "Patrick Molefi Keebine", // Ramotshere Moiloa, Ward 4
    "63805005": "Mpolokang Marius Mokgothu", // Ramotshere Moiloa, Ward 5
    "63805006": "Mompati Ivison Motingwa", // Ramotshere Moiloa, Ward 6
    "63805007": "Moses Moumakwa", // Ramotshere Moiloa, Ward 7
    "63805008": "Moswang Violet Majafa", // Ramotshere Moiloa, Ward 8
    "63805009": "Edward Ofentse Mogomotsi", // Ramotshere Moiloa, Ward 9
    "63805010": "Kgotso Reoikantse Lekaba", // Ramotshere Moiloa, Ward 10
    "63805011": "Tsietsi Archibald Segone", // Ramotshere Moiloa, Ward 11
    "63805012": "Boitumelo Christina Boroko", // Ramotshere Moiloa, Ward 12
    "63805013": "Boitumelo Christina Boroko", // Ramotshere Moiloa, Ward 13
    "63805014": "Gaolatlheope Tuis Mokoena", // Ramotshere Moiloa, Ward 14
    "63805015": "Donald Kagiso Malwale", // Ramotshere Moiloa, Ward 15
    "63805016": "Donovan Cordier", // Ramotshere Moiloa, Ward 16
    "63805017": "Nelo Meleko Machaile", // Ramotshere Moiloa, Ward 17
    "63805018": "Tumisang Ntu Molefe", // Ramotshere Moiloa, Ward 18
    "63805019": "Johannes-Kenosi Mokgatle", // Ramotshere Moiloa, Ward 19
    "63902001": "Aobakwe Tlhosane", // Naledi, Ward 1
    "63902002": "Violet Mompoluke Sennano", // Naledi, Ward 2
    "63902003": "Tau Jr Boipelo Mokebe", // Naledi, Ward 3
    "63902004": "Violet Mompoluke Sennano", // Naledi, Ward 4
    "63902005": "Japie Gosenyegwang Molefe", // Naledi, Ward 5
    "63902006": "Maleho Oupa Matthews Motlhanke", // Naledi, Ward 6
    "63902007": "Lorna Rebecca Kai", // Naledi, Ward 7
    "63902008": "Phomolo Makhavelli Maine", // Naledi, Ward 8
    "63902009": "Kasa Charles Maine", // Naledi, Ward 9
    "63903001": "Shadrack Rapadi Mokoroane", // Mamusa, Ward 1
    "63903002": "Vincent Madoda Matimba", // Mamusa, Ward 2
    "63903003": "Kebosaletse Naomi Phutagae", // Mamusa, Ward 3
    "63903004": "Tebogo Conselation Makaota", // Mamusa, Ward 4
    "63903005": "Duncan Norton", // Mamusa, Ward 5
    "63903006": "Semakaleng Akanyang Rejoice Mothibi", // Mamusa, Ward 6
    "63903007": "Lorato Patricia Sekute", // Mamusa, Ward 7
    "63903008": "Danie Group", // Mamusa, Ward 8
    "63904001": "Maadimo Josephine Ratake", // Greater Taung, Ward 1
    "63904002": "Ikanyeng Ishmael Kalanyane", // Greater Taung, Ward 2
    "63904003": "Kenosi Freddy Seruteng", // Greater Taung, Ward 3
    "63904004": "Goitseone Eric Matubako", // Greater Taung, Ward 4
    "63904005": "Kegomoditswe Violet Bloem", // Greater Taung, Ward 5
    "63904006": "Ogopoleng Goodwright Itumeleng", // Greater Taung, Ward 6
    "63904007": "Egorogile Andrew Matolong", // Greater Taung, Ward 7
    "63904008": "Matthews Selelo Tau", // Greater Taung, Ward 8
    "63904009": "Baitshepi Eunice Tyali", // Greater Taung, Ward 9
    "63904010": "Bella Nkoro", // Greater Taung, Ward 10
    "63904011": "Abrahm Fannie Tshitlho", // Greater Taung, Ward 11
    "63904012": "Nadine Tsholofelo Khuduga", // Greater Taung, Ward 12
    "63904013": "Bonolo Nellcia Kuduntwane", // Greater Taung, Ward 13
    "63904014": "Lesego Perseverance Segano", // Greater Taung, Ward 14
    "63904015": "Paulina Motlhabane", // Greater Taung, Ward 15
    "63904016": "Mpho Lucia Mmabe", // Greater Taung, Ward 16
    "63904017": "Marei Lilia Bellman", // Greater Taung, Ward 17
    "63904018": "Mercia Ketlogetswe Modihapula", // Greater Taung, Ward 18
    "63904019": "Godfrey Keaqbaka Leburu", // Greater Taung, Ward 19
    "63904020": "Julia Makatiso Moreotsenge", // Greater Taung, Ward 20
    "63904021": "Keitumetse Nature Nte", // Greater Taung, Ward 21
    "63904022": "Donald Mosimanegape Moleme", // Greater Taung, Ward 22
    "63904023": "Boitshepo Yvonne Segano", // Greater Taung, Ward 23
    "63904024": "Boipelo Iris Molelekeng", // Greater Taung, Ward 24
    "63906001": "Butingane Petrus Chubisi", // Lekwa-Teemane, Ward 1
    "63906002": "Oduetse Andrew Kekane", // Lekwa-Teemane, Ward 2
    "63906003": "Refiloe Lenah Snoek", // Lekwa-Teemane, Ward 3
    "63906004": "Magdeline Nombiselo Thiko", // Lekwa-Teemane, Ward 4
    "63906005": "Tumelo John Sebitso", // Lekwa-Teemane, Ward 5
    "63906006": "Kedisaletse Rebecca Montwedi", // Lekwa-Teemane, Ward 6
    "63906007": "Moferefere Ben Tukula", // Lekwa-Teemane, Ward 7
    "63907001": "Sebetso James Sekgochane", // Kagisano/Molopo, Ward 1
    "63907002": "Katlego Elligin Mathe", // Kagisano/Molopo, Ward 2
    "63907003": "Ketshepile Forgiveness Lekopamotse", // Kagisano/Molopo, Ward 3
    "63907004": "Agnes Mmama Mothusi-Barei", // Kagisano/Molopo, Ward 4
    "63907005": "Keatlaretse Ngamole", // Kagisano/Molopo, Ward 5
    "63907006": "Portia Kealeboga Ditira", // Kagisano/Molopo, Ward 6
    "63907007": "Obakeng Parkins", // Kagisano/Molopo, Ward 7
    "63907008": "Kenalemang Jennifer Oliphant", // Kagisano/Molopo, Ward 8
    "63907009": "Puleng Silver Sebonesho", // Kagisano/Molopo, Ward 9
    "63907010": "Kagiso Benjamin Ngwako", // Kagisano/Molopo, Ward 10
    "63907011": "Gosego Talent Marite", // Kagisano/Molopo, Ward 11
    "63907012": "Tlhalefang Monamodi", // Kagisano/Molopo, Ward 12
    "63907013": "Selemogeng Vivian Thomas", // Kagisano/Molopo, Ward 13
    "63907014": "Neo Koloi", // Kagisano/Molopo, Ward 14
    "63907015": "Crofton Tumelo Jood", // Kagisano/Molopo, Ward 15
    "64003001": "Mnyemezile Adam Machakela", // City of Matlosana, Ward 1
    "64003002": "Bettie Diane Slambee", // City of Matlosana, Ward 2
    "64003003": "Bettie Diane Slambee", // City of Matlosana, Ward 3
    "64003004": "Tiisetso Kali", // City of Matlosana, Ward 4
    "64003005": "Joel Obakeng Xarula", // City of Matlosana, Ward 5
    "64003006": "Kedibone Cassandra Mogoje", // City of Matlosana, Ward 6
    "64003007": "Madibe Frans Mashilo", // City of Matlosana, Ward 7
    "64003008": "Madeleine Motladifedile Mojaki", // City of Matlosana, Ward 8
    "64003009": "Kedibone Cassandra Mogoje", // City of Matlosana, Ward 9
    "64003010": "Caphius Letlhogonolo Mokae", // City of Matlosana, Ward 10
    "64003011": "Gloria Bontle Mangesi", // City of Matlosana, Ward 11
    "64003012": "Motswiri Jeffrey Taunyane", // City of Matlosana, Ward 12
    "64003013": "Johannes Lengekile Mogakabe", // City of Matlosana, Ward 13
    "64003014": "Thabo Solomon Wesinyana", // City of Matlosana, Ward 14
    "64003015": "Hans Otshabeng Masego", // City of Matlosana, Ward 15
    "64003016": "Thabiso Ashwon Paul Modisadife", // City of Matlosana, Ward 16
    "64003017": "Josephine Nomhlolo Bangani", // City of Matlosana, Ward 17
    "64003018": "Ketlaodirelang Seemane", // City of Matlosana, Ward 18
    "64003019": "Lebogang Michael Sebothe", // City of Matlosana, Ward 19
    "64003020": "Nolwaiphi Elsie Morobi", // City of Matlosana, Ward 20
    "64003021": "Kedibone Cynthia Iyambo", // City of Matlosana, Ward 21
    "64003022": "Kedibone Cassandra Mogoje", // City of Matlosana, Ward 22
    "64003023": "Billy-Boy Jonny Davids", // City of Matlosana, Ward 23
    "64003024": "Fikile Daniel Oortman", // City of Matlosana, Ward 24
    "64003025": "Boikie Ephraim Mosiakoko", // City of Matlosana, Ward 25
    "64003026": "Koketso Makgeledisa", // City of Matlosana, Ward 26
    "64003027": "Elizabeth Molisenyana-Mabaso", // City of Matlosana, Ward 27
    "64003028": "Josephine Nomhlolo Bangani", // City of Matlosana, Ward 28
    "64003029": "Sereko Nongqayi", // City of Matlosana, Ward 29
    "64003030": "Bonolo Patience Madlala", // City of Matlosana, Ward 30
    "64003031": "Hester Nombulelo Qotwana", // City of Matlosana, Ward 31
    "64003032": "Thembinkosi Tjalentjane", // City of Matlosana, Ward 32
    "64003033": "Mkokeli Seuntjie Binza", // City of Matlosana, Ward 33
    "64003034": "Abraham Buhlebuyeza Mdyali", // City of Matlosana, Ward 34
    "64003035": "Sipho'sihle Refilwe Makhubu", // City of Matlosana, Ward 35
    "64003036": "Mmalethola Anastasia Tutubala", // City of Matlosana, Ward 36
    "64003037": "Shiwe Julia Boqo", // City of Matlosana, Ward 37
    "64003038": "Kgopotso Jeanette Matlaopane", // City of Matlosana, Ward 38
    "64003039": "Harold Simon Kopano Malinga", // City of Matlosana, Ward 39
    "64004001": "Toltol Petrus Molatlhegi", // Maquassi Hills, Ward 1
    "64004002": "Olebogeng Given Sejeso", // Maquassi Hills, Ward 2
    "64004003": "Onkgethetse Jankie Senatle", // Maquassi Hills, Ward 3
    "64004004": "Kaizer Sannyboy Calvert", // Maquassi Hills, Ward 4
    "64004005": "Kaizer Sannyboy Calvert", // Maquassi Hills, Ward 5
    "64004006": "Kaizer Sannyboy Calvert", // Maquassi Hills, Ward 6
    "64004007": "Johannes Tsietsi Sebueng", // Maquassi Hills, Ward 7
    "64004008": "Thozamile Gert Gaje", // Maquassi Hills, Ward 8
    "64004009": "Lebogang Lesley Gorekwang", // Maquassi Hills, Ward 9
    "64004010": "Moipone Petunia Rwendela", // Maquassi Hills, Ward 10
    "64004011": "Metlholo Johannes Boikanyo", // Maquassi Hills, Ward 11
    "64005001": "Gristopher Boki Segoe", // JB Marks, Ward 1
    "64005002": "Chantele Bloem", // JB Marks, Ward 2
    "64005003": "Albert Johann Pretorius", // JB Marks, Ward 3
    "64005004": "Teboho Samuel Taje", // JB Marks, Ward 4
    "64005005": "Thabang Kraai", // JB Marks, Ward 5
    "64005006": "Glen Mosenogi", // JB Marks, Ward 6
    "64005007": "Bokamoso Oarabile Phemelo Mokoatsi", // JB Marks, Ward 7
    "64005008": "Sarinah Mandla", // JB Marks, Ward 8
    "64005009": "Nombulelo Betty Qhubu-Mabe", // JB Marks, Ward 9
    "64005010": "Leilanie Natasja Barends", // JB Marks, Ward 10
    "64005011": "Tshepang Moeketsi", // JB Marks, Ward 11
    "64005012": "Motlholo Amos Mampe", // JB Marks, Ward 12
    "64005013": "Cradwin Uzanne Barnardtonian Tafita", // JB Marks, Ward 13
    "64005014": "Tebogo Isaak Leping", // JB Marks, Ward 14
    "64005015": "Hendrik Willem Jacobus Blom", // JB Marks, Ward 15
    "64005016": "Dieketseng Maria Tsamai", // JB Marks, Ward 16
    "64005017": "Nomsa Olga Gibson", // JB Marks, Ward 17
    "64005018": "Nkosana Ishmael Mofokeng", // JB Marks, Ward 18
    "64005019": "Maggie Sannah Kumpi", // JB Marks, Ward 19
    "64005020": "Isaac Manzani", // JB Marks, Ward 20
    "64005021": "Leilanie Natasja Barends", // JB Marks, Ward 21
    "64005022": "Bokang Mosa Malefane", // JB Marks, Ward 22
    "64005023": "Xolile David Kham", // JB Marks, Ward 23
    "64005024": "Thabang Amos Metsuamere", // JB Marks, Ward 24
    "64005025": "Anda Mbonjeni", // JB Marks, Ward 25
    "64005026": "Johannes Thabo Malgas", // JB Marks, Ward 26
    "64005027": "Nothini Elisa Magaela", // JB Marks, Ward 27
    "64005028": "Alfred Tshepang Mogajane", // JB Marks, Ward 28
    "64005029": "Suprise Mika", // JB Marks, Ward 29
    "64005030": "Tshepo Erens Motihabane", // JB Marks, Ward 30
    "64005031": "Fikile Joseph Mohoka", // JB Marks, Ward 31
    "64005032": "Fikile Joseph Mohoka", // JB Marks, Ward 32
    "64005033": "Moses Mbulelo Nazo", // JB Marks, Ward 33
    "64005034": "Wandile Andrew Letshabo", // JB Marks, Ward 34
    "74201001": "Vhonani Ethel Ndou", // Emfuleni, Ward 1
    "74201002": "Adam Mokoena", // Emfuleni, Ward 2
    "74201003": "Ramanku John Hanyane", // Emfuleni, Ward 3
    "74201004": "Radinku David Moeti", // Emfuleni, Ward 4
    "74201005": "Ishmael Andries Basterman", // Emfuleni, Ward 5
    "74201006": "Sabata William Mosepeli", // Emfuleni, Ward 6
    "74201007": "Manyonyoba Joseph Thekiso", // Emfuleni, Ward 7
    "74201008": "Cwazibe Caleb Dhlamini", // Emfuleni, Ward 8
    "74201009": "William Letlape Tsatsi", // Emfuleni, Ward 9
    "74201010": "Moagi Meshack Ramokanopi", // Emfuleni, Ward 10
    "74201011": "Thabang David Moshe", // Emfuleni, Ward 11
    "74201012": "Michael Koki Lepele", // Emfuleni, Ward 12
    "74201013": "Mohau Alexander Lebeko", // Emfuleni, Ward 13
    "74201014": "Mahase Lucas Mofokeng", // Emfuleni, Ward 14
    "74201015": "Mokhitla Isaac Nete", // Emfuleni, Ward 15
    "74201016": "Dalean Tiny Denation", // Emfuleni, Ward 16
    "74201017": "Fakazi Mzozoyana", // Emfuleni, Ward 17
    "74201018": "Lindiwe Natasha Mphumo", // Emfuleni, Ward 18
    "74201019": "Modise Kenneth Hlalele", // Emfuleni, Ward 19
    "74201020": "Meshack Teboho Mokoena", // Emfuleni, Ward 20
    "74201021": "Edwin Thabo Kheswa", // Emfuleni, Ward 21
    "74201022": "Charlotte Molahlane Tsolo", // Emfuleni, Ward 22
    "74201023": "Pulane Alina Manamela", // Emfuleni, Ward 23
    "74201024": "Makgotso Jane Taunyana", // Emfuleni, Ward 24
    "74201025": "Tsoeu David Mavuso", // Emfuleni, Ward 25
    "74201026": "Tholakele Elizabeth Mbewe", // Emfuleni, Ward 26
    "74201027": "Mojaho Isaac Mosesi", // Emfuleni, Ward 27
    "74201028": "Lerato Mokapi", // Emfuleni, Ward 28
    "74201029": "Bhekumuzi Makhubo", // Emfuleni, Ward 29
    "74201030": "Potso William Mofokeng", // Emfuleni, Ward 30
    "74201031": "Mochini John Mofokeng", // Emfuleni, Ward 31
    "74201032": "Baatile Matthews Sekabate", // Emfuleni, Ward 32
    "74201033": "Ditshewana Maureen Makhapa", // Emfuleni, Ward 33
    "74201034": "Matebo Paul Rangaza", // Emfuleni, Ward 34
    "74201035": "Lehlohonolo Moseko", // Emfuleni, Ward 35
    "74201036": "Itumeleng Valashiya", // Emfuleni, Ward 36
    "74201037": "Lucas Ramotlabane Songwane", // Emfuleni, Ward 37
    "74201038": "Ramokgakole Ephraim Moses Phele", // Emfuleni, Ward 38
    "74201039": "Vusimuzi Power Ngema", // Emfuleni, Ward 39
    "74201040": "Daniel Mpho Pooe", // Emfuleni, Ward 40
    "74201041": "David Morobe", // Emfuleni, Ward 41
    "74201042": "Sibusiso Ntintili", // Emfuleni, Ward 42
    "74201043": "Isaac Dannyboy Ndaba", // Emfuleni, Ward 43
    "74201044": "Tholoana Toyi", // Emfuleni, Ward 44
    "74201045": "Byron Malefane Morakile", // Emfuleni, Ward 45
    "74202001": "Nonyana Wally Pitso", // Midvaal, Ward 1
    "74202002": "Mthokozisi Paris Kubheka", // Midvaal, Ward 2
    "74202003": "Samuel Mosimanegape Moeketsi", // Midvaal, Ward 3
    "74202004": "Nkosinathi Bhula", // Midvaal, Ward 4
    "74202005": "Thatisi Grace Ngutshane", // Midvaal, Ward 5
    "74202006": "Mthokozisi Paris Kubheka", // Midvaal, Ward 6
    "74202007": "Rethabile Ntsielo", // Midvaal, Ward 7
    "74202008": "Nontshindiso Mpongo", // Midvaal, Ward 8
    "74202009": "Malusi Gracious Nkosi", // Midvaal, Ward 9
    "74202010": "Teboho Isaac Molebatsi", // Midvaal, Ward 10
    "74202011": "Manoko Gloria Sebola", // Midvaal, Ward 11
    "74202012": "Noxolo Princess Mokoena", // Midvaal, Ward 12
    "74202013": "Nehemiah Setlhare Leteane", // Midvaal, Ward 13
    "74202014": "Samuel Mosimanegape Moeketsi", // Midvaal, Ward 14
    "74202015": "Teboho Sophonia Tsunke", // Midvaal, Ward 15
    "74203001": "Modiehi Selinah Mokoena", // Lesedi, Ward 1
    "74203002": "Busisiwe Doris Nhlapo", // Lesedi, Ward 2
    "74203003": "Letsoko Samuel Mokoena", // Lesedi, Ward 3
    "74203004": "Mamokete Esther Dube", // Lesedi, Ward 4
    "74203005": "Musa Johnson Zwane", // Lesedi, Ward 5
    "74203006": "Ivy Ndhlovu", // Lesedi, Ward 6
    "74203007": "Aaron Sydney Tsotetsi", // Lesedi, Ward 7
    "74203008": "Riccardo Lebusa Nteo", // Lesedi, Ward 8
    "74203009": "Kedibone Maite Ellen Matatanyane", // Lesedi, Ward 9
    "74203010": "Celumusa Andrew Duma", // Lesedi, Ward 10
    "74203011": "Jeffrey Thabo Magudulela", // Lesedi, Ward 11
    "74203012": "Sunnyboy Dominic Sihlangu", // Lesedi, Ward 12
    "74203013": "Jeffrey Thabo Magudulela", // Lesedi, Ward 13
    "74801001": "Rittah Makhosazana Sithole", // Mogale City, Ward 1
    "74801002": "Tebogo Malvin Koloi", // Mogale City, Ward 2
    "74801003": "Nomvozana Nelly Matjikisa-Mabe", // Mogale City, Ward 3
    "74801004": "Maboloche Dinah Mabaso", // Mogale City, Ward 4
    "74801005": "Stanley Thabiso Montsheng", // Mogale City, Ward 5
    "74801006": "Madumetja Albert Mohlasedi", // Mogale City, Ward 6
    "74801007": "Patrick Letihogonolo Seemela", // Mogale City, Ward 7
    "74801008": "Sibongile Portia Kokoali", // Mogale City, Ward 8
    "74801009": "Rudelle Schoeman", // Mogale City, Ward 9
    "74801010": "Ransley Godfrey Mhlari", // Mogale City, Ward 10
    "74801011": "Welhemina Nomthandazo Buku", // Mogale City, Ward 11
    "74801012": "Adam Chimane Mathibeng", // Mogale City, Ward 12
    "74801013": "Mbijana Jane Nkosi", // Mogale City, Ward 13
    "74801014": "Mosa Mogoma", // Mogale City, Ward 14
    "74801015": "Tebogo George Mothibi", // Mogale City, Ward 15
    "74801016": "Patricia Motlakadibe Raisibe Dikgoba", // Mogale City, Ward 16
    "74801017": "Mabushe Cedric Maphoru", // Mogale City, Ward 17
    "74801018": "Louanne Grobler", // Mogale City, Ward 18
    "74801019": "Wanda Luzuko Jekeqa", // Mogale City, Ward 19
    "74801020": "Monnapula Andrew Sentshegeng", // Mogale City, Ward 20
    "74801021": "Ipeleng Jeanet Tong", // Mogale City, Ward 21
    "74801022": "Justice Teboho Mokoena", // Mogale City, Ward 22
    "74801023": "Pretty Busisiwe Vilakazi", // Mogale City, Ward 23
    "74801024": "Elizabeth Masego Seetelo", // Mogale City, Ward 24
    "74801025": "Mmabatho Alina Mangoejane", // Mogale City, Ward 25
    "74801026": "Rakolojane Jacob Phumo", // Mogale City, Ward 26
    "74801027": "Eggie Jane Mandla", // Mogale City, Ward 27
    "74801028": "Ernest Sello Sedingwe", // Mogale City, Ward 28
    "74801029": "Thabiso Alberto Ngobeni", // Mogale City, Ward 29
    "74801030": "Thabiso Abram Matemane", // Mogale City, Ward 30
    "74801031": "John Posi Ntshabela", // Mogale City, Ward 31
    "74801032": "Lloyd Tlhasi Khumalo", // Mogale City, Ward 32
    "74801033": "Fakasi Strike Kgotle", // Mogale City, Ward 33
    "74801034": "Naledi Richard Jankies", // Mogale City, Ward 34
    "74801035": "Vuyisani Mtika", // Mogale City, Ward 35
    "74801036": "Lwando Moss", // Mogale City, Ward 36
    "74801037": "Marie Jacobs", // Mogale City, Ward 37
    "74801038": "Lehlohonolo Rangaka", // Mogale City, Ward 38
    "74801039": "Christina Masekona Netshaulu", // Mogale City, Ward 39
    "74804001": "Thamsanqa Mtolo", // Merafong City, Ward 1
    "74804002": "Danisile Stephen Jakole", // Merafong City, Ward 2
    "74804003": "Bongani Boyboy Masilela", // Merafong City, Ward 3
    "74804004": "Khawulezile Johannes Mjezu", // Merafong City, Ward 4
    "74804005": "Mawetu Peter Nqwaku", // Merafong City, Ward 5
    "74804006": "Thembisa Jessica Mvula", // Merafong City, Ward 6
    "74804007": "Thulani Andrew Makhoba", // Merafong City, Ward 7
    "74804009": "Ramosa Joseph Mogakatse", // Merafong City, Ward 9
    "74804010": "Mokete Botha Nthongoa", // Merafong City, Ward 10
    "74804011": "Vuyokazi Mbunjelwa", // Merafong City, Ward 11
    "74804012": "Selebogo Godfrey Philimon Baard", // Merafong City, Ward 12
    "74804013": "Mpakiseng Suzan Pholoholo", // Merafong City, Ward 13
    "74804014": "Judy Rossouw", // Merafong City, Ward 14
    "74804015": "Eddie Bella Tshabalala", // Merafong City, Ward 15
    "74804016": "Sarah Mmami Haja Ahmed Khan", // Merafong City, Ward 16
    "74804017": "Pule Samuel Monageng", // Merafong City, Ward 17
    "74804018": "Comfort Sibusiso Lubisi", // Merafong City, Ward 18
    "74804020": "Lungile Mazozo", // Merafong City, Ward 20
    "74804021": "Kgomotso Elijah Mokgotho", // Merafong City, Ward 21
    "74804022": "Tefo Moses Rakoto", // Merafong City, Ward 22
    "74804023": "Sbongile Mvimbi", // Merafong City, Ward 23
    "74804024": "Matome Ronald Manyama", // Merafong City, Ward 24
    "74804025": "Bertina Kelebogile Mhlapo", // Merafong City, Ward 25
    "74804026": "Makgothu Isaac Mafulako", // Merafong City, Ward 26
    "74804028": "Luyanda Yaphi", // Merafong City, Ward 28
    "74805001": "Kgaogelo Prayer Ngobeni", // Rand West City, Ward 1
    "74805002": "Madumetja Lucas Molele", // Rand West City, Ward 2
    "74805003": "Xolani Ernest Mrwetyana", // Rand West City, Ward 3
    "74805004": "Bongekile Ndlovu", // Rand West City, Ward 4
    "74805005": "Matimu Boitumelo Makhubele", // Rand West City, Ward 5
    "74805006": "Mmalei Elijah Tsuaeli", // Rand West City, Ward 6
    "74805007": "Raymond Haward Mehlomakulu", // Rand West City, Ward 7
    "74805008": "Juphter Pholoana Morwasetla", // Rand West City, Ward 8
    "74805009": "Lawrence Thamsanqa Mdekazi", // Rand West City, Ward 9
    "74805010": "Lydia Diapabeng Lemao", // Rand West City, Ward 10
    "74805011": "Lukas Verwey", // Rand West City, Ward 11
    "74805012": "Consolation Mpho Nxeku", // Rand West City, Ward 12
    "74805013": "Johannes Mokgethi", // Rand West City, Ward 13
    "74805014": "Molefi Ignatius Ramphore", // Rand West City, Ward 14
    "74805015": "Jullet Tebogo Ramanyai", // Rand West City, Ward 15
    "74805016": "Leslie Pankie Mvula", // Rand West City, Ward 16
    "74805017": "Mohammed Imtiaz Ally", // Rand West City, Ward 17
    "74805018": "Marcia Keitumetse Senokoane", // Rand West City, Ward 18
    "74805019": "Angeline Shelembe", // Rand West City, Ward 19
    "74805020": "Daniel Mopeloa", // Rand West City, Ward 20
    "74805021": "Sherly Nkomo", // Rand West City, Ward 21
    "74805022": "Mamoche Elizabeth Legodi", // Rand West City, Ward 22
    "74805023": "Gladwin Molemo Kalaka", // Rand West City, Ward 23
    "74805024": "Keoagile Lionel Legotlo", // Rand West City, Ward 24
    "74805025": "Itumeleng Smith", // Rand West City, Ward 25
    "74805026": "Xolile Hazel Ntuli", // Rand West City, Ward 26
    "74805027": "Fezile Edwin Nqandela", // Rand West City, Ward 27
    "74805028": "Gertrude Nocane Mtyosho", // Rand West City, Ward 28
    "74805029": "Seun Seikaneng", // Rand West City, Ward 29
    "74805030": "Salome Harriet Tshwagong", // Rand West City, Ward 30
    "74805031": "Nontlahla Ndzumo", // Rand West City, Ward 31
    "74805032": "Manana Rebecca Tyosho", // Rand West City, Ward 32
    "74805033": "Kewetse Maria Qweba", // Rand West City, Ward 33
    "74805034": "Lebohang Savanda", // Rand West City, Ward 34
    "74805035": "David Mayaba", // Rand West City, Ward 35
    "79700001": "Tshegofatso Rejoile Mmifi", // Ekurhuleni, Ward 1
    "79700002": "Innocent Mudau", // Ekurhuleni, Ward 2
    "79700003": "Given Bongani Ubisi", // Ekurhuleni, Ward 3
    "79700004": "Tungwane David Sepenyane", // Ekurhuleni, Ward 4
    "79700005": "Joseph Boya", // Ekurhuleni, Ward 5
    "79700006": "Suprise Xolani Khumalo", // Ekurhuleni, Ward 6
    "79700007": "Tebogo Frans Setati", // Ekurhuleni, Ward 7
    "79700008": "Nhlanhla Lucky Ntshingila", // Ekurhuleni, Ward 8
    "79700009": "Dingalo John Kuaho", // Ekurhuleni, Ward 9
    "79700010": "Lucia Selloane Mofokeng", // Ekurhuleni, Ward 10
    "79700011": "Emmanuel Kagiso Modiba", // Ekurhuleni, Ward 11
    "79700012": "Admission Zulu", // Ekurhuleni, Ward 12
    "79700013": "Caroline Seemela", // Ekurhuleni, Ward 13
    "79700014": "Siyanda Edward Makhubo", // Ekurhuleni, Ward 14
    "79700015": "Jerry Phaela Mohlala", // Ekurhuleni, Ward 15
    "79700016": "Lizzy Tetsoane Selepe", // Ekurhuleni, Ward 16
    "79700017": "Thina Bambeni", // Ekurhuleni, Ward 17
    "79700018": "David Thabang Mashishi", // Ekurhuleni, Ward 18
    "79700019": "Reginald Siganunu", // Ekurhuleni, Ward 19
    "79700020": "Mahommed Cassim", // Ekurhuleni, Ward 20
    "79700021": "Sandisiwe Bennett Nyengane", // Ekurhuleni, Ward 21
    "79700022": "Masentle Cynthia Lethoba", // Ekurhuleni, Ward 22
    "79700023": "Simon Maesela Masipa", // Ekurhuleni, Ward 23
    "79700024": "Joshua Rafu Mashia", // Ekurhuleni, Ward 24
    "79700025": "Modupi Simon Monareng", // Ekurhuleni, Ward 25
    "79700026": "Steven Vusimuzi Mlotshwa", // Ekurhuleni, Ward 26
    "79700027": "Patience Makobane", // Ekurhuleni, Ward 27
    "79700028": "Maphefo Rudolf Namethe", // Ekurhuleni, Ward 28
    "79700029": "Phyllis Nonkosi Masemola", // Ekurhuleni, Ward 29
    "79700030": "Ananias Phetla", // Ekurhuleni, Ward 30
    "79700031": "Muriel Nontobeko Makhukhula", // Ekurhuleni, Ward 31
    "79700032": "Edward Thabo Sefiri Matjabe", // Ekurhuleni, Ward 32
    "79700033": "Thandi Albertina Moreme", // Ekurhuleni, Ward 33
    "79700034": "Charlie Robert Crawford", // Ekurhuleni, Ward 34
    "79700035": "Luphiwo Muteyi", // Ekurhuleni, Ward 35
    "79700036": "Unathi Mtete", // Ekurhuleni, Ward 36
    "79700037": "Michael Anthony Hume", // Ekurhuleni, Ward 37
    "79700038": "Michael James Basch", // Ekurhuleni, Ward 38
    "79700039": "Thato Quintyn Sodi", // Ekurhuleni, Ward 39
    "79700040": "Mammone Patricia Ngwenya", // Ekurhuleni, Ward 40
    "79700041": "Basani Josephine Mokoena", // Ekurhuleni, Ward 41
    "79700042": "Reuben Nkgoba Mathabathe", // Ekurhuleni, Ward 42
    "79700043": "Kutlwano Douglas Digashoa", // Ekurhuleni, Ward 43
    "79700044": "Zinhle Mbali Portia Simelane", // Ekurhuleni, Ward 44
    "79700045": "Munyadziwa Amblina Rametsi", // Ekurhuleni, Ward 45
    "79700046": "Mapitso Evelyn Nkosi", // Ekurhuleni, Ward 46
    "79700047": "Nozipho Nomhlangano Ntshingila", // Ekurhuleni, Ward 47
    "79700048": "Simon Moroke Motloung", // Ekurhuleni, Ward 48
    "79700049": "Pauline Neriah Makonto", // Ekurhuleni, Ward 49
    "79700050": "Thulani Foloti", // Ekurhuleni, Ward 50
    "79700051": "Luzuko Leonard Magawulana", // Ekurhuleni, Ward 51
    "79700052": "Nqaba Zaleni", // Ekurhuleni, Ward 52
    "79700053": "Clarise Crushca De Lange-Williams", // Ekurhuleni, Ward 53
    "79700054": "Norma Siphingile Gumbi", // Ekurhuleni, Ward 54
    "79700055": "Bafana Morgan Mahlangu", // Ekurhuleni, Ward 55
    "79700056": "Masonwabe Alex Nikani", // Ekurhuleni, Ward 56
    "79700057": "Mzimasi Gibson Sbondana", // Ekurhuleni, Ward 57
    "79700058": "Morakane Evodia Dube", // Ekurhuleni, Ward 58
    "79700059": "Siphiwe Elizabeth Masina", // Ekurhuleni, Ward 59
    "79700060": "James Phakathi", // Ekurhuleni, Ward 60
    "79700061": "Nnditsheni Eric Matshete", // Ekurhuleni, Ward 61
    "79700062": "Joseph Seleke Wanyane", // Ekurhuleni, Ward 62
    "79700063": "Sithembile Danicia Mtshali", // Ekurhuleni, Ward 63
    "79700064": "Bukhosi Cokoto", // Ekurhuleni, Ward 64
    "79700065": "Thulani Ngubeni", // Ekurhuleni, Ward 65
    "79700066": "Bongane Glen Phungwayo", // Ekurhuleni, Ward 66
    "79700067": "Irene Nonhlanhla Mtshali", // Ekurhuleni, Ward 67
    "79700068": "Tumelo Brian Tshabalala", // Ekurhuleni, Ward 68
    "79700069": "Philemon Mmui Pheto", // Ekurhuleni, Ward 69
    "79700070": "Penelope Gwebu", // Ekurhuleni, Ward 70
    "79700071": "Nhlanhla Patrick Ntuli", // Ekurhuleni, Ward 71
    "79700072": "Melissa Valerie Cronje", // Ekurhuleni, Ward 72
    "79700073": "Bongumusa Arnold Shobede", // Ekurhuleni, Ward 73
    "79700074": "Siphamandla Laurence Hlatywayo", // Ekurhuleni, Ward 74
    "79700075": "Lindiwe Yvonne Moleshiwa", // Ekurhuleni, Ward 75
    "79700076": "Tebogo Makadimetse Mathibane", // Ekurhuleni, Ward 76
    "79700077": "Takalani Joseph Mariba", // Ekurhuleni, Ward 77
    "79700078": "Emmanuel Sibisiso Zungu", // Ekurhuleni, Ward 78
    "79700079": "Sibongile Frieda Nkosi", // Ekurhuleni, Ward 79
    "79700080": "Alpheus Prince Rammego", // Ekurhuleni, Ward 80
    "79700081": "Johan Fana Motha", // Ekurhuleni, Ward 81
    "79700082": "Musa James Mokoena", // Ekurhuleni, Ward 82
    "79700083": "Jabulani Martin Mnguni", // Ekurhuleni, Ward 83
    "79700084": "Daniel Keithing Phiri", // Ekurhuleni, Ward 84
    "79700085": "Mojalefa Samson Masoenyane", // Ekurhuleni, Ward 85
    "79700086": "Lucas Modise", // Ekurhuleni, Ward 86
    "79700087": "Nhlanhla Lucan Nhlapo", // Ekurhuleni, Ward 87
    "79700088": "Hugh Gerard Van Greenen", // Ekurhuleni, Ward 88
    "79700089": "Veronica Mraji", // Ekurhuleni, Ward 89
    "79700090": "Paul Ntshimane Nkhumane", // Ekurhuleni, Ward 90
    "79700091": "Sannah Molefe", // Ekurhuleni, Ward 91
    "79700092": "Mphonyana Tshosane", // Ekurhuleni, Ward 92
    "79700093": "Noxolo Nokheyisi", // Ekurhuleni, Ward 93
    "79700094": "Loganathan Pillay", // Ekurhuleni, Ward 94
    "79700095": "Thulani Mpangase", // Ekurhuleni, Ward 95
    "79700096": "Daisy Busiswe Masemola", // Ekurhuleni, Ward 96
    "79700097": "Gladys Elizabeth Steyn", // Ekurhuleni, Ward 97
    "79700098": "Kgwari Solomon Motloung", // Ekurhuleni, Ward 98
    "79700099": "Ruben Barry", // Ekurhuleni, Ward 99
    "79700100": "Mmatlala Sarah Marapyana", // Ekurhuleni, Ward 100
    "79700101": "Sifiso Danisa", // Ekurhuleni, Ward 101
    "79700102": "Muxe Vureni", // Ekurhuleni, Ward 102
    "79700103": "Jane Nelisiwe Mazibuko", // Ekurhuleni, Ward 103
    "79700104": "Virginia Sedibe", // Ekurhuleni, Ward 104
    "79700105": "Azwitakadzi Kanakana", // Ekurhuleni, Ward 105
    "79700106": "Hercules Albertus Botha", // Ekurhuleni, Ward 106
    "79700107": "Elisa Hadebe", // Ekurhuleni, Ward 107
    "79700108": "Rose Masekate Ntlangoe", // Ekurhuleni, Ward 108
    "79700109": "Henry Malaza", // Ekurhuleni, Ward 109
    "79700110": "Austin Malusi Batyi", // Ekurhuleni, Ward 110
    "79700111": "Letta Charlotte Zitha", // Ekurhuleni, Ward 111
    "79700112": "Maria Tinny Masilela", // Ekurhuleni, Ward 112
    "79800001": "Themba Collen Maseko", // City of Johannesburg, Ward 1
    "79800002": "Buti Christian Konya", // City of Johannesburg, Ward 2
    "79800003": "Mamsie Rose Mofama", // City of Johannesburg, Ward 3
    "79800004": "Motlalepula David Motloung", // City of Johannesburg, Ward 4
    "79800005": "Matshidiso Kali", // City of Johannesburg, Ward 5
    "79800006": "Aaron Banele Masingi", // City of Johannesburg, Ward 6
    "79800007": "Julius Mbula", // City of Johannesburg, Ward 7
    "79800008": "Ezekiel Mosotho Tsotetsi", // City of Johannesburg, Ward 8
    "79800009": "Richard Sbusiso Mabunda", // City of Johannesburg, Ward 9
    "79800010": "Joseph Mkhari", // City of Johannesburg, Ward 10
    "79800011": "Ernest Lefatola", // City of Johannesburg, Ward 11
    "79800012": "Koos Setle", // City of Johannesburg, Ward 12
    "79800013": "Nomhle Gabisile Ndlovu", // City of Johannesburg, Ward 13
    "79800014": "Irvin Mofokeng", // City of Johannesburg, Ward 14
    "79800015": "Karabo Nkosi", // City of Johannesburg, Ward 15
    "79800016": "Collen Kagiso Mvula", // City of Johannesburg, Ward 16
    "79800017": "Willem Meshark Van Wyk", // City of Johannesburg, Ward 17
    "79800018": "Nomathamsanqa Lucky Mkhonza", // City of Johannesburg, Ward 18
    "79800019": "Dumisani Windsor Nkosi", // City of Johannesburg, Ward 19
    "79800020": "Modise Petrus Tlali", // City of Johannesburg, Ward 20
    "79800021": "Keketso Monyepao", // City of Johannesburg, Ward 21
    "79800022": "Kgalema Maleke", // City of Johannesburg, Ward 22
    "79800023": "Sarah Teresa June Wissler", // City of Johannesburg, Ward 23
    "79800024": "Vulani Solly Mashele", // City of Johannesburg, Ward 24
    "79800025": "Mary Joyce Ntombela", // City of Johannesburg, Ward 25
    "79800026": "Nonceba Tshabalala", // City of Johannesburg, Ward 26
    "79800027": "Zandile Dabula", // City of Johannesburg, Ward 27
    "79800028": "Andrew Oupa Menyuku", // City of Johannesburg, Ward 28
    "79800029": "Monira Mashigo", // City of Johannesburg, Ward 29
    "79800030": "Timothy Nthabinyane Thema", // City of Johannesburg, Ward 30
    "79800031": "Kathleen Desiree Moticoe", // City of Johannesburg, Ward 31
    "79800032": "Jankie Motseotsile Ntsie", // City of Johannesburg, Ward 32
    "79800033": "Owen Petrus Dooka", // City of Johannesburg, Ward 33
    "79800034": "Nthatisi Julian Ntseho", // City of Johannesburg, Ward 34
    "79800035": "Erric Mofokeng", // City of Johannesburg, Ward 35
    "79800036": "King Nkosi", // City of Johannesburg, Ward 36
    "79800037": "Gcinumzi Simelane", // City of Johannesburg, Ward 37
    "79800038": "Kentse Mosimaneotsile Moshimane", // City of Johannesburg, Ward 38
    "79800039": "Divine Dithwanadb Letsie", // City of Johannesburg, Ward 39
    "79800040": "Lefa David Setsubi", // City of Johannesburg, Ward 40
    "79800041": "Elekanyani Canny Ramafamba", // City of Johannesburg, Ward 41
    "79800042": "Daphne Mudau", // City of Johannesburg, Ward 42
    "79800043": "Thulisile Ndaba", // City of Johannesburg, Ward 43
    "79800044": "Ntsatsapa Gift Moagi", // City of Johannesburg, Ward 44
    "79800045": "Siyabulela Msele", // City of Johannesburg, Ward 45
    "79800046": "Ntombikayise Hlubi", // City of Johannesburg, Ward 46
    "79800047": "Kabelo Cassius Moatshe", // City of Johannesburg, Ward 47
    "79800048": "Kgadi Kate Mogatusi", // City of Johannesburg, Ward 48
    "79800049": "Nzima Kenneth Mamathu", // City of Johannesburg, Ward 49
    "79800050": "Mfanafuthi Mnguni", // City of Johannesburg, Ward 50
    "79800051": "Vusi Walter Msomi", // City of Johannesburg, Ward 51
    "79800052": "Tshepo Mposula", // City of Johannesburg, Ward 52
    "79800053": "Mxolisi Meshack Ngwetsheni", // City of Johannesburg, Ward 53
    "79800054": "Nompumelelo Edward", // City of Johannesburg, Ward 54
    "79800055": "Wandile Zondo", // City of Johannesburg, Ward 55
    "79800056": "Phiwokuhle Siyabonga Xulu", // City of Johannesburg, Ward 56
    "79800057": "Refilwe Eunice Buang", // City of Johannesburg, Ward 57
    "79800058": "Nhlahla Robert Mbatha", // City of Johannesburg, Ward 58
    "79800059": "Temxon Zark Lebatlang", // City of Johannesburg, Ward 59
    "79800060": "Louis Mamoloko Masoga", // City of Johannesburg, Ward 60
    "79800061": "Skhumbuzo Lovers Mhlanga", // City of Johannesburg, Ward 61
    "79800062": "Steven Paledi Nkonyeni", // City of Johannesburg, Ward 62
    "79800063": "Manah Charlotte Ditshetelo", // City of Johannesburg, Ward 63
    "79800064": "Andiswa Promise Gqamane", // City of Johannesburg, Ward 64
    "79800065": "Sibongiseni Ellias Mdakane", // City of Johannesburg, Ward 65
    "79800066": "Lillian Mary Thusi", // City of Johannesburg, Ward 66
    "79800067": "Zama Michael Ndaba", // City of Johannesburg, Ward 67
    "79800068": "Ismail Mario Van Wyk", // City of Johannesburg, Ward 68
    "79800069": "Delay Shahabudien", // City of Johannesburg, Ward 69
    "79800070": "Mpho Tinyiko Gift Leping", // City of Johannesburg, Ward 70
    "79800071": "Nombulelo Henrietta Modutwane", // City of Johannesburg, Ward 71
    "79800072": "Ipeleng Olivia Senosi", // City of Johannesburg, Ward 72
    "79800073": "Lehlohonolo Kevin Banda", // City of Johannesburg, Ward 73
    "79800074": "Omphemetse Matabane", // City of Johannesburg, Ward 74
    "79800075": "Tshikani Advice Chuma", // City of Johannesburg, Ward 75
    "79800076": "Zanele Portia Dubazana", // City of Johannesburg, Ward 76
    "79800077": "Ester Lungile Dladla", // City of Johannesburg, Ward 77
    "79800078": "Bheki Wilson Mnyaluza", // City of Johannesburg, Ward 78
    "79800079": "Christopher Mohlala", // City of Johannesburg, Ward 79
    "79800080": "Norman Marala", // City of Johannesburg, Ward 80
    "79800081": "Mmakolobe Moses Sako", // City of Johannesburg, Ward 81
    "79800082": "Marcel Jean Coutriers", // City of Johannesburg, Ward 82
    "79800083": "Annette Davina Colbran", // City of Johannesburg, Ward 83
    "79800084": "James Thabiso Nkwana", // City of Johannesburg, Ward 84
    "79800085": "Busisiwe Elizabeth Mvelase", // City of Johannesburg, Ward 85
    "79800086": "Hlengiwe Trudie Shabangu", // City of Johannesburg, Ward 86
    "79800087": "Tshepo Anthony Mashiane", // City of Johannesburg, Ward 87
    "79800088": "Mlungisi Innocent Mboyisa", // City of Johannesburg, Ward 88
    "79800089": "Bejay Tulsee", // City of Johannesburg, Ward 89
    "79800090": "Sedney Kubeka", // City of Johannesburg, Ward 90
    "79800091": "Ramatamo Joseph Sehoai", // City of Johannesburg, Ward 91
    "79800092": "Motale Emmah Motseo", // City of Johannesburg, Ward 92
    "79800093": "Thabo Joy Sewisa", // City of Johannesburg, Ward 93
    "79800094": "Nandi Ndaba", // City of Johannesburg, Ward 94
    "79800095": "Thabang Matime Mogaramedi", // City of Johannesburg, Ward 95
    "79800096": "Mautla William Maela", // City of Johannesburg, Ward 96
    "79800097": "Refuwe Thubela", // City of Johannesburg, Ward 97
    "79800098": "Tshepo Thapelo Lebogang Mapharisa", // City of Johannesburg, Ward 98
    "79800099": "Tshepo Blessing Mabusela", // City of Johannesburg, Ward 99
    "79800100": "Bulelwa Cynthia Mbono", // City of Johannesburg, Ward 100
    "79800101": "Shane Nicky Van Der Westhuizen", // City of Johannesburg, Ward 101
    "79800102": "Keabetswe Annacletta Shumba", // City of Johannesburg, Ward 102
    "79800103": "Ayanda-Allie Allie-Nxumalo", // City of Johannesburg, Ward 103
    "79800104": "Mondli Pearcyvel Bhikili", // City of Johannesburg, Ward 104
    "79800105": "Tumelo Edward Shai", // City of Johannesburg, Ward 105
    "79800106": "Botsang Emmanuel Moiloa", // City of Johannesburg, Ward 106
    "79800107": "Thapelo Mabusela", // City of Johannesburg, Ward 107
    "79800108": "Tsakane Suzan Mbiza", // City of Johannesburg, Ward 108
    "79800109": "Moshabane Methews Komane", // City of Johannesburg, Ward 109
    "79800110": "Jabu Herrican Mabunda", // City of Johannesburg, Ward 110
    "79800111": "Lebohang Precious Botsana", // City of Johannesburg, Ward 111
    "79800112": "Khomotjo Jacqueline Mashala", // City of Johannesburg, Ward 112
    "79800113": "Vuyani Sydwell Mathye", // City of Johannesburg, Ward 113
    "79800114": "Selby Sello Mabelebele", // City of Johannesburg, Ward 114
    "79800115": "Precious Thuli Nkomo", // City of Johannesburg, Ward 115
    "79800116": "Bulelani Ntlemeza", // City of Johannesburg, Ward 116
    "79800117": "Nkhensi Tlakula", // City of Johannesburg, Ward 117
    "79800118": "Lungile Nokwazi Myeni", // City of Johannesburg, Ward 118
    "79800119": "Thabang Mdluli", // City of Johannesburg, Ward 119
    "79800120": "Oageng Joseph Mahlangu", // City of Johannesburg, Ward 120
    "79800121": "Julia Modiehi Sondag", // City of Johannesburg, Ward 121
    "79800122": "Nicodimas Lekibela Monyamani", // City of Johannesburg, Ward 122
    "79800123": "Prince Kamogelo Mohlala", // City of Johannesburg, Ward 123
    "79800124": "Lebogang Cleopatra Modukanene", // City of Johannesburg, Ward 124
    "79800125": "Tshililo Godfrey Malange", // City of Johannesburg, Ward 125
    "79800126": "Philile Bakubaku", // City of Johannesburg, Ward 126
    "79800127": "Lwanda Bini", // City of Johannesburg, Ward 127
    "79800128": "Moganetsi Albanius Mokae", // City of Johannesburg, Ward 128
    "79800129": "Busisiwe Pertunia Mwale", // City of Johannesburg, Ward 129
    "79800130": "Siyabonga Zwane", // City of Johannesburg, Ward 130
    "79800131": "Nkululeko Sogula", // City of Johannesburg, Ward 131
    "79800132": "Devraj Naidoo", // City of Johannesburg, Ward 132
    "79800133": "Phillemon Bafana Sibiya", // City of Johannesburg, Ward 133
    "79800134": "Rivoningo Quincy Bila", // City of Johannesburg, Ward 134
    "79800135": "Hlengiwe Petronela Masuku", // City of Johannesburg, Ward 135
    "79900001": "Xoliswa Princess Mabeka", // City of Tshwane, Ward 1
    "79900002": "Vitesh Krishna Paul Hurinanthan", // City of Tshwane, Ward 2
    "79900003": "Dithoriso Maqhawe Zwelethu Neeuwfan", // City of Tshwane, Ward 3
    "79900004": "Isaac Inocent Monametsi", // City of Tshwane, Ward 4
    "79900005": "Johannes Jacobus Coetzee", // City of Tshwane, Ward 5
    "79900006": "Mahlomola Jacob Shai", // City of Tshwane, Ward 6
    "79900007": "Ramadimetse Prudence Molaba", // City of Tshwane, Ward 7
    "79900008": "Herminah Tebogo Monaanyane", // City of Tshwane, Ward 8
    "79900009": "Bongani David Mlangeni", // City of Tshwane, Ward 9
    "79900010": "Phoshoko Lordwick Moshapa", // City of Tshwane, Ward 10
    "79900011": "Johannes Sello Chauke", // City of Tshwane, Ward 11
    "79900012": "Romeo Hlongwane", // City of Tshwane, Ward 12
    "79900013": "Frans Ngoako Mathibela", // City of Tshwane, Ward 13
    "79900014": "Shockey Reshoketsoe Mukangwe", // City of Tshwane, Ward 14
    "79900015": "Thoko Maria Mabunda", // City of Tshwane, Ward 15
    "79900016": "Daniel Makubela", // City of Tshwane, Ward 16
    "79900017": "Michael Makhonya Mabusela", // City of Tshwane, Ward 17
    "79900018": "Vuyisani Khomotso Tshenye", // City of Tshwane, Ward 18
    "79900019": "Swelindawo Petros Mblangwe", // City of Tshwane, Ward 19
    "79900020": "Kgosietsile Emmanuel Digwamaje Mlandeni", // City of Tshwane, Ward 20
    "79900021": "Granny Peggy De Bruin", // City of Tshwane, Ward 21
    "79900022": "King Kabelo Modingoana", // City of Tshwane, Ward 22
    "79900023": "Utern Matthews Mamabolo", // City of Tshwane, Ward 23
    "79900024": "Huxley Aubrey Masha", // City of Tshwane, Ward 24
    "79900025": "Selaelo Peter Mapiti", // City of Tshwane, Ward 25
    "79900026": "Michael Thabo Mooketsi", // City of Tshwane, Ward 26
    "79900027": "Given Kabelo Moraba", // City of Tshwane, Ward 27
    "79900028": "Emelda Hangalabeke Mokoba", // City of Tshwane, Ward 28
    "79900029": "Cynthia Anne Moshesh", // City of Tshwane, Ward 29
    "79900030": "Seake Refilwe Setlema", // City of Tshwane, Ward 30
    "79900031": "Nthabiseng Violet Maphanga", // City of Tshwane, Ward 31
    "79900032": "Israel Madimetsa Morobe", // City of Tshwane, Ward 32
    "79900033": "Samuel Mimi Mphamo", // City of Tshwane, Ward 33
    "79900034": "Kgaugelo Caroline Mohlala", // City of Tshwane, Ward 34
    "79900035": "Kagiso Maile Ramogale", // City of Tshwane, Ward 35
    "79900036": "Derrick Nica Matshaba", // City of Tshwane, Ward 36
    "79900037": "Lehika Peter Samotse", // City of Tshwane, Ward 37
    "79900038": "Martha Mapumela Makete", // City of Tshwane, Ward 38
    "79900039": "Alfred Mpho Mokgotlhoa", // City of Tshwane, Ward 39
    "79900040": "Makoena Donald Buthane", // City of Tshwane, Ward 40
    "79900041": "Prince Makoko Ntobeng", // City of Tshwane, Ward 41
    "79900042": "Fortune Bandile Mnguni", // City of Tshwane, Ward 42
    "79900043": "Ingle Singh", // City of Tshwane, Ward 43
    "79900044": "Mohlago Antoinette Makaya", // City of Tshwane, Ward 44
    "79900045": "Dipuo Abe Mbonani", // City of Tshwane, Ward 45
    "79900046": "Lauren Megan Besaans", // City of Tshwane, Ward 46
    "79900047": "Precious Nozipho Mkhize", // City of Tshwane, Ward 47
    "79900048": "Goboza Silas Mashaba", // City of Tshwane, Ward 48
    "79900049": "Mokoena Phakoe", // City of Tshwane, Ward 49
    "79900050": "Boitumelo Talafala", // City of Tshwane, Ward 50
    "79900051": "Gertrude Morebudi Mafogo", // City of Tshwane, Ward 51
    "79900052": "Pusetsi Cheesline Matlala", // City of Tshwane, Ward 52
    "79900053": "Sonnyboy Motsumi Kota", // City of Tshwane, Ward 53
    "79900054": "Raikaneng Alfred Machobane", // City of Tshwane, Ward 54
    "79900055": "Mmabora Flora Monama", // City of Tshwane, Ward 55
    "79900056": "Donald Patrick Letsoalo", // City of Tshwane, Ward 56
    "79900057": "Ayanda Fikile Dabula", // City of Tshwane, Ward 57
    "79900058": "Maprikana Johannes Kekana", // City of Tshwane, Ward 58
    "79900059": "Moyahabo Kganakga", // City of Tshwane, Ward 59
    "79900060": "Mashudu Solomon Mukwevho", // City of Tshwane, Ward 60
    "79900061": "Prajay Ramjee", // City of Tshwane, Ward 61
    "79900062": "Rebotse Ofentse Nkgedi", // City of Tshwane, Ward 62
    "79900063": "Phuti Johannes Maselela", // City of Tshwane, Ward 63
    "79900064": "Henriette Louise Fröhlich", // City of Tshwane, Ward 64
    "79900065": "Nompara Daniel Pole", // City of Tshwane, Ward 65
    "79900066": "Dieter Wetsch", // City of Tshwane, Ward 66
    "79900067": "Aubrey Phillip Mahlangu", // City of Tshwane, Ward 67
    "79900068": "Mashudu Lucky Makhado", // City of Tshwane, Ward 68
    "79900069": "Naume Ramatsimela Kau", // City of Tshwane, Ward 69
    "79900070": "Thabang Advice Ntwampe", // City of Tshwane, Ward 70
    "79900071": "Sivuyile Happy Mdunana", // City of Tshwane, Ward 71
    "79900072": "Godney Tini Sedibeng", // City of Tshwane, Ward 72
    "79900073": "Evelyn Kukutlwane Mnisi", // City of Tshwane, Ward 73
    "79900074": "John Tumelo Koitheng", // City of Tshwane, Ward 74
    "79900075": "Olebogeng Michael Ngoepe", // City of Tshwane, Ward 75
    "79900076": "Mmolawa Thomas Selumi", // City of Tshwane, Ward 76
    "79900077": "Matome Samson Phosa", // City of Tshwane, Ward 77
    "79900078": "Jacob Kekole Mathabathe", // City of Tshwane, Ward 78
    "79900079": "Gaahele Mokgoro", // City of Tshwane, Ward 79
    "79900080": "Leah Thandi Mtimunye", // City of Tshwane, Ward 80
    "79900081": "Mpho Given Theko", // City of Tshwane, Ward 81
    "79900082": "Russel Rulani Shabalala", // City of Tshwane, Ward 82
    "79900083": "Siegfried Emmanuel Burger", // City of Tshwane, Ward 83
    "79900084": "Gladwin Khutso Sechele", // City of Tshwane, Ward 84
    "79900085": "Motena Tintswalo Cathrine Mathe", // City of Tshwane, Ward 85
    "79900086": "Emma Tokollo Tau", // City of Tshwane, Ward 86
    "79900087": "Malusi Ernest Lekalakala", // City of Tshwane, Ward 87
    "79900088": "Neo Melmoth Lekalakala", // City of Tshwane, Ward 88
    "79900089": "Khengani Maria Mahlangu", // City of Tshwane, Ward 89
    "79900090": "Sunnyboy Makena", // City of Tshwane, Ward 90
    "79900091": "Bongiwe Matoti", // City of Tshwane, Ward 91
    "79900092": "Thabang Benny Machete", // City of Tshwane, Ward 92
    "79900093": "Malesela Hendrick Matlou", // City of Tshwane, Ward 93
    "79900094": "Mpoho Lucas Ratjatji", // City of Tshwane, Ward 94
    "79900095": "Mitah Bella Makgatho", // City of Tshwane, Ward 95
    "79900096": "Rendani Mphephu", // City of Tshwane, Ward 96
    "79900097": "Madumetja James Sekhwela", // City of Tshwane, Ward 97
    "79900098": "Cedrick Malebo Makgoka", // City of Tshwane, Ward 98
    "79900099": "Phillip Bhengela Skosana", // City of Tshwane, Ward 99
    "79900100": "Luyanda Alfred Koyina", // City of Tshwane, Ward 100
    "79900101": "Malesela Daniel Teffo", // City of Tshwane, Ward 101
    "79900102": "Ndlavela Samson Malaza", // City of Tshwane, Ward 102
    "79900103": "Mxolisi Michael Mtsweni", // City of Tshwane, Ward 103
    "79900104": "Victoria Mitchell Manala", // City of Tshwane, Ward 104
    "79900105": "Jacobus Schalk Coetzee", // City of Tshwane, Ward 105
    "79900106": "Hluphi Gafane", // City of Tshwane, Ward 106
    "79900107": "Edwin Nakedi Mohlama", // City of Tshwane, Ward 107
    "83001001": "Ignetious Simphiwe Sukazi", // Chief Albert Luthuli, Ward 1
    "83001002": "Patric Sithembiso Simelane", // Chief Albert Luthuli, Ward 2
    "83001003": "Ignetious Simphiwe Sukazi", // Chief Albert Luthuli, Ward 3
    "83001004": "Zandile Collet Skosana", // Chief Albert Luthuli, Ward 4
    "83001005": "Siyabonga Mavuso", // Chief Albert Luthuli, Ward 5
    "83001006": "Mduduzi Benedict Nkosi", // Chief Albert Luthuli, Ward 6
    "83001007": "Bongani Elmon Mkonza", // Chief Albert Luthuli, Ward 7
    "83001008": "Bongani Makhosonke Zulu", // Chief Albert Luthuli, Ward 8
    "83001009": "Siyabonga Mavuso", // Chief Albert Luthuli, Ward 9
    "83001010": "Elmon Lucky Ndlovu", // Chief Albert Luthuli, Ward 10
    "83001011": "Mduduzi Benedict Nkosi", // Chief Albert Luthuli, Ward 11
    "83001012": "Jabulile Thulile Simelane", // Chief Albert Luthuli, Ward 12
    "83001013": "Mantoampe Lisar Ntjana", // Chief Albert Luthuli, Ward 13
    "83001014": "Timothy Robert Hlophe", // Chief Albert Luthuli, Ward 14
    "83001015": "Andile Gloria Sibanyoni", // Chief Albert Luthuli, Ward 15
    "83001016": "Bongani Makhosonke Zulu", // Chief Albert Luthuli, Ward 16
    "83001017": "Timothy Welile Motha", // Chief Albert Luthuli, Ward 17
    "83001018": "Zakhele Shange", // Chief Albert Luthuli, Ward 18
    "83001019": "Gabisile Fridah Mkhonto", // Chief Albert Luthuli, Ward 19
    "83001020": "Nqobile Pride Malaza", // Chief Albert Luthuli, Ward 20
    "83001021": "Timothy Robert Hlophe", // Chief Albert Luthuli, Ward 21
    "83001022": "Andile Gloria Sibanyoni", // Chief Albert Luthuli, Ward 22
    "83001023": "Timothy Welile Motha", // Chief Albert Luthuli, Ward 23
    "83001024": "Goodness Thulisile Zulu", // Chief Albert Luthuli, Ward 24
    "83001025": "Bikwaphi Gladys Nkosi", // Chief Albert Luthuli, Ward 25
    "83004001": "Mduduzi Nelson Nkosi", // Dr Pixley Ka Isaka Seme, Ward 1
    "83004002": "Siyabonga Gift Dube", // Dr Pixley Ka Isaka Seme, Ward 2
    "83004003": "Sydney Patric Zungu", // Dr Pixley Ka Isaka Seme, Ward 3
    "83004004": "Nkosini Phellimon Nkosi", // Dr Pixley Ka Isaka Seme, Ward 4
    "83004005": "Promise Hlatshwayo", // Dr Pixley Ka Isaka Seme, Ward 5
    "83004006": "Nomsa Precious Gumbi", // Dr Pixley Ka Isaka Seme, Ward 6
    "83004007": "Christopher Maseko", // Dr Pixley Ka Isaka Seme, Ward 7
    "83004008": "Lindiwe Alencia Zulu", // Dr Pixley Ka Isaka Seme, Ward 8
    "83004009": "Siphesihle Danny Ndlozi", // Dr Pixley Ka Isaka Seme, Ward 9
    "83004010": "Vusi Thomas Mabasa", // Dr Pixley Ka Isaka Seme, Ward 10
    "83004011": "Nokuthula Gloria Mdlalose", // Dr Pixley Ka Isaka Seme, Ward 11
    "83006001": "Lucky Abram Tshabalala", // Dipaleseng, Ward 1
    "83006002": "Sibusiso Lazarus Radebe", // Dipaleseng, Ward 2
    "83006003": "Nkosana Elias Mngomezulu", // Dipaleseng, Ward 3
    "83006004": "Tefo Michael Mahlangu", // Dipaleseng, Ward 4
    "83006005": "Moremi Paul Sekhoto", // Dipaleseng, Ward 5
    "83006006": "Byron Beki Mashinini", // Dipaleseng, Ward 6
    "83101001": "Sphiwe Wonder Ntuli", // Victor Khanye, Ward 1
    "83101002": "Sibonelo Blessing Nkolanyane", // Victor Khanye, Ward 2
    "83101003": "Zanele Dorcas Selepe", // Victor Khanye, Ward 3
    "83101004": "Bongani Lymon Mhlanga", // Victor Khanye, Ward 4
    "83101005": "Bongani Ramapala", // Victor Khanye, Ward 5
    "83101006": "Alexia Van Staden", // Victor Khanye, Ward 6
    "83101007": "Bathabile Thokozile Msiza", // Victor Khanye, Ward 7
    "83101008": "Patricia Nokuthula Ganda", // Victor Khanye, Ward 8
    "83101009": "Johan Fabricius", // Victor Khanye, Ward 9
    "83102001": "Masasele Mcebo Callshaw Mabelane", // Emalahleni, Ward 1
    "83102002": "Mziwandile Mvumbi", // Emalahleni, Ward 2
    "83102003": "Muzilociast Lindokuhle Thokoane", // Emalahleni, Ward 3
    "83102004": "Mapule Reneilwe Mokoena", // Emalahleni, Ward 4
    "83102005": "Tumelo Abednigo Tsotetsi", // Emalahleni, Ward 5
    "83102006": "Lunch Mkhonzile Makhatu", // Emalahleni, Ward 6
    "83102007": "Terror Loti Muwelase", // Emalahleni, Ward 7
    "83102008": "Thabang Fortune Mpetsheni", // Emalahleni, Ward 8
    "83102009": "Thabang Fortune Mpetsheni", // Emalahleni, Ward 9
    "83102010": "Mpendulo Simelane", // Emalahleni, Ward 10
    "83102011": "Mmapula Rebone Mokoena", // Emalahleni, Ward 11
    "83102012": "Sipho Emmanuel Mampane", // Emalahleni, Ward 12
    "83102013": "Khethukuthula Calvin Ngobe", // Emalahleni, Ward 13
    "83102014": "Kgaola Trevor Phethedi", // Emalahleni, Ward 14
    "83102015": "Lunga Selwyn Nkabinde", // Emalahleni, Ward 15
    "83102016": "Chriceler Zanele Mkhize", // Emalahleni, Ward 16
    "83102017": "Tshepiso Yvette Ntuli", // Emalahleni, Ward 17
    "83102018": "Giya Aaron Mahlangu", // Emalahleni, Ward 18
    "83102019": "Elisabeth Motloung", // Emalahleni, Ward 19
    "83102020": "Mapule Petunia Zwane", // Emalahleni, Ward 20
    "83102021": "Mirriam Dorcas Makhubela", // Emalahleni, Ward 21
    "83102022": "Landiwe Khosi Mhlanga", // Emalahleni, Ward 22
    "83102023": "Nthakgeng Sonnet Lethuba", // Emalahleni, Ward 23
    "83102024": "Khululekani Zenani", // Emalahleni, Ward 24
    "83102025": "Sipho Emmanuel Mampane", // Emalahleni, Ward 25
    "83102026": "Duduzile Mpho Melicia Mbethe", // Emalahleni, Ward 26
    "83102027": "Sipho Emmanuel Mampane", // Emalahleni, Ward 27
    "83102028": "Naledi Mathabo Mofokeng", // Emalahleni, Ward 28
    "83102029": "Dolly Nkabane", // Emalahleni, Ward 29
    "83102030": "Nkosinathi Donald Mcako", // Emalahleni, Ward 30
    "83102031": "Ntombizodwa Maria Nkabinde", // Emalahleni, Ward 31
    "83102032": "Johannes Seun Hulana", // Emalahleni, Ward 32
    "83102033": "Asanda Teresa Sovia", // Emalahleni, Ward 33
    "83102034": "Pinkie Ellena Makhubu", // Emalahleni, Ward 34
    "83102035": "Marvin Finky Repinga", // Emalahleni, Ward 35
    "83102036": "Nomalungelo Prudence Ndhlovu", // Emalahleni, Ward 36
    "83103001": "Ntombikayise Maria Hadebe", // Steve Tshwete, Ward 1
    "83103002": "Bongani Paulos Makhathu", // Steve Tshwete, Ward 2
    "83103003": "Lunga Aubrey Sithole", // Steve Tshwete, Ward 3
    "83103004": "Eneya Othania Sibambo", // Steve Tshwete, Ward 4
    "83103005": "Thembisa Thandeka Ntambo", // Steve Tshwete, Ward 5
    "83103006": "Vusi Bheki Vilane", // Steve Tshwete, Ward 6
    "83103007": "Poppy Phindile Vilakazi", // Steve Tshwete, Ward 7
    "83103008": "Vusi Bheki Vilane", // Steve Tshwete, Ward 8
    "83103009": "Simon Siyabonga Mngomezulu", // Steve Tshwete, Ward 9
    "83103010": "Sibongile Mbowene", // Steve Tshwete, Ward 10
    "83103011": "Beauty Maphefo Goodenough", // Steve Tshwete, Ward 11
    "83103012": "Sbongiseni Mabena", // Steve Tshwete, Ward 12
    "83103013": "Sesi Khanya Nkosi", // Steve Tshwete, Ward 13
    "83103014": "Mogege Cyprian Matjie", // Steve Tshwete, Ward 14
    "83103015": "Thandi Constance Lebakeng", // Steve Tshwete, Ward 15
    "83103016": "Mfanafuthi Phillemon Mabena", // Steve Tshwete, Ward 16
    "83103017": "Thabo Japhtha Kolobe", // Steve Tshwete, Ward 17
    "83103018": "Mfanafuthi Phillemon Mabena", // Steve Tshwete, Ward 18
    "83103019": "Ntombikayise Elizabeth Lingwati", // Steve Tshwete, Ward 19
    "83103020": "Sibongile Beuty Matshika", // Steve Tshwete, Ward 20
    "83103021": "Zanele Monareng", // Steve Tshwete, Ward 21
    "83103022": "Bafana Sakhile Magagula", // Steve Tshwete, Ward 22
    "83103023": "Thabo Mishack Phiri", // Steve Tshwete, Ward 23
    "83103024": "Thabo Mishack Phiri", // Steve Tshwete, Ward 24
    "83103025": "Mafiti Sarah Matsemane", // Steve Tshwete, Ward 25
    "83103026": "Xola Lastborn Mokwena", // Steve Tshwete, Ward 26
    "83103027": "Victor Sibusiso Mngomezulu", // Steve Tshwete, Ward 27
    "83103028": "Tshepiso Albert Maloa", // Steve Tshwete, Ward 28
    "83103029": "Xoli Rose Mokwena", // Steve Tshwete, Ward 29
    "83104001": "Lindokuhle Mzwakhe Madonsela", // Emakhazeni, Ward 1
    "83104002": "Josephina Tozi Nhlapho", // Emakhazeni, Ward 2
    "83104003": "Sikili Aaron Maredi", // Emakhazeni, Ward 3
    "83104004": "Ziyanda Siyanda Mnisi", // Emakhazeni, Ward 4
    "83104005": "Nozibele Ndwandwa", // Emakhazeni, Ward 5
    "83104006": "Nkatiseng Mangoegape", // Emakhazeni, Ward 6
    "83104007": "Tholeni December Hleta", // Emakhazeni, Ward 7
    "83104008": "Eugene Schemper", // Emakhazeni, Ward 8
    "83105001": "Conny Koko Malope", // Thembisile Hani, Ward 1
    "83105002": "Sabatha Elliot Mnisi", // Thembisile Hani, Ward 2
    "83105003": "Mokafa Harry Manyako", // Thembisile Hani, Ward 3
    "83105004": "Sello Abram Ramalekana", // Thembisile Hani, Ward 4
    "83105005": "Edward Patrick Madonsela", // Thembisile Hani, Ward 5
    "83105006": "Cequ Kleinbooi Masilela", // Thembisile Hani, Ward 6
    "83105007": "Liduga Irvin Mlambo", // Thembisile Hani, Ward 7
    "83105008": "Lucas Simon Mabena", // Thembisile Hani, Ward 8
    "83105009": "Lindiwe Maria Motha", // Thembisile Hani, Ward 9
    "83105010": "Ben Mthimunye", // Thembisile Hani, Ward 10
    "83105011": "Stuurman Lucky Mabena Phofu", // Thembisile Hani, Ward 11
    "83105012": "Wonder Jacob Ngobese", // Thembisile Hani, Ward 12
    "83105013": "Sizakele Zanele Mashinini", // Thembisile Hani, Ward 13
    "83105014": "Katisi Alfred Kgomo", // Thembisile Hani, Ward 14
    "83105015": "Ronald Masos Muhare", // Thembisile Hani, Ward 15
    "83105016": "Luyanda Sibeko", // Thembisile Hani, Ward 16
    "83105017": "Johan Lucky Ngobeni", // Thembisile Hani, Ward 17
    "83105018": "Bathabile Esther Mavuso", // Thembisile Hani, Ward 18
    "83105019": "Jonas Mpho Mogosoane", // Thembisile Hani, Ward 19
    "83105020": "Puleng Johannes Choma", // Thembisile Hani, Ward 20
    "83105021": "Vailent Lindiwe Mathibela", // Thembisile Hani, Ward 21
    "83105022": "Lucas Sipho Sithole", // Thembisile Hani, Ward 22
    "83105023": "Reuben Nkotolan Mokhafela", // Thembisile Hani, Ward 23
    "83105024": "Esther Radebe", // Thembisile Hani, Ward 24
    "83105025": "Linah Ntombizodwa Khumalo", // Thembisile Hani, Ward 25
    "83105026": "Vusi Patrick Mahlangu", // Thembisile Hani, Ward 26
    "83105027": "Esther Radebe", // Thembisile Hani, Ward 27
    "83105028": "Poulos Stally Mtshweni", // Thembisile Hani, Ward 28
    "83105029": "Thembani Ngozo", // Thembisile Hani, Ward 29
    "83105030": "Zamazulu Duduzile Nkosi", // Thembisile Hani, Ward 30
    "83105031": "Ntombifuthi Mahlangu", // Thembisile Hani, Ward 31
    "83105032": "Thabo Emmanuel Thomas Thubane", // Thembisile Hani, Ward 32
    "83105033": "Themba Isaac Mnguni", // Thembisile Hani, Ward 33
    "83106001": "Paris Thulani Ngidi", // Dr JS Moroka, Ward 1
    "83106002": "Ezekiel Darlington Madiwana", // Dr JS Moroka, Ward 2
    "83106003": "Boy Lucky Masango", // Dr JS Moroka, Ward 3
    "83106004": "Sibusiso Mthimunye", // Dr JS Moroka, Ward 4
    "83106005": "Shadow Excellent Msiza", // Dr JS Moroka, Ward 5
    "83106006": "Nomanqoba Masimula", // Dr JS Moroka, Ward 6
    "83106007": "Koketso Hazel Kekana", // Dr JS Moroka, Ward 7
    "83106008": "Andries Shoku Maredi", // Dr JS Moroka, Ward 8
    "83106009": "Harry Godfrey Manthokwane", // Dr JS Moroka, Ward 9
    "83106010": "Phillipine Phokwane Hlongwane", // Dr JS Moroka, Ward 10
    "83106011": "Clement Tebogo Mothwa", // Dr JS Moroka, Ward 11
    "83106012": "Zaraks Johannes Seloane", // Dr JS Moroka, Ward 12
    "83106013": "Nicholas Lungisani Mbonani", // Dr JS Moroka, Ward 13
    "83106014": "Mosotho Paris Mathabathe", // Dr JS Moroka, Ward 14
    "83106015": "Bongani Given Msiza", // Dr JS Moroka, Ward 15
    "83106016": "Kgole Martin Mashilo", // Dr JS Moroka, Ward 16
    "83106017": "Thabo Bethuel Mmatladi", // Dr JS Moroka, Ward 17
    "83106018": "Sello Mbonani", // Dr JS Moroka, Ward 18
    "83106019": "Andries Tony Ntjana", // Dr JS Moroka, Ward 19
    "83106020": "Klaas Patrick Shikwane", // Dr JS Moroka, Ward 20
    "83106021": "Mosima Johannah Moloisane", // Dr JS Moroka, Ward 21
    "83106022": "Papi Geoffrey Makhafola", // Dr JS Moroka, Ward 22
    "83106023": "Mpolokeng Matthews Letwaba", // Dr JS Moroka, Ward 23
    "83106024": "Bonolo Matseke", // Dr JS Moroka, Ward 24
    "83106025": "Sello Calvin Moloto", // Dr JS Moroka, Ward 25
    "83106026": "Precious Mmakgomo Mabotja", // Dr JS Moroka, Ward 26
    "83106027": "Thabo Sibanyoni", // Dr JS Moroka, Ward 27
    "83106028": "Gontse Oniccah Ratema", // Dr JS Moroka, Ward 28
    "83106029": "Peter Theetji Matjila", // Dr JS Moroka, Ward 29
    "83106030": "Thabang Johannes Manyala", // Dr JS Moroka, Ward 30
    "83106031": "Rramorwalo Joseph Masela", // Dr JS Moroka, Ward 31
    "83201001": "Mose David Selala", // Thaba Chweu, Ward 1
    "83201002": "Siyabonga Mabaso", // Thaba Chweu, Ward 2
    "83201003": "Donald Phetla", // Thaba Chweu, Ward 3
    "83201004": "Mahlatse Fenny Letswalo", // Thaba Chweu, Ward 4
    "83201005": "Smangaliso Alie Mnisi", // Thaba Chweu, Ward 5
    "83201006": "Maria Poppy Masilela", // Thaba Chweu, Ward 6
    "83201007": "Fikile William Phoku", // Thaba Chweu, Ward 7
    "83201008": "Tulego Constance Mashaba", // Thaba Chweu, Ward 8
    "83201009": "Thembinkosi Patrick Mkhabela", // Thaba Chweu, Ward 9
    "83201010": "Ishmael Phistos Mokhomola", // Thaba Chweu, Ward 10
    "83201011": "Bongani Given Magagula", // Thaba Chweu, Ward 11
    "83201012": "Fikile William Phoku", // Thaba Chweu, Ward 12
    "83201013": "Motjwakgolo Prince Morodi", // Thaba Chweu, Ward 13
    "83201014": "Annah Tuntu Khoza", // Thaba Chweu, Ward 14
    "83204001": "Cain Tom Mogiba", // Nkomazi, Ward 1
    "83205001": "Octavia Dimakatso Mokoena", // Bushbuckridge, Ward 1
    "83205002": "Kemisetso Gregory Sehlabela", // Bushbuckridge, Ward 2
    "83205003": "Wonder Bongani Mhlongo", // Bushbuckridge, Ward 3
    "83205004": "Kemisetso Gregory Sehlabela", // Bushbuckridge, Ward 4
    "83205005": "Rodgers Kananelo Seerane", // Bushbuckridge, Ward 5
    "83205006": "Convice Sehlabele", // Bushbuckridge, Ward 6
    "83205007": "Mathias Vusi Maune", // Bushbuckridge, Ward 7
    "83205008": "Omert Kabelo Monareng", // Bushbuckridge, Ward 8
    "83205009": "Maldah Mashego", // Bushbuckridge, Ward 9
    "83205010": "Ruel Bandi Mabanga", // Bushbuckridge, Ward 10
    "83205011": "Nancy Saleta Mathipa", // Bushbuckridge, Ward 11
    "83205012": "Lucas Msongeya Ubisi", // Bushbuckridge, Ward 12
    "83205013": "Rodgers Kananelo Seerane", // Bushbuckridge, Ward 13
    "83205014": "Matshidiso Penelope Nonyane", // Bushbuckridge, Ward 14
    "83205015": "Daniel Woodbine Fofo", // Bushbuckridge, Ward 15
    "83205016": "Junius Moganiseng Chiloane", // Bushbuckridge, Ward 16
    "83205017": "Attorney Zitha", // Bushbuckridge, Ward 17
    "83205018": "Felix Phanuel Mathebula", // Bushbuckridge, Ward 18
    "83205019": "Emmanuel Manyike", // Bushbuckridge, Ward 19
    "83205020": "Selby Seebee Sibuyi", // Bushbuckridge, Ward 20
    "83205021": "Walter Jones", // Bushbuckridge, Ward 21
    "83205022": "Ephrance Kamogelo Chadi", // Bushbuckridge, Ward 22
    "83205023": "Patricia Silinda", // Bushbuckridge, Ward 23
    "83205024": "Peter Samuel Mabila", // Bushbuckridge, Ward 24
    "83205025": "Samson Brian Ngomane", // Bushbuckridge, Ward 25
    "83205026": "Samson Brian Ngomane", // Bushbuckridge, Ward 26
    "83205027": "Sinky Lesah Thibela", // Bushbuckridge, Ward 27
    "83205028": "Sinky Lesah Thibela", // Bushbuckridge, Ward 28
    "83205029": "Nonhlanhla Amukelani Gumede", // Bushbuckridge, Ward 29
    "83205030": "Livah Adith Temane", // Bushbuckridge, Ward 30
    "83205031": "Clive Sithole", // Bushbuckridge, Ward 31
    "83205032": "Rudolph Malatole", // Bushbuckridge, Ward 32
    "83205033": "Deliwe Khoza", // Bushbuckridge, Ward 33
    "83205034": "Carol Ngomane", // Bushbuckridge, Ward 34
    "83205035": "Peter Samuel Mabila", // Bushbuckridge, Ward 35
    "83205036": "Rhulani Sibuyi", // Bushbuckridge, Ward 36
    "83205037": "Experience Shirley Malope", // Bushbuckridge, Ward 37
    "83205038": "Delane Nikiwe Ngwenya", // Bushbuckridge, Ward 38
    "83205039": "Maria Mathebula", // Bushbuckridge, Ward 39
    "83205040": "Thelma Josephina Molemo", // Bushbuckridge, Ward 40
    "83206001": "Wonder Jeffrey Mondlane", // City of Mbombela, Ward 1
    "83206002": "Patrick Jerry Motha", // City of Mbombela, Ward 2
    "83206003": "Fortune Andile Mgwenya", // City of Mbombela, Ward 3
    "83206004": "Zethu Portia Sedibe", // City of Mbombela, Ward 4
    "83206005": "Thembinkosi Prichard Masuku", // City of Mbombela, Ward 5
    "83206006": "Charllot Khumotso Matshaba", // City of Mbombela, Ward 6
    "83206007": "Thabo Suzman Twala", // City of Mbombela, Ward 7
    "83206008": "Godfrey Timothy Phoku", // City of Mbombela, Ward 8
    "83206009": "Patricia Nontobeko Moeng", // City of Mbombela, Ward 9
    "83206010": "Salion Velly Shakwane", // City of Mbombela, Ward 10
    "83206011": "Steven Ivin Nkosi", // City of Mbombela, Ward 11
    "83206012": "Zinhle Constance Shabangu", // City of Mbombela, Ward 12
    "83206013": "Dennis Sifiso Mazibuko", // City of Mbombela, Ward 13
    "83206014": "Isaiah Wiseman Mabuza", // City of Mbombela, Ward 14
    "83206015": "Njabulo Innocent Mabuza", // City of Mbombela, Ward 15
    "83206016": "Lindiwe Martha Ndhlovu", // City of Mbombela, Ward 16
    "83206017": "Sifiso Persoverence Mlambo", // City of Mbombela, Ward 17
    "83206018": "Motlalefe Gabriel Mogakane", // City of Mbombela, Ward 18
    "83206019": "Nontobeko Precious Nkosi", // City of Mbombela, Ward 19
    "83206020": "Patience Lungi Mashele", // City of Mbombela, Ward 20
    "83206021": "Bonayi Stephans Ngwenyama", // City of Mbombela, Ward 21
    "83206022": "Siyabonga Ernest Ndhlovu", // City of Mbombela, Ward 22
    "83206023": "Bongani Mlotshwa", // City of Mbombela, Ward 23
    "83206024": "Martha Ntombikayise Madalane", // City of Mbombela, Ward 24
    "83206025": "Maneort Dumazile Mashaba", // City of Mbombela, Ward 25
    "83206026": "Zweli Eddie Mabuza", // City of Mbombela, Ward 26
    "83206027": "Nhlanhla Harry Mazibuko", // City of Mbombela, Ward 27
    "83206028": "Sharon Bawinile Mashigo", // City of Mbombela, Ward 28
    "83206029": "Thandi Constance Mathebula", // City of Mbombela, Ward 29
    "83206030": "Prince Mbuso Mkhwanazi", // City of Mbombela, Ward 30
    "83206031": "Lungile Alice Ngwenyama", // City of Mbombela, Ward 31
    "83206032": "Priscilla Noxolo Mnisi", // City of Mbombela, Ward 32
    "83206033": "Toney John Motha", // City of Mbombela, Ward 33
    "83206034": "Eustice Edward Ngomane", // City of Mbombela, Ward 34
    "83206035": "Qinisile Constance Mokwena", // City of Mbombela, Ward 35
    "83206036": "Pat Maphanga", // City of Mbombela, Ward 36
    "83206037": "Mzwandile Emmanuel Ngwenyama", // City of Mbombela, Ward 37
    "83206038": "Thulani Richard Shube", // City of Mbombela, Ward 38
    "83206039": "Mthokozisi Terence Sambo", // City of Mbombela, Ward 39
    "83206040": "Babule Aggan Mokoena", // City of Mbombela, Ward 40
    "83206041": "Joseph Richard Maluleka", // City of Mbombela, Ward 41
    "83206042": "Simangaliso Thandisiwe Thwala", // City of Mbombela, Ward 42
    "83206043": "Victor Muziwakhe Sithole", // City of Mbombela, Ward 43
    "83206044": "Ncobile Olga Nkosi", // City of Mbombela, Ward 44
    "83206045": "Sibongile Tsiwane Mzimba", // City of Mbombela, Ward 45
    "93301001": "Jacqueline Miyelani Baloyi", // Greater Giyani, Ward 1
    "93301002": "Rirhandzu Mkhasi", // Greater Giyani, Ward 2
    "93301003": "Gladys Tsakani Mabasa", // Greater Giyani, Ward 3
    "93301004": "Ekson Johannes Sithole", // Greater Giyani, Ward 4
    "93301005": "Grace Mabunda", // Greater Giyani, Ward 5
    "93301006": "Dumisani Freedom Maluleke", // Greater Giyani, Ward 6
    "93301007": "Mahlori Martin Makhubela", // Greater Giyani, Ward 7
    "93301008": "Pertunia Nkanyani", // Greater Giyani, Ward 8
    "93301009": "Qhinani Eriel Rikhotso", // Greater Giyani, Ward 9
    "93301010": "Sikheto Zacharia Baloyi", // Greater Giyani, Ward 10
    "93301011": "Nyiko Errol Chabalala", // Greater Giyani, Ward 11
    "93301012": "Mafemani Michael Sithole", // Greater Giyani, Ward 12
    "93301013": "Kenneth Manganye", // Greater Giyani, Ward 13
    "93301014": "Shadrack Nkanyani", // Greater Giyani, Ward 14
    "93301015": "Perfect Mabumba", // Greater Giyani, Ward 15
    "93301016": "Opwell Ngobeni", // Greater Giyani, Ward 16
    "93301017": "Nkateko Blessing Nkuna", // Greater Giyani, Ward 17
    "93301018": "Achevement Tumelo Nthopo", // Greater Giyani, Ward 18
    "93301019": "Andronia Miyelani Chaki", // Greater Giyani, Ward 19
    "93301020": "Mzamani Steyn Mboweni", // Greater Giyani, Ward 20
    "93301021": "Noza Ezekiel Ndlovu", // Greater Giyani, Ward 21
    "93301022": "Vusi Phinda Mashimbye", // Greater Giyani, Ward 22
    "93301023": "Wisani Mavunda", // Greater Giyani, Ward 23
    "93301024": "Cedrick Mabunda", // Greater Giyani, Ward 24
    "93301025": "Alsinah Nsovo Mabunda", // Greater Giyani, Ward 25
    "93301026": "Neville Mashaba", // Greater Giyani, Ward 26
    "93301027": "Giyani Radson Maswanganyi", // Greater Giyani, Ward 27
    "93301028": "Moses Mathebula", // Greater Giyani, Ward 28
    "93301029": "Ruth Valoyi", // Greater Giyani, Ward 29
    "93301030": "Kulani Hazel Mahosi", // Greater Giyani, Ward 30
    "93301031": "Paseka Bethuel Makhobela", // Greater Giyani, Ward 31
    "93302001": "Boitumelo Delron Pilusa", // Greater Letaba, Ward 1
    "93302002": "Pheane Frans Sebopetsa", // Greater Letaba, Ward 2
    "93302003": "Molate Joseph Lawrance Manyama", // Greater Letaba, Ward 3
    "93302004": "Mokgadi Mary Khumalo", // Greater Letaba, Ward 4
    "93302005": "Mapula Rachel Makhurupetsi", // Greater Letaba, Ward 5
    "93302006": "Maile Patrick Selowa", // Greater Letaba, Ward 6
    "93302007": "Pulane Joyce Mohale", // Greater Letaba, Ward 7
    "93302008": "George Mlambo", // Greater Letaba, Ward 8
    "93302009": "Mothudi Mark Malola", // Greater Letaba, Ward 9
    "93302010": "Nthabiseng Sylvester Makhura", // Greater Letaba, Ward 10
    "93302011": "Bonolo Sekgobela", // Greater Letaba, Ward 11
    "93302012": "Mabula Meykie Ralufuluvhi", // Greater Letaba, Ward 12
    "93302013": "Modjadji Rose Ramare", // Greater Letaba, Ward 13
    "93302014": "Agnitious Raphahlelo", // Greater Letaba, Ward 14
    "93302015": "Mohale James Mampshe", // Greater Letaba, Ward 15
    "93302016": "Hlulani Winston Vuma", // Greater Letaba, Ward 16
    "93302017": "Mojalefa Walter Sethe", // Greater Letaba, Ward 17
    "93302018": "Thabang Donald Manganye", // Greater Letaba, Ward 18
    "93302019": "Selinah Mosatiwa Raseropo", // Greater Letaba, Ward 19
    "93302020": "Tebatso Matomeamohale", // Greater Letaba, Ward 20
    "93302021": "Ndini Magton Senyolo", // Greater Letaba, Ward 21
    "93302022": "Ngwako Solomon Kutuma", // Greater Letaba, Ward 22
    "93302023": "Phetole Lebry Lenyanyabedi", // Greater Letaba, Ward 23
    "93302024": "Eunice Modjadji Selematsela", // Greater Letaba, Ward 24
    "93302025": "Refilwe Mathole", // Greater Letaba, Ward 25
    "93302026": "Matome Herold Machubedu", // Greater Letaba, Ward 26
    "93302027": "Ngwako Peter Ramakholo", // Greater Letaba, Ward 27
    "93302028": "Thandi Mavis Makhubele", // Greater Letaba, Ward 28
    "93302029": "Makayane Gerald Mohale", // Greater Letaba, Ward 29
    "93302030": "Makoma Ivy Ramaselele", // Greater Letaba, Ward 30
    "93303001": "Sibongile Baloyi", // Greater Tzaneen, Ward 1
    "93303002": "Phetole Lucky Machethe", // Greater Tzaneen, Ward 2
    "93303003": "Raymond Zetzet Lebepe", // Greater Tzaneen, Ward 3
    "93303004": "Malwandla Hlungwani", // Greater Tzaneen, Ward 4
    "93303005": "Musa Mathebula", // Greater Tzaneen, Ward 5
    "93303006": "Mohale Kenneth Khosa", // Greater Tzaneen, Ward 6
    "93303007": "Victor Mahlatine Mmola", // Greater Tzaneen, Ward 7
    "93303008": "Matome Nico Ramafalo", // Greater Tzaneen, Ward 8
    "93303009": "Nakampe Steyn Mankgele", // Greater Tzaneen, Ward 9
    "93303010": "Ngwako Justice Ndlovu", // Greater Tzaneen, Ward 10
    "93303011": "Maria Khetiwe Hlungwane", // Greater Tzaneen, Ward 11
    "93303012": "Nghonyama Kluivert Ndlhovu", // Greater Tzaneen, Ward 12
    "93303013": "Renoldar Nacke", // Greater Tzaneen, Ward 13
    "93303014": "Rachel Tlangelani Lelope", // Greater Tzaneen, Ward 14
    "93303015": "Matome Pleasure Hlungwani", // Greater Tzaneen, Ward 15
    "93303016": "Lesley Tumelo Malemela", // Greater Tzaneen, Ward 16
    "93303017": "Mathari Brilliant Malale", // Greater Tzaneen, Ward 17
    "93303018": "Masilo Peter Mokhalabone", // Greater Tzaneen, Ward 18
    "93303019": "Mapula Philippine Mashele", // Greater Tzaneen, Ward 19
    "93303020": "Angelinah Shilubana", // Greater Tzaneen, Ward 20
    "93303021": "Kenneth Hlungwani", // Greater Tzaneen, Ward 21
    "93303022": "Mpho Samuel Sekgobela", // Greater Tzaneen, Ward 22
    "93303023": "Velly Rivens Ngobeni", // Greater Tzaneen, Ward 23
    "93303024": "Thabo Agripah Sekowe", // Greater Tzaneen, Ward 24
    "93303025": "Wendy Glenda Mhlanga", // Greater Tzaneen, Ward 25
    "93303026": "Mamodike Demonica Ramphadi", // Greater Tzaneen, Ward 26
    "93303027": "Thabo Christopher Rakgwale", // Greater Tzaneen, Ward 27
    "93303028": "Letsobana Virginia Moagi", // Greater Tzaneen, Ward 28
    "93303029": "Mankwana Rose Mahlane", // Greater Tzaneen, Ward 29
    "93303030": "Maimela Rudolph Khunwane", // Greater Tzaneen, Ward 30
    "93303031": "Moses Motshone Letsoalo", // Greater Tzaneen, Ward 31
    "93303032": "Karabo Morris Matlala", // Greater Tzaneen, Ward 32
    "93303033": "Setlabo Romeo Mogale", // Greater Tzaneen, Ward 33
    "93303034": "Monwana Lucas Modiba", // Greater Tzaneen, Ward 34
    "93303035": "Matalane Joseph Letseparela", // Greater Tzaneen, Ward 35
    "93304001": "Mapula Tshepho Bertina Makita", // Ba-Phalaborwa, Ward 1
    "93304002": "Qothi Emmanuel Chabangu", // Ba-Phalaborwa, Ward 2
    "93304003": "Joram Eubert Ndhlovu", // Ba-Phalaborwa, Ward 3
    "93304004": "Mohale Jeffrey Mogale", // Ba-Phalaborwa, Ward 4
    "93304005": "Xolisile Welcome Khoza", // Ba-Phalaborwa, Ward 5
    "93304006": "Masedi Samuel Modiba", // Ba-Phalaborwa, Ward 6
    "93304007": "Antoinette Nkhensani Shai", // Ba-Phalaborwa, Ward 7
    "93304008": "Teenage Sekgobela", // Ba-Phalaborwa, Ward 8
    "93304009": "Tumelo Khashane Pilusa", // Ba-Phalaborwa, Ward 9
    "93304010": "Mmakhophola Simon Seruba", // Ba-Phalaborwa, Ward 10
    "93304011": "Peter Christopher David Johns", // Ba-Phalaborwa, Ward 11
    "93304012": "Zondi Edwin Phaswane", // Ba-Phalaborwa, Ward 12
    "93304013": "Moses Ngobeni", // Ba-Phalaborwa, Ward 13
    "93304014": "Madala Shadrack Ngobeni", // Ba-Phalaborwa, Ward 14
    "93304015": "Retlile Otto Moseamedi", // Ba-Phalaborwa, Ward 15
    "93304016": "American Ngobeni", // Ba-Phalaborwa, Ward 16
    "93304017": "Maurrice Mathebula", // Ba-Phalaborwa, Ward 17
    "93304018": "Mpho Solly Malatji", // Ba-Phalaborwa, Ward 18
    "93304019": "Morongwa Ruel Mnisi", // Ba-Phalaborwa, Ward 19
    "93404001": "Rito Lordwin Magugu", // Makhado, Ward 1
    "93404002": "Tshilidzi Muthego", // Makhado, Ward 2
    "93404003": "Tshimangadzo Enos Muthobi", // Makhado, Ward 3
    "93404004": "Takalani Machaba", // Makhado, Ward 4
    "93404005": "Avhashoni Evelyn Maduwa", // Makhado, Ward 5
    "93404006": "Tshifhiwa Calvin Mutshinya", // Makhado, Ward 6
    "93404007": "Adam Manari", // Makhado, Ward 7
    "93404008": "Tshifhiwa Harold Mashige", // Makhado, Ward 8
    "93404009": "Kobisane Agnes Chauke", // Makhado, Ward 9
    "93404010": "Shonisani Caroline Sinthumule", // Makhado, Ward 10
    "93404011": "Hlawulani Lucky Rikhotso", // Makhado, Ward 11
    "93404012": "Nyiko Thomas Ndobe", // Makhado, Ward 12
    "93404013": "Tiyiselani Perseverence Hlungwane", // Makhado, Ward 13
    "93404014": "Tiyiselani Perseverence Hlungwane", // Makhado, Ward 14
    "93404015": "Thilivhali Justice Mamagau", // Makhado, Ward 15
    "93404016": "Mpho Mukhudwana", // Makhado, Ward 16
    "93404017": "Libada Arnold Mafhala", // Makhado, Ward 17
    "93404018": "Fulufhelo Patrick Nemabaka", // Makhado, Ward 18
    "93404019": "Azwindini Cedric Khorombi", // Makhado, Ward 19
    "93404020": "Ritonde Lucia Malungwana", // Makhado, Ward 20
    "93404021": "Gumani Rendani Mafanedza", // Makhado, Ward 21
    "93404022": "Motlatso Edith Ngwana", // Makhado, Ward 22
    "93404023": "Regwell Ramuhala", // Makhado, Ward 23
    "93404024": "Maryjane Azwindini Tshidzhuvhe", // Makhado, Ward 24
    "93404025": "Rose Tshiwela Thavhana", // Makhado, Ward 25
    "93404026": "Ntshudeni Mafanedza", // Makhado, Ward 26
    "93404027": "Mashudu Lindelani Mathanhane", // Makhado, Ward 27
    "93404028": "Andani Freedom Neluheni", // Makhado, Ward 28
    "93404029": "Dakalo Muambadzi", // Makhado, Ward 29
    "93404030": "Rufhiwa Mvambadzi", // Makhado, Ward 30
    "93404031": "Lucky Mathonsi", // Makhado, Ward 31
    "93404032": "Eric Zwiitwani Sithubi", // Makhado, Ward 32
    "93404033": "Eric Zwiitwani Sithubi", // Makhado, Ward 33
    "93404034": "Mbulaheni Samuel Raphasha", // Makhado, Ward 34
    "93404035": "Tendani Makongoza", // Makhado, Ward 35
    "93404036": "Mireyo Mutangwa", // Makhado, Ward 36
    "93404037": "Livhuwani Kharivha", // Makhado, Ward 37
    "93404038": "Tshilidzi Muthego", // Makhado, Ward 38
    "93405001": "Aifheli Stanley Moropene", // Collins Chabane, Ward 1
    "93405002": "Ntsengeni Justice Munyai", // Collins Chabane, Ward 2
    "93405003": "Karabo Cynthia Khashana", // Collins Chabane, Ward 3
    "93405004": "Makungu Baloyi", // Collins Chabane, Ward 4
    "93405005": "Karabo Cynthia Khashana", // Collins Chabane, Ward 5
    "93405006": "Karabo Cynthia Khashana", // Collins Chabane, Ward 6
    "93405007": "Tshilidzi Rejoice Mbangambanga", // Collins Chabane, Ward 7
    "93405008": "Ndivhuwo Moses Ndzeru", // Collins Chabane, Ward 8
    "93405009": "Khwara Nengwekhulu", // Collins Chabane, Ward 9
    "93405010": "Karabo Cynthia Khashana", // Collins Chabane, Ward 10
    "93405011": "Khwara Nengwekhulu", // Collins Chabane, Ward 11
    "93405012": "Mashudu Mtavhatsindi", // Collins Chabane, Ward 12
    "93405013": "Confidence Maluleke", // Collins Chabane, Ward 13
    "93405014": "Thompho Evans Mavhina", // Collins Chabane, Ward 14
    "93405015": "Risimati Simon Khoza", // Collins Chabane, Ward 15
    "93405016": "Sylvia Baloyi", // Collins Chabane, Ward 16
    "93405017": "Moses Sithole", // Collins Chabane, Ward 17
    "93405018": "Aubrey Manganyi", // Collins Chabane, Ward 18
    "93405019": "Godfrey Mashudu Sithomola", // Collins Chabane, Ward 19
    "93405020": "Vonani David Maluleke", // Collins Chabane, Ward 20
    "93405021": "Basani Patricia Nxumalo", // Collins Chabane, Ward 21
    "93405022": "Nhlamulo Cassius Maluleke", // Collins Chabane, Ward 22
    "93405023": "Sipho Aliyah Ndlovu", // Collins Chabane, Ward 23
    "93405024": "Wisani Henry Maswanganyi", // Collins Chabane, Ward 24
    "93405025": "Bosisiwe Mirriam Chauke", // Collins Chabane, Ward 25
    "93405026": "Wisani Henry Maswanganyi", // Collins Chabane, Ward 26
    "93405027": "Moses Munyai", // Collins Chabane, Ward 27
    "93405028": "Donald Tinyiko Shilenge", // Collins Chabane, Ward 28
    "93405029": "Ntsengeni Justice Munyai", // Collins Chabane, Ward 29
    "93405030": "Nowell Tirela Hlungwane", // Collins Chabane, Ward 30
    "93405031": "Rirhandzu Virginia Chauke", // Collins Chabane, Ward 31
    "93405032": "Nsovo Phyllis Maluleka", // Collins Chabane, Ward 32
    "93405033": "Miehleketo Lemly Maluleke", // Collins Chabane, Ward 33
    "93405034": "Mafemani Richard Simango", // Collins Chabane, Ward 34
    "93405035": "Veephi Victoria Nxumalo", // Collins Chabane, Ward 35
    "93405036": "Masingita Caroline Mathebula", // Collins Chabane, Ward 36
    "93503001": "Malose Collen Motshosi", // Molemole, Ward 1
    "93503002": "Ngwako Joseph Chauke", // Molemole, Ward 2
    "93503003": "Madina Epaffrus Modiba", // Molemole, Ward 3
    "93503004": "Ramohlola Samuel Mmamothethi", // Molemole, Ward 4
    "93503005": "Maropene Evans Ramarutha", // Molemole, Ward 5
    "93503006": "Moalusi Elias Ramaphoko", // Molemole, Ward 6
    "93503007": "Amos Thema Tshohledi", // Molemole, Ward 7
    "93503008": "Moloto Donald Raswiswi", // Molemole, Ward 8
    "93503009": "Mokgadi Delphina Mabusha", // Molemole, Ward 9
    "93503010": "Jack Baloyi", // Molemole, Ward 10
    "93503011": "Sello Emmanuel Maba", // Molemole, Ward 11
    "93503012": "Tebogo Raymond Machaba", // Molemole, Ward 12
    "93503013": "Lerato Abegail Mohlabeng", // Molemole, Ward 13
    "93503014": "Selaelo Abigail Seema", // Molemole, Ward 14
    "93503015": "Sello Cornelius Shathuma", // Molemole, Ward 15
    "93503016": "Sharon Mmatlou Mapoulo", // Molemole, Ward 16
    "93504001": "Lesiba Ephraim Chuene", // Polokwane, Ward 1
    "93504002": "Todupjane Grace Maponya", // Polokwane, Ward 2
    "93504003": "Malope Precious Mashiane", // Polokwane, Ward 3
    "93504004": "Manoko Salminah Letsoalo", // Polokwane, Ward 4
    "93504005": "Mogale Julius Malatji", // Polokwane, Ward 5
    "93504006": "Mapula Merriam Ramakgolo", // Polokwane, Ward 6
    "93504007": "Tshepo Mamangana Lesiba Mothapo", // Polokwane, Ward 7
    "93504008": "Rinnie Maleho Maake", // Polokwane, Ward 8
    "93504009": "Sello Godfrey Rapao", // Polokwane, Ward 9
    "93504010": "Annah Matsatsi Chaba", // Polokwane, Ward 10
    "93504011": "Godfrey Tagisi Malapane", // Polokwane, Ward 11
    "93504012": "Makuka Alpheus Selolo", // Polokwane, Ward 12
    "93504013": "Masilo Charles Manthata", // Polokwane, Ward 13
    "93504014": "Salome Nkomokana Motswalakgosi", // Polokwane, Ward 14
    "93504015": "Ronny Phuti Matlou", // Polokwane, Ward 15
    "93504016": "Lesetsa Paul Mokwele", // Polokwane, Ward 16
    "93504017": "Mahlodi Joyce Mabula", // Polokwane, Ward 17
    "93504018": "Kgabo Patience Moloto", // Polokwane, Ward 18
    "93504019": "Sarel Joseph Martin", // Polokwane, Ward 19
    "93504020": "Elizabeth Phokwana Modiba", // Polokwane, Ward 20
    "93504021": "Leshoto Morwantjie Sefara", // Polokwane, Ward 21
    "93504022": "Tlou Johanna Makgoka", // Polokwane, Ward 22
    "93504023": "Choene Peter Tlouane", // Polokwane, Ward 23
    "93504024": "Macdonald Mperekeng Louw", // Polokwane, Ward 24
    "93504025": "Noko Elvis Sefaamela", // Polokwane, Ward 25
    "93504026": "Mmakati Angelina Phoshoko-Mamabolo", // Polokwane, Ward 26
    "93504027": "Anna Mamootela Seabela", // Polokwane, Ward 27
    "93504028": "Mathenkge Alfred Selowa", // Polokwane, Ward 28
    "93504029": "Ephraim Sehlomola Ramakgwakgwa", // Polokwane, Ward 29
    "93504030": "Julius Madimetja Malahlela", // Polokwane, Ward 30
    "93504031": "Matome Daniel Sethemane", // Polokwane, Ward 31
    "93504032": "Ramatlapa Shade Tefo", // Polokwane, Ward 32
    "93504033": "Ranti James Matli", // Polokwane, Ward 33
    "93504034": "Mmabore Nelly Seabi", // Polokwane, Ward 34
    "93504035": "Koena Silas Mabitsela", // Polokwane, Ward 35
    "93504036": "Eliyah Papole", // Polokwane, Ward 36
    "93504037": "Matome Rufus Makhura", // Polokwane, Ward 37
    "93504038": "Rammuane Ernest Legodi", // Polokwane, Ward 38
    "93504039": "Makgwale Caroline Maphakane", // Polokwane, Ward 39
    "93504040": "Julian Phanyangana Oliphant", // Polokwane, Ward 40
    "93504041": "Lesetja Mories Ngobeni", // Polokwane, Ward 41
    "93504042": "Malesela Cydwell Khoza", // Polokwane, Ward 42
    "93504043": "Moiketsi Mary Mpai", // Polokwane, Ward 43
    "93504044": "Ngako Mable Matlala", // Polokwane, Ward 44
    "93504045": "Christoph Ketu Ratau", // Polokwane, Ward 45
    "93505001": "Tebogo Eunice Makota", // Lepele-Nkumpi, Ward 1
    "93505002": "Nthabeleng Lerato Sedibana", // Lepele-Nkumpi, Ward 2
    "93505003": "Nkina Shirley Mmako", // Lepele-Nkumpi, Ward 3
    "93505004": "Ditshego Leshika", // Lepele-Nkumpi, Ward 4
    "93505005": "Mogau Morwammutle Lekala", // Lepele-Nkumpi, Ward 5
    "93505006": "Kholofelo Dion Mmachaka", // Lepele-Nkumpi, Ward 6
    "93505007": "Papi Davi Manamela", // Lepele-Nkumpi, Ward 7
    "93505008": "Modupi Peter Mathobela", // Lepele-Nkumpi, Ward 8
    "93505009": "Mpho Patrick Kekana", // Lepele-Nkumpi, Ward 9
    "93505010": "Mienkie Mothoa", // Lepele-Nkumpi, Ward 10
    "93505011": "Sixolisiwe Dinga", // Lepele-Nkumpi, Ward 11
    "93505012": "Eric Lucky Kekana", // Lepele-Nkumpi, Ward 12
    "93505013": "Morwangwato Alfred Mantjane", // Lepele-Nkumpi, Ward 13
    "93505014": "Thabo Stanley Lebogang Makhalemele", // Lepele-Nkumpi, Ward 14
    "93505015": "Jonas Phuti Mamabolo", // Lepele-Nkumpi, Ward 15
    "93505016": "Dipuo Daphney Magoro", // Lepele-Nkumpi, Ward 16
    "93505017": "Justice Mashwahle Shoba", // Lepele-Nkumpi, Ward 17
    "93505018": "Matshidiso Gladys Mashabela", // Lepele-Nkumpi, Ward 18
    "93505019": "Patike Thabang Edwin Mphahlele", // Lepele-Nkumpi, Ward 19
    "93505020": "Mathokolle William Shogole", // Lepele-Nkumpi, Ward 20
    "93505021": "Matlakaolala Solly Makgati", // Lepele-Nkumpi, Ward 21
    "93505022": "Yvonne Rebone Kgasago", // Lepele-Nkumpi, Ward 22
    "93505023": "Lenaila Andrew Madigoe", // Lepele-Nkumpi, Ward 23
    "93505024": "Lengana Godfrey Mphahlele", // Lepele-Nkumpi, Ward 24
    "93505025": "Mpho Mdebejana", // Lepele-Nkumpi, Ward 25
    "93505026": "Kagisho Sarah Mashomu", // Lepele-Nkumpi, Ward 26
    "93505027": "Koketso Stella Mathabatha", // Lepele-Nkumpi, Ward 27
    "93505028": "Frans Sello Senyolo", // Lepele-Nkumpi, Ward 28
    "93505029": "Edgar Mahlaba", // Lepele-Nkumpi, Ward 29
    "93505030": "Esther Tubake Mphahlele", // Lepele-Nkumpi, Ward 30
    "94703001": "Tepsy Mowa", // Makhuduthamaga, Ward 1
    "94703002": "Mmatshemo Emelda Thato Masehla", // Makhuduthamaga, Ward 2
    "94703003": "Mokgoshi Sydney Matlala", // Makhuduthamaga, Ward 3
    "94703004": "Mmaswele Paul Malatsi", // Makhuduthamaga, Ward 4
    "94703005": "Mokakatlela Given Makuwa", // Makhuduthamaga, Ward 5
    "94703006": "Lenala Katlego Moloko", // Makhuduthamaga, Ward 6
    "94703007": "Mpedi Peter Mamushi", // Makhuduthamaga, Ward 7
    "94703008": "Hunadi Sandra Malaka", // Makhuduthamaga, Ward 8
    "94703009": "Dithageng Julia Malapane", // Makhuduthamaga, Ward 9
    "94703010": "Caiphus Kgole Phetla", // Makhuduthamaga, Ward 10
    "94703011": "Makatelele Samson Maleka", // Makhuduthamaga, Ward 11
    "94703012": "Letsiri Gabriel Moela", // Makhuduthamaga, Ward 12
    "94703013": "Nthokge Kate Magaba", // Makhuduthamaga, Ward 13
    "94703014": "Mogale Dinah Mokgwadi", // Makhuduthamaga, Ward 14
    "94703015": "Maobela Dinah Komana", // Makhuduthamaga, Ward 15
    "94703016": "Ramogohlo Refiloe Makua", // Makhuduthamaga, Ward 16
    "94703017": "Itumeleng Legwadi Seloga", // Makhuduthamaga, Ward 17
    "94703018": "Thulane Lifa S'gebengu Madalane", // Makhuduthamaga, Ward 18
    "94703019": "Mokgoro Johannes Mathabathe", // Makhuduthamaga, Ward 19
    "94703020": "Magatikele Permission Selala", // Makhuduthamaga, Ward 20
    "94703021": "Lapole Beer Nepe", // Makhuduthamaga, Ward 21
    "94703022": "Mahlagaume Michael Kabu", // Makhuduthamaga, Ward 22
    "94703023": "Ramokweng Edward Maduana", // Makhuduthamaga, Ward 23
    "94703024": "Thabo Mokiri", // Makhuduthamaga, Ward 24
    "94703025": "Mamarumo Getrude Disoloane", // Makhuduthamaga, Ward 25
    "94703026": "Kgomanoka Albert Nchabeleng", // Makhuduthamaga, Ward 26
    "94703027": "Kgwajane Lilly Maleka", // Makhuduthamaga, Ward 27
    "94703028": "Manthatise Sydney Mosoane", // Makhuduthamaga, Ward 28
    "94703029": "Rammile Justice Maphutha", // Makhuduthamaga, Ward 29
    "94703030": "Triedah Nchabeleng", // Makhuduthamaga, Ward 30
    "94703031": "Masenye Edmond Masemola", // Makhuduthamaga, Ward 31
    "94706001": "Ronald Sera Malatole", // Fetakgomo Tubatse, Ward 1
    "94706002": "Jan Burwane Mashilangako", // Fetakgomo Tubatse, Ward 2
    "94706003": "Matsebe Collins Sekhukhune", // Fetakgomo Tubatse, Ward 3
    "94706004": "Dimakatso Sanny Nkwana", // Fetakgomo Tubatse, Ward 4
    "94706005": "Tebatso Alex Mokoena", // Fetakgomo Tubatse, Ward 5
    "94706006": "Virginia Maabane", // Fetakgomo Tubatse, Ward 6
    "94706007": "Hendronicah Kgwetiane", // Fetakgomo Tubatse, Ward 7
    "94706008": "Pertunia Mphethi", // Fetakgomo Tubatse, Ward 8
    "94706009": "Kgothatso Moropane", // Fetakgomo Tubatse, Ward 9
    "94706010": "Mologadi Lisa Thobejane", // Fetakgomo Tubatse, Ward 10
    "94706011": "Mahlatse Maggie Maisela", // Fetakgomo Tubatse, Ward 11
    "94706012": "Surgent Phokele Mabilo", // Fetakgomo Tubatse, Ward 12
    "94706013": "Madibi Allice Thobejane", // Fetakgomo Tubatse, Ward 13
    "94706014": "Molamoso Moses Mohlala", // Fetakgomo Tubatse, Ward 14
    "94706015": "Mankgogele Lucas Mokgala", // Fetakgomo Tubatse, Ward 15
    "94706016": "Rochard Lenkwang Lekubu", // Fetakgomo Tubatse, Ward 16
    "94706017": "Ngwato Judas Tjao", // Fetakgomo Tubatse, Ward 17
    "94706018": "Lucas Mokwena", // Fetakgomo Tubatse, Ward 18
    "94706019": "Mogau Dannis Tjia", // Fetakgomo Tubatse, Ward 19
    "94706020": "Evans Fanie Sebatane", // Fetakgomo Tubatse, Ward 20
    "94706021": "Papiki Mohibjane Mohlala", // Fetakgomo Tubatse, Ward 21
    "94706022": "Kgagamela Braen Komane", // Fetakgomo Tubatse, Ward 22
    "94706023": "Phagane Aram Malepe", // Fetakgomo Tubatse, Ward 23
    "94706024": "Patrick Moimane", // Fetakgomo Tubatse, Ward 24
    "94706025": "Mandla Solomon Skhosana", // Fetakgomo Tubatse, Ward 25
    "94706026": "Mokgethwa Evidence Sebatane", // Fetakgomo Tubatse, Ward 26
    "94706027": "Strike Mashilo Moretsele", // Fetakgomo Tubatse, Ward 27
    "94706028": "Tjiane Edward Tshehla", // Fetakgomo Tubatse, Ward 28
    "94706029": "Mphosa Mokgwadi", // Fetakgomo Tubatse, Ward 29
    "94706030": "Nicholus Mandla Mdhluli", // Fetakgomo Tubatse, Ward 30
    "94706031": "Matete Gloria Mahlangu", // Fetakgomo Tubatse, Ward 31
    "94706032": "Lucky Molobela", // Fetakgomo Tubatse, Ward 32
    "94706033": "Mpho Mmeselane Mojela", // Fetakgomo Tubatse, Ward 33
    "94706034": "Mogobadi Sylvester Teka", // Fetakgomo Tubatse, Ward 34
    "94706035": "Mmatadi Yvonne Mampa", // Fetakgomo Tubatse, Ward 35
    "94706036": "Precious Mokganyetsi Matseba", // Fetakgomo Tubatse, Ward 36
    "94706037": "Ashley Masweneng", // Fetakgomo Tubatse, Ward 37
    "94706038": "Johannes Kubuthona Radingoane", // Fetakgomo Tubatse, Ward 38
    "94706039": "Loiky Kganathi Kganathi", // Fetakgomo Tubatse, Ward 39
  },

  // Municipality-wide fallback: shown when the visitor's ward has no video of
  // its own, but falls inside one of these (local/metro) municipalities. Keyed
  // by MDB MUNICNAME exactly as the ward-lookup API returns it. Checked before
  // districtFallbacks below.
  municipalityFallbacks: {
    "City of Tshwane": {
      candidateName: "Hazel Nasiphi Moya",
      videoSrc: "assets/videos/default-tshwane.mp4",
    },
    "Ekurhuleni": {
      candidateName: "Suprise Xolani Khumalo",
      videoSrc: "assets/videos/default-ekurhuleni.mp4",
    },
    "City of Johannesburg": {
      candidateName: "Herman Samtseu Philip Mashaba",
      videoSrc: "assets/videos/default-johannesburg.mp4",
    },
    "Rustenburg": {
      candidateName: "Ofentse Jerremia Kombe",
      videoSrc: "assets/videos/default-rustenburg.mp4",
    },
  },

  // District-wide fallback for the 24 ActionSA candidates who stood for
  // "Ward 1" under a District Municipality code (DC10, DC13, ...) in the IEC
  // list — district councils don't have directly-elected geographic wards of
  // their own, so these can't be matched to a real WardID. Instead they're
  // keyed by MDB's DISTRICT field (the parent district of the visitor's local
  // municipality), checked when neither wardVideoMap nor municipalityFallbacks
  // matched. Every videoSrc below points at a file that doesn't exist yet — if
  // it 404s at runtime, app.js falls back to defaultFallback.videoSrc while
  // still showing this candidateName (see the video "error" handler in app.js).
  districtFallbacks: {
    "Sarah Baartman": { candidateName: "Buhle Mdoko", videoSrc: "assets/videos/default-sarah-baartman.mp4" }, // DC10
    "Chris Hani": { candidateName: "Tsietsi Lucky Kgosimere", videoSrc: "assets/videos/default-chris-hani.mp4" }, // DC13
    "Lejweleputswa": { candidateName: "Billy David Mhlafu", videoSrc: "assets/videos/default-lejweleputswa.mp4" }, // DC18
    "Thabo Mofutsanyane": { candidateName: "Ntlororo Simon Lethoko", videoSrc: "assets/videos/default-thabo-mofutsanyane.mp4" }, // DC19
    "Fezile Dabi": { candidateName: "Richard Motobi Nqhatsetseng", videoSrc: "assets/videos/default-fezile-dabi.mp4" }, // DC20
    "Amajuba": { candidateName: "Zwelisha Stanley Nxumalo", videoSrc: "assets/videos/default-amajuba.mp4" }, // DC25
    "Zululand": { candidateName: "Kgobakanang Titus Ramapuputla", videoSrc: "assets/videos/default-zululand.mp4" }, // DC26
    "King Cetshwayo": { candidateName: "Mduduzi Christopher Ntuli", videoSrc: "assets/videos/default-king-cetshwayo.mp4" }, // DC28
    "iLembe": { candidateName: "Simphiwe Shangase", videoSrc: "assets/videos/default-ilembe.mp4" }, // DC29
    "Gert Sibande": { candidateName: "Bikwaphi Gladys Nkosi", videoSrc: "assets/videos/default-gert-sibande.mp4" }, // DC30
    "Nkangala": { candidateName: "Morongwe Mary Phadi", videoSrc: "assets/videos/default-nkangala.mp4" }, // DC31
    "Ehlanzeni": { candidateName: "Norman Skhumbuzo Sibitane", videoSrc: "assets/videos/default-ehlanzeni.mp4" }, // DC32
    "Mopani": { candidateName: "Maripe Godfrey Mangena", videoSrc: "assets/videos/default-mopani.mp4" }, // DC33
    "Vhembe": { candidateName: "Khwara Nengwekhulu", videoSrc: "assets/videos/default-vhembe.mp4" }, // DC34
    "Capricorn": { candidateName: "Mokono Victor Mothemela", videoSrc: "assets/videos/default-capricorn.mp4" }, // DC35
    "Bojanala": { candidateName: "Josephine Ramolobeng", videoSrc: "assets/videos/default-bojanala.mp4" }, // DC37
    "Ngaka Modiri Molema": { candidateName: "Isaac Thabo Nkashe", videoSrc: "assets/videos/default-ngaka-modiri-molema.mp4" }, // DC38
    "Dr Ruth Segomotsi Mompati": { candidateName: "Motseothata Joseph Mabe", videoSrc: "assets/videos/default-dr-ruth-segomotsi-mompati.mp4" }, // DC39
    "Dr Kenneth Kaunda": { candidateName: "Josephine Nomhlolo Bangani", videoSrc: "assets/videos/default-dr-kenneth-kaunda.mp4" }, // DC40
    "Sedibeng": { candidateName: "Cwazibe Caleb Dhlamini", videoSrc: "assets/videos/default-sedibeng.mp4" }, // DC42
    "Sekhukhune": { candidateName: "Advocate Fenya Maabane", videoSrc: "assets/videos/default-sekhukhune.mp4" }, // DC47
    "West Rand": { candidateName: "Vuyisile William Mcunana", videoSrc: "assets/videos/default-west-rand.mp4" }, // DC48
    "Central Karoo": { candidateName: "Schaun Michell Meyers", videoSrc: "assets/videos/default-central-karoo.mp4" }, // DC5
    "Frances Baard": { candidateName: "Neo Sylvester Pitso", videoSrc: "assets/videos/default-frances-baard.mp4" }, // DC9
  },

  // Global fallback: shown when the visitor's ward matches none of the above
  // (or location is unavailable, or the ward lookup fails), and also used as
  // the safety net when a municipality/district fallback's own video 404s.
  // Reuses City of Johannesburg's candidate/video — same as the
  // municipalityFallbacks entry above, not a separate asset.
  defaultFallback: {
    candidateName: "Herman Samtseu Philip Mashaba",
    videoSrc: "assets/videos/default-johannesburg.mp4",
  },
};
