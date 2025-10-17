import Header from "@/components/Header";
import Home from "@/pages/Home";
import NotFoundPage from "@/pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
