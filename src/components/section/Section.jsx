import Wrapper from "./SectionStyle"

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
}

export default Section