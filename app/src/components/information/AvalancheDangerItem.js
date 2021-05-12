import React from 'react';


const dangerColour = (rating) => {
  if (rating.includes('N/A')) {
    return "_no-rating"
  }
  if (rating.includes('1')) {
    return "_low"
  }
  if (rating.includes('2')) {
    return "_moderate"
  }
  if (rating.includes('3')) {
    return "_considerable"
  }
  if (rating.includes('N/A')) {
    return "_high"
  }
  if (rating.includes('N/A')) {
    return "_extreme"
  }
}

export default function AvalancheDangerItem(props) {

  return(
    <>
      <tr>
        <th className="danger-date">{props.date}</th>
      </tr>
      <tr>
        <th className="alpine">Alpine</th>
        <td className={dangerColour(props.alp)}>{props.alp}</td>
      </tr>
      <tr>
        <th className="treeline">Treeline</th>
        <td className={dangerColour(props.tln)} >{props.tln}</td>
      </tr>
      <tr>
        <th className="below-treeline">Below Treeline</th>
        <td className={dangerColour(props.btl)}>{props.btl}</td>
      </tr>
    </>
  )
}