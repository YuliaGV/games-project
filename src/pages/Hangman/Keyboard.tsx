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
        backgroundColor: purple[700],
    },
    '&.inactive': {
        backgroundColor: purple[300],
        opacity: '0.3',
     
    },
}));
  
  


function Keyboard() {
  return (
    <KeyboardContainer>
        {KEYS.map(key =>{ return <KeyButton key={key} variant="contained"  size="small" >{key}</KeyButton> })}
    </KeyboardContainer>
  )
}

export default Keyboard