import { Book } from '@/models/book.model';
import { HttpResponse, http } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';

const bestBooksData: Book[] = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  title: faker.lorem.sentence(),
  img: faker.number.int({ min: 100, max: 200 }),
  category_id: faker.number.int({ min: 0, max: 2 }),
  form: '종이책',
  isbn: faker.commerce.isbn(),
  summary: faker.lorem.paragraph(),
  detail: faker.lorem.paragraph(),
  author: faker.person.firstName(),
  pages: faker.number.int({ min: 100, max: 500 }),
  contents: faker.lorem.paragraph(),
  price: faker.number.int({ min: 10000, max: 50000 }),
  likes: faker.number.int({ min: 0, max: 100 }),
  pubDate: faker.date.past().toISOString(),
}));

export const bestBooks = http.get('http://localhost:9999/books/best', () => {
  return HttpResponse.json(bestBooksData, {
    status: 200,
  });
});
