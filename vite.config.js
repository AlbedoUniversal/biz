import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import handlebars from 'vite-plugin-handlebars';
import { mainCards } from './src/js/cards';

export default defineConfig({
	base: '',
	build: {
		sourcemap: true,
	},
	rollupOptions: {
		output: {
			assetFileNames: (assetInfo) => {
				return `assets/[name]-[hash].[ext]`;
			},
			chunkFileNames: 'assets/[name]-[hash].js',
			entryFileNames: 'assets/[name]-[hash].js',
		},
	},
	assetsInclude: ['**/*.pdf'],
	plugins: [
		createHtmlPlugin({
			entry: 'src/js/main.ts',
			filename: 'index.html',
			template: 'index.html',
			minify: true,
		}),
		handlebars({
			partialDirectory: resolve(__dirname, 'src/partials'),
			context: {
				mainCards,
			},
		}),
	],
});
