"use client";
import { useCallback, useMemo, useState } from "react";
import { searchByName } from "../utils/searchByName";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const SEARCH_PRODUCT = useMemo(() => searchByName(search), [search]);

  return (
    <div className="text-black relative w-2/3 md:w-5/6 mx-2">
      <input
        placeholder="search"
        value={search}
        onChange={handleChange}
        className="border-none rounded px-2 py-1 w-full"
      />
      <div className="w-full absolute shadow-md">
        {!!search &&
          SEARCH_PRODUCT.map((product) => (
            <Link
              href={`/${product.category}/${product.name}`}
              onClick={() => setSearch("")}
            >
              <div className="flex bg-gray-100 ">
                <Image src={product.image} alt={product.name} width={30} />
                <div>{product.name}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
