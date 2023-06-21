"use client"

import { useEffect, useState } from "react"

const words = ["Заманауи", "Ерекше", "Оңай", "Қайталанбас"]

const WordCarousel: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [typingCompleted, setTypingCompleted] = useState(false)
  const [displayedWord, setDisplayedWord] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      )
      setTypingCompleted(false)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!typingCompleted) {
      let currentIndex = 0
      const targetWord = words[currentWordIndex]
      setDisplayedWord("")

      const typeNextLetter = () => {
        setDisplayedWord((prevWord) =>
          targetWord.substring(0, currentIndex + 1)
        )
        currentIndex++

        if (currentIndex < targetWord.length) {
          timeout = setTimeout(typeNextLetter, 100)
        } else {
          setTypingCompleted(true)
        }
      }

      timeout = setTimeout(typeNextLetter, 500)
    }

    return () => clearTimeout(timeout)
  }, [currentWordIndex, typingCompleted])

  return (
    <h1 className="h-20 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
      {displayedWord || "\u00A0"}
    </h1>
  )
}

export default WordCarousel
