export const inputStyle = (error?: string): string => 
    `${componentsStyle.input} ${error ? "border-red-500" : "border-gray-300"}`;

export const componentsStyle = {
    body : "flex flex-col gap-1 mb-3",
    label : "text-sm text-gray-700 text-left",
    input : "w-full rounded-md p-2 border",
    error : "text-xs text-red-500 mt-1 list-item w-max"
}