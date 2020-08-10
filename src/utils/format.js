const subjects = [
    "Artes",
    "Biologia",
    "Educação física",
    "Ciências",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
    
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// retornar em string (Matéria) e (Dia da semana)

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
    