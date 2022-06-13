import { User } from './models/User';

const user = new User({ name: 'myName', age: 20 });

user.set({ name: 'newName', age: 99 });

user.on('change', () => {});

console.log(user);
