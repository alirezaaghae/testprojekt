export const inputBaseClass = "w-full rounded-md p-2 border";

export const inputStyle = (error?: string): string => 
    `${inputBaseClass} ${error ? "border-red-500" : "border-gray-300"}`;
