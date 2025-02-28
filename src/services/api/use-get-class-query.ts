import { BASE_API_PATH } from "@/constants/api";
import { useEffect, useState } from "react";

export type ClassDetail = {
  id: string;
  name: string;
  url: string;
  seatCount: number;
};

export const useGetClassQuery = (classId: string) => {
  const [data, setData] = useState<ClassDetail>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      return;
    }

    fetch(`${BASE_API_PATH}/class/${classId}`)
      .then((res) => res.json())
      .then((detail: ClassDetail) => {
        setData(detail);
        setIsLoading(false);
      });
  }, [classId, data]);

  return { data, isLoading };
};

export default useGetClassQuery;
