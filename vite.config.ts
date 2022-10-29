import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	optimizeDeps: {
		include: ['just-throttle', 'dayjs'],
	},
	plugins: [sveltekit()],
};

export default config;
