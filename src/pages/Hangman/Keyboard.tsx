import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';


const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

const KeyboardContainer = styled('div')(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
    gap: ".5rem",
    alignSelf: "stretch"
}));

const KeyButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700]

    },
    '&.active': {
        backgroundColor: purple[900],
        color: theme.palette.getContrastText(purple[900]),
    }
    
}));

type KeyboardProps = {
    disabled?: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}
  
  


function Keyboard({ disabled=false, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <KeyboardContainer>
        {KEYS.map(key => {
            key = key.toUpperCase(); 
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return <KeyButton 
                key={key} 
                variant="contained"  
                className={isActive ? "active"  : ""}
                size="small" 
                onClick={() => addGuessedLetter(key)}
                disabled={isActive || isInactive || disabled}
                >
                {key}
                </KeyButton> 
            })}
    </KeyboardContainer>
  )
}

export default Keyboard