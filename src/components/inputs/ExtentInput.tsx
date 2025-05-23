import { componentsStyle, inputStyle } from "../../utils/inputStyle"

interface Props {
  label: string
  value: [number, number, number, number]
  onChange: (v: [number, number, number, number]) => void
  error?: string
}
const ExtentInput= ({ label, value, onChange, error }:Props) => {
  const [xmin, ymin, xmax, ymax] = value
  const update = (index: number, v: number) => {
    const nv = [...value] as [number, number, number, number]
    nv[index] = v
    onChange(nv)
  }
  return (
    <div>
      <label className={componentsStyle.body}>
        <span className={componentsStyle.label}>{label} (xmin, ymin, xmax, ymax)</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
            <input type="number" step="any" className={inputStyle(error)} value={xmin} onChange={(e) => update(0, parseFloat(e.target.value))} />
            <input type="number" step="any" className={inputStyle(error)} value={ymin} onChange={(e) => update(1, parseFloat(e.target.value))} />
            <input type="number" step="any" className={inputStyle(error)} value={xmax} onChange={(e) => update(2, parseFloat(e.target.value))} />
            <input type="number" step="any" className={inputStyle(error)} value={ymax} onChange={(e) => update(3, parseFloat(e.target.value))} />
        </div>
        {error && <p className={componentsStyle.error}>{error}</p>}
      </label>
    </div>
  )
}
export default ExtentInput