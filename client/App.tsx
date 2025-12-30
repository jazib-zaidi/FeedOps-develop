import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UnderDevelopment from "./pages/UnderDevelopment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/overview" element={<UnderDevelopment />} />
          <Route path="/under-development" element={<UnderDevelopment />} />
          <Route path="/playbook" element={<UnderDevelopment />} />
          <Route path="/feed-rules" element={<UnderDevelopment />} />
          <Route path="/alerts" element={<UnderDevelopment />} />
          <Route path="/orders" element={<UnderDevelopment />} />
          <Route path="/settings" element={<UnderDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
