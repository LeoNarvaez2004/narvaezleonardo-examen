//Leonardo Narvaez
function calcWeightedGrade(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('items debe ser un arreglo');
    }
    if (items.length === 0) {
        throw new RangeError('items no puede estar vacío');
    }
    let totalWeight = 0;
    let weightedSum = 0;
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (typeof item.score !== 'number') {
            throw new TypeError(`la nota en indice ${i} debe ser un numero`);
        }
        if (typeof item.weight !== 'number') {
            throw new TypeError(`la ponderacion en indice ${i} debe ser un numero`);
        }
        if (item.score < 0 || item.score > 100) {
            throw new RangeError(`la nota en indice ${i} debe estar entre 0 y 100`);
        }
        if (item.weight < 0 || item.weight > 1) {
            throw new RangeError(`la ponderacion en indice ${i} debe estar entre 0 y 1`);
        }
        totalWeight += item.weight;
        weightedSum += item.score*item.weight;
    }
    if (Math.abs(totalWeight - 1) > 0.001) {
        throw new RangeError('La suma de las ponderaciones debe ser igual a 1 (tolerancia 0.001)');
    }
    return parseFloat(weightedSum.toFixed(2));
}
//Leonardo Narvaez
function percentile(p, values) {
    if (typeof p !== 'number') {
        throw new TypeError('p debe ser un numero');
    }
    if (p < 0 || p > 100) {
        throw new RangeError('p debe estar entre 0 y 100');
    }
    if (!Array.isArray(values)) {
        throw new TypeError('values debe ser un arreglo');
    }
    if (values.length === 0) {
        throw new RangeError('values no puede estar vacío');
    }
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] !== 'number') {
            throw new TypeError("El elemento en indice ${i} debe ser un numero");
        }
    }
    const sorted = [...values].sort((a, b) => a - b);
    const N = sorted.length;
    let result;
    if (p === 0) {
        result = sorted[0];
    } else if (p === 100) {
        result = sorted[N - 1]; 
    } else {
        const rank = Math.ceil((p / 100) * N);
        result = sorted[rank - 1]; 
    }
    return parseFloat(result.toFixed(2));
}
module.exports = { calcWeightedGrade, percentile };