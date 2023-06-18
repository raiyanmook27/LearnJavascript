function Person(firstName, lastName, age, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.birthday = new Date(birthday);
}

//adding a prototype
Person.prototype.getBirthYear = function () {
  return this.getBirthYear();
};

Person.prototype.fullName = function () {
  return this.firstName + this.lastName;
};

const person = new Person("John", "Doe", 30, "09-12-1994");
const person2 = new Person("Jane", 28);
const person3 = new Person("Bob", 35);

console.log(person.fullName());
console.log(person);
