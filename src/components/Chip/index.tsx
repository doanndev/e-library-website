// src/components/Chip.tsx
import React from "react";
interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  onDelete?: () => void;
  color?: "default" | "primary" | "secondary";
}

const Chip: React.FC<ChipProps> = ({ label, icon, onDelete, color = "default" }) => {
  const colorClass =
    color === "primary"
      ? "bg-blue-500 text-white"
      : color === "secondary"
      ? "bg-gray-500 text-white"
      : "bg-gray-200 text-gray-800";

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full ${colorClass}`}>
      {icon && <span className="mr-2">{icon}</span>} 
      <span>{label}</span>
      {onDelete && (
        <span
          className="ml-2 cursor-pointer text-white hover:text-gray-300"
          onClick={onDelete}
        >
          &times;
        </span>
      )}
    </div>
  );
};

export default Chip;
