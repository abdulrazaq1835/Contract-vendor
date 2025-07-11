import { vendors } from "../data/dummyData";
import { UserCog, ShieldCheck, Hammer } from "lucide-react"; 

const getIcon = (service) => {
  if (service.toLowerCase().includes("security")) return <ShieldCheck className="w-6 h-6 text-blue-600" />;
  if (service.toLowerCase().includes("construction")) return <Hammer className="w-6 h-6 text-yellow-600" />;
  return <UserCog className="w-6 h-6 text-green-600" />;
};

const Vendors = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black-700 text-center mb-10">Our Trusted Vendors 🤝</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white border rounded-xl shadow hover:shadow-lg p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  {getIcon(vendor.service)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{vendor.name}</h3>
                  <p className="text-sm text-gray-500">{vendor.service}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="text-yellow-500 font-bold">⭐ {vendor.rating}</span> / 5.0 Rating
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vendors;
