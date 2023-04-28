import { useQuery } from "@apollo/client";
import { getCountries } from "~/graphql";
import { type GetCountriesQuery } from "~/types/graphql/graphql";

export default function Countries() {
  const { data, loading, error } = useQuery<GetCountriesQuery>(getCountries);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p>No countries exist.</p>;
  }

  const countries = data.Country.slice(0, 4);

  return (
    <div className="align-center mt-3 flex h-[150px] w-full max-w-3xl justify-center">
      {countries.map((country) => (
        <div
          key={country.code}
          className="m-1 grow rounded-xl border border-gray-500 p-3 text-left text-black decoration-transparent transition-all"
        >
          <h3 className="text-xl font-semibold">
            {country.name} {country.emoji}
          </h3>
          <p className="text-base">{country.code}</p>
        </div>
      ))}
    </div>
  );
}
