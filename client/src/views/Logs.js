import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

function Logs() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pages, setPages] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios(`/api/logs/fibonacci?page=${page}`);
        if (!ignore) {
          setData(result.data.rows);
          setPages(result.data.pages);
        }
      } catch (error) {
        if (!ignore) setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
    return () => { ignore = true; };
  }, [page]);

  return (
    <>
      {isError && <Grid item>Something went wrong ...</Grid>}
      {isLoading && <Grid item>Loading ...</Grid>}
      <Grid item>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Number</TableCell>
                <TableCell align="center">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.number}</TableCell>
                  <TableCell align="right">
                    <TextareaAutosize defaultValue={row.value} rowsMax={3} rowsMin={3} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>
        <Pagination
          disabled={isLoading}
          onChange={(e, p) => setPage(p)}
          page={page}
          count={pages}
        />
      </Grid>
    </>
  );
}

export default Logs;
