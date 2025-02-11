const App = () => {
  return (
    <table border={1}>
      <thead>
        <tr >
          <th style={{padding:'10px'}}>Checkbox</th>
          <th style={{padding:'10px'}}>Account</th>
          <th style={{padding:'10px'}}>Note</th>
          <th style={{padding:'10px'}}>Closed</th>
          <th style={{padding:'10px'}}>Status</th>
          <th style={{padding:'10px'}}>Progress</th>
          <th style={{padding:'10px'}}>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="check" />
          </td>
          <td>IBM</td>
          <td>AirTable</td>
          <td>^*</td>
          <td>New</td>
          <td>10%</td>
          <td>19 Sep</td>
        </tr>
      </tbody>
    </table>
  );
};
export default App;