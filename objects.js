const user = {
    name: "Andrei's house",
    sayHello: function(){
        return `Hello, ${this.name}`;
    },
    sayHello2: () => {
        return `Hello, ${this.name}`;
    }
}
console.log(user.name);
console.log(user.sayHello());
console.log(user.sayHello2());