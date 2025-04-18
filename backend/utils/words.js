import crypto from "crypto";

const footballers = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Neymar Jr.",
  "Kylian Mbappé",
  "Robert Lewandowski",
  "Mohamed Salah",
  "Eden Hazard",
  "Kevin De Bruyne",
  "Sergio Agüero",
  "Harry Kane",
  "Luis Suárez",
  "Gareth Bale",
  "Gerard Piqué",
  "Zlatan Ibrahimović",
  "Paul Pogba",
  "Virgil van Dijk",
  "Pierre-Emerick Aubameyang",
  "Sadio Mané",
  "Raheem Sterling",
  "Harry Maguire",
  "Luka Modrić",
  "Marco Reus",
  "David De Gea",
  "Toni Kroos",
  "Antonio Rüdiger",
  "Manuel Neuer",
  "Philippe Coutinho",
  "Jadon Sancho",
  "Romelu Lukaku",
  "Frenkie de Jong",
  "Joshua Kimmich",
  "Jorginho",
  "Jack Grealish",
  "Christian Pulisic",
  "Bernardo Silva",
  "Raul Jiménez",
  "Mason Mount",
  "Richarlison",
  "Kalidou Koulibaly",
  "Kepa Arrizabalaga",
  "Luis Díaz",
  "Ederson",
  "Gerard Moreno",
  "André Onana",
  "Sergio Ramos",
  "Thiago Silva",
  "Sergi Roberto",
  "César Azpilicueta",
  "Benjamin Pavard",
  "Son Heung-min",
  "Timo Werner",
  "Isco",
  "Xavi Hernández",
  "Andrés Iniesta",
  "Santi Cazorla",
  "Fernando Torres",
  "Cesc Fàbregas",
  "Marc-André ter Stegen",
  "James Rodríguez",
  "Antonio Conte",
  "Julen Lopetegui",
  "Toni Kroos",
  "Diego Costa",
  "Carlos Tévez",
  "André Schürrle",
  "Lorenzo Insigne",
  "Alvaro Morata",
  "Christian Benteke",
  "Salvatore Sirigu",
  "David Luiz",
  "Vinícius Júnior",
  "Alexandre Lacazette",
  "Hakim Ziyech",
  "Riyad Mahrez",
  "Leon Goretzka",
  "Thomas Müller",
  "Gini Wijnaldum",
  "Mauro Icardi",
  "Matthijs de Ligt",
  "Ciro Immobile",
  "Diego Godín",
  "Miralem Pjanic",
  "Gerard Piqué",
  "Sergio Busquets",
  "Marco Verratti",
  "Ismaïla Sarr",
  "Nabil Fekir",
  "Tanguy Ndombele",
  "Thiago Alcântara",
  "James Rodríguez",
  "Antonio Rudiger",
  "Juan Mata",
  "Lorenzo Insigne",
  "Alexandre Lacazette",
  "Nicolò Barella",
  "Lautaro Martínez",
  "Martin Ødegaard",
  "Emil Forsberg",
  "Jules Koundé",
  "William Carvalho",
  "Michaël Cuisance",
  "David Alaba",
];

const cricketers = [
  "Sachin Tendulkar",
  "Virat Kohli",
  "Ricky Ponting",
  "Brian Lara",
  "Shane Warne",
  "Jacques Kallis",
  "Muttiah Muralitharan",
  "Wasim Akram",
  "Glenn McGrath",
  "Jack Hobbs",
  "Kumar Sangakkara",
  "Adam Gilchrist",
  "Chris Gayle",
  "AB de Villiers",
  "Yuvraj Singh",
  "MS Dhoni",
  "Rahul Dravid",
  "Shikhar Dhawan",
  "Steve Smith",
  "Joe Root",
  "Ben Stokes",
  "David Warner",
  "Shane Watson",
  "Mitchell Johnson",
  "Kevin Pietersen",
  "Andrew Flintoff",
  "Daniel Vettori",
  "Mark Waugh",
  "Ian Botham",
  "Fawad Alam",
  "VVS Laxman",
  "Sourav Ganguly",
  "Ishant Sharma",
  "Sunil Gavaskar",
  "Kapil Dev",
  "Zaheer Khan",
  "Brett Lee",
  "Dale Steyn",
  "Fazal Mahmood",
  "Mohammad Yousuf",
  "Younis Khan",
  "Saqlain Mushtaq",
  "Javed Miandad",
  "Shahid Afridi",
  "Imran Khan",
  "Rashid Khan",
  "Hashim Amla",
  "Faf du Plessis",
  "Quinton de Kock",
  "Dean Jones",
  "Michael Clarke",
  "Mark Taylor",
  "Adam Voges",
  "Kane Williamson",
  "Martin Crowe",
  "Nathan Lyon",
  "Ravichandran Ashwin",
  "Jasprit Bumrah",
  "Kuldeep Yadav",
  "Ravindra Jadeja",
  "Shubman Gill",
  "Hardik Pandya",
  "Prithvi Shaw",
  "Rishabh Pant",
  "KL Rahul",
  "Ajinkya Rahane",
  "Ravichandran Ashwin",
  "Anil Kumble",
  "Mohammad Shami",
  "Ajmal Shahzad",
  "Yasir Shah",
  "Shoaib Akhtar",
  "Mohammad Amir",
  "James Anderson",
  "Stuart Broad",
  "Craig White",
  "Tony Greig",
  "David Gower",
  "Shoaib Malik",
  "Shakib Al Hasan",
  "Mashrafe Mortaza",
  "Tamim Iqbal",
  "Mushfiqur Rahim",
  "Mahmudullah",
  "Sabbir Rahman",
  "Shanto Shakib",
  "Aminul Islam",
  "Imrul Kayes",
  "Mustafizur Rahman",
  "Mosaddek Hossain",
  "Mitchell Starc",
  "Peter Siddle",
  "Dwayne Bravo",
  "Kieron Pollard",
  "Sunil Narine",
  "Chris Morris",
  "Andre Russell",
  "Dwayne Smith",
  "Mark Boucher",
  "Jacques Rudolph",
  "Paul Collingwood",
  "Ben Stokes",
  "Tom Curran",
  "Reece Topley",
  "Eoin Morgan",
  "Jonny Bairstow",
  "James Vince",
  "Ollie Pope",
  "Tom Banton",
  "Sam Curran",
  "Joe Denly",
  "Moeen Ali",
  "Rashid Khan",
  "Ravichandran Ashwin",
  "Kyle Jamieson",
  "Morne Morkel",
  "Rohit Sharma",
  "Dinesh Karthik",
  "Kuldeep Yadav",
  "Mohammad Rizwan",
  "Aiden Markram",
];

const bollywoodActors = [
  "Amitabh Bachchan",
  "Shah Rukh Khan",
  "Salman Khan",
  "Aamir Khan",
  "Ranbir Kapoor",
  "Ranveer Singh",
  "Hrithik Roshan",
  "Akshay Kumar",
  "Ajay Devgn",
  "Saif Ali Khan",
  "Shahid Kapoor",
  "Deepika Padukone",
  "Katrina Kaif",
  "Priyanka Chopra",
  "Alia Bhatt",
  "Kareena Kapoor",
  "Anushka Sharma",
  "Sonam Kapoor",
  "Jacqueline Fernandez",
  "Shraddha Kapoor",
  "Kriti Sanon",
  "Sidharth Malhotra",
  "Varun Dhawan",
  "Bhumi Pednekar",
  "Radhika Apte",
  "Vicky Kaushal",
  "Rajkummar Rao",
  "Ayushmann Khurrana",
  "Kartik Aaryan",
  "Aditya Roy Kapur",
  "Arjun Kapoor",
  "John Abraham",
  "Tiger Shroff",
  "Disha Patani",
  "Sara Ali Khan",
  "Nushrat Bharucha",
  "Ileana D'Cruz",
  "Rani Mukerji",
  "Madhuri Dixit",
  "Sridevi",
  "Kajol",
  "Juhi Chawla",
  "Karisma Kapoor",
  "Shilpa Shetty",
  "Raveen Tondon",
  "Juhi Chawla",
  "Tabu",
  "Hema Malini",
  "Madhuri Dixit",
  "Sushmita Sen",
  "Neetu Kapoor",
  "Kangana Ranaut",
  "Sonakshi Sinha",
  "Bipasha Basu",
  "Malaika Arora",
  "Sonali Bendre",
  "Farhan Akhtar",
  "Manoj Bajpayee",
  "Nawazuddin Siddiqui",
  "Pankaj Tripathi",
  "Kunal Khemu",
  "Randeep Hooda",
  "Arshad Warsi",
  "Rajpal Yadav",
  "Naseeruddin Shah",
  "Om Puri",
  "Paresh Rawal",
  "Anupam Kher",
  "Kumud Mishra",
  "Vijay Raaz",
  "Vivek Oberoi",
  "Sanjay Dutt",
  "Jackky Bhagnani",
  "Mithun Chakraborty",
  "Govinda",
  "Sidharth Malhotra",
  "Shreyas Talpade",
  "Puneet Issar",
  "Anil Kapoor",
  "Manoj Kumar",
  "Kunal Kapoor",
  "Irrfan Khan",
  "Ali Fazal",
  "Zayed Khan",
  "Sushant Singh Rajput",
  "Ranveer Shorey",
  "Abhishek Bachchan",
  "Dino Morea",
  "Rakesh Roshan",
  "Shakti Kapoor",
  "Ashutosh Rana",
  "Mahesh Manjrekar",
  "Himesh Reshammiya",
  "Rajesh Khanna",
  "Dharmendra",
  "Amrish Puri",
  "Raza Murad",
  "Gulshan Grover",
  "Vikram Gokhale",
  "Rajendra Gupta",
  "Paresh Rawal",
  "Tanuja",
  "Shabana Azmi",
  "Smita Patil",
  "Rakhee Gulzar",
  "Neena Gupta",
  "Kiran Kher",
  "Dimple Kapadia",
  "Nutan",
  "Swaroop Sampat",
  "Sharmila Tagore",
  "Jaya Bachchan",
  "Rekha",
  "Zeenat Aman",
  "Mumtaz",
  "Farida Jalal",
  "Madhubala",
  "Nargis",
  "Meena Kumari",
  "Geeta Bali",
];

const companies = [
  "Tata Consultancy Services (TCS)",
  "Infosys",
  "Wipro",
  "HCL Technologies",
  "Tech Mahindra",
  "Cognizant",
  "Accenture",
  "IBM India",
  "Capgemini",
  "Dell Technologies",
  "Oracle India",
  "Google India",
  "Microsoft India",
  "Amazon India",
  "Facebook India",
  "Adobe India",
  "Qualcomm India",
  "Intel India",
  "SAP Labs India",
  "Cisco Systems",
  "Apple India",
  "PepsiCo India",
  "Nestle India",
  "Reliance Industries",
  "Mahindra & Mahindra",
  "Larsen & Toubro (L&T)",
  "Bajaj Auto",
  "Hindustan Unilever Limited (HUL)",
  "Bharti Airtel",
  "Vodafone Idea",
  "Indus Towers",
  "Tata Motors",
  "SBI Life Insurance",
  "ICICI Bank",
  "Axis Bank",
  "HDFC Bank",
  "Yes Bank",
  "State Bank of India",
  "Kotak Mahindra Bank",
  "Birla Group",
  "Aditya Birla Capital",
  "Bajaj Finserv",
  "Reliance Jio",
  "Wipro Consumer Care",
  "Ola Cabs",
  "Uber India",
  "Zomato",
  "Swiggy",
  "Flipkart",
  "Snapdeal",
  "Myntra",
  "Paytm",
  "PhonePe",
  "Razorpay",
  "Cred",
  "OYO Rooms",
  "RedBus",
  "Byju’s",
  "BharatPe",
  "UrbanClap",
  "Lenskart",
  "BigBasket",
  "Delhivery",
  "Naukri",
  "Indeed India",
  "Monster India",
  "LinkedIn India",
  "MakeMyTrip",
  "Ixigo",
  "ClearTrip",
  "Yatra",
  "Goibibo",
  "Sulekha",
  "Housing.com",
  "Magicbricks",
  "CommonFloor",
  "NoBroker",
  "Freshworks",
  "Zoho Corporation",
  "InMobi",
  "Sapiens",
  "Tracxn",
  "Fractal Analytics",
  "Mu Sigma",
  "CureFit",
  "PharmEasy",
  "Practo",
  "Medlife",
  "Giva",
  "Fynd",
  "Swaniti Initiative",
  "Dream11",
  "Hotstar",
  "Sony LIV",
  "Voot",
  "ALTBalaji",
  "Zee5",
  "JioSaavn",
  "Gaana",
  "T-Series",
  "Red Chillies Entertainment",
  "Yash Raj Films",
  "Eros International",
  "Tata Steel",
  "JSW Steel",
  "BHEL",
  "Lupin Pharmaceuticals",
  "Sun Pharma",
  "Dr. Reddy’s Laboratories",
  "Cipla",
  "AstraZeneca India",
  "Ranbaxy Laboratories",
  "Biocon",
  "Zydus Cadila",
  "Wockhardt",
  "Mylan",
  "Glenmark Pharmaceuticals",
  "Torrent Pharmaceuticals",
  "Aurobindo Pharma",
  "Motherson Sumi",
  "Hero MotoCorp",
  "TVS Motors",
  "Force Motors",
  "Ashok Leyland",
  "Bajaj Electricals",
  "V-Guard Industries",
  "Whirlpool India",
  "LG Electronics India",
  "Samsung India",
  "Sony India",
  "Panasonic India",
  "Haier India",
  "Voltas",
  "Blue Star",
  "Daikin India",
  "Trane",
  "Carrier India",
  "Godrej Appliances",
  "Tata Power",
  "NTPC Limited",
  "Indian Oil Corporation",
  "Hindustan Petroleum",
  "Bharat Petroleum",
  "GAIL India",
  "ONGC",
  "Oil India Limited",
  "Coal India Limited",
  "National Mineral Development Corporation",
  "Steel Authority of India",
  "Indian Railways",
  "Air India",
  "SpiceJet",
  "IndiGo",
  "Vistara",
  "GoAir",
  "Jet Airways",
  "Boeing India",
  "Airbus India",
  "Maruti Suzuki",
  "Toyota India",
  "Honda Cars India",
  "Ford India",
  "Mahindra Electric",
  "BMW India",
  "Mercedes-Benz India",
  "Audi India",
  "Jaguar Land Rover India",
  "Volvo Cars India",
  "Porsche India",
  "Renault India",
  "Skoda India",
  "Mitsubishi India",
  "Peugeot India",
  "Daimler India",
  "Honda Motorcycle & Scooter India",
  "Hero Electric",
  "TVS Motor Company",
  "Suzuki Motorcycles India",
  "Bajaj Auto",
  "KTM India",
  "Yamaha Motor India",
  "Harley-Davidson India",
  "Royal Enfield",
  "Tata Chemicals",
  "Adani Group",
  "Reliance Jio",
  "Muthoot Finance",
  "Bajaj Finance",
  "Indiabulls Housing Finance",
  "LIC Housing Finance",
  "HDFC Life Insurance",
  "SBI Life Insurance",
  "ICICI Prudential",
  "Max Life Insurance",
  "Bajaj Allianz Life Insurance",
  "Tata AIA Life Insurance",
  "Kotak Mahindra Life Insurance",
  "Birla Sun Life Insurance",
  "Reliance General Insurance",
  "New India Assurance",
  "Oriental Insurance",
  "HDFC Ergo",
  "Star Health and Allied Insurance",
  "SBI General Insurance",
  "ICICI Lombard General Insurance",
  "Tata AIG General Insurance",
  "Bharti AXA General Insurance",
  "Aditya Birla Health Insurance",
  "Edelweiss Tokio Life",
  "Future Group",
  "Mahindra Retail",
  "Reliance Retail",
  "DMart",
  "Big Bazaar",
  "Spencer's Retail",
  "More Retail",
  "Shoppers Stop",
  "Lifestyle",
  "Pantaloons",
  "Westside",
  "H&M India",
  "Zara India",
  "Forever 21 India",
  "Nike India",
  "Adidas India",
  "Reebok India",
  "Puma India",
  "Bata India",
  "Liberty Shoes",
  "Red Tape",
  "Metro Shoes",
  "Woodland India",
  "Levi's India",
  "Wrangler India",
  "Lee India",
  "Tommy Hilfiger India",
  "Calvin Klein India",
  "Marks & Spencer India",
  "Benetton India",
  "Van Heusen India",
  "Arrow India",
  "Peter England India",
  "Park Avenue",
  "Raymond",
  "Van Heusen",
  "Jockey India",
  "Amul",
  "Britannia",
  "Parle",
  "Haldiram's",
  "Patanjali Ayurved",
  "Dabur",
  "Hindustan Unilever",
  "Nestle India",
  "Pepsico India",
  "Coca Cola India",
  "Unilever India",
  "Colgate Palmolive India",
  "Procter & Gamble India",
  "Johnson & Johnson India",
  "ITC Limited",
  "Godrej Consumer Products",
  "Marico",
  "Emami",
  "Patanjali Ayurveda",
  "Mahindra Lifespace",
  "DLF Limited",
  "Godrej Properties",
  "Oberoi Realty",
  "Hiranandani Builders",
  "Sobha Developers",
  "Brigade Group",
  "Lodha Group",
  "Unitech",
  "Prestige Group",
  "Tata Housing",
  "Shapoorji Pallonji",
  "Purvankara",
  "Amitabh Bachchan Corporation Limited",
  "Reliance Infrastructure",
  "GMR Group",
  "Lanco Infratech",
  "IL&FS",
  "Gautam Adani Group",
  "Larsen & Toubro",
  "JK Tyre & Industries",
  "Apollo Tyres",
  "MRF Tyres",
  "Balkrishna Industries",
  "Goodyear India",
  "CEAT Tyres",
  "Exide Industries",
  "Bosch India",
  "Havells India",
  "Luminous Power Technologies",
  "V-Guard",
  "Schneider Electric India",
  "Honeywell India",
  "Siemens India",
  "ABB India",
  "Johnson Controls",
  "Emerson Electric",
  "Rockwell Automation",
  "Wartsila India",
  "Thermax",
  "Cummins India",
  "Kirloskar Brothers",
  "BHEL",
  "Tata Power",
  "GE India",
  "L&T Power",
  "Tata Chemicals",
  "Coromandel International",
  "Cognizant",
  "Infosys",
  "Accenture",
  "IBM India",
  "Wipro",
  "Capgemini",
  "Tech Mahindra",
];

const hollywoodStars = [
  // 🎬 Male Actors
  "Leonardo DiCaprio",
  "Brad Pitt",
  "Johnny Depp",
  "Tom Hanks",
  "Denzel Washington",
  "Robert Downey Jr.",
  "Chris Evans",
  "Chris Hemsworth",
  "Morgan Freeman",
  "Christian Bale",
  "Matt Damon",
  "Ben Affleck",
  "Will Smith",
  "Hugh Jackman",
  "Jake Gyllenhaal",
  "Tom Cruise",
  "Ryan Reynolds",
  "Ryan Gosling",
  "Mark Wahlberg",
  "Samuel L. Jackson",
  "Robert De Niro",
  "Al Pacino",
  "Keanu Reeves",
  "Jason Momoa",
  "Henry Cavill",
  "Timothée Chalamet",
  "Joaquin Phoenix",
  "Michael B. Jordan",
  "Tom Hardy",
  "Adam Driver",
  "Jeremy Renner",
  "Josh Brolin",
  "Paul Rudd",
  "Andrew Garfield",
  "Tobey Maguire",
  "Pedro Pascal",
  "Austin Butler",
  "Oscar Isaac",
  "Eddie Redmayne",
  "Daniel Craig",
  "Daniel Kaluuya",
  "Sebastian Stan",
  "Kit Harington",
  "Cillian Murphy",
  "Idris Elba",
  "John Boyega",
  "David Harbour",
  "Channing Tatum",
  "Joseph Gordon-Levitt",

  // 🎬 Female Actresses
  "Scarlett Johansson",
  "Jennifer Lawrence",
  "Emma Stone",
  "Natalie Portman",
  "Anne Hathaway",
  "Zendaya",
  "Florence Pugh",
  "Elizabeth Olsen",
  "Margot Robbie",
  "Gal Gadot",
  "Angelina Jolie",
  "Meryl Streep",
  "Sandra Bullock",
  "Cate Blanchett",
  "Emily Blunt",
  "Amy Adams",
  "Jessica Chastain",
  "Charlize Theron",
  "Kristen Stewart",
  "Dakota Johnson",
  "Jennifer Aniston",
  "Reese Witherspoon",
  "Rachel McAdams",
  "Keira Knightley",
  "Emma Watson",
  "Millie Bobby Brown",
  "Viola Davis",
  "Tessa Thompson",
  "Lupita Nyong'o",
  "Anya Taylor-Joy",
  "Megan Fox",
  "Lucy Hale",
  "Zoë Kravitz",
  "Jenna Ortega",
  "Nicole Kidman",
  "Julia Roberts",
  "Halle Berry",
  "Salma Hayek",
  "Kristen Bell",
  "Mila Kunis",
  "Eva Green",
  "Amanda Seyfried",
  "Saoirse Ronan",
  "Toni Collette",
  "Winona Ryder",
  "Cameron Diaz",
  "Maggie Gyllenhaal",
  "Michelle Williams",
  "Kate Winslet",
];

const countries = [
  "Aruba",
  "Afghanistan",
  "Angola",
  "Anguilla",
  "Åland Islands",
  "Albania",
  "Andorra",
  "United Arab Emirates",
  "Argentina",
  "Armenia",
  "American Samoa",
  "Antarctica",
  "French Southern Territories",
  "Antigua and Barbuda",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Burundi",
  "Belgium",
  "Benin",
  "Bonaire, Sint Eustatius and Saba",
  "Burkina Faso",
  "Bangladesh",
  "Bulgaria",
  "Bahrain",
  "Bahamas",
  "Bosnia and Herzegovina",
  "Saint Barthélemy",
  "Belarus",
  "Belize",
  "Bermuda",
  "Bolivia",
  "Brazil",
  "Barbados",
  "Brunei Darussalam",
  "Bhutan",
  "Bouvet Island",
  "Botswana",
  "Central African Republic",
  "Canada",
  "Cocos (Keeling) Islands",
  "Switzerland",
  "Chile",
  "China",
  "Côte d'Ivoire",
  "Cameroon",
  "Congo, The Democratic Republic of the",
  "Congo",
  "Cook Islands",
  "Colombia",
  "Comoros",
  "Cape Verde",
  "Costa Rica",
  "Cuba",
  "Curaçao",
  "Christmas Island",
  "Cayman Islands",
  "Cyprus",
  "Czech Republic",
  "Germany",
  "Djibouti",
  "Dominica",
  "Denmark",
  "Dominican Republic",
  "Algeria",
  "Ecuador",
  "Egypt",
  "Eritrea",
  "Western Sahara",
  "Spain",
  "Estonia",
  "Ethiopia",
  "Finland",
  "Fiji",
  "Falkland Islands (Malvinas)",
  "France",
  "Faroe Islands",
  "Micronesia, Federated States of",
  "Gabon",
  "United Kingdom",
  "Georgia",
  "Guernsey",
  "Ghana",
  "Gibraltar",
  "Guinea",
  "Guadeloupe",
  "Gambia",
  "Guinea-Bissau",
  "Equatorial Guinea",
  "Greece",
  "Grenada",
  "Greenland",
  "Guatemala",
  "French Guiana",
  "Guam",
  "Guyana",
  "Hong Kong",
  "Heard Island and McDonald Islands",
  "Honduras",
  "Croatia",
  "Haiti",
  "Hungary",
  "Indonesia",
  "Isle of Man",
  "India",
  "British Indian Ocean Territory",
  "Ireland",
  "Iran, Islamic Republic of",
  "Iraq",
  "Iceland",
  "Israel",
  "Italy",
  "Jamaica",
  "Jersey",
  "Jordan",
  "Japan",
  "Kazakhstan",
  "Kenya",
  "Kyrgyzstan",
  "Cambodia",
  "Kiribati",
  "Saint Kitts and Nevis",
  "Korea, Republic of",
  "Kuwait",
  "Lao People's Democratic Republic",
  "Lebanon",
  "Liberia",
  "Libya",
  "Saint Lucia",
  "Liechtenstein",
  "Sri Lanka",
  "Lesotho",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Macao",
  "Saint Martin (French part)",
  "Morocco",
  "Monaco",
  "Moldova, Republic of",
  "Madagascar",
  "Maldives",
  "Mexico",
  "Marshall Islands",
  "North Macedonia",
  "Mali",
  "Malta",
  "Myanmar",
  "Montenegro",
  "Mongolia",
  "Northern Mariana Islands",
  "Mozambique",
  "Mauritania",
  "Montserrat",
  "Martinique",
  "Mauritius",
  "Malawi",
  "Malaysia",
  "Mayotte",
  "Namibia",
  "New Caledonia",
  "Niger",
  "Norfolk Island",
  "Nigeria",
  "Nicaragua",
  "Niue",
  "Netherlands",
  "Norway",
  "Nepal",
  "Nauru",
  "New Zealand",
  "Oman",
  "Pakistan",
  "Panama",
  "Pitcairn",
  "Peru",
  "Philippines",
  "Palau",
  "Papua New Guinea",
  "Poland",
  "Puerto Rico",
  "Korea, Democratic People's Republic of",
  "Portugal",
  "Paraguay",
  "Palestine, State of",
  "French Polynesia",
  "Qatar",
  "Réunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saudi Arabia",
  "Sudan",
  "Senegal",
  "Singapore",
  "South Georgia and the South Sandwich Islands",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Svalbard and Jan Mayen",
  "Solomon Islands",
  "Sierra Leone",
  "El Salvador",
  "San Marino",
  "Somalia",
  "Saint Pierre and Miquelon",
  "Serbia",
  "South Sudan",
  "Sao Tome and Principe",
  "Suriname",
  "Slovakia",
  "Slovenia",
  "Sweden",
  "Eswatini",
  "Sint Maarten (Dutch part)",
  "Seychelles",
  "Syrian Arab Republic",
  "Turks and Caicos Islands",
  "Chad",
  "Togo",
  "Thailand",
  "Tajikistan",
  "Tokelau",
  "Turkmenistan",
  "Timor-Leste",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Tuvalu",
  "Taiwan, Province of China",
  "Tanzania, United Republic of",
  "Ukraine",
  "Uganda",
  "United States Minor Outlying Islands",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Holy See (Vatican City State)",
  "Saint Vincent and the Grenadines",
  "Venezuela, Bolivarian Republic of",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Viet Nam",
  "Vanuatu",
  "Wallis and Futuna",
  "Samoa",
  "Yemen",
  "South Africa",
  "Zambia",
  "Zimbabwe",
];

const Fwords = [
  // 🔤 Nouns
  "apple",
  "mountain",
  "river",
  "ocean",
  "sky",
  "forest",
  "desert",
  "cloud",
  "tree",
  "flower",
  "city",
  "village",
  "car",
  "train",
  "airplane",
  "book",
  "phone",
  "laptop",
  "planet",
  "star",
  "moon",
  "sun",
  "house",
  "road",
  "school",
  "friend",
  "dream",
  "story",
  "game",
  "movie",
  "hero",
  "villain",
  "castle",
  "dragon",
  "sword",
  "shield",
  "robot",
  "alien",
  "monster",
  "potion",
  "hat",
  "shoe",
  "coat",
  "glass",
  "door",
  "window",
  "island",
  "beach",
  "cave",
  "ship",
  "animal",
  "bird",
  "fish",
  "lion",
  "tiger",
  "elephant",
  "panda",
  "dog",
  "cat",
  "horse",
  "butterfly",
  "snake",
  "insect",
  "zebra",
  "giraffe",
  "whale",
  "shark",
  "penguin",
  "dolphin",
  "octopus",
  "ball",
  "coin",
  "clock",
  "bell",
  "candle",
  "camera",
  "radio",
  "drum",
  "guitar",
  "violin",
  "pen",
  "pencil",
  "paper",
  "notebook",
  "bag",
  "box",
  "bottle",
  "cup",
  "plate",
  "spoon",

  // ✨ Adjectives
  "happy",
  "sad",
  "angry",
  "brave",
  "shy",
  "funny",
  "smart",
  "kind",
  "cruel",
  "gentle",
  "fast",
  "slow",
  "loud",
  "quiet",
  "bright",
  "dark",
  "colorful",
  "plain",
  "cold",
  "hot",
  "warm",
  "cool",
  "rich",
  "poor",
  "strong",
  "weak",
  "young",
  "old",
  "new",
  "ancient",
  "beautiful",
  "ugly",
  "tall",
  "short",
  "big",
  "small",
  "tiny",
  "huge",
  "fat",
  "thin",
  "clean",
  "dirty",
  "soft",
  "hard",
  "rough",
  "smooth",
  "light",
  "heavy",
  "sweet",
  "bitter",
  "sharp",
  "dull",
  "wet",
  "dry",
  "empty",
  "full",
  "high",
  "low",
  "friendly",
  "mean",
  "nice",
  "evil",
  "clever",
  "lazy",
  "active",
  "sleepy",
  "noisy",
  "silent",
  "grumpy",
  "cheerful",
  "wild",
  "calm",
  "stormy",
  "sunny",
  "rainy",
  "windy",
  "snowy",
  "fancy",
  "plain",
  "glamorous",
  "sparkly",
  "dull",
  "bold",
  "timid",
  "energetic",
  "tired",
  "mysterious",
  "familiar",
  "strange",
  "lucky",
  "unlucky",
  "magical",
  "realistic",
  "friendly",
  "caring",
  "brilliant",
  "average",
  "weird",
  "clumsy",
  "creative",
  "adventurous",
  "curious",
  "gentle",
  "loyal",
  "fierce",
  "humble",
  "bossy",
  "sarcastic",
  "elegant",
  "messy",
];

const indianMovies = [
  // Hindi (Bollywood) Movies
  "Pushpa 2: The Rule",
  "Kalki 2898 AD",
  "Indian 2",
  "Indian 3",
  "Housefull 5",
  "Raid 2",
  "Bhool Chuk Maaf",
  "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
  "Sunny Sanskari Ki Tulsi Kumari",
  "The Bhootnii",
  "Ground Zero",
  "Sister Midnight",
  "Abir Gulaal",
  "Phule",
  "Maalik",
  "Kapkapiii",
  "Suswagatam Khushaamadeed",
  "Maa",
  "De De Pyaar De 2",
  "Alpha",
  "Sitaare Zameen Par",
  "Baaghi 4",
  "Jolly LLB 3",
  "Chhorii 2",
  "Mahavatar Narsimha",
  "Pintu Ki Pappi",
  "Tumko Meri Kasam",
  "Aachari Baa",
  "Be Happy",
  "Hisaab Barabar",
  "Odela 2",
  "Gajaana",
  "Ghaati",
  "Do Aur Do Pyaar",
  "Love Sex Aur Dhokha 2",
  "Ruslaan",
  "Srikanth",
  "Bhaiyya Ji",
  "Mr & Mrs Mahi",
  "Muniya",
  "Chandu Champion",
  "Ishq Vishq Rebound",
  "Savi",
  "Madgaon Express",
  "The Crew",
  "Maidan",
  "Bade Miyan Chote Miyan",
  "Fighter",
  "Eagle",
  "Hanu Man",
  "Game Changer",
  "Indian 2",
  "Devara Part 1",
  "Bastar: The Naxal Story",
  "Kubera",
  "All We Imagine as Light",
  "Santosh",
  "Court - State Vs. A Nobody",
  "Pravinkoodu Shappu",
  "Kingston",
  "Test",
  "Murmur",
  "Madhushala",
  "Robinhood",
  "L2: Empuraan",
  "Choo Mantar",
  "Perusu",
  "Warfare",
  "The Amateur",
  "Akaal: The Unconquered",
  "EMI",
  "Kill Tony: Kill or Be Killed",
  "The Dad Quest",
  "Frozen Hot Boys",
  "Pets",
  "Meet the Khumalos",
  "Paddington In Peru",
  "Sinners",
  "Ten Hours",
  "Sundarakanda",
  "Four Letters Of Love",
  "Baida",
  "Jaat",
  "Sikandar",
  "Bazooka",
  "Good Bad Ugly",
  "Akaal: The Unconquered",
  "Guntur Kaaram",
  "Indian 2",
  "Indian 3",
  "Kalki 2898 AD",
  "Pushpa 2: The Rule",
  "Chandu Champion",
  "Ishq Vishq Rebound",
  "Bhaiyya Ji",
  "Srikanth",
  "Ruslaan",
  "Love Sex Aur Dhokha 2",
  "Do Aur Do Pyaar",
  "Bade Miyan Chote Miyan",
  "Maidan",
  "The Crew",
  "Madgaon Express",
  "Mr & Mrs Mahi",
  "Muniya",
  "Savi",
  "Chhorii 2",
  "Mahavatar Narsimha",
  "Pintu Ki Pappi",
  "Tumko Meri Kasam",
  "Aachari Baa",
  "Be Happy",
  "Hisaab Barabar",
];

const gujaratiMovies2025 = [
  "Shastra",
  "Umbarro",
  "Kamthaan",
  "Kasoombo",
  "Ilu Ilu",
  "Vishwastha",
  "Bholaa: The Power of Man",
  "Builder Boys",
  "Ram Bharosey",
  "Chor Chor",
  "Karkhanu",
  "Natak!",
  "Vaar Tahevaar",
  "Natvar Urfe NTR",
  "Bhai Ni Beni Ladki",
  "Fakt Purusho Maate",
  "Vhala Thodu Samjo To Saru",
  "Udan Chhoo",
  "Interview",
  "Frendo",
  "Locha Laapsi",
  "Pratikar",
  "Satrangi Re...",
  "Ranbhoomi",
  "3 Ekka",
];

const comicCharacters = [
  // Marvel Characters
  "Spider-Man",
  "Iron Man",
  "Thor",
  "Hulk",
  "Captain America",
  "Black Widow",
  "Doctor Strange",
  "Black Panther",
  "Ant-Man",
  "Wolverine",
  "Deadpool",
  "Scarlet Witch",
  "Vision",
  "Hawkeye",
  "Daredevil",
  "Luke Cage",
  "Jessica Jones",
  "Moon Knight",
  "Storm",
  "Groot",
  "Rocket Raccoon",
  "Gamora",
  "Star-Lord",
  "The Falcon",
  "Wong",
  "Shang-Chi",
  "Elektra",
  "Silver Surfer",
  "Thanos",
  "Magneto",
  "Mystique",
  "Rogue",
  "Professor X",
  "Cyclops",
  "Jean Grey",
  "The Thing",
  "Doctor Doom",
  "Kingpin",
  "Venom",
  "Carnage",
  "Mysterio",
  "Green Goblin",
  "Red Skull",

  // DC Characters
  "Superman",
  "Batman",
  "Wonder Woman",
  "The Flash",
  "Aquaman",
  "Green Lantern",
  "Cyborg",
  "Shazam",
  "Martian Manhunter",
  "Green Arrow",
  "Batgirl",
  "Nightwing",
  "The Joker",
  "Harley Quinn",
  "Catwoman",
  "Lex Luthor",
  "Darkseid",
  "Ra's al Ghul",
  "Bane",
  "Two-Face",
  "Penguin",
  "Scarecrow",
  "Poison Ivy",
  "Riddler",
  "Hawkman",
  "Hawkgirl",
  "Black Canary",
  "Zatanna",
  "Dr. Fate",
  "Vandal Savage",
  "Static Shock",
  "Red Hood",
  "Talia al Ghul",
  "Deathstroke",
  "Joker",
  "Supergirl",
  "Blue Beetle",
  "Batwoman",
  "Robin",

  // The Boys Characters
  "Homelander",
  "Billy Butcher",
  "Starlight",
  "Queen Maeve",
  "A-Train",
  "The Deep",
  "Black Noir",
  "Frenchie",
  "Kimiko Miyashiro",
  "Mother's Milk",
  "The Legend",
  "Stormfront",
  "Soldier Boy",
  "Lenny Butcher",
  "The Female",
  "Becca Butcher",
  "Grace Mallory",
  "Cindy",
  "The Church of the Collective",
  "Stormfront",
  "Edgar",
  "Dakota Bob",
  "Jack from Jupiter",
];

const randWords = [
  // Doraemon Characters
  "Doraemon",
  "Nobi Nobita",
  "Shizuka Minamoto",
  "Takeshi Gouda",
  "Suneo Honekawa",
  "Doraemon's Ear",
  "Shizuka's Dolls",
  "Nobi Family",
  "Dorami",
  "Xiang Li",
  "Giovanni",
  "Gian",

  // Ninja Hattori Characters
  "Ninja Hattori",
  "Kenichi Mitsuba",
  "Ami Mitsuba",
  "Shishimaru",
  "Kagechiyo",
  "Kōkōni",
  "Jiraiya",
  "Bajra",
  "Kaitori",
  "Kumiko Mitsuba",
  "Shinja",
  "Goribo",
  "Baba",
  "Raman",
  "Yamato",

  // Baal Veer Characters
  "Baal Veer",
  "Veer Pari",
  "Rani Pari",
  "Mahir",
  "Shakaali",
  "Timnasa",
  "Dev Rishabh",
  "Baalveer",
  "Rani Pari",
  "Mahaakaali",
  "Ghanta",
  "Kaalka",
  "Shaktimaan",
  "Ajaib Rajkumar",

  // Indian Festivals
  "Diwali",
  "Holi",
  "Durga Puja",
  "Navratri",
  "Raksha Bandhan",
  "Eid",
  "Christmas",
  "Gudi Padwa",
  "Onam",
  "Makar Sankranti",
  "Pongal",
  "Lohri",
  "Baisakhi",
  "Karva Chauth",
  "Buddha Purnima",
  "Mahatma Gandhi Jayanti",
  "Valentine's Day",
  "Easter",
  "Dussehra",
  "Ugadi",
  "Makar Sankranti",
  "Mawlid al-Nabi",
  "Lohri",
  "Diwali",
  "Basanta Panchami",

  // Gujarat States (Cities)
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Gandhinagar",
  "Junagadh",
  "Vapi",
  "Nadiad",
  "Anand",
  "Morbi",
  "Patan",
  "Panchmahal",
  "Mehsana",
  "Bharuch",
  "Navsari",
  "Kheda",
  "Amreli",
  "Dholka",
  "Sihor",
  "Daman",
  "Bhuj",
  "Sankheda",
  "Chhota Udepur",

  // Tarak Mehta Ka Ooltah Chashmah Cast
  "Jethalal Champaklal Gada",
  "Daya Jethalal Gada",
  "Taarak Mehta",
  "Anjali Mehta",
  "Champaklal Gada",
  "Sodhi",
  "Roshan Singh Sodhi",
  "Bhide",
  "Babita Ji",
  "Iyer",
  "Gada Electronics",
  "Popatlal",
  "Goli",
  "Tappu",
  "Gada",
  "Sunderlal",
  "Dilip Joshi",
  "Shailesh Lodha",
  "Munmun Dutta",

  // Indian Famous Comedians
  "Kapil Sharma",
  "Johnny Lever",
  "Bharti Singh",
  "Sunil Grover",
  "Raju Srivastava",
  "Krushna Abhishek",
  "Kiku Sharda",
  "Vir Das",
  "Zakir Khan",
  "Abhishek Upmanyu",
  "Tanmay Bhat",
  "Aditi Mittal",
  "Atul Khatri",

  // Famous Political Leaders
  "Mahatma Gandhi",
  "Jawaharlal Nehru",
  "Indira Gandhi",
  "Sardar Vallabhbhai Patel",
  "Rajiv Gandhi",
  "Narendra Modi",
  "Amit Shah",
  "Arvind Kejriwal",
  "Mamata Banerjee",
  "Shivraj Singh Chouhan",
  "Uddhav Thackeray",
  "Devendra Fadnavis",
  "Nitish Kumar",
  "Yogi Adityanath",
  "Mayawati",
  "Lal Krishna Advani",
  "Kamal Nath",
  "Rajnath Singh",
  "P Chidambaram",
  "M. Karunanidhi",
  "J Jayalalithaa",
  "Mulayam Singh Yadav",

  // US Presidents
  "George Washington",
  "Abraham Lincoln",
  "Theodore Roosevelt",
  "Franklin D. Roosevelt",
  "Harry S. Truman",
  "Dwight D. Eisenhower",
  "John F. Kennedy",
  "Lyndon B. Johnson",
  "Richard Nixon",
  "Gerald Ford",
  "Jimmy Carter",
  "Ronald Reagan",
  "George H. W. Bush",
  "Bill Clinton",
  "George W. Bush",
  "Barack Obama",
  "Donald Trump",
  "Joe Biden",
  "John Adams",
  "Thomas Jefferson",
  "James Madison",
  "Andrew Jackson",

  // Indian Historical Warriors
  "Raja Shivaji",
  "Maharana Pratap",
  "Rani Lakshmibai",
  "Bhaskaracharya",
  "Chandragupta Maurya",
  "Samudragupta",
  "Sultan Alauddin Khilji",
  "Shah Jahan",
  "Babur",
  "Akbar",
  "Raja Ranjit Singh",
  "Lalita Padmini",
  "Vijayanagar Kings",
  "Karna",
  "Bhima",
  "Pandavas",
  "Bheema",
  "Sher Shah Suri",
  "Nawab of Oudh",
  "Maharaja Jai Singh II",
  "Maharaja Kesar Singh",
  "Krishna Deva Raya",
  "Vishnu Sharma",
  "Veer Yadav",
  "Rajendra Chola",
  "Veer Kaal Singh",
  "Maharaja Jaswant Singh",
  "Rana Bahadur Singh",
  "Sardar Hari Singh",
  "Raja Birbal",
  "Maharana Sanga",
  "Baji Rao I",
  "Rani Durgavati",
  "Kalyani Chalukya",

  // Additional entries to make up 600+ words
  "Madhuri Dixit",
  "Amitabh Bachchan",
  "Akshay Kumar",
  "Ranbir Kapoor",
  "Deepika Padukone",
  "Priyanka Chopra",
  "Alia Bhatt",
  "Rajinikanth",
  "Salman Khan",
  "Shah Rukh Khan",
  "Katrina Kaif",
  "Kajol",
  "Nawazuddin Siddiqui",
  "Hrithik Roshan",
  "Aamir Khan",
  "Vidya Balan",
  "Irrfan Khan",
  "Vicky Kaushal",
  "Taapsee Pannu",
  "Sushant Singh Rajput",
  "Anil Kapoor",
  "Kareena Kapoor",
  "Sonam Kapoor",
  "Jacqueline Fernandez",
  "Sonakshi Sinha",
  "Sidharth Malhotra",
  "Varun Dhawan",
  "Ranveer Singh",
  "Madhuri Dixit",
  "Kangana Ranaut",
  "Rana Daggubati",
  "Suriya",
  "Ram Charan",
];

const friends = [
  "Parthivsinh Vaghela",
  "Dhyan Patel",
  "Deval Patel",
  "Krish Patel",
  "Heer Patel",
  "Kwinsi Thakker",
];

const Topics = [
  footballers,
  cricketers,
  bollywoodActors,
  companies,
  hollywoodStars,
  countries,
  Fwords,
  indianMovies,
  gujaratiMovies2025,
  comicCharacters,
  randWords,
  friends,
];

const randomTopic = () => {
  const randomIndex = Math.floor(Math.random() * Topics.length);
  return Topics[randomIndex];
};

export const randomWords = (wordCount) => {
  const words = [];
  for (let i = 0; i < wordCount; i++) {
    const topic = randomTopic();
    const randomIndex = Math.floor(Math.random() * topic.length);
    words.push(topic[randomIndex]);
  }
  return words;
};

