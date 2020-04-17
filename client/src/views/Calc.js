import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

const MAX_NUMBER = 50000;

function isValidNumber(value) {
  return /^[0-9]{0,}$/.test(value) && value >= 0 && value <= MAX_NUMBER;
}

function Calc() {
  const [number, setNumber] = useState('1');
  const [fibonacci, setFibonacci] = useState({ number: 1, value: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios(`/api/fibonacci/${number}`);
        setFibonacci(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }

  function handleChangeNumber(event) {
    const { value } = event.target;
    if (isValidNumber(value)) {
      setNumber(value);
    }
  }

  return (
    <>
      <Grid item>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            error={isError}
            disabled={isLoading}
            label="n"
            helperText={`0 ≤ n ≤ ${MAX_NUMBER}`}
            variant="outlined"
            value={number}
            onChange={handleChangeNumber}
          />
        </form>
      </Grid>
      {isError && <Grid item>Something went wrong ...</Grid>}
      {isLoading && <Grid item>Loading ...</Grid>}
      <Grid item>
        <Typography component="p">
          Fibonacci Value of Number (
          {fibonacci.number}
          {' '}
          )
        </Typography>
      </Grid>
      <Grid item>
        <TextareaAutosize defaultValue={fibonacci.value} readOnly rowsMax={4} />
      </Grid>
    </>
  );
}

export default Calc;
