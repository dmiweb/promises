import json from './json';
import read from './read';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) =>
      setTimeout(() => {
        read()
          .then(response => {
            return json(response);
          })
          .then(response => {
            resolve(JSON.parse(response));
          })
      }, 0));
  }
}