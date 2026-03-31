import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

export function useAnimatedCount(value: number, duration = 1.2) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const controls = animate(0, value, {
            duration,
            onUpdate(latest) {
                setCount(Math.round(latest))
            },
        })

        return () => controls.stop()
    }, [value, duration])

    return count
}
