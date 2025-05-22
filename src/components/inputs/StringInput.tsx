interface Props {
    inputStyle?:string
    label:string
    value: string
    onChange: (v: string) =>void
    minLength?: number
    maxLength?: number
}

const StringInput = ({inputStyle,label,value,onChange,minLength,maxLength}:Props) => {
    const handle = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const v = e.target.value 
        if (minLength && v.length < minLength) return
        if (maxLength && v.length > maxLength) return
        onChange(v)
    }
    return (
        <div>
            <label>{label}</label>
            <input className={inputStyle} type="text" placeholder="Name" value={value} onChange={handle}/>
        </div>
    )
}

export default StringInput