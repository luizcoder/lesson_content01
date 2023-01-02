import { useEffect, useRef, useState } from 'react'

const StateDemo = () => {
    const initialListState = ['Orange', 'Apple']
    const countInitialState = 0
    const prevCountRef = useRef()

    const [count, setCount] = useState(countInitialState)
    const [list, setList] = useState(initialListState)

    const updateCount = (newValue) => {
        prevCountRef.current = count
        setCount(newValue)
    }

    // Life cycle
    useEffect(() => { console.log('useEffect') }, [])

    return (
        <>
            <div>
                <p>Before: {prevCountRef.current || "Empty"}</p>
                <p>
                    
                    New Value: {count == 0 && "Empty" || count} <span> ({
                        count != 0 &&
                        (count % 2 == 0 && 'Even' || 'Odd')

                    })</span>
                </p>
                <button onClick={() => updateCount(count + 1)}>Add</button> 
            </div>
        </>
    )
}


export default StateDemo