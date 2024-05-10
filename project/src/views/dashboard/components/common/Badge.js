import React from "react";

const Badge = ({ label, className, variant }) => {
  let defaultClasses = "px-3 py-1 rounded-md inline-block";
  let variantClasses = "";
  if (variant === "cancelled") {
    variantClasses = "bg-red-500 text-white";
  } else if (variant === "success") {
    variantClasses = "bg-green-500 text-white";
  } else if (variant === "pending") {
    variantClasses = "bg-red-500 text-white";
  }
  const combinedClasses = `${defaultClasses} ${variantClasses} ${className}`;
  return <div className={`badge ${combinedClasses}`}>{label}</div>;
};

export default Badge;
