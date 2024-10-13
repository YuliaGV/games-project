import { Container, styled, Typography } from "@mui/material"
import { useState } from "react"
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


  return (
    <HangmanContainer>

      <Typography variant="h4" component="h4">
        Categoria: Animales
      </Typography>

      <Typography variant="subtitle1" color="secondary">
        Intentos restantes: 6
      </Typography>


      <Typography variant="subtitle1" color="secondary">
        Ganaste Perdiste
      </Typography>

      <HangmanDrawing/>
      <HangmanWord />
      <Keyboard />

    
    </HangmanContainer>
  )
}

export default Hangman