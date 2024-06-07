import Input from "@/components/Inputs/Input";

const SearchInput = () => {
  return (
    <div className="mt-8 md:mt-20">
      <Input
        inputMode="email"
        type="email"
        className="!rounded-10"
        hasSearchIcon
        placeholder="search"
      />
    </div>
  );
};

export default SearchInput;
