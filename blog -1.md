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