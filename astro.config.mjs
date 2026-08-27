// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://vfvslim.github.io',
	base: '/poe2-metric-cards',
	integrations: [
		starlight({
			title: 'Path of Exile 2',
			description: 'Path of Exile 2 metric definitions for Databrain',
			customCss: ['./src/styles/custom.css'],
			pagefind: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			lastUpdated: true,
			sidebar: [
				{
					label: '数据分层',
					items: [
						{
							label: '口径卡 Metric',
							collapsed: true,
							items: [
								{ label: 'Overview', slug: 'metric' },
								{
									label: 'Engagement',
									collapsed: true,
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
									collapsed: true,
									items: [
										{ label: 'In-game Pay Amount / Paid Users', slug: 'core/ingame-pay-amount' },
										{ label: 'Platform Net Revenue', slug: 'core/platform-net-revenue' },
									],
								},
								{
									label: 'League Stats',
									collapsed: true,
									items: [{ label: 'League Overview', slug: 'league/overview' }],
								},
							],
						},
						{ label: '应用层 ADS', slug: 'ads', badge: { text: 'todo', variant: 'caution' } },
						{ label: '数仓层 DW', slug: 'dw', badge: { text: 'todo', variant: 'caution' } },
						{ label: '汇总层 DWM', slug: 'dwm', badge: { text: 'todo', variant: 'caution' } },
						{ label: '维度层 DIM', slug: 'dim', badge: { text: 'todo', variant: 'caution' } },
						{ label: '贴源层 ODS', slug: 'ods', badge: { text: 'todo', variant: 'caution' } },
						{ label: '知识层 Knowledge', slug: 'knowledge', badge: { text: 'todo', variant: 'caution' } },
					],
				},
			],
		}),
	],
});
