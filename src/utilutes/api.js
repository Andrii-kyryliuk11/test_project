import axios from "axios";

axios.defaults.baseURL =
  "https://6456a2fa2e41ccf16921f779.mockapi.io/users?l=4&p=1";

export default async function getTweets() {
  const data = await axios.get();

  return data;
}
