// import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from "react-query";
import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

interface Props<T> {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
  options?: UseQueryOptions<T, unknown, T, QueryKey>;
}

export default function useFetch<T>({ queryKey, queryFn, options }: Props<T>) {
  const res = useQuery<T, unknown, T>({ queryKey, queryFn, refetchOnWindowFocus: false, ...options });
  return { ...res };
}
