import { Label, Input } from "./contactForm/ContactForm_Style";
const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
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
