export const componentsStyle = {
    body : "flex flex-row items-center h-12",
    label : "flex items-center justify-center text-sm min-w-[120px] bg-[#58cbff] text-center h-full rounded-l-xl text-white font-bold",
    input : "w-full p-2 h-full bg-[#ecf0f3] transition-all duration-200 ease-in-out text-gray-500 font-light tracking-[0.15px] border-none outline-none rounded-r-xl shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#f9f9f9] focus:shadow-[inset_4px_4px_4px_#d1d9e6,inset_-4px_-4px_4px_#f9f9f9]",
    error : "text-xs text-red-500 mt-1 list-item w-max",
    extentBox : "grid grid-cols-2 divide-x-1 divide-y-1 divide-gray-500 overflow-hidden h-full w-60 tracking-[0.15px] border-none outline-none rounded-r-xl shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#f9f9f9] focus:shadow-[inset_4px_4px_4px_#d1d9e6,inset_-4px_-4px_4px_#f9f9f9]",
    pointBox : "grid grid-cols-2 h-full w-60 divide-x-1 divide-gray-300 rounded-r-xl tracking-[0.15px] border-none overflow-hidden outline-none shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#f9f9f9]",
    comboBox : "grid divide-y-1 divide-gray-200 w-full bg-[#ecf0f3] rounded-xl mt-[5px] text-gray-500 tracking-[0.15px] border-none outline-none shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#f9f9f9]"
}

export const labelStyle = (error?: string): string => 
    `${componentsStyle.label} ${error ? "bg-red-400" : "bg-[#58cbff]"}`;