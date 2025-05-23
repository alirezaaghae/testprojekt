import { componentsStyle, inputStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
  items: [string, string][]
  error?: string
}
const SelectInput = ({ label, value, onChange, items, error }:Props) => {
  return (
    <div>
      <label className={componentsStyle.body}>
        <span className={componentsStyle.label}>{label}</span>
        <select className={inputStyle(error)} value={value} onChange={(e) => onChange(e.target.value)}>
            {items.map(([key, val]) => (
                <option key={key} value={key}>{val}</option>
            ))}
        </select>
        {error && <p className={componentsStyle.error}>{error}</p>}
      </label>
    </div>
  )
}
export default SelectInput