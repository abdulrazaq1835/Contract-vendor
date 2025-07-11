import { useState } from "react";
import { vendors } from "../data/dummyData";

const NewContract = () => {
  const [form, setForm] = useState({
    vendor: "",
    startDate: "",
    endDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Contract Submitted:", form);
    alert("Contract submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md p-8 rounded-xl"
      >
        <h2 className="text-3xl font-bold text-black-700 mb-6 text-center">New Contract 📝</h2>

      
        <label className="block mb-2 font-medium">Vendor</label>
        <select
          name="vendor"
          value={form.vendor}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        >
          <option value="">Select Vendor</option>
          {vendors.map((v) => (
            <option key={v.id} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>

       
        <label className="block mb-2 font-medium">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="block mb-2 font-medium">End Date</label>
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

      
        <label className="block mb-2 font-medium">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full mb-6 p-2 border rounded"
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Contract
        </button>
      </form>
    </div>
  );
};

export default NewContract;
