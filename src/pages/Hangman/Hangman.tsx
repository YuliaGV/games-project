import { Button, Container, styled, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import words from '../../wordList.json'
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";


const HangmanContainer = styled(Container)(() => ({
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  margin: "0 auto",
  alignItems: "center"
  
}));

function Hangman() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.word.includes(letter))

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.word
  .split("")
  .filter(letter => letter !== " ") 
  .every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    letter = letter.toUpperCase();
    if(guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])



  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if(!key.match(/[A-Z]/)) return;

      e.preventDefault();
      addGuessedLetter(key)

    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])


  return (
    <HangmanContainer>
      <Typography variant="h4" component="h4">
        Categoría: {wordToGuess.category}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setWordToGuess(words[Math.floor(Math.random() * words.length)])} disabled={guessedLetters.length != 0}>
        Cambiar palabra
      </Button>
      <Typography variant="subtitle1" color="secondary">
        Intentos restantes: {6 - incorrectLetters.length}
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        {isLoser ? "Perdiste, refresca para intentar de nuevo" : isWinner ? "Ganaste, refresca para intentar de nuevo" : ""}
      </Typography>
      <HangmanDrawing  numberOfGuesses = {incorrectLetters.length}   />
      <HangmanWord 
        reveal = {isLoser}
        wordToGuess={wordToGuess.word} 
        guessedLetters={guessedLetters} 
      />
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={guessedLetters.filter(letter => wordToGuess.word.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />

    </HangmanContainer>
  )
}

export default Hangman