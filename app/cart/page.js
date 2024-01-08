import HistoryList from "../component/HistoryList"
import CartList from "../component/CartList"

const Page = () => {  
  return (
    <div className="min-h-screen bg-blue-100 md:bg-white md:h-[90vh]">
      <div className="flex flex-col justify-center w-full items-center md:my-20">
        <CartList />
        <HistoryList />
      </div>
    </div>
  )
}

export default Page