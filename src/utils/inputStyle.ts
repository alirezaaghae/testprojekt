export const componentsStyle = {
    body : "flex flex-row items-center h-12",
    label : "flex items-center justify-center text-sm min-w-[120px] bg-[#373737] text-center h-full rounded-l-[10px] text-white font-extralight",
    input : "w-full rounded-r-[10px] p-2 h-full border border-l-0 focus:outline-none focus:ring-0 focus:bg-gray-100",
    error : "text-xs text-red-500 mt-1 list-item w-max",
    extents : "w-full p-2 h-full text-center focus:outline-none focus:ring-0 focus:bg-gray-100",
    extentBox : "grid grid-cols-2 divide-x-1 divide-y-1 divide-gray-300 h-full border border-[#373737] rounded-r-[10px]",
    pointBox : "grid grid-cols-2 h-full w-full divide-x-1 divide-gray-300 border border-[#373737] rounded-r-[10px]"

}

export const inputStyle = (error?: string): string => 
    `${componentsStyle.input} ${error ? "border-red-500" : "border-[#373737]"}`;