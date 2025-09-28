import { useEffect, useState } from 'react';

export const useReqData = ({ request, edit, deps = [] }) => {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(false);

  const depsArray = Array.isArray(deps) ? deps : [deps];

  useEffect(() => {
    request()
      .then((res) => {
        // console.log('req made, success');
        setData(edit ? edit(res.data) : res.data);
      })
      .catch((/*error*/) => {
        // console.log(error);
        // console.log('req made,failed');
        setError(true);
      })
      .finally(() => {
        SetLoading(false);
      });
    // eslint-disable-next-line
  }, [...depsArray]); //eslint disabled due to complaint about edit; edit never changes. if edit passed as dep, it causes infinite reqs => breaks, api overloads

  return { data, loading, error };
};
