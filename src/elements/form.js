const Form = ({ children }) => {
  return (
    <form
      className="flex flex-col gap-4 w-full bg-white shadow-2xl rounded-lg p-6  border-gray-400 border border-opacity-50"
      onSubmit={(e) => e.preventDefault()}
    >
      {children}
    </form>
  );
};

export default Form;