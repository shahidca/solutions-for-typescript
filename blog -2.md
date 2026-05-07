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