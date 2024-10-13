import {  styled, Typography } from "@mui/material"

const word = "TEST WORD";
const guessedLetters = ["T"];

const HangmanWordContainer = styled('div')(() => ({
    display: "flex",
    gap: ".50em",
    fontWeight: "bold",
    textTransform: "uppercase",
}));

const LetterContainer = styled('div')(() => ({
    borderBottom: "1px solid black",
    maxWidth: "1.5em", 
    textAlign: "center"
}));


function HangmanWord() {
  return (
    <HangmanWordContainer>
        {word.split("").map((letter, index) => (
            letter === " " ? (
                <Typography key={index}>&nbsp;</Typography>
            ) : (
                <LetterContainer key={index}>
                    <Typography variant="h3" component="h4">
                        <span
                            style={{
                                visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
                            }}
                        >
                            {letter}
                        </span>
                    </Typography>
                </LetterContainer>
            )
        ))}
    </HangmanWordContainer>
  )
}

export default HangmanWord