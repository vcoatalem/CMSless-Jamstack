import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Dark from "../../images/dark.svg"
import Water from "../../images/water.svg"
import Fire from "../../images/fire.svg"
import Electric from "../../images/electric.svg"
import Rock from "../../images/rock.svg"
import Bug from "../../images/bug.svg"

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

function GetTypeIcon(type) {
  switch (type)
  {
    case "water":
      return <Water/>
    case "fire":
      return <Fire/>
    case "eletric":
      return <Electric/>
    case "rock":
      return <Rock/>
    case "bug":
      return <Bug/>
    case "fighting":
      return <Fighting/>
  }
}


function FormatRows(pokedexEntries) {
    console.log(pokedexEntries)
    return pokedexEntries.map(pokedexEntry => {
        return {
            "name": pokedexEntry.node.name,
            "type": pokedexEntry.node.type,
            "image": pokedexEntry.node.mysqlImage
        };
    })
}
export default function PokedexTable(pokedexData) {
  console.log("pokedex data:", pokedexData)
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FormatRows(pokedexData).map((row) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">
                      {GetTypeIcon(row.type)}
                  </TableCell>
                  <TableCell align="right">
                      <Img fluid={row.image.childImageSharp.fluid}/>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
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
  )
}
*/