import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createUpdateCabin } from '../../services/apiCabins';

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createUpdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin succesfully edited');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: err => toast.error(err.message),
  });

  return { updateCabin, isUpdating };
}