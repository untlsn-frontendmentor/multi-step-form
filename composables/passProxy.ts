type PassRecord<T> = { [K in keyof T]: K }

export default function passProxy<const T> (): PassRecord<T> {
	return new Proxy({}, {
		get (_t, p) {
			return p;
		},
	});
}
