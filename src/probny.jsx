export function ProbnaFunkcja() {
  const paleta = {
    width: 10,
    height: 2,
    deep: 15,
  };

  function createSquare() {
    let x = 10,
      gap = 0.5,
      punkt3d = [],
      d1 = [],
      d2 = [],
      d3 = [];

    let punkt0 = [(d1[0] = 0), (d2[0] = 0), (d3[0] = 0)];

    const tabela_punktow_krancowych = [];
    tabela_punktow_krancowych[0] = punkt0;

    for (let i = 1; i < x; i++) {
      d1[i] = d1[i - 1] + paleta.width + gap;
      d2[i] = d1[i - 1] + paleta.height + gap;
      d3[i] = d1[i - 1] + paleta.deep + gap;
      punkt3d[i] = [d1[i], d2[i], d3[i]];

      tabela_punktow_krancowych.push(punkt3d[i]);
    }

    return tabela_punktow_krancowych;
  }

  return createSquare();
}
