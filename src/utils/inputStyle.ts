export const componentsStyle = {
    body : "flex flex-row items-center h-12",
    label : "flex items-center justify-center text-sm min-w-[120px] bg-[#373737] text-center h-full rounded-l-[10px] text-white font-extralight",
    input : "w-full rounded-r-[10px] p-2 h-full border border-l-0 focus:outline-none focus:ring-0 focus:bg-gray-100",
    error : "text-xs text-red-500 mt-1 list-item w-max",
    extent : "w-full p-2 h-full text-center focus:outline-none focus:ring-0 focus:bg-gray-100"
}

export const inputStyle = (error?: string): string => 
    `${componentsStyle.input} ${error ? "border-red-500" : "border-[#373737]"}`;