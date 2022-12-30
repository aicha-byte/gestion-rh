import React from 'react'

export default function Congé() {
  return (
    <div>

<h3>Demande de congé</h3>

                  <br>
                  </br>

                  <p>sélectionnez la date souhaitée   // calendrier </p>

                  <br></br>
                  <select class="form-select" aria-label="Default select example">
                        <option selected>type de congés</option>
                        <option value="1">congé annuel</option>
                        <option value="2">congé maladie</option>
                        <option value="2">téléTravail</option> 

                  </select>


                  <br>
                  </br>
                  <br>
                  </br>
                  
                  <br>
                  </br>
                  <br>
                  </br>


                  <Stack direction="row" spacing={2}>
                          <Button variant="outlined">Envoyé</Button>
                          <Button variant="outlined" disabled>
                           Annuler
                          </Button>
      
                          </Stack>



    </div>
  )
}
