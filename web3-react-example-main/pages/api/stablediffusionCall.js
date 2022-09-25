// send api request to stablediffusion api hugging face
import pythonService from "./pythonService";
import axios from "axios";

export default async function handler(input, setState) {
  setState({ pageState: "loading" });

  // set timeout to switch state

  try {
    const { data } = await axios
      .post(
        "https://huggingface.co/spaces/stabilityai/stable-diffusion",
        {
          inputs: input,
        },
        {
          headers: {
            Authorization: `Bearer AbCdEf123456`,
          },
        }
      )
      .error(function (error) {
        console.log(error);
      });

    // make call to pythonService
    try {
      const pythonData = await pythonService(data);
      console.log(pythonData);
      setState({ pageState: "showPic", data: pythonData });
    } catch (error) {
      console.log(error);
    }
  } catch (e) {
    console.log(e);
    const pythonData = await pythonService(e);
    setState({ pageState: "showPic", data: pythonData });
    // setState({ pageState: "showPic", pics: pythonData });
    // setTimeout(() => {
    //   setState({ pageState: "showPic", pics: { error: true } });
    // }, 3000);
  }
}
