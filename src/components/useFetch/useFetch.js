import { useState } from 'react';

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(false);
  function get(searchName) {
    return new Promise((resolve, reject) => {
      setLoading(true);
      fetch(baseUrl + searchName)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, loading };
}
