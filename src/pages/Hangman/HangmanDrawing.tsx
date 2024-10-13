import { styled } from "@mui/material"


const Head = styled('div')(() => ({
    width: "25px",
    height: "25px",
    borderRadius: "100%",
    border: "5px solid black",
    position: "absolute",
    top: "30px",
    right: "-10px",
}));

const Body = styled('div')(() => ({
    width: '5px',
    height: '50px',
    background: 'black',
    position: 'absolute',
    top: '60px',
    right: 0,
}));

const RightArm = styled('div')(() => ({
    width: '50px',
    height: '5px',
    background: 'black',
    position: 'absolute',
    top: '75px',
    right: '-50px',
    transform: 'rotate(-30deg)',
    transformOrigin: 'left bottom',
}));

const LeftArm = styled('div')(() => ({
    width: '50px',
    height: '5px',
    background: 'black',
    position: 'absolute',
    top: '75px',
    right: '5px',
    transform: 'rotate(30deg)',
    transformOrigin: 'right bottom',
}));

const RightLeg = styled('div')(() => ({
    width: '50px',
    height: '5px',
    background: 'black',
    position: 'absolute',
    top: '105px',
    right: '-45px',
    transform: 'rotate(60deg)',
    transformOrigin: 'left bottom',
}));

const LeftLeg = styled('div')(() => ({
    width: "50px",
    height: "5px",
    background: "black",
    position: "absolute",
    top: "105px",
    right: 0,
    rotate: "-60deg",
    transformOrigin: "right bottom",
}));

const TopBar = styled('div')(() => ({
    height: '25px',
    width: '5px',
    background: 'black',
    position: 'absolute',
    top: 0,
    right: 0,
}));

const HorizontalBar = styled('div')(() => ({
    height: '5px',
    width: '100px',
    background: 'black',
    marginLeft: '60px',
}));

const VerticalBar = styled('div')(() => ({
    height: '200px',
    width: '5px',
    background: 'black',
    marginLeft: '60px',
}));

const BaseBar = styled('div')(() => ({
    height: '5px',
    width: '125px',
    background: 'black',
}));



export { Head, Body, RightArm, LeftArm, RightLeg, LeftLeg };


const HangmanDrawingContainer = styled('div')(() => ({
    position: 'relative',
}));



function HangmanDrawing() {
  return (
    <HangmanDrawingContainer>
        <TopBar />
        <HorizontalBar />
        <VerticalBar />
        <BaseBar />
        
        
    </HangmanDrawingContainer>
  )
}

export default HangmanDrawing