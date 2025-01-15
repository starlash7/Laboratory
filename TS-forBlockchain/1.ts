type Player<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};
type NicoPlayer = Player<NicoExtra>;

const nico: Player<{ favFood: string }> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};
