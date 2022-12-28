import React from 'react'
import BouttonAppBAR from './BouttonAppBAR'

export default function User() {
  return (
    <div>


{/* <BouttonAppBAR /> */}
                  <h3>Demande de congé</h3>
                  <p>Date sortie  // calendrier </p>

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
                  <button>envoyer votre demande</button>
                  <br>
                  </br>
                  <h3>Demande d'autorisation de sortie</h3>





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
                  <button>envoyer votre demande</button>





    </div>
  )
}





