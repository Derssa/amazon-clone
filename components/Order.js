import moment from "moment";

function Order({ order }) {
  return (
    <div className="relative border rounded-md">
      <div
        className="flex flex-col md:flex-row items-start md:space-x-10 p-6 bg-gray-100
      text-sm text-gray-600"
      >
        <div className="mt-6 md:m-0">
          <p className="font-bold text-xs">La commande a été passée en </p>
          <p>{moment(new Date(order._createdAt)).format("DD/MM/YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">Total</p>
          <p>{order.amount} €</p>
        </div>
        <p
          className="text-sm whitespace-nowrap sm:text-lg md:self-end
          text-blue-500"
        >
          Nombre de produits: {order.items.length}
        </p>
        <p
          className="absolute top-1 right-2 truncate
        text-xs whitespace-nowrap"
        >
          Numero #{order._id}
        </p>
        <p
          className="absolute top-5 right-2 truncate
          text-xs whitespace-nowrap"
        >
          Statut de la commande:{" "}
          {order.status === "pending" ? (
            <span className="font-bold text-orange-600">En attente</span>
          ) : (
            <span className="font-bold text-green-600">Complet</span>
          )}
        </p>
      </div>
      <div className="p-3 sm:p-5">
        <div className="flex space-x-6 overflow-x-auto overflow-y-hidden">
          {order.items.map((item) => (
            <div key={item._key}>
              <img
                className="h-20 object-contain sm:h-32"
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
              <p className="text-xs text-center mt-1">{item.name}</p>
              <p className="text-xs text-center mt-1">{item.size}</p>
              <p className="text-xs text-center mt-1">
                Email:{" "}
                {item.email === "" ? (
                  <svg
                    role="status"
                    className="inline w-4 h-4 mr-3 text-black animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <span className="font-bold">{item.email}</span>
                )}
              </p>
              <p className="text-xs text-center mt-1">
                Mot de passe:{" "}
                {item.password === "" ? (
                  <svg
                    role="status"
                    className="inline w-4 h-4 mr-3 text-black animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <span className="font-bold">{item.password}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
