// Problem 1:
function filterEvenNumbers (numbers: number[]): number[]{
      const evenNumbers: number[] = [];
      for( let i = 0; i < numbers.length; i++){
            if(numbers[i] % 2 ===0){
                  evenNumbers.push(numbers[i])
            }
      }
      return evenNumbers

}
const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6,8,12,33,44])
console.log(result1)


// Problem 2:
function reverseString (str: string): string {
      const reverseToString = str.split('').reverse().join('');
      return reverseToString
}
const result2 = reverseString("typescript")
console.log(result2)

// Problem 3:
type StringOrNumber = string | number;
function  checkType (input: StringOrNumber): String | Number{
      if(typeof input === "string"){
            return "String"
      }else{
            return "Number"
      }
}
const string = checkType("Md Shahid Hossain")
const number = checkType(7)
console.log(number)

// Problem 4:
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}


const user = {
  name: "Md. Shahid Hossain",
  age: 22,
};

console.log(getProperty(user, "name")); 


// Problem 5:
interface Book {
      title: string;
      author: string;
      publishedYear: number;
}

function toggleReadStatus(book: Book): Book & {isRead: boolean}{
      return {
            ...book,
            isRead: true,
      }
}
const myBook: Book = {
      title: "problem solving",
      author: "Md. Shahid Hossain",
      publishedYear: 2026
}
const updatedBook = toggleReadStatus(myBook)
console.log(updatedBook)

// Problem 6:
class Person {
      name: string;
      age: number;     

      constructor(name: string, age: number){
            this.name = name;
            this.age = age
      }
}

class Student extends Person {
      grade: string;

      constructor(name: string, age: number, grade: string){
            super(name, age)
            this.grade = grade;
      }
      getDetails(): string {
            const result6 = `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`
            return result6
      }
}

const student1 = new Student("Md. Shahid Hossain", 22, "A+");
console.log(student1.getDetails())