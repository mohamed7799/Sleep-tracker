const Button = ({ text, className }) => {
  return (
    <button
      className={`hover:opacity-70 shadow-xl transition duration-300 cursor-pointer text-center px-4 font-bold rounded py-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
