export default function usePageNumber () {
	const route = useRoute();
	return computed(() => Number(route.query.page) || 1);
}
