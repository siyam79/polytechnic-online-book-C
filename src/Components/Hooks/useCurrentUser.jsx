import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCurrentUser = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: currentUserArray = [], isLoading } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosPublic.get(`/user/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Ensures the query only runs when user.email is available
  });

  // Extract the first user from the array, or return an empty object if the array is empty
  const currentUser = currentUserArray.length > 0 ? currentUserArray[0] : {};

  return { currentUser, isLoading };
};

export default useCurrentUser;
