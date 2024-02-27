import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async ({ cookies }) => {
	const contracts = cookies.get('contracts');
	return {
		form: await superValidate(zod(formSchema)),
		contracts
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		const future = await form.data.future;
		const risk = await Number(form.data.riskAmount);
		const stop = await Number(form.data.stopLoss);
		const nqPoint = 20;
		const esPoint = 50;
		const ymPoint = 5;
		const clTick = 10;
		const gcTick = 10;
		const rtyTick = 5;
		const mnqPoint = 2;
		const mesPoint = 5;
		const mymPoint = 0.5;
		const mclTick = 1;
		const mgcTick = 1;
		const m2Ktick = 0.5;
		let numContracts = 0;

		console.log(future, risk, stop);
		if (!form.valid) {
			console.log('Error');
			return fail(400, {
				form
			});
		}

		if (future == 'NQ') {
			numContracts = risk / nqPoint / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'ES') {
			numContracts = risk / esPoint / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'YM') {
			numContracts = risk / ymPoint / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'CL') {
			numContracts = risk / clTick / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'GC') {
			numContracts = risk / gcTick / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'RTY') {
			numContracts = risk / rtyTick / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'MNQ') {
			numContracts = risk / mnqPoint / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'MES') {
			numContracts = risk / mesPoint / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'MYM') {
			numContracts = risk / mymPoint / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'MCL') {
			numContracts = risk / mclTick / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else if (future == 'MGC') {
			numContracts = risk / mgcTick / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		} else {
			numContracts = risk / m2Ktick / stop;
			event.cookies.set('contracts', String(numContracts), {
				path: '/'
			});
		}

		console.log(numContracts);

		return {
			form,
			success: true
		};
	}
};
