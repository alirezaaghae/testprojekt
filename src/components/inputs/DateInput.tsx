import { componentsStyle, labelStyle } from "../../utils/inputStyle"

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
    <div className="mb-3 fade-in">
      <label className={componentsStyle.body}>
        <span className={labelStyle(error)}>{label}</span>
        <input
            type="date"
            value={value}
            min={minValue}
            max={maxValue}
            className={componentsStyle.input}
            onChange={(e) => onChange(e.target.value)}
        />
      </label>
        {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default DateInput