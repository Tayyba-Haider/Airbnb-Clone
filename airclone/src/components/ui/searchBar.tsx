import { useState } from "react";
import { Box, IconButton, Dialog, ClickAwayListener } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

type SearchField = "where" | "checkIn" | "checkOut" | "who";

export default function SearchBar() {
  const [activeField, setActiveField] = useState<SearchField | null>(null);
  const [formData, setFormData] = useState<Record<SearchField, string>>({
    where: "",
    checkIn: "",
    checkOut: "",
    who: "",
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections: { key: SearchField; label: string; placeholder: string }[] = [
    { key: "where", label: "Where", placeholder: "Search destinations" },
    { key: "checkIn", label: "Check in", placeholder: "Add dates" },
    { key: "checkOut", label: "Check out", placeholder: "Add dates" },
    { key: "who", label: "Who", placeholder: "Add guests" },
  ];

  const handleSearch = () => {
    alert(`Searching: ${JSON.stringify(formData)}`);
    setActiveField(null); // collapse after searching
  };

  return (
    <>
      {/* Desktop version */}
      <ClickAwayListener onClickAway={() => setActiveField(null)}>
        <Box
          className="
            hidden md:flex items-center rounded-full shadow-md overflow-hidden bg-white
            divide-x divide-gray-200
            w-full sm:w-auto
          "
        >
          {sections.map((sec) => {
            const isActive = activeField === sec.key;
            return (
              <Box
                key={sec.key}
                className={`
                  flex-1 px-4 py-2 cursor-pointer transition
                  ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}
                  flex flex-col justify-center
                `}
                onClick={() => setActiveField(sec.key)}
              >
                <span className="text-xs font-bold">{sec.label}</span>

                {isActive ? (
                  <input
                    autoFocus
                    type="text"
                    value={formData[sec.key]}
                    placeholder={sec.placeholder}
                    onChange={(e) =>
                      setFormData({ ...formData, [sec.key]: e.target.value })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setActiveField(null);
                    }}
                    className="text-sm outline-none bg-transparent"
                  />
                ) : (
                  <span className="text-sm text-gray-500">
                    {formData[sec.key] || sec.placeholder}
                  </span>
                )}
              </Box>
            );
          })}

          {/* Expanding Search Button */}
          <Box
            onClick={handleSearch}
            className={`
              flex items-center ${activeField ? "gap-2 px-4" : "justify-center"}
              m-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out
              bg-[#FF385C] hover:bg-[#e03150] text-white
              h-10 ${activeField ? "" : "w-10"}  /* circle (w= h) -> pill when active */
              select-none
            `}
            role="button"
            aria-label="Search"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
              if (e.key === "Escape") setActiveField(null);
            }}
          >
            <SearchIcon fontSize="small" />
            {activeField && (
              <span className="font-semibold whitespace-nowrap">Search</span>
            )}
          </Box>
        </Box>
      </ClickAwayListener>

      {/* Mobile version */}
      <Box
        className="flex md:hidden items-center gap-2 border rounded-full shadow-sm hover:shadow-md transition cursor-pointer px-4 py-2 w-full max-w-sm mx-auto"
        onClick={() => setMobileOpen(true)}
      >
        <SearchIcon sx={{ color: "#717171" }} />
        <span className="text-gray-500 text-sm">Where to?</span>
      </Box>

      <Dialog fullScreen open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box className="p-4 relative">
          {/* Close Button */}
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "#f5f5f5",
              "&:hover": { bgcolor: "#e0e0e0" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {sections.map((sec) => (
            <Box key={sec.key} className="mb-4">
              <span className="text-xs font-bold">{sec.label}</span>
              <input
                type="text"
                value={formData[sec.key]}
                placeholder={sec.placeholder}
                onChange={(e) =>
                  setFormData({ ...formData, [sec.key]: e.target.value })
                }
                className="w-full p-2 border rounded-md mt-1 outline-none"
              />
            </Box>
          ))}

          <button
            onClick={() => {
              handleSearch();
              setMobileOpen(false);
            }}
            className="w-full bg-[#FF385C] text-white py-2 rounded-full font-bold"
          >
            Search
          </button>
        </Box>
      </Dialog>
    </>
  );
}
