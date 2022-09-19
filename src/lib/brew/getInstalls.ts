export async function getInstalls(days: number) {
  const res = await fetch(
    `https://formulae.brew.sh/api/analytics/cask-install/homebrew-cask/${days}d.json`
  );

  const data = await res.json();
  return data as Root;
}

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
