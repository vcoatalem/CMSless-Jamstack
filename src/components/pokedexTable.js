import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
  { 
    field: 'id',
    headerName: 'ID',
    width: 90
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 110,
    editable: true,
  },
];




function GetTypeImage(type) {
    if (["fight", "rock", "ground"].includes(type))
        return "https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_Type_Combat_Pokemon_JCC.png"
    if (["electric"].includes(type))
        return "https://upload.wikimedia.org/wikipedia/commons/4/48/Logo_Type_Electrik_Pokemon_JCC.png"
    if (["water", "ice"].includes(type))
        return "https://upload.wikimedia.org/wikipedia/commons/c/ce/Logo_Type_Eau_Pokemon_JCC.png"
    if (["fire"].includes(type))
        return "https://upload.wikimedia.org/wikipedia/commons/8/8b/Logo_Type_Feu_Pokemon_JCC.png"
    return ""
}



function FormatRows(pokedexEntries) {
    console.log(pokedexEntries)
    return pokedexEntries.map(pokedexEntry => {
        return {
            "name": pokedexEntry.node.name,
            "type": pokedexEntry.node.type,
            "image": pokedexEntry.node.image
        };
    })
}
export default function PokedexTable(pokedexData) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FormatRows(pokedexData).map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                    <image src={GetTypeImage(row.type)}></image>
                    {row.type}
                </TableCell>
                <TableCell align="right">
                    <image src={row.image}></image>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

/*
export default function PokedexTable(pokedexData) {
    console.log(pokedexData);
    console.log(FormatRows(pokedexData))
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={FormatRows(pokedexData)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
  */
