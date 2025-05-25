import { componentsStyle, labelStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
}
const DateTimeInput = ({ label, value, onChange, error }:Props) => {
  return (
    <div className="mb-3">
      <label className={componentsStyle.body}>
        <span className={labelStyle(error)}>{label}</span>
        <input
            type="datetime-local"
            value={value}
            className={componentsStyle.input}
            onChange={(e) => onChange(e.target.value)}
        />
      </label>
        {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default DateTimeInput