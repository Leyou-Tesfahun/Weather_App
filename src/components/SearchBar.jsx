import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded-lg border border-gray-300"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Search
      </button>
    </form>
  );
}
