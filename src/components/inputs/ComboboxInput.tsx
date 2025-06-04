import { useMemo, useState } from "react"
import { componentsStyle, labelStyle } from "../../utils/inputStyle"

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
  const handel = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    const v = e.target.value
    const selectedLabel = e.target.selectedOptions[0].text;
    setFilter(selectedLabel);
    onChange(v)
  }
  return (
    <div className="mb-3 fade-in">
      <label className={componentsStyle.body}>
              <span className={labelStyle(error)}>{label}</span>
      <input
        type="text"
        placeholder="filter..."
        className={componentsStyle.input}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      </label>
      <select size={5} className={componentsStyle.comboBox} value={value} onChange={handel}>
        {filtered.map(([val, lab]) => (
          <option className="p-3" key={val} value={val}>{lab}</option>
        ))}
      </select>
      
      {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default ComboboxInput
