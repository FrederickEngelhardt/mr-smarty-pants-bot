import env from '../../env.js';
const { WIT_AI_KEY } = env;

export async function getIntent(text) {
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${WIT_AI_KEY}`,
        }
    };
  const url = `https://api.wit.ai/message?v=20181103&q=${text}`;
  const data = await (await fetch(url, options)).json();
  console.log(data);
  // return intent;
}
