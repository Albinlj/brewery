import { brewAxios } from '$lib/brewAxios';
import a from '../../assets/installs.json';

export const getInstalls = (days: number) =>
  brewAxios.get(`/analytics/cask-install/homebrew-cask/${days}d.json`);

// export const getInstalls = (days: number) => ({ data: a as Root });

export type Root = {
  category: string;
  total_items: number;
  start_date: string;
  end_date: string;
  total_count: number;
  formulae: {
    [index: string]: Array<{
      cask: string;
      count: string;
    }>;
  };
};
