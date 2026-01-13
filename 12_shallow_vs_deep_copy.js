// Shallow Copy
const obj1 = { name: "Ali", address: { city: "Lahore" } };
const shallow = { ...obj1 };

shallow.address.city = "Karachi";
console.log(obj1.address.city); // Karachi

// Deep Copy
const deep = JSON.parse(JSON.stringify(obj1));
deep.address.city = "Islamabad";
console.log(obj1.address.city); // Karachi
