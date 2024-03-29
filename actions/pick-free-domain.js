const { createAction } = require( '../lib/action' );
const { generateRandomString } = require( '../lib/misc' );

// picking the free domain at the /domains step
module.exports = createAction(
	async ( browser, context, page, extra ) => {
		const host = generateRandomString( 16 );
		const freeDomain = host + '.wordpress.com';
		await page.fill( 'css=input[type="search"]', freeDomain );
		await page.click( 'css=div[data-e2e-domain="' + freeDomain + '"] >> css=button[type="button"]' );

		return {};
	},
	'/domains'
);
