
type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div
      className="input-group"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2,
        background: "white",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <input
        type="search"
        placeholder="Search"
        className="form-control border-end-0 border rounded-pill"
        id="search-input"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
}

export default SearchBar;