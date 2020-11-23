let dayjs$ = dayjs()

let getDays = (max) => {
    let days = []
    for (let i=1; i<=max; i++) {
        days.push(i)
    }
    return days
}


let init = () => {
    let calendarEle = document.getElementById('calendar')
    calendarEle.innerHTML = ''
    let selectedMonth = document.getElementById('form-month').value - 1
    let selectedYear = document.getElementById('form-year').value

    
    let days = dayjs$.year(parseInt(selectedYear)).month(parseInt(selectedMonth)).daysInMonth()
    getDays(days).forEach(d => {
        calendarEle.innerHTML += '<button onclick="displayResult('+ d +')">' + d + '</button>'
        if (d % 5 == 0 ) calendarEle.innerHTML += '</br>'
    })
}

let displayResult = (d) => {
    let selectedMonth = document.getElementById('form-month').value - 1
    let selectedYear = document.getElementById('form-year').value
    let selectedDayEle = document.getElementById('result')

    let result = dayjs$.year(parseInt(selectedYear)).month(parseInt(selectedMonth)).date(d).startOf('day').format()
    selectedDayEle.innerHTML = result
}

let refresh = () => {
    let calendarEle = document.getElementById('calendar')
    calendarEle.innerHTML = ''
    let selectedMonth = document.getElementById('form-month').value - 1
    let selectedYear = document.getElementById('form-year').value
    let selectedDayEle = document.getElementById('result')

    let days = dayjs$.year(parseInt(selectedYear)).month(parseInt(selectedMonth)).daysInMonth()
    getDays(days).forEach(d => {
        calendarEle.innerHTML += '<button onclick="displayResult('+ d +')">' + d + '</button>'
        if (d % 5 == 0 ) calendarEle.innerHTML += '</br>'
    })
    selectedDayEle.innerHTML = dayjs$.year(parseInt(selectedYear)).month(parseInt(selectedMonth)).startOf('day').format()
}