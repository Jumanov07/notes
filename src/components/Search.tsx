import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";

interface Props {
  setSearchText: (value: string) => void;
}

const Search = ({ setSearchText }: Props) => {
  const handleSearchNote = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={handleSearchNote}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
