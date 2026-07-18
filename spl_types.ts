let data: any = "Hello";
console.log(data);

data = 100;
console.log(data);

data = true;
console.log(data);

let value: unknown = "Manikanta";

if (typeof value === "string") {
    console.log(value);
}

function display(): void {
    console.log("This function returns nothing");
}

display();