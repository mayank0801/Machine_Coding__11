export const filterData = (
  Data,
  genreToFind,
  yearToFind,
  Rating,
  searchedText
) => {
  let filteredData = [];
  filteredData =
    genreToFind == ""
      ? [...Data]
      : Data.filter(({ genre }) => genre.includes(genreToFind));
  filteredData =
    yearToFind == ""
      ? [...filteredData]
      : filteredData.filter(({ year }) => year == yearToFind);
  filteredData =
    Rating == ""
      ? [...filteredData]
      : filteredData.filter(({ rating }) => rating == Rating);
  filteredData =
    searchedText == ""
      ? [...filteredData]
      : filteredData.filter(({ cast, director, title }) => {
          return (
            title.toLowerCase().includes(searchedText.toLowerCase()) ||
            director.toLowerCase().includes(searchedText.toLowerCase()) ||
            cast.some((cast) =>
              cast.toLowerCase().includes(searchedText.toLowerCase())
            )
          );
        });
  return filteredData;
};

export const WatchLaterFilter = (Data, idToFind) => {
  return Data?.find(({ id }) => id == idToFind);
};

export const StarredFilter = (Data, idToFind) => {
  return Data?.find(({ id }) => id == idToFind);
};
