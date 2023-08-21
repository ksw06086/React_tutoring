import {useParams} from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    // dummy.words
    // 단어의 날짜가 1인 요소들만 출력
    const { day } = useParams(); // 얘가 문자임
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id} />
                ))}
                </tbody>
            </table>
        </>
    )
}