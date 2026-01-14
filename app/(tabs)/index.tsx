import { useState } from "react";
import MyQR from "../myqr";
import Register from "../register";

export default function HomeScreen() {
  const [token, setToken] = useState<string | null>(null);

  // ✅ Shortcut logic
  if (token) {
    return <MyQR token={token} onStartOver={() => setToken(null)} />;
  }

  return <Register onRegister={(t) => setToken(t)} />;
}