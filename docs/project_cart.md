# Wymagania funkcjonalne

- koszyk musi istnieć
- dodawanie itemów do koszyka
- czyszczenie koszyka
- przesyłanie koszyka do stripe-a

# Struktura danych do stripe

    [
        {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
        amount: tour.price * 100,
        currency: 'usd',
        quantity: 1
      },
        {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
        amount: tour.price * 100,
        currency: 'usd',
        quantity: 1
      }
    ]

# TODO list

- dodanie obiektu do struktury użytkownika +
- w momencie tworzenia uzytkownika ma byc zaincjalizowany pusty obiekt "cart" +
  --- stworzenie metody addTourToCart(tourId) dodającej tour do obiektu cart usera +
  --- stworzenie pojedynczego obiektu zawierajaego szczególy dodawanej wyczieczki +
- dodanie obiektu do user.cart +
- przypisanie metody do przycisku 'book-tour-cart'+
- przekazanie obiektu user.cart do stripe line_items +

- dodanie metody czyszczącej koszyk +
