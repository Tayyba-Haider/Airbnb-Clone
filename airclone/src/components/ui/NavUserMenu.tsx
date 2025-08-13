import {IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { Box } from "@mui/material";


export default function NavUserMenu() {
  return (
    <div className="flex items-center gap-2">
      <button className="hidden md:inline-block text-sm font-medium tracking-tight text-gray-900 px-3 py-2 rounded-full hover:bg-gray-200 transition">
        Become a host
      </button>
       <Box
            sx={{
                width: 39,
                height: 39,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey.200",
                cursor: "pointer",
                "&:hover": { bgcolor: "grey.300" }
            }}
            >
            <LanguageIcon fontSize="small" sx={{ color: "text.secondary" }} />
        </Box>

        <IconButton
        sx={{
            bgcolor: "grey.200",
            "&:hover": { bgcolor: "grey.300" },
            borderRadius: "50%", 
        }}
        >
        <MenuIcon sx={{ fontWeight: "bold" }} />
        </IconButton>

    </div>
  );
}
