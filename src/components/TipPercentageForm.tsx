import { Dispatch, SetStateAction } from "react"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
  }

export default function TipPercentageForm ({setTip,tip}: TipPercentageFormProps) {
    return(
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form action="">
                {
                    tipOptions.map((tipOpton)=>(
                        <div className="flex gap-2" key={tipOpton.id}>
                            <label htmlFor={tipOpton.id}>{tipOpton.label}</label>
                            <input id={tipOpton.id}
                                type="radio"
                                name="tip"
                                value={tipOpton.value}
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOpton.value === tip}
                                />
                        </div>
                    ))
                }
            </form>
        </div>
    )
}