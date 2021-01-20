import { Global } from "../Global/Global";

export const getData = async () => {

    const url = `${Global.backend}getSources`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const result = data.map(({ id, time, contador }) => {
        return {
            id,
            time,
            contador
        }
    })

    return result

}