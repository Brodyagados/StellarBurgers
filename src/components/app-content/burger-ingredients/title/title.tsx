type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => <span className='text text_type_main-large mt-10'>{text}</span>;

export default Title;
