import React from "react";
// import RawProductTable from "@/components/RawProductTable";
import defaultProducts from "../../products.json";

export default function RawProductData() {
  const products = Array.isArray(defaultProducts)
    ? defaultProducts
    : defaultProducts.products || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Raw Product Data</h1>
    </div>
  );
}
