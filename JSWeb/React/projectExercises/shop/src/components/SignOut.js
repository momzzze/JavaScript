import React from 'react'
import {auth} from '../firebase'


const SingOutButton=()=>
<button type="button" onClick={auth.doSignOut}> Sign Out </button>


export default SingOutButton