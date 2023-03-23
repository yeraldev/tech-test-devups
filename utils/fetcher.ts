import axios from "axios";
import { IArticle, ISubscription } from "./models";

export const getArticles = async (filter?: string): Promise<IArticle[]> => {
  const url = "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles";
  const res = await axios({
    method: "get",
    url,
    params: filter ? { filter } : {},
  });
  return res.data;
};

export const setSubscription = async (
  subscription: ISubscription
): Promise<any> => {
  const url = "https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter";
  const res = await axios.post(url, subscription);
  return res.data;
};
