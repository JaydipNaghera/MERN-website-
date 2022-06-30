const products = [
  {
    name: "HD 350BT Headphone",
    image:
      "/images/HD_350BT_Black_Isofront_Product_Shot_cutout_RGB.psd_3fd91f48-da1c-4936-997f-73538462ea9f_1000x.png",
    description:
      "HD 350 BT Wireless headphones USB-C charging cable Quick Guide Safety Guide",
    brand: "Asus",
    category: "Electronics",
    price: 8990,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
  },

  {
    name: "OnePlus Nord CE 2 5G ",
    image: "/images/41HSkMxLEJL._SX300_SY300_QL70_FMwebp_.jpg",
    description: "OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
    brand: "Asus",
    category: "Electronics",
    price: 24999.49,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
  },
  {
    name: "Asus ROG Mouse",
    image: "/images/51g13u-id8L._SX679_.jpg",
    description:
      "Asus ROG Pugio Optical Wired Gaming Mouse with a Truly ambidextrous Design Featuring configurable Side Buttons, Exclusive Push-fit Switch Socket Design, and Aura RGB Lighting with Aura Sync Support",
    brand: "Asus",
    category: "Electronics",
    price: 7599,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
  },
  {
    name: "boAt Airdopes 131 RTL",
    image: "/images/0f4134e3-1f61-4a2b-9ffa-5a9191bdfd8221081121.jpg",
    description:
      "boAt Airdopes 131 RTL Truly Wireless Buds (Midnight Blue) with 13 mm Drivers, Bluetooth 5.0, Up to 12 hours playback time",
    brand: "Asus",
    category: "Electronics",
    price: 999.89,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
  },
  {
    name: "Razer DeathAdder Mouse",
    image: "/images/51KmYlNX6lL._SX679_.jpg",
    description:
      "Roll over image to zoom in Razer DeathAdder Essential Gaming Mouse - Black - RZ01-03850100-R3M1",
    brand: "Razer",
    category: "Electronics",
    price: 1440.12,
    countInStock: 7,
    rating: 0,
    numReviews: 10,
  },
  {
    name: "Apple iPad",
    image: "/images/6366b37d-809a-4e14-9b21-31d65c690a4921161307.jpg",
    description:
      "Apple iPad (9th Generation) MK2K3HN/A 64 GB Wi-Fi - Space Grey",
    brand: "Asus",
    category: "Electronics",
    price: 29900.78,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
  },
  {
    name: "Apple I Watch",
    image: "/images/61CcnhvKSBL._SL1500_.jpg",
    description: "Apple I Watch Series 7 |2 Pin Magnet Charger| Calling Watch|",
    brand: "Asus",
    category: "Electronics",
    price: 30000.98,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
  },

  {
    name: "Google Home Smart Voice",
    image:
      "/images/google-home-smart-voice-activated-speaker-white-grey-500x500.jpg",
    description: "Google Home Smart Voice Activated Speaker, White/Grey",
    brand: "Google",
    category: "Electronics",
    price: 7499.0,
    countInStock: 0,
    rating: 0,
    numReviews: 12,
  },

  {
    name: "Mi Smart Band 5 ",
    image: "/images/71X8NdnCsvL._SX679_.jpg",
    description:
      "Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1 (2.8 cm) AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Womens Health Tracking (Black)",
    brand: "MI",
    category: "Electronics",
    price: 2349,
    countInStock: 10,
    rating: 0,
    numReviews: 12,
  },
  // {
  //   name: "boAt Airdopes 121v2 TWS Earbuds",
  //   image: "/images/boatHeadfone.jpg",
  //   description:
  //     "boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black) ",
  //   brand: "Boat",
  //   category: "Electronics",
  //   price: 1299,
  //   countInStock: 10,
  //   // rating: 4.5,
  //   numReviews: 12,
  // },
  // {
  //   name: "Micromax IN 1b (Purple, 32 GB)",
  //   image: "/images/micromaxInB.jpg",
  //   description:
  //     "Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage.",
  //   brand: "Micromax",
  //   category: "Electronics",
  //   price: 9999.0,
  //   countInStock: 7,
  //   // rating: 4.0,
  //   numReviews: 8,
  // },
  // // {
  // //   name: "Cannon EOS 80D DSLR Camera",
  // //   image: "/images/shopping.jpg",
  // //   description:
  // //     "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
  // //   brand: "Cannon",
  // //   category: "Electronics",
  // //   price: 93999.0,
  // //   countInStock: 5,
  // //   // rating: 3,
  // //   numReviews: 12,
  // // },
  // {
  //   name: "Sony Playstation 4 Pro White Version",
  //   image: "/images/playstation.jpg",
  //   description:
  //     "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
  //   brand: "Sony",
  //   category: "Electronics",
  //   price: 49990,
  //   countInStock: 11,
  //   // rating: 5,
  //   numReviews: 12,
  // },
  // {
  //   name: "Asus ROG Phone 5",
  //   image: "/images/asusrogphone5.jpg",
  //   description:
  //     "Asus ROG Phone 5 ZS673KS / I005DA, 5G, International Version (No Warranty), Dual 128GB 12GB RAM, Tencent Games with Google Play, White - GSM Unlocked",
  //   brand: "Asus",
  //   category: "Electronics",

  //   price: 57999,
  //   countInStock: 10,
  //   // rating: 4.5,
  //   numReviews: 12,
  // },
];

module.exports = products;
