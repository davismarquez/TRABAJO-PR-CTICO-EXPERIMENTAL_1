// ─────────────────────────────────────────────────────────────
//  REFERENCIAS AL DOM  (las del docente + las nuevas)
// ─────────────────────────────────────────────────────────────
const selectDiasProduccion    = document.getElementById('id-select-dias')
const btnCargarProduccion     = document.getElementById('id-btn-cargar-produccion')
const btnPresentarProduccion  = document.getElementById('id-btn-presentar-produccion')
const txtPresentarProduccion  = document.getElementById('id-listado-produccion')
const btnTotal = document.getElementById('id-btn-total')
const txtTotal = document.getElementById('id-total')
const btnMayor = document.getElementById('id-btn-mayor')
const txtMayor = document.getElementById('id-mayor')
const btnMenor = document.getElementById('id-btn-menor')
const txtMenor = document.getElementById('id-menor')
const btnPromedio = document.getElementById('id-btn-promedio')
const txtPromedio = document.getElementById('id-promedio')
const btnSobrePromedio = document.getElementById('id-btn-sobre-promedio')
const txtSobrePromedio = document.getElementById('id-sobre-promedio')
const btnCriticos = document.getElementById('id-btn-criticos')
const txtCriticos = document.getElementById('id-criticos')
const btnRepetidos = document.getElementById('id-btn-repetidos')
const txtRepetidos = document.getElementById('id-repetidos')

let vectorProduccion = []

const nombresDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']





btnCargarProduccion.addEventListener('click', function (e) {
    const dimension = parseInt(selectDiasProduccion.value)
    cargarProduccion(dimension)
})

btnPresentarProduccion.addEventListener('click', function (e) {
    txtPresentarProduccion.value = vectorProduccion.join('.')
})

btnTotal.addEventListener('click', function () {
    const total = calcularTotal()
    txtTotal.value = 'Producción total: ' + total
})

btnMayor.addEventListener('click', function () {
    const indice = buscarIndiceMayor()
    txtMayor.value =
        'Mayor producción: ' + vectorProduccion[indice] +
        '\nDía: ' + nombresDias[indice]
})

btnMenor.addEventListener('click', function () {
    const indice = buscarIndiceMenor()
    txtMenor.value =
        'Menor producción: ' + vectorProduccion[indice] +
        '\nDía: ' + nombresDias[indice]
})

btnPromedio.addEventListener('click', function () {
    const total    = calcularTotal()
    const promedio = calcularPromedio(total)
    txtPromedio.value = 'Promedio semanal: ' + promedio
})

btnSobrePromedio.addEventListener('click', function () {
    const total    = calcularTotal()
    const promedio = calcularPromedio(total)
    const cantidad = contarSobrePromedio(promedio)
    txtSobrePromedio.value = 'Días superiores al promedio: ' + cantidad
})

btnCriticos.addEventListener('click', function () {
    const cantidad = contarCriticos()
    txtCriticos.value = 'Días con producción crítica: ' + cantidad
})

btnRepetidos.addEventListener('click', function () {
    const hayRepetidos = detectarRepetidos()
    if (hayRepetidos) {
        txtRepetidos.value = 'Existen días con producción repetida'
    } else {
        txtRepetidos.value = 'No existen producciones repetidas'
    }
})







function cargarProduccion(dimension) {
    for (let i = 0; i < dimension; i++) {
        const numAleatorio = Math.ceil(Math.random() * 1000)
        vectorProduccion[i] = numAleatorio
    }
}





function calcularTotal() {
    let suma = 0

    for (let i = 0; i < vectorProduccion.length; i++) {
        suma = suma + vectorProduccion[i]
    }

    return suma
}






function buscarIndiceMayor() {
    let indiceMayor = 0

    let i = 1
    while (i < vectorProduccion.length) {
        if (vectorProduccion[i] > vectorProduccion[indiceMayor]) {
            indiceMayor = i
        }
        i++
    }

    return indiceMayor
}






function buscarIndiceMenor() {
    let indiceMenor = 0

    let i = 1
    while (i < vectorProduccion.length) {
        if (vectorProduccion[i] < vectorProduccion[indiceMenor]) {
            indiceMenor = i
        }
        i++
    }

    return indiceMenor
}








function calcularPromedio(total) {
    let promedio = Math.floor(total / vectorProduccion.length)
    return promedio
}






function contarSobrePromedio(promedio) {
    let contador = 0

    for (let i = 0; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] > promedio) {
            contador = contador + 1
        }
    }

    return contador
}





function contarCriticos() {
    let contador         = 0
    const LIMITE_CRITICO = 100

    for (let i = 0; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] < LIMITE_CRITICO) {
            contador = contador + 1
        }
    }

    return contador
}




function detectarRepetidos() {
    let hayRepetido = false

    for (let i = 0; i < vectorProduccion.length; i++) {
        for (let j = i + 1; j < vectorProduccion.length; j++) {
            if (vectorProduccion[i] === vectorProduccion[j]) {
                hayRepetido = true
            }
        }
    }

    return hayRepetido
}