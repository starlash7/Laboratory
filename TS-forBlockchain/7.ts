type Pixy = {
  name: string;
};

const PixyA: Pixy = {
  name: "nico",
};

interface PixyB {
  name: string;
}

interface PixyBB extends PixyB {
  lastName: string;
}

const PixyB: PixyB = {
  name: "nico",
};
