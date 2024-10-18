const StaticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}:</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

export { StaticLine };
