export default async function checkout(req, res) {
  try {
    const client = (await import("../../sanity")).client;
    const { order } = req.body;
    if (!order) {
      return res
        .status(400)
        .json({ msg: "La demande ne peut pas être ajoutée" });
    }

    await client.create(order);
    res.status(200).json({ msg: "opération réussie" });
  } catch (err) {
    return res.status(500).json({ msg: "La demande ne peut pas être ajoutée" });
  }
}
