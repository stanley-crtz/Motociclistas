const sumMinutes = (time, sum) => {

    time = time.split(':');

    horas = parseFloat(time[0]);
    minutos = parseFloat(time[1]);
    segundos = parseFloat(time[2]);

    var horas_Segundos = horas * 3600;
    var minutos_Segundos = minutos * 60;
    var segundos = segundos + minutos_Segundos + horas_Segundos;

    const validation = Math.floor((segundos % 3600) / 60) + sum === 60 ? true : false

    var hours = Math.floor(segundos / 3600) + (validation ? 1 : 0);
    var minutes = validation ? 0 : Math.floor((segundos % 3600) / 60) + sum;
    var seconds = segundos % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    var result = hours + ":" + minutes + ":" + seconds;

    return result

}

const getArray = () => {
    let hours = '7:30:00';
    const data = [];
    let cont = 0;
    while (parseInt(hours.split(':')[0]) + 1 <= 20) {

        hours = sumMinutes(hours, 30);
        data.push({
            id: cont,
            time: hours,
            contador: 0
        })
        cont++;

    }

    return data;
}

module.exports = getArray;