export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  publishDate: string;
  isbn: string;
  format: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Stranger',
    author: 'Albert Camus',
    description: 'Set against the sun-drenched backdrop of colonial Algeria, Albert Camus\'s landmark novel follows Meursault, an ordinary man whose emotional detachment after his mother\'s death leads to a senseless act of violence. The Stranger is a haunting examination of alienation, the absurdity of existence, and one man\'s confrontation with a society that demands conformity.',
    coverUrl: '/images/cover1.jpg', // Replace with your image file
    publishDate: '2025-10-12',
    isbn: '978-93-6917-820-9',
    format: 'Paperback'
  },
  {
    id: '2',
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    description: 'In one of literature\'s most iconic openings, Gregor Samsa awakens to find he has been transformed into a giant insect. What follows is a tragicomic and deeply moving story of isolation, identity, and familial duty. Kafka\'s unforgettable masterpiece is a powerful allegory for human alienation.',
    coverUrl: '/images/cover2.jpg', // Replace with your image file
    publishDate: '2024-08-20',
    isbn: '978-93-6917-000-5',
    format: 'Paperback'
  },
  {
    id: '3',
    title: 'Selected Short Stories',
    author: 'Franz Kafka',
    description: 'This essential collection gathers Franz Kafka\'s most iconic short stories, inviting readers into a world where logic bends and reality is unnervingly fluid. From bureaucratic labyrinths to profound personal transformations, these tales masterfully explore themes of alienation, power, and the desperate search for meaning.',
    coverUrl: '/images/cover3.jpg', // Replace with your image file
    publishDate: '2026-02-05',
    isbn: '978-93-6917-893-3',
    format: 'Paperback'
  },
  {
    id: '4',
    title: 'Wonder English for Beginners',
    author: 'Md. Selim Momin',
    description: 'Designed to build confidence in young learners, Wonder English for Beginners offers a clear and accessible pathway to mastering essential English skills. With thoughtful support for Bengali-speaking students, this guide uses engaging exercises and foundational lessons to make the language journey both effective and enjoyable.',
    coverUrl: '/images/cover4.jpg', // Replace with your image file
    publishDate: '2025-11-01',
    isbn: '978-0-7432-7356-5',
    format: 'Paperback'
  },
];
