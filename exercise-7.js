// Paste the complete MQL here
// db.pizzaOrders.aggregate([
//   {
//     $group: {
//       _id: { month: { $month: "$created_at" }, year: { $year: "$created_at" } },
//       total_price_by_month: { $sum: "$total_price" },
//     },
//   },
//   {
//     $sort: { "_id.year": -1, "_id.month": -1 },
//   },
//   {
//     $match: { "_id.year": 2021 },
//   },
//   {
//     $sort: { total_price_by_month: 1 },
//   },
//   {
//     $limit: 1,
//   },
// ]);
