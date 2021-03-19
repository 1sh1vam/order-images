import {useState, useRef, useEffect} from "react"

function useHoverHook() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        const event = ref.current
        event.addEventListener("mouseenter", enter)
        event.addEventListener("mouseleave", leave)

        return () => {
            event.removeEventListener("mouseenter", enter)
            event.removeEventListener("mouseleave", leave)
        }

    }, [])

    return [hovered, ref]
}

export default useHoverHook