import { IFormWrapper } from "@/components/Fields/FormWrapper";
import { useEffect, useRef, useState } from "react";
import { $http } from "@/http";
import useFetch from "@/hooks/useFetch";
// import { useNavigate, useParams } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";
export interface IPermission {
  id: number;
  status: boolean
}
export interface IRole {
  id: number;
  img: string;
  name: string;
  admin_count: number;
  created_at: string;
  status: number;
  permissions: { [key: string]: IPermission }[]

}



export default function useFormActions() {
  const defaultValues = {
    name: null,
    permissions: [],
  };
  type TForm = typeof defaultValues & { [key: string]: any };
  const formRef = useRef<IFormWrapper>();
  // const Navigate = useNavigate();

  // const params = id

  const [loading, setLoading] = useState(false);
  const generateFormData = (value: TForm) => {
    const formData = new FormData();
    const { permissions, img, ...data } = value;
    for (const key in data) {
      formData.append(key, data[key]);
    }
    ((permissions && permissions) as [] as any).forEach(
      (item: any, index: number) => {
        formData.append(`permissions[${index}]`, item);
      }
    );
    // if (params?.id) {
    //   formData.append("_method", "put");
    // }
    return formData;
  };
  const onCreate = async (value: TForm) => {
    return $http.post({ url: "roles", data: generateFormData(value) });
  };
  // const onUpdate = async (value: TForm) => {
  //   return $http.post({
  //     url: `roles/${params.id}`,
  //     data: generateFormData(value),
  //   });
  // };

  const onSubmit = async (value: TForm) => {
    try {
      setLoading(true);
      await onCreate(value);
      // if (params?.id) {
      //   // in case update
      //   await onUpdate(value);
      //   // Navigate("/roles");
      // } else {
      //   // in case create
      //   await onCreate(value);
      //   // Navigate("/roles");

      //   resetForm();
      // }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    formRef.current?.reset();
  };

  const {
    data: permissions,
    isLoading,
  } = useFetch({
    queryKey: ["permissions-group"],
    queryFn: async () => {
      const res = await $http.get({ url: "permissions-group" });
      const { data }: any = res;
      return data;
    },
  });

  // const showItem = async () => {

  //   const res = await $http.get<{ data: IRole }>({ url: `roles/${params.id}` });
  //   const { data } = res;
  //   const ids = Object.values(data.permissions).flatMap((el: any) => el).filter(el => el.status).map(el => String(el.id))
  //   formRef.current?.setValues({ ...data, permissions: ids });

  // };

  // useEffect(() => {
  //   if (params.id) showItem();
  // }, [params.id]);

  return {
    formRef,
    resetForm,
    onSubmit,
    defaultValues,
    permissions,
    isLoading,
    loading,
  };
}
