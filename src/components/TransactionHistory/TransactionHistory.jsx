import TransStyle from './TransStyle.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={TransStyle.transactionHistory}>
  <thead >
    <tr className={TransStyle.tabTitle}>
      <th className={TransStyle.titleItem}>Type</th>
      <th className={TransStyle.titleItem}>Amount</th>
      <th className={TransStyle.titleItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
                {items.map(item => {
                    return (
                        <TransItem
                            key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
       )
   })}
  </tbody>
</table>
    )
}

export const TransItem = ({ type, amount, currency }) => {
    return (
         <tr className={TransStyle.list}>
      <td className={TransStyle.item}>{type}</td>
      <td className={TransStyle.item}>{amount}</td>
      <td className={TransStyle.item}>{currency}</td>
    </tr>
    )
}