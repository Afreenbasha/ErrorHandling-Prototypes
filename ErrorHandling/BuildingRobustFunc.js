function getPerson(personObj) {
    try {
        if (typeof personObj !== "object" || personObj === null || !("name" in personObj) || !("age" in personObj)) {
            throw new Error("Invalid parameter type");
        }
        const { name, age } = personObj;
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}

// Test cases
console.log(getPerson({ name: "Mithun", age: 20 })); // Output: "Name: Mithun, Age: 20"
console.log(getPerson({ name: "Mithun" })); // Output: "Invalid parameter type"
console.log(getPerson("Mithun")); // Output: "Invalid parameter type"
