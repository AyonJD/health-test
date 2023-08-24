const CommonSubmitButton = ({ children, type, func }) => {
  return (
    <button
      type={type}
      className="bg-[#05272D] text-[#fff] hover:bg-[#fff] hover:text-[#05272D] border-[1px] border-[#fff] hover:border-[#05272D] focus:outline-none rounded-md px-2 py-2 my-3 w-32 delay-75 transition-all ease-in-out font-medium mr-2"
      onClick={func}
    >
      {children}
    </button>
  )
}

const CommonButton = ({ children, func }) => {
  return (
    <button
          className="bg-[#05272D] text-[#fff] hover:bg-[#fff] hover:text-[#05272D] border-[1px] border-[#fff] hover:border-[#05272D] focus:outline-none rounded-md px-2 py-2 my-3 w-32 delay-75 transition-all ease-in-out font-medium"
        onClick={func}
    >
      {children}
    </button>
  )
}

export const Button = {
    CommonSubmitButton,
    CommonButton
}
