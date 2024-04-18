import GameSavingLoader from './GameSavingLoader';
import json from './json';
import read from './read';

GameSavingLoader.load()
.then(saving => {
  return saving;
}) 
.catch(error => {
  return error;
});

(async () => {
  try {
    const response = await read();
    const jsonStr = await json(response);
    const data = JSON.parse(jsonStr);
    return data;
  }
  catch (error) {
    return error;
  }
})();
