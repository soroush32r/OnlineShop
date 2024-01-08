'use client'
import { useSelector } from "react-redux"
import HistoryItem from "./HistoryItem"


const HistoryList = () => {
  const [user1] = useSelector(store => store.history)
  const {historyCart} = user1   
  console.log(user1, 'history')
  return (
    <div className="flex flex-col my-10 w-[90vw] text-center p-2 bg-blue-50 rounded shadow-md">
      <h1 className="py-5">History List</h1>
      {historyCart.map( history => <HistoryItem  key={history.id} history={history}  />   )}
    </div>
  )
}

export default HistoryList