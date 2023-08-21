import useFetch from "../hooks/useFetch";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function CreateWord() {
    const days = useFetch(`http://localhost:3001/days`)
    const history = useNavigate();

    // 버튼 클릭시 속도가 느려서 3번 누르면 3번 다 시간 후에 작동되게 하는 오류 제거
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if(!isLoading && engRef.current && korRef.current && dayRef.current){
            setIsLoading(true);

            const eng = engRef.current.value;
            const kor = korRef.current.value;
            const day = dayRef.current.value;


            fetch(`http://localhost:3001/words/`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    eng,
                    kor,
                    day,
                    isDone: false,
                }),
            })
            .then(res => {
                if(res.ok){
                    alert("생성이 완료되었습니다.")
                    history(`/day/${day}`)
                    setIsLoading(false)
                }
            })
        }
    }

    // useRef : DOM에 접근하게 해줌, 스크롤 위치 알거나, 포커스 주거나 할 때
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className={"input_area"}>
                    <label>Eng</label>
                    <input type={"text"} placeholder={"computer"} ref={engRef}/>
                </div>
                <div className={"input_area"}>
                    <label>Kor</label>
                    <input type={"text"} placeholder={"컴퓨터"} ref={korRef}/>
                </div>
                <div className={"input_area"}>
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map(day => (
                            <option key={day.id} value={day.day}>{day.day}</option>
                        ))}
                    </select>
                </div>
                <button style={{
                    opacity: isLoading ? 0.3 : 1,
                }}
                >{isLoading?"Saving..":"저장"}</button>
            </form>
        </>
    )
}