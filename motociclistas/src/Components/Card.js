import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TimeImage from '../Assets/Images/SVG/Time.svg'
import { updateData } from '../Helpers/updateData';

export const Card = ({ id, time, contador: cont }) => {

    const [contador, setContador] = useState({
        contador: 0,
        class: "animate__bounceIn animate__delay-1s",
        check: false,
        me: false
    })

    useEffect(() => {
        setContador({ ...contador, "contador": cont })
    }, [])

    const handleClick = () => {
        if (contador.contador === 8 && !contador.me) {
            alert('Capacidad maxima')
        } else {
            updateData(id, contador.check ? "updateSubtract" : "updateAdd")
                .then(result => {
                    if (result.success) {
                        setContador({
                            "class": contador.check ? "" : "animate__pulse greend",
                            "contador": contador.check ? contador.contador - 1 : contador.contador + 1,
                            "check": !contador.check,
                            "me": true
                        });
                    }
                    else {
                        alert('Capacidad maxima')
                        setContador({...contador, "contador": 8})
                    }
                })
        }

    }

    return (
        <div className={"card animate__animated " + contador.class + (contador.contador === 8 && contador.me == false ? " red" : "")} onClick={handleClick}>
            <img alt="Icon" src={TimeImage} />
            <div className="context">
                <h2>Time: {time}</h2>
                <p>Ocupados: {contador.contador}</p>
                <p>Disponibles: {8 - contador.contador}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    time: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    contador: PropTypes.number.isRequired
}
