import { useState } from "react";
import { Box, Chip } from "@mui/material";

export default function NavCenter() {
  const [activeTab, setActiveTab] = useState("Homes");

  const menuItems = [
    { label: "Homes", icon: "🏠" },
    { label: "Experiences", icon: "🎈", badge: "NEW" },
    { label: "Services", icon: "🛎", badge: "NEW" },
  ];

  return (
    <Box className="flex items-center gap-6">
      {menuItems.map((item) => {
        const isActive = activeTab === item.label;
        return (
          <a
            key={item.label}
            href="/"
            onClick={(e) => {
              e.preventDefault(); //same page
              setActiveTab(item.label);
            }}
            className={`flex items-center gap-2 cursor-pointer relative transition-colors ${
              isActive ? "text-black font-bold" : "text-gray-500 hover:text-black"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>

            {item.badge && (
              <Chip
                label={item.badge}
                size="small"
                sx={{
                  bgcolor: "#34495e",
                  color: "white",
                  fontSize: "0.6rem",
                  height: 16,
                  borderRadius: 1,
                  ml: 0.5,
                }}
              />
            )}

            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full border-b-2 border-black"></span>// underline effect
            )}
          </a>
        );
      })}
    </Box>
  );
}
