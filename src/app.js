import { fetchData } from "./script.js";

export async function GetComponent(name) {
    const filePath = await fetchData(name);
    if (!filePath) return null;
    return true;
}


