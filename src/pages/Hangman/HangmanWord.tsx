import {  styled, Typography } from "@mui/material"

const HangmanWordContainer = styled('div')(() => ({
    display: "flex",
    gap: ".50em",
    fontWeight: "bold",
    textTransform: "uppercase",
    flexWrap: "wrap", 
    justifyContent: "center", 
}));

const LetterContainer = styled('div')(() => ({
    borderBottom: "1px solid black",
    width: "35px",
    textAlign: "center",
    '@media (max-width: 600px)': { 
        width: "25px",
    }
}));


type HangmanWordProps = {
    reveal?: boolean;
    wordToGuess: string;
    guessedLetters: string[];
}


function HangmanWord({ wordToGuess, guessedLetters, reveal=false }: HangmanWordProps) {
  return (
    <HangmanWordContainer>
        {wordToGuess.split("").map((letter, index) => (
            letter === " " ? (
                <Typography key={index}>&nbsp;</Typography>
            ) : (
                <LetterContainer key={index}>
                    <Typography variant="h3" component="h4">
                        <span
                            style={{
                                visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                                color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
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