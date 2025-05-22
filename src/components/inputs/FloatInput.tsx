interface Props{
    inputStyle?:string
    label:string
    value: number
    onChange: (v: number) => void
    minValue?: number
    maxValue?: number
}
const FloatInput = ({ inputStyle,label, value, onChange, minValue, maxValue } : Props) => {
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    if (isNaN(v)) return
    if (minValue !== undefined && v < minValue) return
    if (maxValue !== undefined && v > maxValue) return
    onChange(v)
  }
  return (
    <div>
      <label>{label}</label>
      <input className={inputStyle} type="number" step="any" value={value} onChange={handle} />
    </div>
  )
}

export default FloatInput