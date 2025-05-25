import { componentsStyle, inputStyle } from "../../utils/inputStyle";

interface Props{
    label:string
    value: number
    onChange: (v: number) => void
    error?: string
}
const FloatInput = ({ label, value, onChange, error } : Props) => {
   const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    if (isNaN(v)) return onChange(0.0)
      else {
        e.currentTarget.value = v.toString();
        onChange(v);
      }
  }
  return (
    <div className="mb-3">
      <label className={componentsStyle.body}>
        <span className={componentsStyle.label}>{label}</span>
        <input 
          className={inputStyle(error)} 
          type="number" 
          step="any" 
          value={value} 
          onChange={handle} 
        />
      </label>
        {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}

export default FloatInput