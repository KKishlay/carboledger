const data = [
  {
    id: 1,
    name: "Aman",
    age: 25,
    email: "aman@example.com",
    phone: "9876543212",
  },
  {
    id: 2,
    name: "Nikhil",
    age: 24,
    email: "nikhil@example.com",
    phone: "8976543212",
  },
  {
    id: 3,
    name: "Prasanth",
    age: 23,
    email: "prasanth@example.com",
    phone: "9988765432",
  },
  {
    id: 4,
    name: "Siddhanth",
    age: 26,
    email: "siddhanth@example.com",
    phone: "7896543456",
  },
  {
    id: 5,
    name: "Mayank",
    age: 22,
    email: "mayank@example.com",
    phone: "8789654678",
  },
];

const Home = () => {
  const RenderHeader = () => {
    return (
      <thead className="sticky top-0 bg-gray-200">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Age
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
        </tr>
      </thead>
    );
  };

  const RenderBody = () => {
    return (
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.age}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.phone}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="table-container">
      <table className="min-w-full divide-y divide-gray-200">
        <RenderHeader />
        <RenderBody />
      </table>
    </div>
  );
};

export default Home;
