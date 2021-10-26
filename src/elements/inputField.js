const InputField = ({ placeholder, type, name }) => {
  return (
    <input
      name={name}
      className="mt-1 border border-opacity-50 border-gray-400 rounded p-2 w-full focus:outline-none focus:border-primary"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;