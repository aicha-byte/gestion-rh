import { Button, Stack } from '@mui/material'
import React from 'react'
import DatePicker from './DatePicker'

export default function Congé() {
  return (
    <div className='bodyCongé'>

<h3 className='TCongé'  >Demande de congé</h3>

<p className='Para'>selectionnez votre type de congé :</p>

                  <br></br>
        
                  <select className='InputSelect'>
                        <option selected>type de congés</option>
                        <option value="1">congé annuel</option>
                        <option value="2">congé maladie</option>
                        <option value="2">téléTravail</option> 

                  </select>

<DatePicker/>
                  <br>
                  </br>
                  <br>
                  </br>
                  
                  <br>
                  </br>
                  <br>
                  </br>

                  <br>
                  </br>
                  
                  
                  
                
                  
                 
             
                  <Stack direction="row" spacing={3}>
      <Button variant="contained" color="success">
        envoyé 
      </Button>
      <Button variant="outlined" color="error">
        Annulé
      </Button>
    </Stack>



                
    </div>
  )
}
