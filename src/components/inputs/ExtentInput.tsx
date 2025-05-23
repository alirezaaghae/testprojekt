import { componentsStyle } from "../../utils/inputStyle"

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
    <div className="mb-3">
      <label className={componentsStyle.body}>
        <span className={componentsStyle.label}>{label}</span>
        <div className="grid grid-cols-4 divide-x-1 divide-gray-300 h-full border border-[#373737] rounded-r-[10px]">
            <input type="number" step="any" placeholder="xmin" className={componentsStyle.extent} value={xmin} onChange={(e) => update(0, parseFloat(e.target.value))} />
            <input type="number" step="any" placeholder="ymin" className={componentsStyle.extent} value={ymin} onChange={(e) => update(1, parseFloat(e.target.value))} />
            <input type="number" step="any" placeholder="xmax" className={componentsStyle.extent} value={xmax} onChange={(e) => update(2, parseFloat(e.target.value))} />
            <input type="number" step="any" placeholder="ymax" className={componentsStyle.extent} value={ymax} onChange={(e) => update(3, parseFloat(e.target.value))} />
        </div>
      </label>
        {error && <p className={componentsStyle.error}>{error}</p>}
    </div>
  )
}
export default ExtentInput