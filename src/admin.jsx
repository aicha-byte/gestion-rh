import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';





export default function Admin() {
  return (
    <div>
      <br></br>
      <br></br><br />
<h1>Employer Name & Info</h1>

<table>

<thead>

  <tr>
<th>Nom & Prénom</th>
<th>Email-Pro</th>
<th>Num-Tel</th>
<th>Designation</th>
<th>Note</th>
</tr>
</thead>


<tbody>
</tbody>
<tr> 

  
  <td ><Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 80, height: 80 ,  }}
      />AICHA MSALLEM</td>
  <td>AICHAMSALLEM@jjkjjkjkgh</td>
  <td>5859598477</td>
  <td>front end developer</td>
  <td>10/10</td><Stack direction="row" spacing={3}>
      <Button color="secondary"> + Add User</Button>
      <Button variant="contained" color="success">
        Update
      </Button>
      <Button variant="outlined" color="error">
        Delete
      </Button>
    </Stack>
</tr>
</table>



<table>
<tbody>
</tbody>
<tr>
  <td><Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 80, height: 80 ,  }}
      />xxxxxxxxxx</td>
  <td>AICHAMSALLEM@jjkjjkjkgh</td>
  <td>5859598477</td>
  <td>front end developer</td>
  <td>10/10</td>
  <Stack direction="row" spacing={3}>
      <Button color="secondary"> + Add User</Button>
      <Button variant="contained" color="success">
        Update
      </Button>
      <Button variant="outlined" color="error">
        Delete
      </Button>
    </Stack></tr>
</table>






<div className='btnAdmin'>
<Stack direction="row" spacing={3}>
      <Button color="secondary"> + Add User</Button>
      <Button variant="contained" color="success">
        Update
      </Button>
      <Button variant="outlined" color="error">
        Delete
      </Button>
    </Stack>

    </div>
    </div>
  )
}
