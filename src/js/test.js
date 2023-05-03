

// Приклад роботи з бекендом
import { RequestServer } from "./requestServer";

const requestServer = new RequestServer();

async function test() {
    try {
        const response = await requestServer.trendingDay();
        console.log(response);
    
    } catch (error) {
        console.error(error);
    }
}

test();
