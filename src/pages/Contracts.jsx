import { contracts } from "../data/dummyData";
import ContractCard from "../components/ContractCard";

const Contracts = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black-700 text-center mb-10">All Contracts 📄</h2>

        {contracts.length === 0 ? (
          <p className="text-center text-gray-600">No contracts available.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {contracts.map((contract) => (
              <ContractCard key={contract.id} contract={contract} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contracts;
