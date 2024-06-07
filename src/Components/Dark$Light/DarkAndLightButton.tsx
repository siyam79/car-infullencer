"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function DarkAndLightButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <MdDarkMode size={30} /> 
        </button>
      )}

      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <CiLight size={30}/> 
        </button>
      )}
    </div>
  );
}
