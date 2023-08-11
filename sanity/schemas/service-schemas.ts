export const Service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "content",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      title: "Catégorie",
    },
  ],
};

export const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Titre",
    },
  ],
};
