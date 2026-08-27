// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vfvslim.github.io',
	base: '/poe2-metric-cards',
	integrations: [
		starlight({
			title: 'PoE2 口径卡',
			description: 'Path of Exile 2 metric definitions for Databrain',
			customCss: ['./src/styles/custom.css'],
			pagefind: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			lastUpdated: true,
			sidebar: [
				{
					label: 'Engagement',
					items: [
						{ label: 'DAU / Active Users', slug: 'core/dau' },
						{ label: 'Register Retention D1', slug: 'core/register-retention-d1' },
						{
							label: 'Overview Retention / Return / Churn',
							slug: 'core/active-overview-retention-return-churn',
							badge: { text: 'stubbed', variant: 'caution' },
						},
					],
				},
				{
					label: 'Sales & Monetization',
					items: [
					{ label: 'In-game Pay Amount / Paid Users', slug: 'core/ingame-pay-amount' },
					{ label: 'Platform Net Revenue', slug: 'core/platform-net-revenue' }],
				},
				{
					label: 'League Stats',
					items: [{ label: 'League Overview', slug: 'league/overview' }],
				},
			],
		}),
	],
});
