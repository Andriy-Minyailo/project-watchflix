import { RequestServer } from "./requestServer";
const requestServer = new RequestServer();
let genresList;

export async function requestGenre() {
      try {
        const responsGenre = await requestServer.movieGenre();
        const { genres } = responsGenre.data;
        genresList = genres.reduce((acc, { id, name }) => {
    acc[id] = name;
    return acc;
  }, {});
    } catch(error) {
    console.log(error);
  };
}
// requestGenre();

export function nameGenres(arrayId) {
     const result = arrayId.map(id => genresList[id]);
        if (result.length > 2) {
    result.splice(2);
    } else if (result.length === 0) {
    result.push("no genres")
    }
    
  return result

}

