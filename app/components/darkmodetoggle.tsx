'use client'
import { useState, useEffect } from "react"


export default function DarkToggle(){
    const [darkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }, [darkMode])

return(
  <div className="flex flex-col justify-center items-center">
    <label className="cursor-pointer">
      <div>
      <input type="checkbox" value="dark" className="toggle theme-controller" onChange={() => setDarkMode(!darkMode)} />
      </div>
    </label>
  </div>
)}