import { UserModel } from '@core/models/user.model';

export const USERS_MOCKED_DATA: UserModel[] = [
  {
    id: 0,
    name: 'goldenelephant498',
    age: 27,
    email: 'austin.marshall@example.com',
    password:
      '583cf239e7ff17562f279e089ba0e634981c91a2029cdf1457601b899959cecc', //steve1
    salt: '6796757a748c68275038f3e9e5216109',
    friends: new Set<number>([1, 3, 8, 15, 14]),
    games: new Set<number>([1, 3, 11]),
  },
  {
    id: 1,
    name: 'greenswan666',
    age: 34,
    email: 'ignacio.ortega@example.com',
    password:
      '13046727132cb840f59ff2c7eee87f79056832b156a061fc3c0d8b315a6760d6', //bologna
    salt: '0b7937ac6832ea82174df16b4cae34a8',
    friends: new Set<number>([0, 14, 6, 5]),
    games: new Set<number>([33, 7, 8, 9]),
  },
  {
    id: 2,
    name: 'crazydog994',
    age: 43,
    email: 'manfred.moser@example.com',
    password:
      '5d531a6b655770830f80267434b43bf9eb152743c089e750f5c25752dc29f91b', //ming
    salt: '9f3fb82de9ff0962c91a843f7b4fc51d',
    friends: new Set<number>([3, 4, 5, 6]),
    games: new Set<number>([22, 23, 24, 25]),
  },
  {
    id: 3,
    name: 'smallmeercat697',
    age: 33,
    email: 'esma.karaer@example.com',
    password:
      'dcf457ac4529b349b365a977bab525440dc1e418c3fd3fe64a7599411586cc9e', //windsurf
    salt: '64d5d781e25688ad2b199a612504699a',
    friends: new Set<number>([2, 0, 10, 11, 12]),
    games: new Set<number>([2, 3, 4]),
  },
  {
    id: 4,
    name: 'redbutterfly940',
    age: 23,
    email: 'ris.viana@example.com',
    password:
      'a6b3377cfb2ed37f7e0d2ce81631528f300d40932abce5f26d0308e7255beffa', //emerald
    salt: '6d98ed18da092afd941173dc13241106',
    friends: new Set<number>([0, 2, 5, 6, 7, 8]),
    games: new Set<number>([2, 5, 6, 7, 8]),
  },
  {
    id: 5,
    name: 'smallbutterfly248',
    age: 34,
    email: 'umut.yilmazer@example.com',
    password:
      '3d7bfbc1d67fdf99b3c720bd9593f12bc6127194c3097e3086942aa7fdc6a99a', //chocolat
    salt: '086562f5bea07fe19dc97a31a6cd8e6b',
    friends: new Set<number>([1, 2, 4, 7, 8, 9, 10]),
    games: new Set<number>([2, 3, 4]),
  },
  {
    id: 6,
    name: 'angryduck587',
    age: 23,
    email: 'joaquin.fuentes@example.com',
    password:
      '6e8b4fb7f1c997fd205459a62a2890f4ac87249ed9c6517c5cfed6653e99627a', //zzzz
    salt: 'f0cdf107e75b51d082cb0392495b4e62',
    friends: new Set<number>([1, 4, 13, 14, 15]),
    games: new Set<number>([6, 11, 30]),
  },
  {
    id: 7,
    name: 'brownbutterfly202',
    age: 26,
    email: 'iiris.jarvela@example.com',
    password:
      '0edd1d1cfed68bbde9cfc515678e411d2937ee5ed59a25986b251a65425e6a85', //julia
    salt: 'd03a8d1da464ce49f79298da64649445',
    friends: new Set<number>([4, 5, 11, 12]),
    games: new Set<number>([23, 24, 25]),
  },
  {
    id: 8,
    name: 'smallkoala284',
    age: 32,
    email: 'marinara.silva@example.com',
    password:
      '8da9154a41b5918839049262ed6542ee4a64dc3f4db9c22b00e9520cec867df6', //matthew
    salt: 'a121dcbaa93908750684d0c7bced87a7',
    friends: new Set<number>([0, 4, 5]),
    games: new Set<number>([1, 2, 7, 8, 9]),
  },
  {
    id: 9,
    name: 'crazydog930',
    age: 35,
    email: 'sario.rocha@example.com',
    password:
      '15b31ccd47d6c43bf0973880fffee80e991aa6223ef415ac4d788799d7fd6da7', //honda
    salt: 'f7d0ec8b531a34db258442f68a66acfb',
    friends: new Set<number>([5]),
    games: new Set<number>([0, 9, 10, 11]),
  },
  {
    id: 10,
    name: 'purpledog220',
    age: 44,
    email: 'marilia.campos@example.com',
    password:
      '0ff37cc4857ac1bf6ece327463f016a460c31aef1fde080e528a58b2b9785127', //tatiana
    salt: '3dfd2551ea08cb75d44d0805db73e680',
    friends: new Set<number>([3, 5, 13]),
    games: new Set<number>([0, 6, 9]),
  },
  {
    id: 11,
    name: 'blackelephant754',
    age: 55,
    email: 'carolyn.thompson@example.com',
    password:
      '1e959a4235c2280034647f4b7bb90d9dd000c968371d7677b99c94219cb2ab90', //service
    salt: '2b18bd191b1faa8a431b0a59369c1c8d',
    friends: new Set<number>([3, 7]),
    games: new Set<number>([0, 1, 10, 11]),
  },
  {
    id: 12,
    name: 'browndog252',
    age: 41,
    email: 'alberte.jensen@example.com',
    password:
      '1eb79b17efa1d6a02bb868b8e5fe1643ceefe6473b5f013823f4173c0c885c9e', //christine
    salt: 'e862126e02df63d385d698e7b32bf516',
    friends: new Set<number>([3, 7]),
    games: new Set<number>([4, 5, 6]),
  },
  {
    id: 13,
    name: 'blackladybug913',
    age: 37,
    email: 'seth.mckinney@example.com',
    password:
      'd6abfcc99d8d0eebfcc96c6f7407f2536b6f0d4e4016c9cbbac2e8de7c673e74', //minerva
    salt: '2c27f1023c8372751c7ce7b8d32b0bb6',
    friends: new Set<number>([6, 10]),
    games: new Set<number>([0, 1, 6, 8, 9, 10, 11]),
  },
  {
    id: 14,
    name: 'brownpanda271',
    age: 38,
    email: 'noelle.vasquez@example.com',
    password:
      '3c3ac6f2dd8721eec664b1dbc0e8c1ba4b51d63b6d9f31b4c22c4b60fe3d40ad', //florida
    salt: 'fdfdf260c3ccf843736e27cd677b225d',
    friends: new Set<number>([1, 6]),
    games: new Set<number>([8, 9, 10, 20, 21, 22]),
  },
  {
    id: 15,
    name: 'tinysnake157',
    age: 28,
    email: 'janin.knuppel@example.com',
    password:
      'f4c9edae06efdf807030f6735eb77f2fb6682f5af6716f98ad574ff24658572f', //usmc
    salt: 'f11780ce0340b7d25261f788ba1e7a12',
    friends: new Set<number>([0, 6]),
    games: new Set<number>([0]),
  },
];
