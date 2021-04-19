export function setBackground() {
    var rand = Math.floor(Math.random() * 5); 
    if (rand <= 0) { rand = 1 };
    return rand;
}