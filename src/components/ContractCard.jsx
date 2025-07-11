const ContractCard = ({ contract }) => {
  const statusColor =
    contract.status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white p-6 border rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">
        {contract.vendor}
      </h3>
      <p className="text-sm text-gray-500 mb-2">
        {contract.startDate} → {contract.endDate}
      </p>
      <span
        className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${statusColor}`}
      >
        {contract.status}
      </span>
    </div>
  );
};

export default ContractCard;
