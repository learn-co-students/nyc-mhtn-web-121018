import uuid from 'uuid';
import DOG_PROFILES from '../apis/data'; // API

class DogAdapter {
  static requestSimulator(result, delay = 1000, body = "json") {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({ [body]: () => result });
      }, delay);
    });
  }

  static getDogs() {
    return this.requestSimulator(this.dogs,  2000);
  }

  static getLikedDogs() {
    return this.requestSimulator(this.dogs.slice(0, 2),  1000);
  }

  static addDog(body) {
    const newDog = { ...body, id: uuid() };
    this.dogs.push(newDog);
    return this.requestSimulator(newDog,  500);
  }

  static editDog(body) {
    this.dogs = this.dogs.map(dog => {
      if (dog.id === body.id) {
        return {...body};
      }
      return dog;
    });
    return this.requestSimulator(body,  500);
  }
}

DogAdapter.dogs = DOG_PROFILES.map(dog => {
  return {...dog, id: uuid()};
});

export default DogAdapter;
