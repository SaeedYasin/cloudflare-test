import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools()],
	resolve: {
    alias: {
      $lib: path.resolve('./src/lib')
    }
  }
};

export default config;
