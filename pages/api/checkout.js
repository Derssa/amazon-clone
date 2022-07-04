export default async function checkout(req, res) {
  try {
    const client = (await import("../../sanity")).client;
    const { order } = req.body;
    if (!order) {
      return res.status(400).json({ msg: "لا يمكن إضافة الطلب" });
    }

    await client.create(order);
    res.status(200).json({ msg: "تمت العملية بنجاح" });
  } catch (err) {
    return res.status(500).json({ msg: "لا يمكن إضافة الطلب" });
  }
}
