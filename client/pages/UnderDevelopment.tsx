import { useNavigate } from "react-router-dom";

export default function UnderDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="h-full min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full rounded-lg border border-gray-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">
          Under Development
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          This page is currently under development. We're working on it and it
          will be available soon.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md bg-white border text-sm text-gray-700 hover:bg-gray-50"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-md bg-[#34A853] text-white text-sm hover:bg-[#2d9448]"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
