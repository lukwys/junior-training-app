import league from "./league"
import team from "./team"
import season from "./season"
import country from "./country"

export default function apiLoadSelectFactory(api, type) {
    // MOCK-UP factory
    let func = () => {};

    console.log("Mock-up of SelectFactory - api|type", api, type);
    switch (api) {
        case 0:
            switch (type) {
                case "league":
                    func = league;
                    break;
                case "team":
                    func = team;
                    break;
                case "season":
                    func = season;
                    break;
                default:
                    console.error("SelectFactory - INVALID type");
                    break;
            }
            break;
        case 1:
            switch (type) {
                case "league":
                    func = league;
                    break;
                case "team":
                    func = team;
                    break;
                case "season":
                    func = season;
                    break;
                case "country":
                    func = country;
                    break;
                default:
                    console.error("SelectFactory - INVALID type");
                    break;
            }
            break;
        case 2:
            switch (type) {
                case "team":
                    func = team;
                    break;
                default:
                    console.error("SelectFactory - INVALID type");
                    break;
            }
            break;
        default:
            console.error("SelectFactory - INVALID api");
            break;
    }

    return func
}
