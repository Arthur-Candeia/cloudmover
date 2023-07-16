import './Card.scss'

interface cardContent {
  symbol: string,
  name: string
}

export default function Card({symbol, name}: cardContent) {
  return (
    <div className="card">
      <span>{symbol}</span>
      <p>{name}</p>
    </div>
  )
}