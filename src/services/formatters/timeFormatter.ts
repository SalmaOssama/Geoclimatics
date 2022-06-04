export function formatTime(hmmTime: String) {
    if (hmmTime.length === 1)
        return `0${hmmTime}:00`
    else if (hmmTime.length === 2)
        return `${hmmTime}:00`
    else if (hmmTime.length === 3)
        return `0${hmmTime.charAt(0)}:00`
    else if (hmmTime.length === 4)
        return `${hmmTime.substring(0, 2)}:00`
}