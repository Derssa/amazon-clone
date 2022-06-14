import moment from "moment";
import dynamic from "next/dynamic";

function Order({ order }) {
  return (
    <div className="relative border rounded-md">
      <div
        className="flex items-center space-x-10 p-5 bg-gray-100
      text-sm text-gray-600"
      >
        <div>
          <p className="font-bold text-xs">COMMANDE PASSÉE</p>
          <p>{moment(new Date(order._createdAt)).format("DD/MM/YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>{order.amount} DH</p>
        </div>
        <p
          className="text-sm whitespace-nowrap sm:text-xl self-end
          flax-1 text-right text-blue-500"
        >
          {order.items.length} éléments
        </p>
        <p
          className="absolute top-2 right-2 w-40 lg:w-72 truncate
        text-xs whitespace-nowrap"
        >
          COMMANDE # {order._id}
        </p>
      </div>
      <div className="p-3 sm:p-5">
        <div className="flex space-x-6 overflow-x-auto">
          {order.items.map((item) => (
            <div key={item._key}>
              <img
                className="h-20 object-contain sm:h-32"
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
              <p className="text-xs text-center mt-1">
                {item.quantity + " " + item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
