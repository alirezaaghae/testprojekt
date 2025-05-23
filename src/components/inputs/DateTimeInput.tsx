import { componentsStyle, inputStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
}
const DateTimeInput = ({ label, value, onChange, error }:Props) => {
  return (
    <div>
      <label className={componentsStyle.body}>
        <span className={componentsStyle.label}>{label}</span>
        <input
            type="datetime-local"
            value={value}
            className={inputStyle(error)}
            onChange={(e) => onChange(e.target.value)}
        />
        {error && <p className={componentsStyle.error}>{error}</p>}
      </label>
    </div>
  )
}
export default DateTimeInput