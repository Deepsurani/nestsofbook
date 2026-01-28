import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Browse from "./pages/Browse";
import BookDetail from "./pages/BookDetail";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

// Student Pages
import StudentLayout from "./components/student/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import AddBook from "./pages/student/AddBook";
import MyBooks from "./pages/student/MyBooks";
import SwapRequests from "./pages/student/SwapRequests";
import SwapRequestChat from "./pages/student/SwapRequestChat";
import StudentChat from "./pages/student/StudentChat";
import BorrowedBooks from "./pages/student/BorrowedBooks";
import SearchByArea from "./pages/student/SearchByArea";
import Report from "./pages/student/Report";
import ReturnBook from "./pages/student/ReturnBook";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* Student Portal Routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="my-books" element={<MyBooks />} />
            <Route path="swap-requests" element={<SwapRequests />} />
            <Route path="swap-requests/:id" element={<SwapRequestChat />} />
            <Route path="chat" element={<StudentChat />} />
            <Route path="borrowed" element={<BorrowedBooks />} />
            <Route path="search-area" element={<SearchByArea />} />
            <Route path="report" element={<Report />} />
            <Route path="return" element={<ReturnBook />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
