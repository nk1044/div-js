import { fetchData } from "./script.js";
import { pathToFileURL } from 'url';

export async function Ui(name) {
    const filePath = await fetchData(name);
    if (!filePath) return null;
    const moduleUrl = pathToFileURL(filePath).href;
    const module = await import(moduleUrl);
    return module.default;
}