import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BookStore } from './component/BookStore.jsx'
import { Data } from './component/Data.jsx'
import { ImageCard } from './component/ImageCard.jsx'

function App() {
  const data = [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Joseph",
        "last": "Evans"
      },
      "location": {
        "street": {
          "number": 61,
          "name": "Lunn Avenue"
        },
        "city": "Hastings",
        "state": "Otago",
        "country": "New Zealand",
        "postcode": 92298,
        "coordinates": {
          "latitude": "51.9039",
          "longitude": "-45.2357"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "joseph.evans@example.com",
      "login": {
        "uuid": "9230749e-c285-41b4-9a0f-46dab2454b4e",
        "username": "angryzebra337",
        "password": "otis",
        "salt": "WiHweSpK",
        "md5": "2cc09194861ea12e8e842cdce5749230",
        "sha1": "aa808f8a4f03df53a427905ae690c677b2d68895",
        "sha256": "c857e62a617c9015a05b9ecc7f63e05c90042bd79514ca49bacfdf7e97b482d8"
      },
      "dob": {
        "date": "1968-07-21T10:02:51.768Z",
        "age": 54
      },
      "registered": {
        "date": "2019-01-31T10:09:35.816Z",
        "age": 4
      },
      "phone": "(612)-327-2806",
      "cell": "(029)-082-3612",
      "id": 1,
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Hetal",
        "last": "Bharanya"
      },
      "location": {
        "street": {
          "number": 234,
          "name": "Gali Paranthe Wali"
        },
        "city": "Howrah",
        "state": "Madhya Pradesh",
        "country": "India",
        "postcode": 12054,
        "coordinates": {
          "latitude": "-89.7659",
          "longitude": "49.5620"
        },
        "timezone": {
          "offset": "+4:30",
          "description": "Kabul"
        }
      },
      "email": "hetal.bharanya@example.com",
      "login": {
        "uuid": "03e1e369-138c-442b-a046-904d1cc13d76",
        "username": "happygoose680",
        "password": "insanity",
        "salt": "rYfUWfpZ",
        "md5": "fa9549419b5ac6ca748d0513ec625553",
        "sha1": "b7f374368f6d8be2f9880037b5bf6c3c76c1db2e",
        "sha256": "5c61e253e05d64a713020566d872b07890d74f347c430974c7e86897bf6ed781"
      },
      "dob": {
        "date": "1990-10-29T13:51:49.805Z",
        "age": 32
      },
      "registered": {
        "date": "2007-04-04T09:22:55.620Z",
        "age": 16
      },
      "phone": "7517215828",
      "cell": "8993504716",
      "id": 2,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/47.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
      },
      "nat": "IN"

    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Tanja",
        "last": "Španović"
      },
      "location": {
        "street": {
          "number": 1663,
          "name": "Vojvode Mišića"
        },
        "city": "Lebane",
        "state": "Prizren",
        "country": "Serbia",
        "postcode": 88087,
        "coordinates": {
          "latitude": "-26.3541",
          "longitude": "52.2337"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "tanja.spanovic@example.com",
      "login": {
        "uuid": "d37482c4-28c3-4d6e-b591-6c1a7059defc",
        "username": "greentiger564",
        "password": "calgary",
        "salt": "giy1GclZ",
        "md5": "ec60e7838514036315af596a3f465c3c",
        "sha1": "dd79140034db5b5fa55896f3a7dee55d3b3b384d",
        "sha256": "42fdb899d4443d01815fb27c146223c2ad9ce9ad12fc488015c5cadd52881104"
      },
      "dob": {
        "date": "1960-01-02T04:11:38.488Z",
        "age": 63
      },
      "registered": {
        "date": "2018-06-15T09:02:58.581Z",
        "age": 4
      },
      "phone": "039-7503-456",
      "cell": "064-2952-510",
      "id": 3,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
      },
      "nat": "RS"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Yori",
        "last": "Knot"
      },
      "location": {
        "street": {
          "number": 1243,
          "name": "Kastordreef"
        },
        "city": "Winterswijk Henxel",
        "state": "Utrecht",
        "country": "Netherlands",
        "postcode": "3305 DO",
        "coordinates": {
          "latitude": "-39.0490",
          "longitude": "88.6245"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "yori.knot@example.com",
      "login": {
        "uuid": "a2dadb83-2e6a-4d12-ad80-2d35e84cfbfb",
        "username": "purpledog668",
        "password": "ilikeit",
        "salt": "zmeTOy1q",
        "md5": "48ecff0ad189ec56cc77cf08b95f6de8",
        "sha1": "ebae70d28b5cf4c2164dcf32f1dc33cf0c4e2f21",
        "sha256": "9af6004f46f05b9317bd780f18eb409fb22186f587850b48a62b7c12e45f0730"
      },
      "dob": {
        "date": "1963-10-03T14:59:37.860Z",
        "age": 59
      },
      "registered": {
        "date": "2007-05-08T12:35:56.245Z",
        "age": 16
      },
      "phone": "(096) 2598476",
      "cell": "(06) 13040738",
      "id": 4,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Madame",
        "first": "Cäcilia",
        "last": "Lemoine"
      },
      "location": {
        "street": {
          "number": 3778,
          "name": "Montée du Chemin-Neuf"
        },
        "city": "Erlinsbach (Ag)",
        "state": "Schwyz",
        "country": "Switzerland",
        "postcode": 1138,
        "coordinates": {
          "latitude": "0.3904",
          "longitude": "-150.1322"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "cacilia.lemoine@example.com",
      "login": {
        "uuid": "569974f9-4921-4c5a-8031-f7bff6f41efc",
        "username": "beautifulrabbit185",
        "password": "bigtime",
        "salt": "RcUosVOt",
        "md5": "180077a1ef8cc1e9cf42860f645b3b2f",
        "sha1": "5269d29ebc80c8d73fe7a6383e838b054a760b51",
        "sha256": "1a4381f6625bb368ffa08ada211f7848acce2e2a418361899d8f91bd69578139"
      },
      "dob": {
        "date": "1970-04-26T10:23:24.025Z",
        "age": 53
      },
      "registered": {
        "date": "2020-07-15T11:41:59.706Z",
        "age": 2
      },
      "phone": "076 011 82 88",
      "cell": "076 657 23 84",
      "id": 5,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/42.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Nandita",
        "last": "Uchil"
      },
      "location": {
        "street": {
          "number": 6826,
          "name": "NAD X Rd"
        },
        "city": "Kozhikode",
        "state": "Tripura",
        "country": "India",
        "postcode": 20318,
        "coordinates": {
          "latitude": "-21.4486",
          "longitude": "-29.1084"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "nandita.uchil@example.com",
      "login": {
        "uuid": "31ba6d47-92a5-447f-a48f-c7bab21a219c",
        "username": "goldenostrich181",
        "password": "soccer10",
        "salt": "El6b1cU3",
        "md5": "cb8ba0dba2c270e548fd9dc4fc00612b",
        "sha1": "fe9e3df57d56931472e2ead3e2ba0989660f4805",
        "sha256": "210321ab09bb38896ee7a616ba3a8fa0e0dd3f7cbcf93f185bdcc3715b842d4e"
      },
      "dob": {
        "date": "1978-10-01T00:33:31.775Z",
        "age": 44
      },
      "registered": {
        "date": "2018-03-16T16:46:33.627Z",
        "age": 5
      },
      "phone": "9450586544",
      "cell": "9376723605",
      "id": 6,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
      },
      "nat": "IN"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Terri",
        "last": "Clark"
      },
      "location": {
        "street": {
          "number": 3585,
          "name": "College St"
        },
        "city": "Mildura",
        "state": "New South Wales",
        "country": "Australia",
        "postcode": 7746,
        "coordinates": {
          "latitude": "-40.3788",
          "longitude": "-164.7382"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "terri.clark@example.com",
      "login": {
        "uuid": "25070c5d-4f32-4a60-8640-828282943624",
        "username": "smallladybug901",
        "password": "elway7",
        "salt": "gvoc7xk4",
        "md5": "2ebf82771d7ce990ad469ff4e9e80a27",
        "sha1": "f52933723cdaea82f9bffd11134a86ca2872036f",
        "sha256": "6b3dafbf3e244aa21f56fc59f631c7d7edd88189719089158df4e5d8775e329f"
      },
      "dob": {
        "date": "1989-11-13T19:26:57.752Z",
        "age": 33
      },
      "registered": {
        "date": "2021-08-02T19:56:17.949Z",
        "age": 1
      },
      "phone": "07-1746-8000",
      "cell": "0466-518-535",
      "id": 7,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Dibach",
        "last": "Gocko"
      },
      "location": {
        "street": {
          "number": 1883,
          "name": "Ivana Pulyuya"
        },
        "city": "Popasna",
        "state": "Poltavska",
        "country": "Ukraine",
        "postcode": 22060,
        "coordinates": {
          "latitude": "23.5401",
          "longitude": "106.1507"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "dibach.gocko@example.com",
      "login": {
        "uuid": "b0c34ca5-20c1-47e6-b040-12d3de4a8b45",
        "username": "heavysnake675",
        "password": "wowwow",
        "salt": "jlHUGO4a",
        "md5": "478264ccf64d1fbf414c4c10fd9345fc",
        "sha1": "d9dc663a737b747137f56d76e4614b25a760c123",
        "sha256": "fce19f3106a0360176cfc8863e7bd22c8384867acbe1f7a21b93d4b07364e291"
      },
      "dob": {
        "date": "1981-07-13T07:30:31.046Z",
        "age": 41
      },
      "registered": {
        "date": "2020-06-15T06:00:13.939Z",
        "age": 2
      },
      "phone": "(096) Q51-1466",
      "cell": "(097) H03-7594",
      "id": 8,
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/97.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
      },
      "nat": "UA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Virginia",
        "last": "Domínguez"
      },
      "location": {
        "street": {
          "number": 3813,
          "name": "Avenida de Andalucía"
        },
        "city": "Santa Cruz de Tenerife",
        "state": "Asturias",
        "country": "Spain",
        "postcode": 30399,
        "coordinates": {
          "latitude": "68.0499",
          "longitude": "-9.1692"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "virginia.dominguez@example.com",
      "login": {
        "uuid": "63b2e547-b188-47f7-8a98-e173e0d0ced5",
        "username": "tinymeercat592",
        "password": "lander",
        "salt": "wdlOyzev",
        "md5": "d2dd087741f12a7dbef36df5e3294846",
        "sha1": "9d899ba14206c645557261b14572c9cdc13fcd1c",
        "sha256": "6d9cfd544a26c1bbb02903f0e0503da2242ada312abe31b62cd70393e5ff5643"
      },
      "dob": {
        "date": "1988-10-18T10:40:46.976Z",
        "age": 34
      },
      "registered": {
        "date": "2018-10-07T16:11:51.787Z",
        "age": 4
      },
      "phone": "950-457-280",
      "cell": "663-396-994",
      "id": 9,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "آراد",
        "last": "کوتی"
      },
      "location": {
        "street": {
          "number": 6607,
          "name": "میدان استقلال"
        },
        "city": "نیشابور",
        "state": "کردستان",
        "country": "Iran",
        "postcode": 86893,
        "coordinates": {
          "latitude": "30.4677",
          "longitude": "-147.4363"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "ard.khwty@example.com",
      "login": {
        "uuid": "9cdb7909-ca96-46c5-89c4-5909db33c1d0",
        "username": "goldendog820",
        "password": "lucky",
        "salt": "7YOJGqxC",
        "md5": "57a78bf79f14747d8e4e4bfc8b88421c",
        "sha1": "0d1d7a5e577a6ad2f24e6197fdff5406561b485c",
        "sha256": "dac7bc7fcf5c3fc7fae006ae8a318908515c45d4dfd315063e1d406a96337f91"
      },
      "dob": {
        "date": "1960-04-09T12:58:36.692Z",
        "age": 63
      },
      "registered": {
        "date": "2016-11-19T20:27:01.344Z",
        "age": 6
      },
      "phone": "040-18679426",
      "cell": "0955-789-0778",
      "id": 10,
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
      },
      "nat": "IR"
    }
  ]


  const data1 = [
    {
      "kind": "books#volume",
      "id": 2,
      "etag": "aT6gRM8dLto",
      "volumeInfo": {
        "title": "Developer Testing",
        "subtitle": "Building Quality Into Software",
        "authors": [
          "Alexander Tarlinder"
        ],
        "publisher": "Addison-Wesley Signature Series (Cohn)",
        "publishedDate": "2016",
        "description": "To build high-quality software, you need to write testable code. That's harder than it seems: it requires insights drawn from arenas ranging from software craftsmanship to unit testing, refactoring to test-driven development. Most programming books either discuss testing only briefly, or drill down on just one or two techniques, with little guidance on how to systematically verify code. Most testing books, on the other hand, focus on a specific testing process, without showing how to write software that can be easily and systematically tested. In Developer Testing, leading software engineering consultant Alexander Tarnowski strikes an optimal balance, integrating insights from multiple disciplines to help frustrated practitioners get better results. Drawing on his extensive experience as a mentor and trainer, he offers insights that help you accelerate through the typical software assurance learning curve, so you can progress far more rapidly. Tarnowski organizes his insights into \"chunks\" to help you quickly absorb key concepts, and focuses on technology-agnostic approaches you can keep using with any new language, platform, or toolset. The first guide to cover testing mindset, techniques, and applications from the developer's perspective, Developer Testing will help developers get what they really want: better code. -- Provided by publisher.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0134291069"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780134291062"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Computer programs"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=bmDFjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=bmDFjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=bmDFjgEACAAJ&dq=developer&hl=&cd=2&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=bmDFjgEACAAJ&dq=developer&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Developer_Testing.html?hl=&id=bmDFjgEACAAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 9,
      "etag": "48wn8Io+xX0",
      "volumeInfo": {
        "title": "Coder to Developer",
        "subtitle": "Tools and Strategies for Delivering Your Software",
        "authors": [
          "Mike Gunderloy"
        ],
        "publisher": "Sybex",
        "publishedDate": "2004-05-07",
        "description": "\"Two thumbs up\" —Gregory V. Wilson, Dr. Dobbs Journal (October 2004) No one can disparage the ability to write good code. At its highest levels, it is an art. But no one can confuse writing good code with developing good software. The difference—in terms of challenges, skills, and compensation—is immense. Coder to Developer helps you excel at the many non-coding tasks entailed, from start to finish, in just about any successful development project. What's more, it equips you with the mindset and self-assurance required to pull it all together, so that you see every piece of your work as part of a coherent process. Inside, you'll find plenty of technical guidance on such topics as: Choosing and using a source code control system Code generation tools--when and why Preventing bugs with unit testing Tracking, fixing, and learning from bugs Application activity logging Streamlining and systematizing the build process Traditional installations and alternative approaches To pull all of this together, the author has provided the source code for Download Tracker, a tool for organizing your collection of downloaded code, that's used for examples throughout this book. The code is provided in various states of completion, reflecting every stage of development, so that you can dig deep into the actual process of building software. But you'll also develop \"softer\" skills, in areas such as team management, open source collaboration, user and developer documentation, and intellectual property protection. If you want to become someone who can deliver not just good code but also a good product, this book is the place to start. If you must build successful software projects, it's essential reading.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "078214327X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780782143270"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 320,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 3,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=dfJqmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=dfJqmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=dfJqmAEACAAJ&dq=developer&hl=&cd=9&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=dfJqmAEACAAJ&dq=developer&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Coder_to_Developer.html?hl=&id=dfJqmAEACAAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 19,
      "etag": "/wisZye3qPU",
      "volumeInfo": {
        "title": "Professional JavaScript for Web Developers",
        "authors": [
          "Matt Frisbie"
        ],
        "publisher": "John Wiley & Sons",
        "publishedDate": "2019-10-15",
        "description": "Update your skill set for ES 6 and 7 with the ultimate JavaScript guide for pros Professional JavaScript for Web Developers is the essential guide to next-level JavaScript development. Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer. From JavaScript-specific object-oriented programming and inheritance, to combining JavaScript with HTML and other markup languages, expert instruction walks you through the fundamentals and beyond. This new fourth edition has been updated to cover ECMAScript 6 and 7 (also known as ES2015 and ES2016) and the major re-imagination and departure from ES 5.1; new frameworks and libraries, new techniques, new testing tools, and more are explained in detail for the professional developer, with a practical focus that helps you put your new skills to work on real-world projects. The latest—and most dramatic—ES release is already being incorporated into JavaScript engines in major browsers; this, coupled with the rise in mobile web traffic increasing demand for responsive, dynamic web design, means that all web developers need to update their skills—and this book is your ideal resource for quick, relevant guidance. Get up to date with ECMAScript 6 and 7, new frameworks, and new libraries Delve into web animation, emerging APIs, and build systems Test more effectively with mocks, unit tests, functional tests, and other tools Plan your builds for future ES releases Even if you think you know JavaScript, new ES releases bring big changes that will affect the way you work. For a professional-level update that doesn't waste time on coding fundamentals, Professional JavaScript for Web Developers is the ultimate resource to bring you up to speed.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781119366447"
          },
          {
            "type": "ISBN_10",
            "identifier": "1119366445"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 1200,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.7.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=3GOuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=3GOuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=3GOuDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=9&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=3GOuDwAAQBAJ&dq=javascript&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Professional_JavaScript_for_Web_Develope.html?hl=&id=3GOuDwAAQBAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 43,
      "etag": "ZK8ST3zhg0U",
      "volumeInfo": {
        "title": "Tesla",
        "subtitle": "Inventor of the Electrical Age",
        "authors": [
          "W. Bernard Carlson"
        ],
        "publisher": "Princeton University Press",
        "publishedDate": "2015-04-27",
        "description": "Nikola Tesla was a major contributor to the electrical revolution that transformed daily life at the turn of the twentieth century. His inventions, patents, and theoretical work formed the basis of modern AC electricity, and contributed to the development of radio and television. Like his competitor Thomas Edison, Tesla was one of America's first celebrity scientists, enjoying the company of New York high society and dazzling the likes of Mark Twain with his electrical demonstrations. An astute self-promoter and gifted showman, he cultivated a public image of the eccentric genius. Even at the end of his life when he was living in poverty, Tesla still attracted reporters to his annual birthday interview, regaling them with claims that he had invented a particle-beam weapon capable of bringing down enemy aircraft. Plenty of biographies glamorize Tesla and his eccentricities, but until now none has carefully examined what, how, and why he invented. In this groundbreaking book, W. Bernard Carlson demystifies the legendary inventor, placing him within the cultural and technological context of his time, and focusing on his inventions themselves as well as the creation and maintenance of his celebrity. Drawing on original documents from Tesla's private and public life, Carlson shows how he was an \"idealist\" inventor who sought the perfect experimental realization of a great idea or principle, and who skillfully sold his inventions to the public through mythmaking and illusion. This major biography sheds new light on Tesla's visionary approach to invention and the business strategies behind his most important technological breakthroughs.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780691165615"
          },
          {
            "type": "ISBN_10",
            "identifier": "0691165610"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 516,
        "printType": "BOOK",
        "categories": [
          "Biography & Autobiography"
        ],
        "averageRating": 4,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.0.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=VWyYDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=VWyYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=VWyYDwAAQBAJ&printsec=frontcover&dq=tesla&hl=&cd=3&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=VWyYDwAAQBAJ&dq=tesla&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Tesla.html?hl=&id=VWyYDwAAQBAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 57,
      "etag": "8yO3QqwMIdk",
      "volumeInfo": {
        "title": "Cricket Performance Management",
        "subtitle": "Mathematical Formulation and Analytics",
        "authors": [
          "Hemanta Saikia",
          "Dibyojyoti Bhattacharjee",
          "Diganta Mukherjee"
        ],
        "publisher": "Springer Nature",
        "publishedDate": "2019-11-26",
        "description": "This book focuses on the application of data mining techniques in cricket. It provides detailed examples of how data mining can be helpful for decision-making in sports with special reference to cricket, particularly the quantitative features related to Twenty20 cricket, the latest and the most popular format of the game. The book highlights the performance quantification of cricketers (batsmen, bowlers, all-rounders, and wicket keepers), determining the market valuation of cricketers based on their on-field performances and the effect of age on the performance of the cricketers. It also provides a comprehensive overview of the different aspects of the game where quantitative techniques are beneficial, and highlights the use of statistical and data mining tools in analysing sports-related data and objective decision-making in sports. The book appeals to a wide readership, including postgraduate students of statistics/mathematics, data analysts, sports management bodies. It also offers data miners, such as researchers in statistics, mathematics, operations research, and computer science ideas for projects.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9789811513541"
          },
          {
            "type": "ISBN_10",
            "identifier": "9811513546"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 231,
        "printType": "BOOK",
        "categories": [
          "Mathematics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.1.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Z3jADwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Z3jADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=Z3jADwAAQBAJ&printsec=frontcover&dq=cricket&hl=&cd=7&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=Z3jADwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Z3jADwAAQBAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 79,
      "etag": "QAfgPzROhyc",
      "volumeInfo": {
        "title": "21st Century C",
        "subtitle": "C Tips from the New School",
        "authors": [
          "Ben Klemens"
        ],
        "publisher": "\"O'Reilly Media, Inc.\"",
        "publishedDate": "2012-10-15",
        "description": "Throw out your old ideas about C and get to know a programming language that’s substantially outgrown its origins. With this revised edition of 21st Century C, you’ll discover up-to-date techniques missing from other C tutorials, whether you’re new to the language or just getting reacquainted. C isn’t just the foundation of modern programming languages; it is a modern language, ideal for writing efficient, state-of-the-art applications. Get past idioms that made sense on mainframes and learn the tools you need to work with this evolved and aggressively simple language. No matter what programming language you currently favor, you’ll quickly see that 21st century C rocks. Set up a C programming environment with shell facilities, makefiles, text editors, debuggers, and memory checkers Use Autotools, C’s de facto cross-platform package manager Learn about the problematic C concepts too useful to discard Solve C’s string-building problems with C-standard functions Use modern syntactic features for functions that take structured inputs Build high-level, object-based libraries and programs Perform advanced math, talk to internet servers, and run databases with existing C libraries This edition also includes new material on concurrent threads, virtual tables, C99 numeric types, and other features.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781449344665"
          },
          {
            "type": "ISBN_10",
            "identifier": "1449344666"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 297,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=-pH7RT-VWjsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=-pH7RT-VWjsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=-pH7RT-VWjsC&pg=PP1&dq=c&hl=&cd=9&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=-pH7RT-VWjsC&dq=c&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/21st_Century_C.html?hl=&id=-pH7RT-VWjsC"
      }
    },
    {
      "kind": "books#volume",
      "id": 93,
      "etag": "g763LMOmMas",
      "volumeInfo": {
        "title": "An Introduction to Cryptocurrencies",
        "subtitle": "The Crypto Market Ecosystem",
        "authors": [
          "Nikos Daskalakis",
          "Panagiotis Georgitseas"
        ],
        "publisher": "Routledge",
        "publishedDate": "2020-05-28",
        "description": "The Crypto Market Ecosystem has emerged as the most profound application of blockchain technology in finance. This textbook adopts an integrated approach, linking traditional functions of the current financial system (payments, traded assets, fundraising, regulation) with the respective functions in the crypto market, in order to facilitate the reader in their understanding of how this new ecosystem works. The book walks the reader through the main features of the blockchain technology, the definitions, classifications, and distinct characteristics of cryptocurrencies and tokens, how these are evaluated, how funds are raised in the cryptocurrency ecosystem (ICOs), and what the main regulatory approaches are. The authors have compiled more than 100 sources from different sub-fields of economics, finance, and regulation to create a coherent textbook that provides the reader with a clear and easily understandable picture of the new world of encrypted finance and its applications. The book is primarily aimed at business and finance students, who already have an understanding of the basic principles of how the financial system works, but also targets a more general readership, by virtue of its broader scope and engaging and accessible tone.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781000077704"
          },
          {
            "type": "ISBN_10",
            "identifier": "1000077705"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 88,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "averageRating": 5,
        "ratingsCount": 7,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XmIPEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XmIPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=XmIPEAAAQBAJ&printsec=frontcover&dq=crypto&hl=&cd=3&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=XmIPEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=XmIPEAAAQBAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 95,
      "etag": "opUg7jC3/Sg",
      "volumeInfo": {
        "title": "Crypto Economy",
        "subtitle": "How Blockchain, Cryptocurrency, and Token-Economy Are Disrupting the Financial World",
        "authors": [
          "Aries Wanlin Wang"
        ],
        "publisher": "Simon and Schuster",
        "publishedDate": "2018-11-20",
        "description": "In late 2008, under the long shadow cast by the most severe economic crisis in generations, a revolutionary new form of currency was quietly being shaped. At the time no one could have predicted that an obscure form of electronic money would in less than a decade prove to be the most important financial innovation of the 21st century—a tool that would spark an entire new economic institution: crypto economy. That once-obscure money was known as Bitcoin, and today it is the highest valued digital coin. And though consumers continue to scramble to cash in on the trending currency, the technology behind Bitcoin known as Blockchain, which allows the currency to bought and sold without regulation by a government, remains a mystery to the public. In Crypto Economy, Aries Wanlin Wang provides the definitive blueprint for understanding how Bitcoin, Blockchain, and other digital technologies are disrupting traditional financial institutions and forever changing the world of commerce.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781510744837"
          },
          {
            "type": "ISBN_10",
            "identifier": "1510744835"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 148,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "averageRating": 4.5,
        "ratingsCount": 7,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.10.8.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=W_aBDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=W_aBDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=W_aBDwAAQBAJ&printsec=frontcover&dq=crypto&hl=&cd=5&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=W_aBDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=W_aBDwAAQBAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 98,
      "etag": "2SeSH2MhYas",
      "volumeInfo": {
        "title": "Crypto Uncovered",
        "subtitle": "The Evolution of Bitcoin and the Crypto Currency Marketplace",
        "authors": [
          "Sarah Swammy",
          "Richard Thompson",
          "Marvin Loh"
        ],
        "publisher": "Springer",
        "publishedDate": "2019-01-24",
        "description": "Crypto currency integrated BlockChain under Virtual Scalable Enterprises is a widely debated and earnestly discussed topic in the technology arena. Executives at the largest institutions are calling crypto currency fraudulent while high-level institutional banking professionals are leaving their positions to jump into crypto technology, regulation and investment opportunities as industries advance towards adoption. The narratives on these topics are diametrically opposite and polarizing on both side of the debate. While this debate has many layers from a government regulatory side to social impact to the practicality of everyday use of crypto currencies in developing markets, it is safe to assume that crypto currencies or utility tokens are more than a global phenomenon and are now becoming a working framework for optional modes of business. This book demystifies what crypto currency is, how it is used, and what it means to the consumer, investor, and the future of our global currency marketplace. By providing the historical backdrop to the market, authors Sarah Swammy, Richard Thompson, and Marvin Loh provide a clear definition of what crypto-currencies actually are, how they are being used and by whom, and the unique reasons why they have gone from back street to Main Street almost overnight. The book will also delve into the government’s role in regulating this commerce medium. Lastly, the authors will look at the current global monetary policy and discuss if this type of currency phenomena was a direct result while also examining the potential risk and rewards for investors and the economy.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783030001353"
          },
          {
            "type": "ISBN_10",
            "identifier": "3030001350"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 181,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "averageRating": 5,
        "ratingsCount": 7,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=LiWFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=LiWFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=LiWFDwAAQBAJ&printsec=frontcover&dq=crypto&hl=&cd=8&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=LiWFDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=LiWFDwAAQBAJ"
      }
    },
    {
      "kind": "books#volume",
      "id": 105,
      "etag": "1CqgTPbHJ3Q",
      "volumeInfo": {
        "title": "Choice Hacking",
        "subtitle": "How to use psychology and behavioral science to create an experience that sings",
        "authors": [
          "Jennifer L. Clinehens"
        ],
        "publisher": "Jennifer L. Clinehens",
        "publishedDate": "2020-06-16",
        "description": "What if you could use Nobel prize-winning science to predict the choices your customers will make? Customer and user behaviors can seem irrational. Shaped by mental shortcuts and psychological biases, their actions often appear random on the surface. In Choice Hacking, we'll learn to predict these irrational behaviors and apply the science of decision-making to create unforgettable customer experiences. Discover a framework for designing experiences that doesn't just show you what principles to apply, but introduces a new way of thinking about customer behavior. You'll finish Choice Hacking feeling confident and ready to transform your experience with science. In Choice Hacking, you'll discover: - How to make sure your customer experience is designed for what people do (not what they say they'll do) - How to increase the odds that customers will make the \"right choice\" in any environment - How to design user experiences that drive action and engagement - How to create retail experiences that persuade and drive brand love - How brands like Uber, Netflix, Disney, and Starbucks apply these principles in their customer and user experiences Additional resources included with the book: - Access to free video Companion Course - Access to exclusive free resources, tools, examples, and use cases online Who will benefit from reading Choice Hacking? This book was written for anyone who wants to better understand customer and user decision-making. Whether you're a consultant, strategist, digital marketer, small business owner, writer, user experience designer, student, manager, or organizational leader, you will find immediate value in Choice Hacking. About the Author Jennifer Clinehens is currently Head of Experience at a major global experience agency. She holds a Master's degree in Brand Management as well as an MBA from Emory University's Goizueta School. Ms. Clinehens has client-side and consulting experience working for brands like AT&T, McDonald's, and Adidas, and she's helped shape customer experiences across the globe. A recognized authority in marketing and customer experience, she is also the author of CX That Sings: An Introduction To Customer Journey Mapping. To learn more about this book or contact the author, please visit ChoiceHacking.com",
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 262,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "averageRating": 2,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.5.4.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=GR7dDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=GR7dDwAAQBAJ&printsec=frontcover&icmg=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=GR7dDwAAQBAJ&pg=PT222&dq=uber&hl=&cd=5&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=GR7dDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=GR7dDwAAQBAJ"
      }
    }
  ]


  const imagedata = [
    {
      "id": "0",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "download_url": "https://picsum.photos/id/0/5000/3333"
    },
    {
      "id": "1",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/LNRyGwIJr5c",
      "download_url": "https://picsum.photos/id/1/5000/3333"
    },
    {
      "id": "2",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/N7XodRrbzS0",
      "download_url": "https://picsum.photos/id/2/5000/3333"
    },
    {
      "id": "3",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "t",
      "download_url": "https://picsum.photos/id/19/2500/1667"
    },
    {
      "id": "4",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/y83Je1OC6Wc",
      "download_url": "https://picsum.photos/id/4/5000/3333"
    },
    {
      "id": "5",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3334,
      "url": "https://unsplash.com/photos/LF8gK8-HGSg",
      "download_url": "https://picsum.photos/id/5/5000/3334"
    },
    {
      "id": "6",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/tAKXap853rY",
      "download_url": "https://picsum.photos/id/6/5000/3333"
    },
    {
      "id": "7",
      "author": "Alejandro Escamilla",
      "width": 4728,
      "height": 3168,
      "url": "https://unsplash.com/photos/BbQLHCpVUqA",
      "download_url": "https://picsum.photos/id/7/4728/3168"
    },
    {
      "id": "8",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/xII7efH1G6o",
      "download_url": "https://picsum.photos/id/8/5000/3333"
    },
    {
      "id": "9",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3269,
      "url": "https://unsplash.com/photos/ABDTiLqDhJA",
      "download_url": "https://picsum.photos/id/9/5000/3269"
    },
    {
      "id": "10",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/6J--NXulQCs",
      "download_url": "https://picsum.photos/id/10/2500/1667"
    },
    {
      "id": "11",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/Cm7oKel-X2Q",
      "download_url": "https://picsum.photos/id/11/2500/1667"
    },
    {
      "id": "12",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/I_9ILwtsl_k",
      "download_url": "https://picsum.photos/id/12/2500/1667"
    },
    {
      "id": "13",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/3MtiSMdnoCo",
      "download_url": "https://picsum.photos/id/13/2500/1667"
    },
    {
      "id": "14",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/IQ1kOQTJrOQ",
      "download_url": "https://picsum.photos/id/14/2500/1667"
    },
    {
      "id": "15",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/NYDo21ssGao",
      "download_url": "https://picsum.photos/id/15/2500/1667"
    },
    {
      "id": "16",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/gkT4FfgHO5o",
      "download_url": "https://picsum.photos/id/16/2500/1667"
    },
    {
      "id": "17",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/Ven2CV8IJ5A",
      "download_url": "https://picsum.photos/id/17/2500/1667"
    },
    {
      "id": "18",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/Ps2n0rShqaM",
      "download_url": "https://picsum.photos/id/18/2500/1667"
    },
    {
      "id": "19",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/P7Lh0usGcuk",
      "download_url": "https://picsum.photos/id/19/2500/1667"
    },
    {
      "id": "20",
      "author": "Aleks Dorohovich",
      "width": 3670,
      "height": 2462,
      "url": "https://unsplash.com/photos/nJdwUHmaY8A",
      "download_url": "https://picsum.photos/id/20/3670/2462"
    },
    {
      "id": "21",
      "author": "Alejandro Escamilla",
      "width": 3008,
      "height": 2008,
      "url": "https://unsplash.com/photos/jVb0mSn0LbE",
      "download_url": "https://picsum.photos/id/21/3008/2008"
    },
    {
      "id": "22",
      "author": "Alejandro Escamilla",
      "width": 4434,
      "height": 3729,
      "url": "https://unsplash.com/photos/du_OrQAA4r0",
      "download_url": "https://picsum.photos/id/22/4434/3729"
    },
    {
      "id": "23",
      "author": "Alejandro Escamilla",
      "width": 3887,
      "height": 4899,
      "url": "https://unsplash.com/photos/8yqds_91OLw",
      "download_url": "https://picsum.photos/id/23/3887/4899"
    },
    {
      "id": "24",
      "author": "Alejandro Escamilla",
      "width": 4855,
      "height": 1803,
      "url": "https://unsplash.com/photos/cZhUxIQjILg",
      "download_url": "https://picsum.photos/id/24/4855/1803"
    },
    {
      "id": "25",
      "author": "Alejandro Escamilla",
      "width": 5000,
      "height": 3333,
      "url": "https://unsplash.com/photos/Iuq0EL4EINY",
      "download_url": "https://picsum.photos/id/25/5000/3333"
    },
    {
      "id": "26",
      "author": "Vadim Sherbakov",
      "width": 4209,
      "height": 2769,
      "url": "https://unsplash.com/photos/tCICLJ5ktBE",
      "download_url": "https://picsum.photos/id/26/4209/2769"
    },
    {
      "id": "27",
      "author": "Yoni Kaplan-Nadel",
      "width": 3264,
      "height": 1836,
      "url": "https://unsplash.com/photos/iJnZwLBOB1I",
      "download_url": "https://picsum.photos/id/27/3264/1683"
    },
    {
      "id": "28",
      "author": "Jerry Adney",
      "width": 4928,
      "height": 3264,
      "url": "https://unsplash.com/photos/_WiFMBRT7Aw",
      "download_url": "https://picsum.photos/id/28/4928/3264"
    },
    {
      "id": "29",
      "author": "Go Wild",
      "width": 4000,
      "height": 2670,
      "url": "https://unsplash.com/photos/V0yAek6BgGk",
      "download_url": "https://picsum.photos/id/29/4000/2670"
    }
  ]

  return (
    <>
      <div className='flex p-3 gap-5 flex-wrap justify-center'>
        {
          data.map((info) => <Data key={info.id} fullName={`${info.name.title} ${info.name.first} ${info.name.last}`} address={`${info.location.city}`} birthDate={`${info.dob.age}`} image={info.picture.large} nationality={info.nat} />)
        }
      </div>

      <div className='flex p-3 gap-5 flex-wrap justify-center'>
        {
          data1.map(books => <BookStore key={books.id} image={books.volumeInfo.imageLinks?.thumbnail} bkTitle={books.volumeInfo.title} bkSubTitle={books.volumeInfo.subtitle} authorNm={books.volumeInfo.authors} publisherNm={books.volumeInfo.publisher} language={books.volumeInfo.language} totalPages={books.volumeInfo.pageCount} />)
        }
      </div>

      <div className='flex p-3 gap-5 flex-wrap justify-center'>
        {
          imagedata.map(imgs => <ImageCard key={imgs.id} image={imgs.download_url} authorNm={imgs.author} />)
        }
      </div>
    </>
  )
}

export default App
