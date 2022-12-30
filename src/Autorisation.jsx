import React from 'react'

export default function Autorisation() {
  return (
    <div>



<h3>Demande d'autorisation de sortie</h3> 


                  <br>
                  </br>

                  <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                              Matin
                        </label>
                  </div>
                  <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                              Apres-midi </label>
                  </div>
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
