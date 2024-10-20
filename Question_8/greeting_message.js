const generateGreeting = (name, language = 'English') => {
    const greetings = {
        English: "Hello",
        Spanish: "¡Hola",
        French: "Bonjour"
    };

    return `${greetings[language]}, ${name}!`;
};

console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
