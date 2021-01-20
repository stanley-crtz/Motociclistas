const getArray = require('../Funtions/getArray');
let data = getArray();

const Motociclista = {

    getSources: (req, res) => {

        return res.status(200).send({ data });

    },
    updateAdd: (req, res) => {
        const { id } = req.body;
        if (data[id].contador !== 8) {
            data[id].contador = data[id].contador + 1;

            return res.status(200).send({
                message: "El elementoa sido actualizado",
                success: true
            })
        }
        
        return res.status(200).send({
            message: "Capacidad maxima alcanzada",
            success: false
        })

    },
    updateReset: (req, res) => {
        data = getArray();
        return res.status(200).send({
            message: "El elementoa sido reseteado",
            success: true
        })
    },
    updateSubtract: (req, res) => {
        const { id } = req.body;
        data[id].contador = data[id].contador - 1;

        return res.status(200).send({
            message: "El elementoa sido actualizado",
            success: true
        })
    }

}

module.exports = Motociclista;