import {useEffect, useState} from "react"
import {lightFormat, subHours} from "date-fns"

const Time = () => {
    const [time, setTime] = useState<Date>(new Date())

    const tick = () => setTime(new Date())
    useEffect(() => {

        const interval = setInterval(tick, 1000)

        return () => clearInterval(interval)
    })

    return <div className={"absolute left-1/2 -translate-x-1/2 top-40 flex items-center"}>
        <div className={"whitespace-nowrap font-semibold"}>2022-10-04 {time.toLocaleTimeString().slice(2, 10)}</div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
             className={"w-4 h-4 ml-2.5 pb-0.5  text-blue-400"}>
            <path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48"/>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48"
                  d="M256 58l80 80-80 80"/>
        </svg>
    </div>
    // <span>{format(time, "yyyy-MM-dd HH:mm:SS")}</span>

}

const Code = () => {
    const time = new Date()
    return <div>
        <div className={"absolute left-12 top-[505px] flex"}>
            <div className={"text-5xl text-[#35be7c] font-extrabold"}>25</div>
            <div className={"flex flex-col ml-1.5"}>
                <span className={"text-base font-semibold"}>小时</span>
                <span className={"text-base text-[#35be7c] font-bold"}>阴性</span>
            </div>
        </div>

        <div
            className={"absolute left-10 top-[571px] text-sm text-[#999999] font-medium"}>{lightFormat(subHours(time, 25), "yyyy-MM-dd HH:mm:SS")}</div>
    </div>
}

function App() {

    return <div className={"relative"}>
        <Time/>
        <img src={"bg.jpg"} alt={""}/>
        <Code/>
    </div>
}

export default App
