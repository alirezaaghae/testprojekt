import { componentsStyle, inputStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: [number, number]
  onChange: (v: [number, number]) => void
  error?: string 
}
const PointInput= ({ label, value, onChange, error }:Props) => {
  const [x, y] = value
  return (
    <div>
        <label className={componentsStyle.body}>
                <span className={componentsStyle.label}>{label} (x, y)</span>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="number"
          step="any"
          value={x}
          className={inputStyle(error)}
          onChange={(e) => onChange([parseFloat(e.target.value), y])}
          style={{ flex: 1 }}
        />
        <input
          type="number"
          step="any"
          value={y}
          className={inputStyle(error)}
          onChange={(e) => onChange([x, parseFloat(e.target.value)])}
          style={{ flex: 1 }}
        />
      </div>
        {error && <p className={componentsStyle.error}>{error}</p>}
      </label>
    </div>
  )
}
export default PointInput