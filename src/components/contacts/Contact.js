import { nanoid } from 'nanoid';

const Contact = ({ name }) => {
  return {
    name: name,
    id: nanoid(),
  };
};

export default Contact