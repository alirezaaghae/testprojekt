interface Props{
    inputStyle?:string
    label:string
    value: number
    onChange: (v: number) => void
    minValue?: number
    maxValue?: number
}
const IntegerInput = ({ inputStyle,label, value, onChange, minValue, maxValue } : Props) => {
    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10)
    if (isNaN(v)) return
    if (minValue !== undefined && v < minValue) return
    if (maxValue !== undefined && v > maxValue) return
    onChange(v)
  }
  return (
    <div>
      <label>{label}</label>
      <input className={inputStyle} type="number" value={value} onChange={handle} />
    </div>
  )
}

export default IntegerInput