export function bmiCalculator(weight, height) {
    weight = weight * .45;
    height = height * .025;
    var BMI = (weight / Math.pow(height, 2));
    return BMI
}