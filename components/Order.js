import moment from "moment";

function Order({ order }) {
  return (
    <div className="relative border rounded-md">
      <div
        className="flex flex-row-reverse items-center space-x-10 space-x-reverse p-5 bg-gray-100
      text-sm text-gray-600"
      >
        <div>
          <p dir="rtl" className="font-bold text-xs">
            الطلبية تمت في{" "}
          </p>
          <p dir="rtl">
            {moment(new Date(order._createdAt)).format("YYYY/MM/DD")}
          </p>
        </div>
        <div>
          <p dir="rtl" className="text-xs font-bold">
            المجموع
          </p>
          <p dir="rtl">{order.amount} درهم</p>
        </div>
        <p
          dir="rtl"
          className="text-sm whitespace-nowrap sm:text-xl self-end
          flex-1 text-right text-blue-500"
        >
          {order.items.length} وحدات
        </p>
        <p
          dir="rtl"
          className="absolute top-2 left-2 truncate
        text-xs whitespace-nowrap"
        >
          رقم # {order._id}
        </p>
      </div>
      <div className="p-3 sm:p-5">
        <div
          dir="rtl"
          className="flex space-x-6 space-x-reverse overflow-x-auto"
        >
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
