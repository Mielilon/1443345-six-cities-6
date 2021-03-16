import {initialState as mainState} from '../../store/main/reducer';
import {initialState as favoritesState} from '../../store/favorites/reducer';
import {initialState as offerState} from '../../store/offer/reducer';
import {initialState as appState} from '../../store/app/reducer';

export const notEmpty = {
  main: {
    location: `Dusseldorf`,
    offers: [
      {
        city: {
          name: `Dusseldorf`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        ],
        title: `Tile House`,
        rating: 2,
        type: `house`,
        bedrooms: 2,
        price: 161,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        location: {
          latitude: 48.85761,
          longitude: 2.358499,
          zoom: 16,
        },
        id: 1,
        isFavorite: false,
        isPremium: true,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
        maxAdults: 9,
      },
      {
        city: {
          name: `Dusseldorf`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
        ],
        title: `Loft Studio in the Central Area`,
        rating: 3.6,
        type: `apartment`,
        bedrooms: 3,
        price: 271,
        goods: [
          `Laptop friendly workspace`,
          `Washer`,
          `Breakfast`,
          `Air conditioning`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
        location: {
          latitude: 52.388540000000006,
          longitude: 4.899976,
          zoom: 16,
        },
        id: 2,
        isFavorite: false,
        isPremium: false,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
        maxAdults: 8,
      },
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        ],
        title: `Tile House`,
        rating: 4.6,
        type: `house`,
        bedrooms: 2,
        price: 865,
        goods: [`Laptop friendly workspace`, `Breakfast`],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
        location: {
          latitude: 48.83861,
          longitude: 2.350499,
          zoom: 16,
        },
        id: 3,
        isFavorite: true,
        isPremium: false,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
        maxAdults: 8,
      },
    ],
    type: `Popular`,
    loaded: `status/loaded`,
  },
  favorites: {
    offers: [
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        ],
        title: `Tile House`,
        rating: 4.6,
        type: `house`,
        bedrooms: 2,
        price: 865,
        goods: [`Laptop friendly workspace`, `Breakfast`],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
        location: {
          latitude: 48.83861,
          longitude: 2.350499,
          zoom: 16,
        },
        id: 3,
        isFavorite: true,
        isPremium: false,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
        maxAdults: 8,
      },
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
        ],
        title: `Amazing and Extremely Central Flat`,
        rating: 2.8,
        type: `house`,
        bedrooms: 3,
        price: 156,
        goods: [
          `Laptop friendly workspace`,
          `Breakfast`,
          `Washing machine`,
          `Coffee machine`,
          `Towels`,
          `Washer`,
          `Baby seat`,
          `Fridge`,
          `Dishwasher`,
          `Air conditioning`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        location: {
          latitude: 48.84761,
          longitude: 2.356499,
          zoom: 16,
        },
        id: 10,
        isFavorite: true,
        isPremium: true,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
        maxAdults: 4,
      },
    ],
    loaded: `status/loaded`,
  },
  offer: {
    offer: {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
      },
      images: [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      ],
      title: `Tile House`,
      rating: 4.6,
      type: `house`,
      bedrooms: 2,
      price: 865,
      goods: [`Laptop friendly workspace`, `Breakfast`],
      host: {
        id: 25,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`,
        isPro: true,
      },
      description:
        `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
      location: {
        latitude: 48.83861,
        longitude: 2.350499,
        zoom: 16,
      },
      id: 3,
      isFavorite: true,
      isPremium: false,
      previewImage:
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      maxAdults: 8,
    },
    nearby: [
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
        ],
        title: `The house among olive `,
        rating: 2.5,
        type: `house`,
        bedrooms: 3,
        price: 772,
        goods: [
          `Laptop friendly workspace`,
          `Breakfast`,
          `Air conditioning`,
          `Washing machine`,
          `Washer`,
          `Towels`,
          `Cable TV`,
          `Fridge`,
          `Dishwasher`,
          `Coffee machine`,
          `Baby seat`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        location: {
          latitude: 48.837610000000005,
          longitude: 2.3454990000000002,
          zoom: 16,
        },
        id: 73,
        isFavorite: false,
        isPremium: false,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        maxAdults: 5,
      },
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
        ],
        title: `Loft Studio in the Central Area`,
        rating: 4.1,
        type: `house`,
        bedrooms: 2,
        price: 956,
        goods: [
          `Laptop friendly workspace`,
          `Coffee machine`,
          `Fridge`,
          `Towels`,
          `Washing machine`,
          `Dishwasher`,
          `Washer`,
          `Air conditioning`,
          `Baby seat`,
          `Breakfast`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        location: {
          latitude: 48.83961,
          longitude: 2.342499,
          zoom: 16,
        },
        id: 74,
        isFavorite: false,
        isPremium: false,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
        maxAdults: 2,
      },
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
        ],
        title: `Amazing and Extremely Central Flat`,
        rating: 2.8,
        type: `house`,
        bedrooms: 3,
        price: 156,
        goods: [
          `Laptop friendly workspace`,
          `Breakfast`,
          `Washing machine`,
          `Coffee machine`,
          `Towels`,
          `Washer`,
          `Baby seat`,
          `Fridge`,
          `Dishwasher`,
          `Air conditioning`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          avatarUrl: `img/avatar-angelina.jpg`,
          isPro: true,
        },
        description:
          `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        location: {
          latitude: 48.84761,
          longitude: 2.356499,
          zoom: 16,
        },
        id: 10,
        isFavorite: true,
        isPremium: true,
        previewImage:
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
        maxAdults: 4,
      },
    ],
    reviews: [
      {
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        date: `2019-05-08T14:13:56.569Z`,
        id: 1,
        rating: 4,
        user: {
          avatarUrl: `img/1.png`,
          id: 4,
          isPro: false,
          name: `Max`
        }
      },
      {
        comment: `A quiet of Amsterdam.`,
        date: `2019-06-08T14:13:56.569Z`,
        id: 2,
        rating: 3,
        user: {
          avatarUrl: `img/2.png`,
          id: 5,
          isPro: false,
          name: `Vadim`
        }
      }
    ],
    loaded: `status/loaded`,
    reviewLoaded: `status/pending`,
  },
  app: {
    authorized: {
      id: 1,
      email: `mail@gmail.com`,
      name: `mail`,
      avatarUrl:
        `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
      isPro: false,
    },
  },
};

export const empty = {
  main: {...mainState},
  favorites: {...favoritesState},
  offer: {...offerState},
  app: {...appState},
};
