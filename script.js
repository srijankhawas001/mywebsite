// ===========================
// STORE DATA - COMPLETE INVENTORY
// ===========================
const storeData = {
  Grocery: {
    title: "Grocery Items",
    subcategories: {
      "Rice & Rice Products": [
        { id: 101, name: "Basmati Rice - Thakali (1kg)", price: 170, img: "https://via.placeholder.com/400", desc: "Premium long grain rice from Thakali region." },
        { id: 102, name: "Basmati Rice - Thakali (5kg)", price: 850, img: "https://via.placeholder.com/400", desc: "Premium long grain rice from Thakali region." },
        { id: 103, name: "Basmati Rice - Newari (1kg)", price: 160, img: "https://via.placeholder.com/400", desc: "Long grain rice from Newari variety." },
        { id: 104, name: "Basmati Rice - Newari (5kg)", price: 800, img: "https://via.placeholder.com/400", desc: "Long grain rice from Newari variety." },
        { id: 105, name: "Jeera Masino Rice - Laxmi (1kg)", price: 90, img: "https://via.placeholder.com/400", desc: "Fine quality Jeera rice." },
        { id: 106, name: "Jeera Masino Rice - Laxmi (5kg)", price: 450, img: "https://via.placeholder.com/400", desc: "Fine quality Jeera rice." },
        { id: 107, name: "Sona Masuri Rice - Kohinoor (5kg)", price: 1750, img: "https://via.placeholder.com/400", desc: "Premium Sona Masuri rice." },
        { id: 108, name: "Sona Masuri Rice - Kohinoor (10kg)", price: 3400, img: "https://via.placeholder.com/400", desc: "Premium Sona Masuri rice." },
        { id: 109, name: "Steam Rice - Local (5kg)", price: 900, img: "https://via.placeholder.com/400", desc: "Steamed rice for daily consumption." },
        { id: 110, name: "Brown Rice - Organic Nepal (1kg)", price: 240, img: "https://via.placeholder.com/400", desc: "Healthy organic brown rice." },
        { id: 111, name: "Chiura Thick - Local (1kg)", price: 80, img: "https://via.placeholder.com/400", desc: "Traditional thick beaten rice." },
        { id: 112, name: "Chiura Thin - Laxmi (1kg)", price: 90, img: "https://via.placeholder.com/400", desc: "Thin beaten rice." },
        { id: 113, name: "Murai (Puffed Rice) - Kisan (500g)", price: 50, img: "https://via.placeholder.com/400", desc: "Crispy puffed rice." },
        { id: 114, name: "Rice Flour - Annapurna (1kg)", price: 95, img: "https://via.placeholder.com/400", desc: "Fine rice flour for cooking." }
      ],
      "Dal & Pulses": [
        { id: 201, name: "Masoor Dal - Tata Sampann (1kg)", price: 140, img: "https://via.placeholder.com/400", desc: "High quality red lentils." },
        { id: 202, name: "Moong Dal - Fortune (1kg)", price: 180, img: "https://via.placeholder.com/400", desc: "Split yellow gram, protein rich." },
        { id: 203, name: "Chana Dal - Annapurna (1kg)", price: 190, img: "https://via.placeholder.com/400", desc: "Split chickpeas for dal." },
        { id: 204, name: "Black Dal - Local (1kg)", price: 180, img: "https://via.placeholder.com/400", desc: "Black gram lentils." },
        { id: 205, name: "Chickpeas - Organic Nepal (1kg)", price: 140, img: "https://via.placeholder.com/400", desc: "Organic chickpeas." },
        { id: 206, name: "Rajma - Fortune (1kg)", price: 180, img: "https://via.placeholder.com/400", desc: "Red kidney beans." },
        { id: 207, name: "Kabuli Chana - Local (1kg)", price: 220, img: "https://via.placeholder.com/400", desc: "Large chickpeas." },
        { id: 208, name: "Green Peas Dry - Fresh Farm (1kg)", price: 130, img: "https://via.placeholder.com/400", desc: "Dried green peas." },
        { id: 209, name: "Soyabean - Fortune (1kg)", price: 140, img: "https://via.placeholder.com/400", desc: "Protein-rich soybeans." }
      ],
      "Spices & Masala": [
        { id: 301, name: "Turmeric Powder - Surya (200g)", price: 100, img: "https://via.placeholder.com/400", desc: "Pure turmeric powder." },
        { id: 302, name: "Red Chilli Powder - Everest (200g)", price: 120, img: "https://via.placeholder.com/400", desc: "Spicy red chilli powder." },
        { id: 303, name: "Coriander Powder - MDH (200g)", price: 90, img: "https://via.placeholder.com/400", desc: "Aromatic coriander powder." },
        { id: 304, name: "Cumin Powder - Local (200g)", price: 110, img: "https://via.placeholder.com/400", desc: "Ground cumin seeds." },
        { id: 305, name: "Garam Masala - MDH (100g)", price: 85, img: "https://via.placeholder.com/400", desc: "Blend of ground spices." },
        { id: 306, name: "Meat Masala - MDH (100g)", price: 70, img: "https://via.placeholder.com/400", desc: "Special meat masala blend." },
        { id: 307, name: "Chicken Masala - Everest (100g)", price: 70, img: "https://via.placeholder.com/400", desc: "Chicken curry masala." },
        { id: 308, name: "Chat Masala - MDH (100g)", price: 60, img: "https://via.placeholder.com/400", desc: "Tangy chat masala." },
        { id: 309, name: "Whole Cumin Seeds - Local (250g)", price: 125, img: "https://via.placeholder.com/400", desc: "Whole cumin seeds." },
        { id: 310, name: "Mustard Seeds - Local (250g)", price: 120, img: "https://via.placeholder.com/400", desc: "Mustard seeds for tempering." }
      ],
      "Flour & Grains": [
        { id: 401, name: "Wheat Flour - Annapurna (5kg)", price: 400, img: "https://via.placeholder.com/400", desc: "Whole wheat flour." },
        { id: 402, name: "Maida - Fortune (1kg)", price: 70, img: "https://via.placeholder.com/400", desc: "Refined wheat flour." },
        { id: 403, name: "Suji - Annapurna (1kg)", price: 100, img: "https://via.placeholder.com/400", desc: "Semolina for halwa." },
        { id: 404, name: "Corn Flour - Local (500g)", price: 50, img: "https://via.placeholder.com/400", desc: "Corn starch flour." },
        { id: 405, name: "Besan - Fortune (500g)", price: 100, img: "https://via.placeholder.com/400", desc: "Gram flour for pakoras." },
        { id: 406, name: "Millet Flour - Local (500g)", price: 100, img: "https://via.placeholder.com/400", desc: "Healthy millet flour." },
        { id: 407, name: "Buckwheat Flour (Kodo) - Local (500g)", price: 150, img: "https://via.placeholder.com/400", desc: "Traditional buckwheat flour." }
      ],
      "Oil & Ghee": [
        { id: 501, name: "Soybean Oil - Fortune (1L)", price: 240, img: "https://via.placeholder.com/400", desc: "Refined soybean oil." },
        { id: 502, name: "Sunflower Oil - Fortune (1L)", price: 250, img: "https://via.placeholder.com/400", desc: "Healthy sunflower oil." },
        { id: 503, name: "Mustard Oil - Dhara (1L)", price: 290, img: "https://via.placeholder.com/400", desc: "Pure mustard oil." },
        { id: 504, name: "Refined Oil - Patanjali (1L)", price: 280, img: "https://via.placeholder.com/400", desc: "Multi-purpose refined oil." },
        { id: 505, name: "Ghee - Patanjali (500ml)", price: 420, img: "https://via.placeholder.com/400", desc: "Pure cow ghee." },
        { id: 506, name: "Ghee - Amul (500ml)", price: 450, img: "https://via.placeholder.com/400", desc: "Amul pure ghee." }
      ],
      "Sugar & Salt": [
        { id: 601, name: "White Sugar - Local (1kg)", price: 90, img: "https://via.placeholder.com/400", desc: "Refined white sugar." },
        { id: 602, name: "Jaggery (Gud) - Local (1kg)", price: 60, img: "https://via.placeholder.com/400", desc: "Natural jaggery." },
        { id: 603, name: "Iodized Salt - Local (1kg)", price: 25, img: "https://via.placeholder.com/400", desc: "Table salt with iodine." },
        { id: 604, name: "Rock Salt - Local (500g)", price: 50, img: "https://via.placeholder.com/400", desc: "Natural rock salt." }
      ]
    },
    items: [] // Will be populated from subcategories
  },
  
  Beverages: {
    title: "Beverages",
    subcategories: {
      "Tea & Coffee": [
        { id: 701, name: "Black Tea - Tokla (500g)", price: 250, img: "https://via.placeholder.com/400", desc: "Premium black tea." },
        { id: 702, name: "Chupchap Chiya (200g)", price: 100, img: "https://via.placeholder.com/400", desc: "Traditional Nepali tea." },
        { id: 703, name: "Chupchap Chiya (500g)", price: 225, img: "https://via.placeholder.com/400", desc: "Traditional Nepali tea." },
        { id: 704, name: "Chupchap Chiya (1kg)", price: 450, img: "https://via.placeholder.com/400", desc: "Traditional Nepali tea." },
        { id: 705, name: "Green Tea - Lipton (25 bags)", price: 240, img: "https://via.placeholder.com/400", desc: "Healthy green tea." },
        { id: 706, name: "Lemon Green Tea - Lipton (25 bags)", price: 250, img: "https://via.placeholder.com/400", desc: "Refreshing lemon green tea." },
        { id: 707, name: "Instant Coffee - Nescafé (200g)", price: 380, img: "https://via.placeholder.com/400", desc: "Quick instant coffee." }
      ],
      "Soft Drinks": [
        { id: 801, name: "Coca-Cola (1.5L)", price: 180, img: "https://via.placeholder.com/400", desc: "Classic cola drink." },
        { id: 802, name: "Sprite (1L)", price: 120, img: "https://via.placeholder.com/400", desc: "Lemon-lime soda." },
        { id: 803, name: "Fanta (1L)", price: 120, img: "https://via.placeholder.com/400", desc: "Orange flavored drink." },
        { id: 804, name: "Pepsi (1L)", price: 120, img: "https://via.placeholder.com/400", desc: "Cola drink." },
        { id: 805, name: "Mountain Dew (500ml)", price: 100, img: "https://via.placeholder.com/400", desc: "Citrus blast drink." },
        { id: 806, name: "7Up (1L)", price: 120, img: "https://via.placeholder.com/400", desc: "Lemon-lime soda." }
      ],
      "Juice & Energy Drinks": [
        { id: 901, name: "Real Mango Juice (1L)", price: 210, img: "https://via.placeholder.com/400", desc: "Fresh mango juice." },
        { id: 902, name: "Real Orange Juice (1L)", price: 210, img: "https://via.placeholder.com/400", desc: "Fresh orange juice." },
        { id: 903, name: "Tropicana Mixed Fruit (1L)", price: 220, img: "https://via.placeholder.com/400", desc: "Mixed fruit juice." },
        { id: 904, name: "Frooti (1L)", price: 180, img: "https://via.placeholder.com/400", desc: "Mango drink." },
        { id: 905, name: "Red Bull (250ml)", price: 190, img: "https://via.placeholder.com/400", desc: "Energy drink." },
        { id: 906, name: "Glucon-D (500g)", price: 200, img: "https://via.placeholder.com/400", desc: "Glucose powder." }
      ],
      "Water": [
        { id: 1001, name: "Mineral Water - Kinley (1L)", price: 25, img: "https://via.placeholder.com/400", desc: "Purified drinking water." },
        { id: 1002, name: "Mineral Water - Aqua (1L)", price: 25, img: "https://via.placeholder.com/400", desc: "Purified drinking water." },
        { id: 1003, name: "Bisleri Water (1L)", price: 25, img: "https://via.placeholder.com/400", desc: "Mineral water." }
      ]
    },
    items: []
  },
  
  "Household Items": {
    title: "Household Essentials",
    subcategories: {
      "Cleaning": [
        { id: 1101, name: "Washing Powder - Surf Excel (1kg)", price: 240, img: "https://via.placeholder.com/400", desc: "Tough stain remover." },
        { id: 1102, name: "Washing Powder - Rin (1kg)", price: 180, img: "https://via.placeholder.com/400", desc: "Whiteness enhancer." },
        { id: 1103, name: "Tide (1kg)", price: 230, img: "https://via.placeholder.com/400", desc: "Deep cleaning powder." },
        { id: 1104, name: "Dishwash Liquid - Vim (500ml)", price: 160, img: "https://via.placeholder.com/400", desc: "Lemon scented dishwash." },
        { id: 1105, name: "Dishwash Bar - Vim (200g)", price: 40, img: "https://via.placeholder.com/400", desc: "Grease remover bar." },
        { id: 1106, name: "Floor Cleaner - Lizol (1L)", price: 220, img: "https://via.placeholder.com/400", desc: "Disinfectant floor cleaner." },
        { id: 1107, name: "Toilet Cleaner - Harpic (1L)", price: 210, img: "https://via.placeholder.com/400", desc: "Toilet bowl cleaner." },
        { id: 1108, name: "Phenyl - Local (1L)", price: 100, img: "https://via.placeholder.com/400", desc: "Disinfectant phenyl." }
      ],
      "Paper & Utility": [
        { id: 1201, name: "Tissue Paper - Bella (200 pulls)", price: 180, img: "https://via.placeholder.com/400", desc: "Soft tissue paper." },
        { id: 1202, name: "Toilet Paper - Softy (4 rolls)", price: 190, img: "https://via.placeholder.com/400", desc: "Soft toilet paper." },
        { id: 1203, name: "Kitchen Roll - Origami (2 rolls)", price: 150, img: "https://via.placeholder.com/400", desc: "Absorbent kitchen towel." },
        { id: 1204, name: "Garbage Bags - Local (10 pcs)", price: 120, img: "https://via.placeholder.com/400", desc: "Strong garbage bags." },
        { id: 1205, name: "Matchbox - Local (10 pcs)", price: 25, img: "https://via.placeholder.com/400", desc: "Safety matches." },
        { id: 1206, name: "Candles - Local (10 pcs)", price: 90, img: "https://via.placeholder.com/400", desc: "White candles." },
        { id: 1207, name: "Mosquito Coil - GoodKnight (10 pcs)", price: 120, img: "https://via.placeholder.com/400", desc: "Mosquito repellent coils." },
        { id: 1208, name: "Room Freshener - Air Wick (300ml)", price: 350, img: "https://via.placeholder.com/400", desc: "Pleasant room fragrance." }
      ]
    },
    items: []
  },
  
  "Packaged Foods": {
    title: "Packaged Foods",
    subcategories: {
      "Biscuits": [
        { id: 1301, name: "Marie Gold - Britannia (200g)", price: 50, img: "https://via.placeholder.com/400", desc: "Classic tea biscuits." },
        { id: 1302, name: "Good Day - Britannia (200g)", price: 80, img: "https://via.placeholder.com/400", desc: "Butter cookies." },
        { id: 1303, name: "Good Day - Britannia (12 pcs)", price: 100, img: "https://via.placeholder.com/400", desc: "Butter cookies pack." },
        { id: 1304, name: "Tiger - Britannia (12 pcs)", price: 100, img: "https://via.placeholder.com/400", desc: "Glucose biscuits." },
        { id: 1305, name: "Bourbon - Britannia (120g)", price: 55, img: "https://via.placeholder.com/400", desc: "Chocolate cream biscuits." },
        { id: 1306, name: "Bourbon - Britannia (12 pcs)", price: 100, img: "https://via.placeholder.com/400", desc: "Chocolate cream pack." },
        { id: 1307, name: "Oreo - Nabisco (120g)", price: 55, img: "https://via.placeholder.com/400", desc: "Chocolate sandwich cookies." },
        { id: 1308, name: "Oreo - Nabisco (12 pcs)", price: 100, img: "https://via.placeholder.com/400", desc: "Oreo cookies pack." },
        { id: 1309, name: "Hide & Seek - Britannia (150g)", price: 60, img: "https://via.placeholder.com/400", desc: "Chocolate chip cookies." }
      ],
      "Snacks": [
        { id: 1401, name: "Lays - Lay's (90g)", price: 50, img: "https://via.placeholder.com/400", desc: "Crispy potato chips." },
        { id: 1402, name: "Kurkure - PepsiCo (90g)", price: 55, img: "https://via.placeholder.com/400", desc: "Crunchy snacks." },
        { id: 1403, name: "Current Kurkure", price: 50, img: "https://via.placeholder.com/400", desc: "Spicy kurkure snack." },
        { id: 1404, name: "2 PM Kurkure", price: 50, img: "https://via.placeholder.com/400", desc: "Evening snack." },
        { id: 1405, name: "Namkeen Mix - Haldiram (200g)", price: 100, img: "https://via.placeholder.com/400", desc: "Mixed namkeen." },
        { id: 1406, name: "Bhujiya - Beli (500g)", price: 50, img: "https://via.placeholder.com/400", desc: "Crispy bhujiya." },
        { id: 1407, name: "Bhujiya - Beli (1kg)", price: 100, img: "https://via.placeholder.com/400", desc: "Crispy bhujiya." },
        { id: 1408, name: "Bhujiya - Bikaji (200g)", price: 100, img: "https://via.placeholder.com/400", desc: "Premium bhujiya." },
        { id: 1409, name: "Bhujiya - Bikaji (400g)", price: 190, img: "https://via.placeholder.com/400", desc: "Premium bhujiya." },
        { id: 1410, name: "Bhujiya - Bikaji (1kg)", price: 450, img: "https://via.placeholder.com/400", desc: "Premium bhujiya." }
      ],
      "Instant Food": [
        { id: 1501, name: "Wai Wai Noodles (75g × 5)", price: 100, img: "https://via.placeholder.com/400", desc: "Popular instant noodles." },
        { id: 1502, name: "Pasta - Local (500g)", price: 50, img: "https://via.placeholder.com/400", desc: "Macaroni pasta." },
        { id: 1503, name: "Rumpum (1 pcs)", price: 20, img: "https://via.placeholder.com/400", desc: "Instant noodles." },
        { id: 1504, name: "Rumpum (6 pcs)", price: 100, img: "https://via.placeholder.com/400", desc: "Instant noodles pack." },
        { id: 1505, name: "Current (1 pcs)", price: 50, img: "https://via.placeholder.com/400", desc: "Instant noodles." },
        { id: 1506, name: "Current (5 pcs)", price: 200, img: "https://via.placeholder.com/400", desc: "Instant noodles pack." },
        { id: 1507, name: "Current Spicy (1 pcs)", price: 50, img: "https://via.placeholder.com/400", desc: "Spicy instant noodles." },
        { id: 1508, name: "Current Spicy (5 pcs)", price: 200, img: "https://via.placeholder.com/400", desc: "Spicy noodles pack." },
        { id: 1509, name: "2 PM Spicy (1 pcs)", price: 50, img: "https://via.placeholder.com/400", desc: "Spicy instant noodles." },
        { id: 1510, name: "2 PM Spicy (5 pcs)", price: 200, img: "https://via.placeholder.com/400", desc: "Spicy noodles pack." }
      ],
      "Sauces & Spreads": [
        { id: 1601, name: "Tomato Ketchup - Kissan (500g)", price: 180, img: "https://via.placeholder.com/400", desc: "Tangy tomato ketchup." },
        { id: 1602, name: "Mayonnaise - Veeba (250g)", price: 190, img: "https://via.placeholder.com/400", desc: "Creamy mayonnaise." },
        { id: 1603, name: "Jam - Kissan (500g)", price: 210, img: "https://via.placeholder.com/400", desc: "Fruit jam." },
        { id: 1604, name: "Peanut Butter - Pintola (350g)", price: 320, img: "https://via.placeholder.com/400", desc: "Creamy peanut butter." },
        { id: 1605, name: "Pickle - Druk (500g)", price: 250, img: "https://via.placeholder.com/400", desc: "Spicy mixed pickle." },
        { id: 1606, name: "Honey - Dabur (250g)", price: 350, img: "https://via.placeholder.com/400", desc: "Pure natural honey." }
      ]
    },
    items: []
  },
  
  "Beauty Items": {
    title: "Beauty & Personal Care",
    subcategories: {
      "Soap & Body": [
        { id: 1701, name: "Lux Soap (150g)", price: 50, img: "https://via.placeholder.com/400", desc: "Beauty soap." },
        { id: 1702, name: "Dettol Soap (125g)", price: 60, img: "https://via.placeholder.com/400", desc: "Antibacterial soap." },
        { id: 1703, name: "Pears Soap (125g)", price: 65, img: "https://via.placeholder.com/400", desc: "Gentle transparent soap." },
        { id: 1704, name: "Dove Soap (100g)", price: 80, img: "https://via.placeholder.com/400", desc: "Moisturizing cream bar." },
        { id: 1705, name: "Lifebuoy Soap (125g)", price: 50, img: "https://via.placeholder.com/400", desc: "Germ protection soap." }
      ],
      "Hair Care": [
        { id: 1801, name: "Shampoo - Sunsilk (340ml)", price: 320, img: "https://via.placeholder.com/400", desc: "Hair care shampoo." },
        { id: 1802, name: "Shampoo - Clinic Plus (650ml)", price: 480, img: "https://via.placeholder.com/400", desc: "Strong and long shampoo." },
        { id: 1803, name: "Pantene Shampoo (340ml)", price: 350, img: "https://via.placeholder.com/400", desc: "Pro-V hair shampoo." },
        { id: 1804, name: "Head & Shoulders (340ml)", price: 370, img: "https://via.placeholder.com/400", desc: "Anti-dandruff shampoo." },
        { id: 1805, name: "Hair Oil - Dabur Amla (300ml)", price: 210, img: "https://via.placeholder.com/400", desc: "Amla hair oil." },
        { id: 1806, name: "Hair Oil - Parachute (300ml)", price: 200, img: "https://via.placeholder.com/400", desc: "Coconut hair oil." }
      ],
      "Oral Care": [
        { id: 1901, name: "Toothpaste - Colgate (200g)", price: 190, img: "https://via.placeholder.com/400", desc: "Cavity protection." },
        { id: 1902, name: "Toothpaste - Pepsodent (200g)", price: 180, img: "https://via.placeholder.com/400", desc: "Germicheck formula." },
        { id: 1903, name: "Toothbrush - Colgate (2 pcs)", price: 160, img: "https://via.placeholder.com/400", desc: "Soft bristle brush." },
        { id: 1904, name: "Mouthwash - Listerine (500ml)", price: 550, img: "https://via.placeholder.com/400", desc: "Fresh breath mouthwash." }
      ],
      "Personal Care": [
        { id: 2001, name: "Deodorant - Nivea (150ml)", price: 320, img: "https://via.placeholder.com/400", desc: "Long-lasting freshness." },
        { id: 2002, name: "Deodorant - Axe (150ml)", price: 300, img: "https://via.placeholder.com/400", desc: "Body spray deodorant." },
        { id: 2003, name: "Perfume - Fogg (50ml)", price: 350, img: "https://via.placeholder.com/400", desc: "Long-lasting perfume." },
        { id: 2004, name: "Razor - Gillette (1 pc)", price: 250, img: "https://via.placeholder.com/400", desc: "Precision razor." },
        { id: 2005, name: "Shaving Cream - Gillette (100g)", price: 180, img: "https://via.placeholder.com/400", desc: "Smooth shaving cream." },
        { id: 2006, name: "Sanitary Pads - Whisper (20 pads)", price: 320, img: "https://via.placeholder.com/400", desc: "Ultra soft pads." },
        { id: 2007, name: "Hand Sanitizer - Dettol (200ml)", price: 120, img: "https://via.placeholder.com/400", desc: "Germ protection sanitizer." }
      ]
    },
    items: []
  },
  
  "Baby Care": {
    title: "Baby Care Products",
    subcategories: {
      "Baby Essentials": [
        { id: 2101, name: "Pampers Diapers S (20 pcs)", price: 450, img: "https://via.placeholder.com/400", desc: "Soft baby diapers small size." },
        { id: 2102, name: "Pampers Diapers M (20 pcs)", price: 470, img: "https://via.placeholder.com/400", desc: "Soft baby diapers medium size." }
      ]
    },
    items: []
  }
};
let cart = [];
let allProducts = [];
let currentQty = 1;
let currentSubcategory = null;

// Populate items from subcategories
Object.values(storeData).forEach(cat => {
  if (cat.subcategories) {
    Object.values(cat.subcategories).forEach(subcat => {
      cat.items = cat.items.concat(subcat);
    });
  }
});

// Flatten all products into single array
Object.values(storeData).forEach(cat => {
  allProducts = allProducts.concat(cat.items);
});

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  displayPopularProducts();
  setupSearchBar();
  updateCartCount();
});

// ===========================
// DISPLAY POPULAR PRODUCTS
// ===========================
function displayPopularProducts() {
  const container = document.getElementById('popularProducts');
  const popular = allProducts.slice(0, 10);
  
  container.innerHTML = popular.map(item => `
    <div class="product-card" onclick="openProductDetail('${getCategoryByProductId(item.id)}', ${item.id}, 'home')">
      <div class="product-img">${item.name.substring(0, 2)}</div>
      <h3>${item.name}</h3>
      <p class="price">NRS ${item.price}</p>
      <button class="add-cart" onclick="openProductDetail('${getCategoryByProductId(item.id)}', ${item.id}, 'home')">View Details</button>
    </div>
  `).join('');
}

// ===========================
// GET CATEGORY BY PRODUCT ID
// ===========================
function getCategoryByProductId(id) {
  for (let cat in storeData) {
    if (storeData[cat].items.find(item => item.id === id)) {
      return cat;
    }
  }
  return 'Grocery';
}

// ===========================
// NAVIGATION FUNCTIONS
// ===========================
function goHome() {
  currentSubcategory = null;
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('dynamic-view').style.display = 'none';
  window.scrollTo(0, 0);
}

function openCategory(category, subcategory = null) {
  const data = storeData[category];
  if (!data) return;

  currentSubcategory = subcategory;

  document.getElementById("home-view").style.display = "none";
  const dynamicView = document.getElementById("dynamic-view");
  dynamicView.style.display = "block";

  let items = data.items;
  if (subcategory && data.subcategories && data.subcategories[subcategory]) {
    items = data.subcategories[subcategory];
  }
  let title = subcategory ? `${category} - ${subcategory}` : data.title;

  dynamicView.innerHTML = `
    <section class="products">
      <h2>${title}</h2>
      <div class="product-list">
        ${items.map(item => `
          <div class="product-card" onclick="openProductDetail('${category}', ${item.id}, 'category')">
            <div class="product-img">${item.name.substring(0, 2)}</div>
            <h3>${item.name}</h3>
            <p class="price">NRS ${item.price}</p>
            <button class="add-cart" onclick="openProductDetail('${category}', ${item.id}, 'category')">View Details</button>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
}

function openAllProducts() {
  currentSubcategory = null;
  document.getElementById("home-view").style.display = "none";
  const dynamicView = document.getElementById("dynamic-view");
  dynamicView.style.display = "block";

  dynamicView.innerHTML = `
    <section class="products">
      <h2>All Products</h2>
      <div class="product-list">
        ${allProducts.map(item => `
          <div class="product-card" onclick="openProductDetail('${getCategoryByProductId(item.id)}', ${item.id}, 'all')">
            <div class="product-img">${item.name.substring(0, 2)}</div>
            <h3>${item.name}</h3>
            <p class="price">NRS ${item.price}</p>
            <button class="add-cart" onclick="openProductDetail('${getCategoryByProductId(item.id)}', ${item.id}, 'all')">View Details</button>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
}

function openProductDetail(cat, id, backAction = 'category') {
  const item = storeData[cat].items.find(p => p.id === id);
  if (!item) return;

  document.getElementById('home-view').style.display = 'none';
  const dv = document.getElementById('dynamic-view');
  dv.style.display = 'block';
  currentQty = 1;

  let backButtonHtml;
  if (backAction === 'home') {
    backButtonHtml = `<button class="back-btn" onclick="goHome()">← Back to Home</button>`;
  } else if (backAction === 'all') {
    backButtonHtml = `<button class="back-btn" onclick="openAllProducts()">← Back to All Products</button>`;
  } else {
    const subcatParam = currentSubcategory ? `, '${currentSubcategory}'` : '';
    backButtonHtml = `<button class="back-btn" onclick="openCategory('${cat}'${subcatParam})">← Back to ${cat}${currentSubcategory ? ' - ' + currentSubcategory : ''}</button>`;
  }

  dv.innerHTML = `
    <div class="product-detail-container">
      ${backButtonHtml}
      <div class="detail-flex">
        <div class="detail-img">
          <img src="${item.img}" alt="${item.name}" style="max-width:100%; border-radius:15px;">
        </div>
        <div class="detail-info">
          <h1>${item.name}</h1>
          <p class="detail-desc">${item.desc}</p>
          <p class="price" style="font-size:32px;">NRS ${item.price}</p>
          
          <div class="qty">
            <button onclick="changeQty(-1)">-</button>
            <span id="detail-qty-val">${currentQty}</span>
            <button onclick="changeQty(1)">+</button>
          </div>

          <button class="add-cart" style="padding:15px; font-size:18px;" onclick="addToCartFromDetail(${item.id})">
            Add to Cart
          </button>

          <div class="payment-options">
            <h4>Secure Payment Options:</h4>
            <p>✓ Esewa | ✓ Khalti | ✓ Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  `;

  window.scrollTo(0, 0);
}

// ===========================
// QUANTITY CONTROL
// ===========================
function changeQty(amt) {
  let span = document.getElementById('detail-qty-val');
  if (!span) return;
  
  currentQty += amt;
  if (currentQty < 1) currentQty = 1;
  
  span.innerText = currentQty;
}

// ===========================
// CART FUNCTIONS
// ===========================
function addToCartFromDetail(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += currentQty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: currentQty
    });
  }

  updateCartCount();
  alert(`${product.name} added to cart!`);
  currentQty = 1;
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').innerText = totalItems;
}

function openCart() {
  const modal = document.getElementById('cartModal');
  modal.classList.add('active');
  displayCartItems();
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  modal.classList.remove('active');
}

function displayCartItems() {
  const container = document.getElementById('cartItems');
  const totalContainer = document.getElementById('cartTotal');

  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-cart"><p>Your cart is empty</p></div>';
    totalContainer.innerText = 'Total: NRS 0';
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p class="price">NRS ${item.price}</p>
      </div>
      <div class="cart-item-qty">
        <button onclick="updateCartQty(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateCartQty(${index}, 1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalContainer.innerText = `Total: NRS ${total}`;
}

function updateCartQty(index, change) {
  cart[index].quantity += change;
  
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  
  updateCartCount();
  displayCartItems();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  displayCartItems();
}

// ===========================
// LOGIN MODAL
// ===========================
function openLogin() {
  const modal = document.getElementById('loginModal');
  modal.classList.add('active');
}

function closeLogin() {
  const modal = document.getElementById('loginModal');
  modal.classList.remove('active');
}

// ===========================
// SEARCH FUNCTIONALITY
// ===========================
function setupSearchBar() {
  const searchBar = document.getElementById('searchBar');
  const suggestions = document.getElementById('searchSuggestions');

  searchBar.addEventListener('input', function(e) {
    const query = e.target.value.trim().toLowerCase();

    if (query.length === 0) {
      suggestions.classList.remove('active');
      return;
    }

    const matches = allProducts.filter(product => 
      product.name.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      suggestions.innerHTML = matches.slice(0, 5).map(product => `
        <div class="suggestion-item" onclick="selectProduct(${product.id})">
          ${product.name} - NRS ${product.price}
        </div>
      `).join('');
      suggestions.classList.add('active');
    } else {
      suggestions.innerHTML = '<div class="suggestion-item">No products found</div>';
      suggestions.classList.add('active');
    }
  });

  // Close suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchBar.contains(e.target) && !suggestions.contains(e.target)) {
      suggestions.classList.remove('active');
    }
  });
}

function selectProduct(productId) {
  const category = getCategoryByProductId(productId);
  openProductDetail(category, productId, 'home');
  
  document.getElementById('searchBar').value = '';
  document.getElementById('searchSuggestions').classList.remove('active');
}

// ===========================
// CLOSE MODALS ON OUTSIDE CLICK
// ===========================
window.onclick = function(event) {
  const loginModal = document.getElementById('loginModal');
  const cartModal = document.getElementById('cartModal');
  
  if (event.target === loginModal) {
    closeLogin();
  }
  if (event.target === cartModal) {
    closeCart();
  }
}
// Search dynamic placeholder
const searchBar = document.getElementById("searchBar");
const hints = ["Rice", "Oil", "Tea", "Soap", "Noodles"];
let hIdx = 0;
setInterval(() => {
    if(searchBar) searchBar.setAttribute("placeholder", `Search ${hints[hIdx]}...`);
    hIdx = (hIdx + 1) % hints.length;
}, 2500);
