import { componentsStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: [number, number]
  onChange: (v: [number, number]) => void
  error?: string 
}
const PointInput= ({ label, value, onChange, error }:Props) => {
  const [x, y] = value
  return (
    <div className="mb-3">
        <label className={componentsStyle.body}>
                <span className={componentsStyle.label}>{label} (x, y)</span>
      <div className={componentsStyle.pointBox}>
        <input
          type="number"
          step="any"
          value={x}
          className={componentsStyle.extents}
          onChange={(e) => onChange([parseFloat(e.target.value), y])}
          style={{ flex: 1 }}
        />
        <input
          type="number"
          step="any"
          value={y}
          className={componentsStyle.extents}
          onChange={(e) => onChange([x, parseFloat(e.target.value)])}
          style={{ flex: 1 }}
        />
      </div>
      </label>
        {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default PointInput