import { useEffect } from 'react';
import useFetch from '@/hooks/useFetch';
import { $http } from '@/api';
import { observer } from '@/utils/observer';
import { TData } from './types';
import { useQueryStore } from '@/store/query';

export function useTable<T>(reqName: string) {
  const queryStore = useQueryStore()
  const getTableItems = async (): Promise<TData<T>> => {
    const res = await $http.get<{ data: TData<T> }>({ url: reqName!, query: queryStore.query })
    return res.data
  }
  const { data, isLoading, refetch } = useFetch<TData<T>>({ queryKey: [reqName!, queryStore.query], queryFn: getTableItems, options: { enabled: !!reqName } })


  async function onDelete(id?: number) {
    const url = `${reqName}/${id}`;
    try {
      await $http.delete({ url });
      refetch()
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    observer.subscribe('onDelete', onDelete)
    return () => observer.unsubscribe('onDelete')
  }, [])

  return { data, isLoading }
}
