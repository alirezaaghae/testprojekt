import { useMemo, useState } from "react"
import { componentsStyle, inputStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: string
  items: [string, string][]
  onChange: (v: string) => void
  error?: string
}
const ComboboxInput = ({ label, value, onChange, items, error } : Props) => {
  const [filter, setFilter] = useState('')
  const filtered = useMemo(() => {
    const f = filter.toLowerCase()
    return items.filter(([, lab]) => lab.toLowerCase().includes(f) || f === '')
  }, [filter, items])
  return (
    <div className="mb-3">
      <label className={componentsStyle.body}>
              <span className={componentsStyle.label}>{label}</span>
      <input
        type="text"
        placeholder="filter..."
        className={inputStyle(error)}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      </label>
      <select size={5} className="grid divide-y-1 divide-gray-200 w-full bg-[#f0f0f0] rounded-b-[20px] mt-[5px] border border-[#dfdfdf]" value={value} onChange={(e) => onChange(e.target.value)}>
        {filtered.map(([val, lab]) => (
          <option className="p-3" key={val} value={val}>{lab}</option>
        ))}
      </select>
      
      {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default ComboboxInput
