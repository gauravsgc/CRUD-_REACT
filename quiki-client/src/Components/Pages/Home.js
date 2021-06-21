import React from 'react'
import Navig from './Navig.js';
import Details from '../Stock_Details.js';
//import View from '../Pages/View.js';
function Home() {
    return (
        <div>
            <Navig />

            <Details />
            {/*<View /> */}
        </div>
    )
}

export default Home
