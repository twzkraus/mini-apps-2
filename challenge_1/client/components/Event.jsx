import React from 'react';

const Event = ({ data }) => (
  <tr>
    <td>
      {data.date}
    </td>
    <td>
      {data.description}
    </td>
    <td>
      {data.category1 ? data.category1 + ', ' + data.category2 : ' '}
    </td>
  </tr>
)

export default Event;
