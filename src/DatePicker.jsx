import React, { useState } from 'react';
import './App.css'


function DatePicker(){

    const [ date, setDate]=useState();
return (



<div className='main'>

<br>
</br>
<br>
</br>
<br>
</br>
<p className='Para'>sélectionnez la date souhaitée : </p>

<p>Du:</p> <input className='inputDatePicker' type='date' onChange={e=>setDate(e.target.value)}/>

<p>Au:</p> <input className='inputDatePicker' type='date' onChange={e=>setDate(e.target.value)}/>
<br>
 </br>
 <br>
 </br>
 <br>
 </br>
<p>Nombre de jours :</p>


<input className='InputNbrJours' placeholder='*** '></input>
</div>

);


}
export default DatePicker;

