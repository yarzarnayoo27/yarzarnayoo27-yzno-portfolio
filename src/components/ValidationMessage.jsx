import { AiOutlineCloseCircle } from "react-icons/ai";

const ValidationMessage = ({ message }) => {
  return (
    <p className="w-full flex gap-1 items-center text-sm text-red-400">
      <AiOutlineCloseCircle />
      {message}
    </p>
  );
};

export default ValidationMessage;
