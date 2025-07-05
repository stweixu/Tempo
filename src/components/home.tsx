import React from "react";
import Navbar from "./Navbar";
import SearchFilters from "./SearchFilters";
import CarpoolList from "./CarpoolList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Find a Carpool
        </h1>
        <SearchFilters />
        <CarpoolList />
      </main>
    </div>
  );
}
