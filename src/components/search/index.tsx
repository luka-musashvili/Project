import { Input } from "antd";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative h-[34px] max-w-[350px] w-full">
      <Input
        className="rounded-none h-full"
        placeholder="სახელმწიფო უწყება, სერვისი"
      />
      <div className="absolute right-0 top-0 bottom-0 grid place-content-center w-[34px] bg-[#7ab800]">
        <FaSearch size={16} color="white" />
      </div>
    </div>
  );
};

export default Search;
