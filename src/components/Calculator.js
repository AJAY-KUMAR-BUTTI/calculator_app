import React, { useState } from 'react';
import  { Button, TextField, Stack, Typography } from '@mui/material'
import BackspaceIcon from '@mui/icons-material/Backspace';


function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const submitHandler = () => {
        setResult(eval(input));
        setInput('')
    }
    const reset = () => {
        setResult(0)
    }
    return (
        <Stack spacing={1} >
            <Stack display='block' spacing={2} direction='column'>
                <TextField label='enter value' value={input} variant='outlined' onChange={e => setInput(e.target.value)} /> <br />
                <Button variant='contained'  onClick={submitHandler}>Result</Button>
            </Stack>

                <Typography variant='h4' gutterBottom ><span>result </span><span>:</span> {result}</Typography>

            <Stack spacing={1} direction='row' className='margin' >
                <Button variant='contained' color='secondary' onClick={() => setInput(input+'1')}>1</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input+'2')}>2</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input+'3')}>3</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input+'4')}>4</Button> 
            </Stack>
            <Stack spacing={1} direction='row' className='margin'>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '5')}>5</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '6')}>6</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '7')}>7</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '8')}>8</Button>
            </Stack>
            <Stack spacing={1} direction='row' className='margin' >
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '0')}>9</Button> <br />
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '9')}>0</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '+')}>+</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '-')}>-</Button>
            </Stack>
            <Stack spacing={1} direction="row" className='margin'>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '*')}>*</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '/')}>/</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input.slice(0, input.length - 1))}>{<BackspaceIcon />}</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput('')} style={{ fontWeight : 'bold', fontSize : '15px'}}>C</Button>
                <Button variant='contained' color='secondary' onClick={reset} style={{ fontWeight : 'bold', fontSize : '15px'}}>AC</Button>
            </Stack>
        </Stack>
    )
}

export default Calculator;