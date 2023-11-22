//New Years
const displayMinutes = {
    newYear: true,
    beijing: true,
    brexit: true,
    covid: true,
    wii: true,
    y2k: true,
    soviet: true,
    // more later
}
updateCountdown('newYear', 'January 1, 2023')
updateCountdown('beijing', 'February 20, 2022')
updateCountdown('brexit', 'January 31, 2020')
updateCountdown('covid', 'December 1, 2019')
updateCountdown('wii', 'November 19, 2006')
updateCountdown('y2k', 'January 1, 2000')
updateCountdown('soviet', 'December 26, 1991')


function updateCountdown(id, startDate){

    // Update the count down every 1 second
    setInterval(function() {
        var countDownDate = new Date(startDate).getTime();
        
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = now - countDownDate;
        
        // Time calculations for days, hours, minutes and seconds
        var seconds = Math.floor(distance/ 1000);
        
        if (displayMinutes[id]) {
            document.getElementById(id).innerHTML = seconds + ' seconds', 1000
            
        } else {
            const days = Math.floor(distance/(1000*60*60*24))
            document.getElementById(id).innerHTML = days + ' days', 1000
            
            
        }
    });
    
}



function onClick(id){
    displayMinutes[id] = !displayMinutes[id]
    }



document.getElementById('newYear').addEventListener('click', () => onClick('newYear'))
document.getElementById('beijing').addEventListener('click', () => onClick('beijing'))
document.getElementById('covid').addEventListener('click', () => onClick('covid'))
document.getElementById('brexit').addEventListener('click', () => onClick('brexit'))
document.getElementById('Y2K').addEventListener('click', () => onClick('2k'))
document.getElementById('wii').addEventListener('click', () => onClick('wii'))
document.getElementById('soviet').addEventListener('click', () => onClick('soviet'))

