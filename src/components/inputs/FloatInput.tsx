import { inputStyle } from "../../utils/inputStyle";

interface Props{
    label:string
    value: number
    onChange: (v: number) => void
    minValue?: number
    maxValue?: number
    error?: string
}
const FloatInput = ({ label, value, onChange, error, minValue, maxValue } : Props) => {
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    if (isNaN(v)) return onChange(0)
    // if (minValue !== undefined && v < minValue) return
    // if (maxValue !== undefined && v > maxValue) return
    onChange(v)
  }
  return (
    <div>
      <label className="flex flex-col gap-1 mb-3">
        <span className="text-sm text-gray-700">{label}</span>
        <input className={inputStyle(error)} type="number" step="any" value={value} onChange={handle} />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </label>
    </div>
  )
}

export default FloatInput