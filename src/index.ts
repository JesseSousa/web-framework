import { User } from './models/User';

const user = new User({ name: 'John', age: 42 });

user.save();

console.log(user);
