import { faker } from '@faker-js/faker';

let noticias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

noticias = noticias.map((noticia) => {
  return {
    id: noticia,
    title: faker.lorem.sentence(),
    image: faker.image.url(),
    content: faker.lorem.paragraphs(3),
    author: faker.person.firstName(),
    date: faker.date.past().toLocaleDateString(),
  };
});

export default noticias;
