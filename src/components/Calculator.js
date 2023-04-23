import React, { useState } from 'react';
import  { Button, TextField, Stack, Typography } from '@mui/material'


function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const submitHandler = () => {
        setResult(eval(input));
        setInput('')
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
                <Button variant='contained' color='secondary' onClick={() => setInput(input+'5')}>5</Button>
            </Stack>
            <Stack spacing={1} direction='row' className='margin'>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '6')}>6</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '7')}>7</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '8')}>8</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '9')}>0</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '0')}>9</Button> <br />
            </Stack>
            <Stack spacing={1} direction='row' className='margin' >
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '+')}>+</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '-')}>-</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '*')}>*</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '/')}>/</Button>
                <Button variant='contained' color='secondary' onClick={() => setInput(input + '')}>clear</Button>
            </Stack>
        </Stack>
    )
}

export default Calculator;