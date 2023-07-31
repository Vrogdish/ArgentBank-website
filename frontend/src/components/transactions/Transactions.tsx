import Button from '../button/Button'

interface Props {
    className? : string,
    title : string,
    value : string
    balance : "Current" | "Available"
}

export default function Transactions({className, title, value, balance } : Props) {

  return (
    <div className = {`flex flex-col md:flex-row justify-between bg-white w-4/5 m-auto p-6  items-center ${className}`}>
        <div>
            <h3>{title}</h3> 
            <p className='text-4xl font-bold'>${value}</p>
            <p>{balance} Balance</p>
        </div>
        <Button className='text-white font-bold text-xl w-full md:w-[200px]  py-2 mt-2 '>
            View transactions
        </Button>
        
    </div>
  )
}
