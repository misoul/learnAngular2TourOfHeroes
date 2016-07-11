export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice', score: 1.2},
      {id: 12, name: 'Narco', score: 2.5},
      {id: 13, name: 'Bombasto', score: 4.5},
      {id: 14, name: 'Celeritas', score: 6.7},
      {id: 15, name: 'Magneta', score: 5.6},
      {id: 16, name: 'RubberMan', score: 3.8},
      {id: 17, name: 'Dynama', score: 4.9},
      {id: 18, name: 'Dr IQ', score: 2.7},
      {id: 19, name: 'Magma', score: 1.7},
      {id: 20, name: 'Tornado', score: 7.8}
    ];
    return {heroes};
  }
}
