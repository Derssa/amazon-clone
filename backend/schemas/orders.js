export default {
  name: "orders",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "ClientName",
      type: "string",
    },
    {
      name: "clientEmail",
      title: "ClientEmail",
      type: "string",
    },
    {
      name: "clientPhone",
      title: "ClientPhone",
      type: "string",
    },
    {
      name: "clientAddress",
      title: "ClientAddress",
      type: "string",
    },
    {
      name: "amount",
      title: "Amount",
      type: "number",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", title: "ProductId", type: "string" },
            { name: "name", title: "Name", type: "string" },
            { name: "image", title: "Image", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "color", title: "Color", type: "string" },
            { name: "size", title: "Size", type: "string" },
          ],
        },
      ],
    },
  ],
};
