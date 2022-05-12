export default function useFetch(baseUrl) {
  function get(searchName) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + searchName)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject(data);
          }
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return { get };
}
