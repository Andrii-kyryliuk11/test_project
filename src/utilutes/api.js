import axios from "axios";

axios.defaults.baseURL = "https://6456a2fa2e41ccf16921f779.mockapi.io";

export async function getTweets() {
  const data = await axios.get("/users?l=4&p=1");

  return data;
}

export async function getOneUser(id) {
  const data = await axios.get(`/users/${id}`);

  return data;
}

export async function loadMoreTweets(page) {
  const data = await axios.get(`/users?l=4&p=${page}`);

  return data;
}

export async function followUser(user) {
  await axios.put(`/users/${user.id}`, {
    isFollowed: !user.isFollowed,
    followers: user.isFollowed ? user.followers - 1 : user.followers + 1,
  });
}
