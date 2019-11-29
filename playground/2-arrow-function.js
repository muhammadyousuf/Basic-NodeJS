console.log("arrow function");
// const square = function(x) {
//   return x * x;
// };

// const square = (x) => {
//     return x * x;
//   };

const square = x => x * x;

console.log(square(5));

const event = {
  name: "Birthday Party",
  guestList: ["Yousuf", "Raza", "Hassaan"],
  printGuestList() {
    console.log("Guest List for ", this.name);
    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();
