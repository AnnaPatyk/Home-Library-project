const homeLibrary = [
  {
    _login: "user1",
    _password: "password1",
    nickname: "nickname1",
    email: "user1@example.com",
    allBooks: [
      {
        id: "",
        title: "",
        author: "",
        publicationYear: 0,
        genre: "",
        status: "", // статус книги: "free", "borrowed", "reserved", "upcoming"
        borrowedBy: "",
        reservedBy: "",
      },
    ],
    borrowedFromOthers: [
      {
        nickname: ["idBook"],
      },
    ],
    subscriptions: [],
  },
  {
    _login: "user2",
    _password: "password2",
    nickname: "nickname2",
    email: "user2@example.com",
    allBooks: [],
    freeBooks: [],
    borrowedBooks: [],
    reservedBooks: [],
    upcomingBooks: [],
    borrowedFromOthers: [],
    subscriptions: [],
  },
];

export const book = {
  id: "1",
  title: "Мистецтво війни",
  author: "Сунь-цзи",
  publicationYear: 2018,
  genre: "Військова стратегія",
  status: "borrowed",
  borrowedBy: "ivan_123",
  reservedBy: "",
  img: "https://static.yakaboo.ua/media/catalog/product/i/m/img_0162_1_9.jpg",
  description:
    "Класичний китайський трактат з військової стратегії та тактики, який використовували полководці протягом століть.",
  comments: [
    {
      user: "sergey_456",
      text: "Дуже корисна книга для розуміння військових стратегій.",
    },
    {
      user: "olga_789",
      text: "Захоплююче читання, навіть якщо ви не військовий.",
    },
  ],
  rating: 4.8,
};
