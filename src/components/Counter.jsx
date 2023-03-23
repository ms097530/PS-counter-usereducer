import { useContext } from "react"
import { MyContext } from "../App"

export default function Counter()
{
    const countContext = useContext(MyContext)
    const { state: count, dispatch: dispatchCount } = countContext
    console.log(countContext)

    const add = (e) => dispatchCount({
        type: 'add',
        payload: parseInt(e.target.value)
    })
    const sub = (e) => dispatchCount({
        type: 'sub',
        payload: parseInt(e.target.value)
    })
    const multiply = (e) => dispatchCount({
        type: 'mult',
        payload: parseInt(e.target.value)
    })

    console.log('render counter')
    return (
        <div className="Counter">
            <h2>{count}</h2>
            <div className="Counter__buttons">
                <button onClick={add} value="1">+1</button>
                <button onClick={sub} value="1">-1</button>
                <button onClick={add} value="5">+5</button>
                <button onClick={multiply} value="5">x5</button>
            </div>
        </div>
    )
}
