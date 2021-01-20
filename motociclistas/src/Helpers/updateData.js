import { Global } from '../Global/Global'

export const updateData = async (id, rute) => {

    const url = `${Global.backend + rute}`;
    const resp = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({
            id
        })
    });
    const data = await resp.json();
    
    return data

}