const LoginInput = ({ type, placeholder }) => {
    return (
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-3 text-gray-700 rounded-3xl bg-[#ecf0f3] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>
    );
  };
  
  export default LoginInput;
  