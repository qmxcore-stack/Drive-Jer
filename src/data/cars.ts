export interface Car {
  id: string;
  name: string;
  type: 'MPV' | 'Others Car';
  pricePerDay: number;
  image: string;
  transmission: 'Auto' | 'Manual';
  seats: number;
  luggage: number;
  fuel: string;
}

export const featuredCars: Car[] = [
  // MPV (11 Cars)
  {
    id: 'mpv-1',
    name: 'Vellfire ZG',
    type: 'MPV',
    pricePerDay: 650,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/1.jpg',
    transmission: 'Auto',
    seats: 7,
    luggage: 4,
    fuel: 'Petrol'
  },
  {
    id: 'mpv-2',
    name: 'Alphard SC',
    type: 'MPV',
    pricePerDay: 700,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2.jpg',
    transmission: 'Auto',
    seats: 7,
    luggage: 4,
    fuel: 'Petrol'
  },
  {
    id: 'mpv-3',
    name: 'Vellfire ZA',
    type: 'MPV',
    pricePerDay: 600,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/f41da4a9d3f1df9ed549a715fab41dee_1742429993.webp',
    transmission: 'Auto',
    seats: 7,
    luggage: 4,
    fuel: 'Petrol'
  },
  {
    id: 'mpv-4',
    name: 'Starex',
    type: 'MPV',
    pricePerDay: 450,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/1742199423923.webp',
    transmission: 'Auto',
    seats: 11,
    luggage: 4,
    fuel: 'Diesel'
  },
  {
    id: 'mpv-5',
    name: 'Staria',
    type: 'MPV',
    pricePerDay: 700,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/Hyundai-Staria-27.png',
    transmission: 'Auto',
    seats: 10,
    luggage: 4,
    fuel: 'Diesel'
  },
  {
    id: 'mpv-6',
    name: 'Kia Karnival',
    type: 'MPV',
    pricePerDay: 650,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/2023_Kia_Carnival_Review_Lead_In.jpeg',
    transmission: 'Auto',
    seats: 11,
    luggage: 4,
    fuel: 'Diesel'
  },
  {
    id: 'mpv-7',
    name: 'Voxy ZS',
    type: 'MPV',
    pricePerDay: 480,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/0f99ef4633f9835a35b5e4e27c1b72b0-2992062811462994072.webp',
    transmission: 'Auto',
    seats: 7,
    luggage: 3,
    fuel: 'Petrol'
  },
  {
    id: 'mpv-8',
    name: 'Voxy Kirameki',
    type: 'MPV',
    pricePerDay: 450,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/7.jpeg',
    transmission: 'Auto',
    seats: 7,
    luggage: 3,
    fuel: 'Petrol'
  },
  {
    id: 'mpv-9',
    name: 'Nissan Serena',
    type: 'MPV',
    pricePerDay: 380,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/Nissan-Serena-01.png',
    transmission: 'Auto',
    seats: 7,
    luggage: 4,
    fuel: 'Petrol'
  },
  {
    id: 'mpv-10',
    name: 'Step wagon',
    type: 'MPV',
    pricePerDay: 480,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/Honda-Spada-Stepwagon-2_0-HEV-MPV-White-Silver-Black-Promotion-Low-Installment-Singapore-New-Car-Cheap-New-Car-Best-Cheap-Japanese-Car-Front-View_JPG_1920x.png',
    transmission: 'Auto',
    seats: 7,
    luggage: 3,
    fuel: 'Petrol'
  },
  {
    id: 'mpv-11',
    name: 'Alza New',
    type: 'MPV',
    pricePerDay: 220,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/1b521e7dee9e4544ae4203797cddfb41_1787642994.png',
    transmission: 'Auto',
    seats: 7,
    luggage: 3,
    fuel: 'Petrol'
  },

  // OTHERS CAR (9 Cars)
  {
    id: 'other-1',
    name: 'VIOS G',
    type: 'Others Car',
    pricePerDay: 180,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Toyota_Vios_1.5_VVT-i_G_%28IV%29_%E2%80%93_f_13032025.jpg/960px-Toyota_Vios_1.5_VVT-i_G_%28IV%29_%E2%80%93_f_13032025.jpg',
    transmission: 'Auto',
    seats: 5,
    luggage: 3,
    fuel: 'Petrol'
  },
  {
    id: 'other-2',
    name: 'S70',
    type: 'Others Car',
    pricePerDay: 180,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/proton-s70-launch-2026-lite-mekanika-27.jpg',
    transmission: 'Auto',
    seats: 5,
    luggage: 3,
    fuel: 'Petrol'
  },
  {
    id: 'other-3',
    name: 'X50',
    type: 'Others Car',
    pricePerDay: 220,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/2025_Proton_X50_facelift.jpg/960px-2025_Proton_X50_facelift.jpg',
    transmission: 'Auto',
    seats: 5,
    luggage: 3,
    fuel: 'Petrol'
  },
  {
    id: 'other-4',
    name: 'X70',
    type: 'Others Car',
    pricePerDay: 260,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2024_Proton_X70_Executive_front_%281%29.jpg/960px-2024_Proton_X70_Executive_front_%281%29.jpg',
    transmission: 'Auto',
    seats: 5,
    luggage: 4,
    fuel: 'Petrol'
  },
  {
    id: 'other-5',
    name: 'X90',
    type: 'Others Car',
    pricePerDay: 320,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/Gallery.webp',
    transmission: 'Auto',
    seats: 7,
    luggage: 4,
    fuel: 'Hybrid'
  },
  {
    id: 'other-6',
    name: 'Honda HRV RS',
    type: 'Others Car',
    pricePerDay: 260,
    image: 'https://kitkecemasanhomeopathy.com/wp-content/uploads/2026/09/Honda-HR-V-RSBlack-Interior_Ext-2-850x567-1.png',
    transmission: 'Auto',
    seats: 5,
    luggage: 3,
    fuel: 'Petrol'
  },
  {
    id: 'other-7',
    name: 'Honda CRV V spec',
    type: 'Others Car',
    pricePerDay: 320,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Honda_CR-V_e-HEV_Elegance_AWD_%28VI%29_%E2%80%93_f_14072024.jpg/960px-Honda_CR-V_e-HEV_Elegance_AWD_%28VI%29_%E2%80%93_f_14072024.jpg',
    transmission: 'Auto',
    seats: 5,
    luggage: 4,
    fuel: 'Petrol'
  },
  {
    id: 'other-8',
    name: 'Emas 7',
    type: 'Others Car',
    pricePerDay: 260,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Geely_Galaxy_E5_001.jpg',
    transmission: 'Auto',
    seats: 5,
    luggage: 3,
    fuel: 'Electric'
  },
  {
    id: 'other-9',
    name: 'Honda City S',
    type: 'Others Car',
    pricePerDay: 160,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Honda_City_1.5_i-VTEC_V_%28VIII%2C_Facelift%29_%E2%80%93_f_22032025.jpg/960px-Honda_City_1.5_i-VTEC_V_%28VIII%2C_Facelift%29_%E2%80%93_f_22032025.jpg',
    transmission: 'Auto',
    seats: 5,
    luggage: 3,
    fuel: 'Petrol'
  }
];
