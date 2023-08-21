import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    // 의존성 배열, count가 바뀔 때만 실행됨
    // fetch(API경로) : API 비동기 통신을 위해 사용, Promiss가 반환됨
    // res는 http 응답이고 실제 json은 아님 그래서 json을 사용하면 json으로 변환되고 Promiss를 반환해줌
    const days = useFetch(`http://localhost:3001/days`)

    // 속도가 매우 느릴 때 보여지는 글자
    if(days.length === 0){
        return <span>Loading...</span>
    }

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to ={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}