import { CarProps, FilterProps } from "@/shared/interfaces";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, fuel, limit, model, year } = filters;
  console.log("fuel: ", fuel);

  const headers = {
    "X-RapidAPI-Key": "cb0054939dmsh3fc52466d4ddb4ep1a4d97jsn013d1e963eae",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&fuel_type=${fuel}&limit=${limit}&model=${model}&year=${year}`,
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const { make, year, model } = car;

  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
