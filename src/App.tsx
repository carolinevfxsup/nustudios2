import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import { Automations } from "./pages/Automations";
import QuintaDoPinto from "./pages/QuintaDoPinto";
import SaltLilyShowcase from "./pages/SaltLilyShowcase";
import OPalmeiralShowcase from "./pages/OPalmeiralShowcase";
import FranksAustralia from "./pages/FranksAustralia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/automations" element={<Automations />} />
            <Route path="/work/quinta-do-pinto" element={<QuintaDoPinto />} />
            <Route path="/work/salt_lily_showcase" element={<SaltLilyShowcase />} />
            <Route path="/work/O_Palmeiral_showcase" element={<OPalmeiralShowcase />} />
            <Route path="/work/franks-australia" element={<FranksAustralia />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
