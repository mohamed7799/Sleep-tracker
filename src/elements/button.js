const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:opacity-70 shadow-xl transition duration-300 cursor-pointer text-center px-4 font-bold rounded py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
