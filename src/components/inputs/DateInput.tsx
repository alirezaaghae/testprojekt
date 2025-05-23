import { componentsStyle, inputStyle } from "../../utils/inputStyle"

interface Props{
    label: string
    value: string
    onChange: (v: string) => void
    minValue?: string
    maxValue?: string
    error?: string
}
const DateInput= ({ label, value, onChange, error, minValue, maxValue }: Props) => {
  return (
    <div>
      <label className={componentsStyle.body}>
        <span className={componentsStyle.label}>{label}</span>
        <input
            type="date"
            value={value}
            min={minValue}
            max={maxValue}
            className={inputStyle(error)}
            onChange={(e) => onChange(e.target.value)}
        />
        {error && <p className={componentsStyle.error}>{error}</p>}
      </label>
    </div>
  )
}
export default DateInput