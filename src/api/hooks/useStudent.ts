import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const key = 'students';

export const useStudents = () => {
  const client = useQueryClient();

  const getStudents = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await api.get('/students');
      return res.data;
    },
  });

  const createStudent = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.post('/students', data);
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });

  const deleteStudents = useMutation({
    mutationFn: async (id: string) => {
      const res = await api.delete(`/students/${id}`);
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });

  const updateStudents = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const res = await api.put(`/students/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
    },
  });

  return { getStudents, createStudent, deleteStudents, updateStudents };
};
