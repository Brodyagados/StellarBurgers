type TTitleProps = {
  text: string;
};

const Title = ({ text }: TTitleProps) => <span className='text text_type_main-large mt-10'>{text}</span>;

export default Title;
