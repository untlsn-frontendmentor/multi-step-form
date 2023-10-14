export default function usePageNumber (max?: number) {
	const route = useRoute();
	return computed({
		get () {
			return Math.min(max || Infinity, Number(route.query.page) || 1);
		},
		set (value) {
			navigateTo(`/?page=${value}`);
		},
	});
}
