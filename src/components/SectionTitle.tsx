interface props {
  text: string;
}

const SectionTitle = ({ text }: props) => {
  return <p className=" text-xs ">{text}</p>;
};

export default SectionTitle;
