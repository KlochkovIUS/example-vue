import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const useNavigationById = (path: string) => {
  const route = useRoute();
  const router = useRouter();
  const onIdChanged = (newSelectedItem: string) => {
    router.push(`/${path}/${newSelectedItem}`);
  };

  const id = computed(() => route.params.id.toString());

  return { id, onIdChanged };
};

export default useNavigationById;
