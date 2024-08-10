import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [path.resolve(__dirname, 'static')],
		},
		port: 3000,
	},
	logLevel: 'info',
});
