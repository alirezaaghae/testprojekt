import { componentsStyle, labelStyle } from "../../utils/inputStyle"

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
    <div className="mb-3 fade-in">
      <label className={`${componentsStyle.body} h-24`}>
        <span className={labelStyle(error)}>{label}</span>
        <div className={componentsStyle.extentBox}>
            <input type="number" step="any" placeholder="xmin" className={`${componentsStyle.input} text-center rounded-none!`} value={xmin} onChange={(e) => update(0, parseFloat(e.target.value))} />
            <input type="number" step="any" placeholder="ymin" className={`${componentsStyle.input} text-center rounded-none!`} value={ymin} onChange={(e) => update(1, parseFloat(e.target.value))} />
            <input type="number" step="any" placeholder="xmax" className={`${componentsStyle.input} text-center rounded-none!`} value={xmax} onChange={(e) => update(2, parseFloat(e.target.value))} />
            <input type="number" step="any" placeholder="ymax" className={`${componentsStyle.input} text-center rounded-none!`} value={ymax} onChange={(e) => update(3, parseFloat(e.target.value))} />
        </div>
      </label>
        {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default ExtentInput