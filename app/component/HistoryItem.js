import Link from "next/link"

const HistoryItem = ({history}) => {
  const {id, totalPrice, status} = history
  return (
    <div key={id} className="flex flex-col items-center justify-between md:flex-row border border-black m-2 bg-gray-100 p-2 rounded-md shadow-lg">
      <div className="text-center">
        Factor Cart Id: {id}
      </div>
      <div className="flex justify-center">
        Total Price: {totalPrice} $
      </div>
      <div className={`text-center font-extrabold font-mono ${status === 'pending' ? 'text-yellow-600' : 'text-green-500'}`}>
        {status}
      </div>
      <Link href={`/cart/history/${id}`}>
        <div>
          show details
        </div>
      </Link>
    </div>
  )

}

export default HistoryItem 