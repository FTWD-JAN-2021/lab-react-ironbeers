import React, { useEffect, useState} from 'react';
import axios from 'axios';


function AllBeers(props) {
        let [beers, setbeers] = useState(['🍺'])

        useEffect(() => {
            axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                console.log(res)
                setbeers(res.data)
            })
        } ,[]
        )

            const showbeers = () => {
                return beers.map(eachbeer => {
                    return (
                        <li>
                            {eachbeer.name} <img src={eachbeer.image_url}/>
                        </li>
                    )

                })
            }



    return (
        <div>
            {showbeers()}
        </div>
    );
}

export default AllBeers;