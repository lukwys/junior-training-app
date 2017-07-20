export default function option(dataSourceDataAttr) {
    document.querySelector(`[data-${dataSourceDataAttr}]`).innerHTML =
        "<option value=\"0\">football-data.org</option>" +
        "<option value=\"1\">apifootball.com</option>";
}
