const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name</label>
      <input
        type="text"
        name="filter"
        title="Write down a word for searching"
        value={value}
        onChange={changeFilter}
      />
    </>
  );
}

export default Filter
