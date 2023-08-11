const Temoignage = {
  name: "temoignages",
  title: "Temoignage",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom du client",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "poste",
      title: "Poste",
      type: "string",
    },
    {
      name: "entreprise",
      title: "Entreprise",
      type: "string",
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
    },
    {
      name: "url",
      title: "Liens Reseau",
      type: "url",
    },
    {
      name: "content",
      title: "Temoignage",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "dateDeTemoignage",
      title: "Date de temoignage",
      type: "date",
    },
  ],
};

export default Temoignage;
