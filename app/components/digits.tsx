"use client"

export default function Digits({maxValue, value, onChange}: {maxValue: number, value: string, onChange: (value: string) => void}) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        val = val.replace(/\D/g, "");
        let num = Math.min(parseInt(val || "0", 10), maxValue);
        let formatted = String(num).padStart(2, "0");
        onChange(formatted);
    };
    
    return(
            <div className="">
                <input className="text-center text-[40px] h-[120px] w-[120px] border-none rounded-box" value={value} onChange={handleChange} />
            </div>
    )
} 