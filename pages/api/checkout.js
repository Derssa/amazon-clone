export default async function checkout(req, res) {
  try {
    const client = (await import("../../sanity")).client;
    const { order } = req.body;
    if (!order) {
      return res.status(400).json({ msg: "Cant't add" });
    }

    await client.create(order);
    res.status(200).json({ msg: "Order added" });
  } catch (err) {
    return res.status(500).json({ msg: "Can't add order" });
  }
}
