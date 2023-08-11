import { PortableTextBlock } from "sanity";

type url = {
  url: string;
};
type image = {
  asset: url;
};
export type service = {
  id: string;
  slug: string;
  title: string;
  content: PortableTextBlock[];
  photo: string;
  category: Cathegorie;
};

export type Cathegorie = {
  _id: string;
  title: string;
};
