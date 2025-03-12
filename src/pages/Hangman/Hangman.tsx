import { Button, Container, FormControl, InputLabel, MenuItem, Select, styled, Typography } from "@mui/material"
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
  margin: "1rem auto",
  alignItems: "center"
  
}));

const ButtonContainer = styled('div')(() => ({
  display: "flex",
  gap: "1rem"
}));

function Hangman() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [currentCategory, setCurrentCategory] = useState(wordToGuess.category) 

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

  const newGame = () => {
    const wordsInCategory = words.filter(word => word.category === currentCategory)
    setWordToGuess(wordsInCategory[Math.floor(Math.random() * wordsInCategory.length)])
    setGuessedLetters([])
  }

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
  }, [addGuessedLetter, guessedLetters])


  return (
    <HangmanContainer>
  
     <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
        <InputLabel htmlFor="categoryToGuess">Selecciona una categoría</InputLabel>
        <Select
          id="categoryToGuess"
          value={currentCategory}
          onChange={(e) => {
            const category = e.target.value
            setCurrentCategory(category)
          }}
        >
          {[... new Set(words.map(word => word.category))].map(word => (
            <MenuItem key={word} value={word}>{word}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <ButtonContainer >
        <Button variant="outlined" color="primary" onClick={newGame} >
          Nuevo juego
        </Button>
      </ButtonContainer>

      <Typography variant="h5" color="h5">
       Categoría actual: {wordToGuess.category}
      </Typography>

      <Typography variant="subtitle1" color="secondary">
        Intentos restantes: {6 - incorrectLetters.length}
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        {isLoser ? "Perdiste, refresca o da click en 'Nueva palabra' para intentar de nuevo" : isWinner ? "Ganaste, refresca o da click en 'Nueva palabra' para intentar de nuevo" : ""}
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