import { useLocation } from "react-router-dom";

const useSearchParams = (names: string[] = []): any => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const params: { [index: string]: any } = {};
  names.forEach((name) => (params[name] = query.get(name)));
  return params;
};

export default useSearchParams;
