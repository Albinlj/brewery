import type { PageServerLoad } from './$types';
import { getCasks } from '../lib/brew/getCasks';
import { getInstalls } from '$lib/brew/getInstalls';

export type Cask = {
  token: string;
  name: string;
  description?: string;
  installs: number;
};

export const load: PageServerLoad = async () => {
  const { data: casks, headers } = await getCasks();

  console.log(headers);
  const { data: installs } = await getInstalls(30);

  return {
    casks: casks
      .map<Cask>((c) => {
        const installsString = installs.formulae[c.token]
          ?.at(0)
          ?.count.replaceAll(',', '');

        return {
          token: c.token,
          name: c.name.at(0) ?? c.token,
          installs: installsString ? parseInt(installsString) : 0,
          description: c.desc
        };
      })
      .sort((a, b) => b.installs - a.installs)
  };
};
