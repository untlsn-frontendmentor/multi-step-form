export default function usePageNumber () {
	const route = useRoute();
	return computed({
		get () {
			return Number(route.query.page) || 1;
		},
		set (value) {
			navigateTo(`/?page=${value}`);
		},
	});
}
