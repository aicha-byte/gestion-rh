// import  React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Nom & Prénom ', '**********************'),

//   createData('Email Professionnel', '**********@*************'),

//   createData('Num Tel ','*********************'),
//   createData('Poste', '**********************'),
//   createData('Salaire', '***********************'),
//   createData('Note', '**********************'),
//   createData('Sode de congé ', '*********************'),

// ];

// export default function TabUser() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 1000 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="right"></TableCell>
            
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React from 'react'

export default function TabUser() {
  return (
    <div  >

      <table className='tab' >
  <tr>
    <th>Nom & Prénom</th>
    <td>*************</td> <button>testtt</button>
  </tr>

  <br>
</br>

  <tr>
  <th>Email-Pro</th>
    <td>***********</td><button>testtt</button>
  </tr>

  <br>
</br>

  <tr>
  <th>Num-Tel</th>
    <td>**********</td><button>testtt</button>
  </tr>

  <br>
</br>


  <tr>
  <th>Post</th>
    <td>***********</td><button>testtt</button>
  </tr>

  <br>
</br>

  <tr>
  <th>Note</th>
    <td>*********</td><button>testtt</button>
  </tr>
  
</table>
    </div>
  )
}
