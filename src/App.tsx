import Header from "@/components/Header";
import Home from "@/pages/Home";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectDetail from "@/pages/ProjectDetail";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
