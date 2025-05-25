import { componentsStyle, labelStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
  items: [string, string][]
  error?: string
}
const SelectInput = ({ label, value, onChange, items, error }:Props) => {
  return (
    <div className="mb-3">
      <label className={componentsStyle.body}>
        <span className={labelStyle(error)}>{label}</span>
        <select className={componentsStyle.input} value={value} onChange={(e) => onChange(e.target.value)}>
            {items.map(([key, val]) => (
                <option key={key} value={key}>{val}</option>
            ))}
        </select>
      </label>
        {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default SelectInput