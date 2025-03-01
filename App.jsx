
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Math from "./pages/Math";
import Grade from "./pages/Grade";
import Topic from "./pages/Topic";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import Chatbot from "./pages/Chatbot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/math" element={<Math />} />
              <Route path="/grade/:gradeId" element={<Grade />} />
              <Route path="/topic/:topicId" element={<Topic />} />
              <Route path="/learn/:contentType/:id" element={<Learn />} />
              <Route path="/learn/:contentType/:id/:chapterId" element={<Learn />} />
              <Route path="/practice/:contentType/:id" element={<Practice />} />
              <Route path="/practice/:contentType/:id/:chapterId" element={<Practice />} />
              <Route path="/quiz/:contentType/:id" element={<Quiz />} />
              <Route path="/quiz/:contentType/:id/:chapterId" element={<Quiz />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
