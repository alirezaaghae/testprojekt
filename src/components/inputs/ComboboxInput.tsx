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
    <div>
      <label className={componentsStyle.body}>
              <span className={componentsStyle.label}>{label}</span>
      <input
        type="text"
        placeholder="filter..."
        className={inputStyle(error)}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select size={5} style={{ width: '100%' }} value={value} onChange={(e) => onChange(e.target.value)}>
        {filtered.map(([val, lab]) => (
          <option key={val} value={val}>{lab}</option>
        ))}
      </select>
      {error && <p className={componentsStyle.error}>{error}</p>}
      </label>
    </div>
  )
}
export default ComboboxInput
