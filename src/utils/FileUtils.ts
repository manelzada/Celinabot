import { readdirSync, statSync} from "fs";
import { resolve } from "path";

export default function readFile({dir}: any, callback: any) {
  const files = readdirSync(dir);
  files.map(file => {
    const fullPath = resolve(dir, file);

    if(statSync(dir + '/' + file).isDirectory()) {
      readFile({dir: dir + '/' + file }, callback);
    }

    if(/\.(js|json)$/.test(file)) {
      try {
        const required = import(fullPath);
        callback(null, required);
      } catch (error) {
        callback(error);
      }
    }
  })
}