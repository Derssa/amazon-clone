export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "class", title: "Class", type: "string" },
          ],
        },
      ],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "inStock", title: "InStock", type: "boolean" },
          ],
        },
      ],
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "object",
      fields: [
        { name: "average", title: "Average", type: "number" },
        { name: "totalCount", title: "TotalCount", type: "number" },
      ],
    },
  ],
};
