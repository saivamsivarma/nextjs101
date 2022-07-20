import Head from "next/head";
import hooksStyle from '../styles/Hooks.module.css'
import { useEffect, useState, useRef, useReducer, useMemo } from "react";
export default function About() {
    const [count, setCount] = useState(0);
    const rCount = useRef(0)
    const [loaded, setLoaded] = useState(false);

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                throw new Error();
        }

    }
    const [state, dispatch] = useReducer(reducer,0);
    useEffect(
        () => {
            fetch('foo').then(() => setLoaded(!loaded))
        }, [count]
    )
    return (
        <div className={hooksStyle.grid}>
            <Head>
                <title>Hooks Nextjs</title>
            </Head>
            <div>
                <h1>useState</h1>
                <div className={hooksStyle.result}>{count}</div>
                <button className={hooksStyle.useState_btn} onClick={(e) => setCount(count + 1)}>Increment</button>
            </div>
            <div>
                <h1>useEffect</h1>
                {loaded ? <div className={hooksStyle.result}>true</div> : <div className={hooksStyle.result}>false</div>}
            </div>
            <div>
                <h1>useRef</h1>
                <div className={hooksStyle.result}>{rCount.current}</div>
                <button className={hooksStyle.useState_btn} onClick={() => rCount.current++}>Increment</button>
            </div>
            <div>
                <h1>useReducer</h1>
                <div className={hooksStyle.result}>{state}</div>
                <button className={hooksStyle.useState_btn} onClick={() => dispatch({type:'decrement'})}>decrement</button>
                <button className={hooksStyle.useState_btn} onClick={() => dispatch({type:'increment'})}>increment</button>
            </div>
        </div>
    )
}