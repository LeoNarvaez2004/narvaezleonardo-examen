const {calcWeightedGrade, percentile} = require('./calcWeightedGrade');
//Leonardo Narvaez
describe('calcWeightedGrade', () => {
    test('debe calcular la nota ponderada correctamente devolviendo 86', () => {
        const items = [
            {score: 80, weight: 0.4},
            {score: 90, weight: 0.6}
        ];
        expect(calcWeightedGrade(items)).toBe(86);
    });
    test('Debe lanzar un error si la ponderacion no es un numero', () => {
        const items = [
            {score: 80, weight: '0.4'},
            {score: 90, weight: 0.6}
        ];
        expect(() => calcWeightedGrade(items)).toThrow(TypeError);  
    });
    test('debe lanzar un error si items está vacío', () => {
        expect(() => calcWeightedGrade([])).toThrow(RangeError);
    });
    test('Debe calcular el percentil correctamente devolviendo 3 para percentil 100', () => {
        const values = [1,2,3];
        expect(percentile(100, values)).toBe(3);
    });
    test('Debe calcular el percentil correctamente devolviendo 2 para percentil 50', () => {
        const values = [1,2,3,4];
        expect(percentile(50, values)).toBe(2);
    });
    test('Debe calcular el percentil correctamente devolviendo 1 para percentil 0', () => {
        const values = [1,2,3];
        expect(percentile(0, values)).toBe(1);
    });
});

