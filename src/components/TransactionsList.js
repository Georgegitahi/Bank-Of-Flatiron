import React, {useEffect , useState } from "react";
import Transaction from "./Transaction";

function TransactionsList() {
  const [transactions, setTransactions] = useState([])
  

  useEffect(()=>{

    fetch('https://bank-of-flatiron-1-bv3j.onrender.com/transactions')
      .then((response) => response.json())
      .then((data) => {

       setTransactions(data)

      } );

  }, [])
  //delete
  const handleDelete = (id) =>{
    fetch (`https://bank-of-flatiron-1-bv3j.onrender.com/transactions/${id}`,{
      method:'DELETE',
    })
    .then((response) => response.json())
    .then((res)=>{
    alert("Transaction deleted succesfully")
  });
  }
  
  console.log(transactions);

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {
          transactions && transactions.map((trans)=>(
         <tr key={trans.id}>
          <td>
            <p >{trans.date}</p>
          </td>
          <td>
            <p >{trans.description}n</p>
          </td>
          <td>
            <p >{trans.category}</p>
          </td>
          <td>
            <p >{trans.amount}</p>
          </td>
          <td>
            <button onClick={()=>handleDelete(trans.id)}>
              Delete
            </button>
          </td>
        </tr>



          ))
        }
      </tbody>
    </table>
  );
}

export default TransactionsList;
