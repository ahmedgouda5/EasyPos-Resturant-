const orders = [
  {
    id: "12415346512",
    date: "Wed 1:00pm",
    amount: "$18.99",
    orders: 2,
    category: "Food",
    item: "Mac and Cheese",
  },
  {
    id: "12415346512",
    date: "Wed 7:20am",
    amount: "$4.50",
    orders: 3,
    category: "Food",
    item: "Chili Cheese Dog",
  },
  {
    id: "12415346512",
    date: "Wed 2:45am",
    amount: "$88.00",
    orders: 4,
    category: "Food",
    item: "Biscuits and Gravy",
  },
  {
    id: "12415346512",
    date: "Tue 6:10pm",
    amount: "$15.00",
    orders: 6,
    category: "Food",
    item: "Biscuits and Gravy",
  },
  {
    id: "12415346512",
    date: "Tue 7:52am",
    amount: "$12.50",
    orders: 1,
    category: "Cafe",
    item: "Flatwhite",
  },
];

export default function OrdersTable() {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h2 className="text-lg font-semibold">Orders</h2>

        <div className="flex gap-2">
          <button className="bg-black text-white px-3 py-1 rounded-md text-sm">
            All
          </button>
          <button className="bg-gray-200 text-gray-500 px-3 py-1 rounded-md text-sm">
            Last Month
          </button>
        </div>

        <input
          type="text"
          placeholder="Search menu..."
          className="border rounded-md px-3 py-1 text-sm w-full sm:w-60"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="text-left text-sm text-gray-500">
            <tr>
              <th className="py-2">Transaction ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Orders</th>
              <th>Category</th>
              <th>Items</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {orders.map((order, index) => (
              <tr
                key={index}
                className="text-gray-500 border-t hover:bg-gray-50 transition"
              >
                <td className="py-3">{order.id}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td>{order.orders}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.category === "Food"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {order.category}
                  </span>
                </td>
                <td>{order.item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {orders.map((order, index) => (
          <div key={index} className="border rounded-lg p-3 shadow-sm">
            <div className="flex justify-between">
              <span className="font-medium">{order.item}</span>
              <span className="text-sm text-gray-500">{order.amount}</span>
            </div>

            <div className="text-xs text-gray-500 mt-1">{order.date}</div>

            <div className="flex justify-between mt-2 text-sm">
              <span>Orders: {order.orders}</span>

              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  order.category === "Food"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {order.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {orders.length > 5 && (
        <div className="text-center mt-4">
          <button className="text-red-500 text-sm hover:underline">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
