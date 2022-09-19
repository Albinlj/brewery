import type { PageServerLoad } from './$types';
import { getCasks } from '../lib/brew/getCasks';
import { getInstalls } from '$lib/brew/getInstalls';

export type Cask = {
  name: string;
  installs: number;
};

export const load: PageServerLoad = async () => {
  const casks = await getCasks();
  const installs = await getInstalls(30);

  return {
    casks: casks
      .map<Cask>((c) => {
        const installsString = installs.formulae[c.token]?.at(0)?.count;

        return {
          name: c.token,
          installs: installsString ? parseInt(installsString) : 0
        };
      })
      .sort((a, b) => b.installs - a.installs)
  };
};
