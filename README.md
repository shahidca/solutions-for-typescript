Assignment 01
Typescript Problem Solving

Blog 01
Blog Name: Any and Unknown

<!-- Blog --01 Any and Unknown -->

TypeScript gives us safety by checking types. If we use any then we will not get any type safety.
Problem with any........>

let data: any;

data = "Hello"; UpperCase only string
data = 100;     UpperCase not use number
No error but  crash at runtime
data.toUpperCase(); So here ===> No type checking


Now Why unknown is Safer...............>
unknown forces  check the type before using it.
let data: unknown;

data = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

Blog 02
Blog Name: Pick and Omit

<!-- Blog --02 Pick and Omit -->

Pick and Omit are useful in TypeScript.

*** Pick
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
Here only name is used.
type UserName = Pick<User, "name">;

***Omit
Omit removes properties.
type PublicUser = Omit<User, "password">; ? Here password is removed.
