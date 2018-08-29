import APP_CONFIG from '../../home/home.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  group: string;

  constructor(id) {
    this.id = id;
  }

  get r() {
    return 35;
  }

  get fontSize() {
    return (17) + 'px';
  }

  get color() {
    return "#59c2c7";
  }

  getAttributes() {
    console.log("u  clicked me");
  }
}
