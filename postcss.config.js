import { resolve } from 'path';

export default {
	plugins: {
		autoprefixer: {},
		'postcss-media-minmax': {},
		'postcss-simple-vars': {
			variables: {
				'moz-biz-smb-max-width': '424',
				'moz-biz-mb-min-width': '425',
				'moz-biz-mb-max-width': '767',
				'moz-biz-tablet-min-width': '768',
				'moz-biz-tablet-max-width': '1440',
				'moz-biz-pc-min-width': '1441',
			},
		},
		'postcss-mixins': {
			mixinsDir: resolve('src/styles/mixins'),
		},
	},
};
