const ICONS = {
  revenue: "assets/images/revenueStat.png",
  orders: "assets/images/ordersStat.png",
  averageCheck: "assets/images/CheckStat.png",
  foodRating: "assets/images/RatingStat.png",
  inventoryRisk: "assets/images/InventoryStat.png",
  arrowUp: "assets/images/arrowUp.png",
};

const statCardsByPeriod = {
  today: [
    {
      key: "Revenue",
      icon: ICONS.revenue,
      label: "Revenue",
      value: "30567,74",
      period: "vs. yesterday",
      procentage: "+12%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "Orders",
      icon: ICONS.orders,
      label: "Orders",
      value: "137",
      period: "vs. yesterday",
      procentage: "+12%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "AverageCheck",
      icon: ICONS.averageCheck,
      label: "Average Check",
      value: "32,19",
      period: "vs. yesterday",
      procentage: "+12%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "FoodRating",
      icon: ICONS.foodRating,
      label: "Food Rating",
      value: "5,0",
      period: "vs. yesterday",
      procentage: "+12%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "InventoryRisk",
      icon: ICONS.inventoryRisk,
      label: "Inventory at Risk",
      value: "3",
      period: "vs. yesterday",
      procentage: "+2%",
      arrowIcon: ICONS.arrowUp,
    },
  ],
  "7d": [
    {
      key: "Revenue",
      icon: ICONS.revenue,
      label: "Revenue",
      value: "199067,00",
      period: "vs. previous 7 days",
      procentage: "+8%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "Orders",
      icon: ICONS.orders,
      label: "Orders",
      value: "920",
      period: "vs. previous 7 days",
      procentage: "+6%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "AverageCheck",
      icon: ICONS.averageCheck,
      label: "Average Check",
      value: "31,84",
      period: "vs. previous 7 days",
      procentage: "+3%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "FoodRating",
      icon: ICONS.foodRating,
      label: "Food Rating",
      value: "4,9",
      period: "vs. previous 7 days",
      procentage: "+1%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "InventoryRisk",
      icon: ICONS.inventoryRisk,
      label: "Inventory at Risk",
      value: "5",
      period: "vs. previous 7 days",
      procentage: "+2%",
      arrowIcon: ICONS.arrowUp,
    },
  ],
  "30d": [
    {
      key: "Revenue",
      icon: ICONS.revenue,
      label: "Revenue",
      value: "824320,50",
      period: "vs. previous 30 days",
      procentage: "+11%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "Orders",
      icon: ICONS.orders,
      label: "Orders",
      value: "3914",
      period: "vs. previous 30 days",
      procentage: "+9%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "AverageCheck",
      icon: ICONS.averageCheck,
      label: "Average Check",
      value: "32,43",
      period: "vs. previous 30 days",
      procentage: "+4%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "FoodRating",
      icon: ICONS.foodRating,
      label: "Food Rating",
      value: "4,9",
      period: "vs. previous 30 days",
      procentage: "+1%",
      arrowIcon: ICONS.arrowUp,
    },
    {
      key: "InventoryRisk",
      icon: ICONS.inventoryRisk,
      label: "Inventory at Risk",
      value: "7",
      period: "vs. previous 30 days",
      procentage: "+4%",
      arrowIcon: ICONS.arrowUp,
    },
  ],
};

const revenueChartByPeriod = {
  today: {
    hourly: {
      labels: ["11:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      revenue: [5000, 40000, 30000, 50000, 10000, 0],
      orders: [4, 32, 25, 41, 9, 1],
    },
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      revenue: [18000, 22000, 19500, 26000, 38000, 45000, 30567],
      orders: [98, 110, 104, 121, 162, 188, 137],
    },
  },
  "7d": {
    hourly: {
      labels: ["11:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      revenue: [24500, 51000, 39000, 56500, 22000, 6070],
      orders: [111, 236, 181, 257, 105, 30],
    },
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      revenue: [18000, 22000, 19500, 26000, 38000, 45000, 30567],
      orders: [98, 110, 104, 121, 162, 188, 137],
    },
  },
  "30d": {
    hourly: {
      labels: ["11:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      revenue: [101200, 205400, 164800, 228000, 98600, 26320],
      orders: [472, 955, 761, 1085, 496, 145],
    },
    daily: {
      labels: ["1-5", "6-10", "11-15", "16-20", "21-25", "26-30"],
      revenue: [119500, 128400, 133820, 140300, 147100, 155200],
      orders: [574, 608, 629, 661, 698, 744],
    },
  },
};

const topDishesByPeriod = {
  today: [
    { name: "Beef burger", portions: 135, revenue: 13500 },
    { name: "Ramen soup", portions: 100, revenue: 11000 },
    { name: "Kappa maki", portions: 89, revenue: 9700 },
    { name: "Fri", portions: 74, revenue: 2300 },
    { name: "Salmon steak", portions: 56, revenue: 7100 },
  ],
  "7d": [
    { name: "Beef burger", portions: 724, revenue: 72400 },
    { name: "Ramen soup", portions: 618, revenue: 67980 },
    { name: "Kappa maki", portions: 551, revenue: 60059 },
    { name: "Salmon steak", portions: 338, revenue: 42807 },
    { name: "Fri", portions: 430, revenue: 13340 },
  ],
  "30d": [
    { name: "Beef burger", portions: 3021, revenue: 302100 },
    { name: "Ramen soup", portions: 2670, revenue: 293700 },
    { name: "Kappa maki", portions: 2418, revenue: 263562 },
    { name: "Salmon steak", portions: 1510, revenue: 191315 },
    { name: "Fri", portions: 1840, revenue: 57040 },
  ],
};

let restaurantStatus = {
  status: "works",
  dining: { occupied: 60, capacity: 100 },
  allStaffPresent: true,
  serving: { minutes: 25, change: -12 },
  rating: { value: 5, reviews: 178 },
};

const upcomingReservations = [
  { time: "18:00", name: "Alina Migaļega", event: "Birthday", guests: 15 },
  { time: "19:30", name: "Andrejs Solovjovs", event: "Mafia", guests: 40 },
  { time: "20:00", name: "Valerija Veselova", event: "Business Meeting", guests: 9 },
  { time: "20:30", name: "Nikita Smirnovs", event: "Corporate Event", guests: 103 },
];

const lowStockItems = [
  { name: "Nori", amount: "1 pack", level: "critical", daysLeft: 1 },
  { name: "Avocado", amount: "2 kg", level: "critical", daysLeft: 1 },
  { name: "Cheese", amount: "5 pack", level: "low", daysLeft: 3 },
];

const importantToday = [
  {
    icon: "assets/images/inventory.png",
    title: "Low stock",
    text: "3 items are running low",
    time: "20:43",
  },
  {
    icon: "assets/images/21.png",
    title: "Negative Review",
    text: "“We waited a long time...”",
    time: "19:35",
  },
  {
    icon: "assets/images/reservations.png",
    title: "New reservation",
    text: "Reservation for 15 person",
    time: "13:00",
  },
  {
    icon: "assets/images/reports.png",
    title: "Inventory Check",
    text: "Tomorrow at 10:00 AM",
    time: "11:00",
  },
];

function getRestaurantStatus() {
  return restaurantStatus;
}

function updateRestaurantStatus(status) {
  restaurantStatus = { ...restaurantStatus, status };
  return restaurantStatus;
}

module.exports = {
  statCardsByPeriod,
  revenueChartByPeriod,
  topDishesByPeriod,
  upcomingReservations,
  lowStockItems,
  importantToday,
  getRestaurantStatus,
  updateRestaurantStatus,
};
