export const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
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
   <li class="item">
        <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
      </li>
  )
}