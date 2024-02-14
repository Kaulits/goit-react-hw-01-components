import StatisticsStyle from './StatisticsStyle.module.css';


function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const randomColor = getRandomColor();



export const Statistics = ({ title, stats }) => {
    return (
        <section className={StatisticsStyle.statistics}>
  <h2 className={StatisticsStyle.title}>{title}</h2>

  <ul className={StatisticsStyle.statList}>
          {stats.map(item => {
            return (
       <StatItem
            key={item.id}
                label={item.label}
                percentage={item.percentage}
          />
     )
   })}
          
  </ul>
</section>
    )
}

export const StatItem = ({label, percentage}) => {
  return (
   <li className={StatisticsStyle.item} style={{ backgroundColor: getRandomColor() }}>
        <span className={StatisticsStyle.label}>{label}</span>
      <span className={StatisticsStyle.percentage}>{percentage}%</span>
      </li>
  )
}