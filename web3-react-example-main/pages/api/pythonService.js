// api to python service local
import axios from "axios";

export default async function handler(image, setState) {
  const { data } = await axios.post("http://127.0.0.1:5002/getpics", {
    inputs: image,
  });

  return data;
}
