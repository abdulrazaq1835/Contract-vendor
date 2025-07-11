import { vendors } from "../data/dummyData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-10 pb-16">
     
      <section className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black-700 mb-4">
          Manage Contracts Effortlessly ✍️
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          ContractMate helps you manage vendor contracts with ease, track status, and stay organized — all in one place.
        </p>
        <Link
          to="/new"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          + Create New Contract
        </Link>
      </section>

      <section className="mt-16 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Vendors 🔥</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">{vendor.name}</h3>
              <p className="text-gray-600 mt-1">{vendor.service}</p>
              <p className="mt-2 text-sm text-yellow-500 font-medium">
                ⭐ {vendor.rating} / 5.0
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
