import { service } from "@/app/modele/modele";
import configCl from "./config/client-config";
import { createClient, groq } from "next-sanity";

export async function getServices(): Promise<service[]> {
  return createClient(configCl).fetch(
    groq`*[_type == "service"]{
                          _id,
                          _createdAt,
                          title,
                          "slug":slug.current,
                          "photo":photo.asset->url,
                          content, 
                          "category": category->

                   }`
  );
}
