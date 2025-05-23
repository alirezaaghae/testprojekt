import { inputStyle } from "../../utils/inputStyle";

interface Props {
    label: string
    value: string
    onChange: (v: string) =>void
    minLength?: number
    maxLength?: number
    error?: string
}

const StringInput = ({label,value,onChange,error,minLength,maxLength}:Props) => {
    
    return (
        <div>
            <label className="flex flex-col gap-1 mb-3">
                <span className="text-sm text-gray-700">{label}</span>
                <input className={inputStyle(error)} type="text" placeholder="Name" value={value} onChange={(e) => onChange(e.target.value)}/>
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
            </label>
        </div>
    )
}

export default StringInput