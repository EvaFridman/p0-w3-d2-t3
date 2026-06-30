// Строка с разделением разрядов и знаком валюты
function formatPrice(number) {
    if (typeof number !== "number" || isNaN(number)) {
        return "Error! Price has to be a number";
    } else {
        return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(number)
    }
}
console.log(formatPrice(1000));
console.log(formatPrice(500.5));
console.log(formatPrice(200000.6785));

// Имя с заглавной первой буквы, остальные строчные
function formatName(string) {
    if (typeof string !== 'string' || !string.trim()) return 'Error! Name has to be a string';
    
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
console.log(formatName("anna"));
console.log(formatName("jaMEs"));
console.log(formatName("SaM"));

// Собранное приветствие
function greet(name, partOfDay) {
    if (typeof name !== 'string' || !name.trim()) return 'Error! Name has to be a string';
    if (typeof partOfDay !== 'string' || !partOfDay.trim()) return 'Error! Part of day has to be a string';

    return "Good " + partOfDay + ", " + formatName(name) + "!";
}
console.log(greet("Ana", "morning"));
console.log(greet("James", "afternoon"));
console.log(greet("Sam", "evening"));