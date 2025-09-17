import { useEffect, useState } from 'react';

export const useReqData = ({ request, edit }) => {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    request()
      .then((res) => {
        setData(edit ? edit(res.data) : res.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        SetLoading(false);
      });
    // eslint-disable-next-line
  }, []); //the hook should only run once at mount, that's why eslint is disabled here, it complains about edit and request, it thinks they might change, but they're static in my calls

  return { data, loading, error };
};
