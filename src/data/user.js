import { faker } from '@faker-js/faker';

let users = [1,2,3,4,5,6,7,8,9,10];

users = users.map((user) => {
  return {
    id: user,
    name: faker.person.firstName(),
    image: faker.image.avatar(),
    description: faker.lorem.sentence(),
    email: faker.internet.email(),
  };
});

export default users;
