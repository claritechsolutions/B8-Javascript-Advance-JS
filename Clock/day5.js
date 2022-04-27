setInterval( setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minutesHand = document.querySelector('[data-minutes-hand]')
const secondsHand = document.querySelector('[data-seconds-hand]')


function setClock() {
    const currentDate = new Date()
    const secondsRation = currentDate.getSeconds() / 60
    const minutesRation = (secondsRation + currentDate.getMinutes()) / 60
    const hoursRation = (minutesRation + currentDate.getHours()) / 12
    setRotation(secondsHand, secondsRation)
    setRotation(minutesHand, minutesRation)
    setRotation(hourHand, hoursRation)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}