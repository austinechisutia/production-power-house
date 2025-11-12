import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="p-2 bg-gray-200 rounded-full focus:outline-none"
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}
