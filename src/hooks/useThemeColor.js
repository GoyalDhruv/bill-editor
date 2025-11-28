import { useState, useEffect } from 'react'
import { hexToRGBA } from '../utils/hex-to-rgba'

const useThemeColor = () => {
    const [themeColor, setThemeColor] = useState(hexToRGBA('#ec6608', 0.5))
    const [mainColor, setMainColor] = useState('#ec6608')

    useEffect(() => {
        const intervalId = setInterval(() => {
            setThemeColor(hexToRGBA('#ec6608', 0.5))
            setMainColor('#ec6608')
        }, 1000)

        return () => clearInterval(intervalId)
    }, [themeColor])

    return { themeColor, mainColor }
}

export default useThemeColor