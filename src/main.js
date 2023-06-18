const todo = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];

//convert to JSON
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

// For loop
for (let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}
