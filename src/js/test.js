

// Приклад роботи з бекендом
import { RequestServer } from "./requestServer";

const requestServer = new RequestServer();

async function test () {
const response = await requestServer.trendingDay();
console.log(response);  
}
test();
