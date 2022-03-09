
const categories = [
  { id: 3, name: 'Cruiser' },
  { id: 2, name: 'Dual-Sport' },
  { id: 1, name: 'Naked' },
  { id: 4, name: 'Sport' }
]

const manufacturers = [
  { id: 5, name: 'BMW' },
  { id: 2, name: 'Honda' },
  { id: 1, name: 'Indian' } ,
  { id: 3, name: 'Triumph' },
  { id: 4, name: 'Victory' }
]

let motorcycles = [
  {
    id: 1,
    manufacturer: manufacturers[2],
    category: categories[2],
    model: 'FTR 1200 S',
    year: '2019',
    cc: 1203,
    hp: 120
  },
  {
    id: 2,
    manufacturer: manufacturers[1],
    category: categories[2],
    model: 'CB 1100',
    year: '2017',
    cc: 1140,
    hp: 89
  },
  {
    id: 3,
    manufacturer: manufacturers[1],
    category: categories[1],
    model: 'Africa Twin',
    year: '2019',
    cc: 998,
    hp: 94
  },
  {
    id: 4,
    manufacturer: manufacturers[3],
    category: categories[2],
    model: 'Thruxton',
    year: '2019',
    cc: 1200,
    hp: 97
  },
  {
    id: 5,
    manufacturer: manufacturers[4],
    category: categories[0],
    model: 'Judge',
    year: '2014',
    cc: 1731,
    hp: 85
  }
]

module.exports = { categories, manufacturers, motorcycles }
