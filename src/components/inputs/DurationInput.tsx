import { componentsStyle, inputStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: number
  onChange: (v: number) => void
  error?: string
}
const DurationInput = ({ label, value, onChange, error}:Props) => {
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10)
    if (isNaN(v)) return onChange(0)
    onChange(v)
  }
  return (
    <div>
      <label className={componentsStyle.body}>
        <span className={componentsStyle.label}>{label}</span>
        <input className={inputStyle(error)} type="number" value={value} onChange={handle} />
        {error && <p className={componentsStyle.error}>{error}</p>}
      </label>
    </div>
  )
}
export default DurationInput
