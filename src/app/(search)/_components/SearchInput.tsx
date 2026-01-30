import Input from "@/components/Inputs/Input";
import { ChangeEvent } from "react";

interface ISearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput: React.FC<ISearchInputProps> = ({ onChange, value }) => {
  return (
    <div className="mt-8 md:mt-20">
      <Input
        type="text"
        className="!rounded-10"
        hasSearchIcon
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
