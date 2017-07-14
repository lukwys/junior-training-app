import api from "../../api"
import attach from "../../attach"
import render from "../../render"

export default function league(leagueDataAttr, teamDataAttr) {
    document.querySelector(`[${leagueDataAttr}]`).addEventListener("change", () => {
        api.load.api1.team(234)
            .then(list => attach.select.team(
                render.select.team(list),
                teamDataAttr
            ))
    })
}
