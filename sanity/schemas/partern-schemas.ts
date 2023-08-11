export const partern = {
  name: "partenaire",
  title: "Partenaire",
  type: "document",
  fields: [
    {
      name: "nom",
      type: "string",
      title: "Nom du partenaire",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "nom",
        maxLength: 96,
      },
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      name: "url",
      type: "string",
      title: "Lien",
    },
  ],
};
