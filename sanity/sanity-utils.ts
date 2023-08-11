import { partenaire, service } from "@/app/modele/modele";
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
export async function getPartenaire(): Promise<partenaire[]> {
  return createClient(configCl).fetch(
    groq`*[_type == "partenaire"]{
                          _id,
                          _createdAt,
                          nom,
                          "slug":slug.current,
                          "logo":logo.asset->url,
                          lien,

                   }`
  );
}
