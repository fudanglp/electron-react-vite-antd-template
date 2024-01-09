import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import "./App.css";

function Hello() {
  return (
    <div
      className="flex w-screen h-screen flex-col justify-center gap-1 items-center">
      <h1 className="text-green-500 font-bold">Hello World!</h1>

      <Button className="bg-[#1677ff]" type="primary">
        Primary Button
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
