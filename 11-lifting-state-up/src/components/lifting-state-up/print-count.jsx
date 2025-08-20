import './print-count.css'

export default function PrintCount(props) {
  return (
    <output className="print-count" style={{ padding: 12 }}>
      {props.count}
    </output>
  )
}
