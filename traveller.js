class Traveller {
  constructor(Country) {
    this.route = ["test", "test2"];
    this.StartCity = null;
    this.targetCity = null;
    this.setStartCity(Country);
    this.setTargetCity(Country);
  }

  setStartCity = (Country) => {
    let counter = 0;
    Country.graph.forEach((route) => {
      if (this.probability(0.1) && this.StartCity === null) {
        this.StartCity = route.startCity;
        console.log("Creating start city completed.");
        console.log(this.StartCity);
      }
    });
    if (this.StartCity === null) {
      this.setStartCity(Country);
    }
  };

  setTargetCity = (Country) => {
    let counter = 0;
    Country.graph.forEach((route) => {
      if (this.probability(0.1) && this.targetCity === null) {
        this.targetCity = route.targetCity;
        console.log("Creating target city completed.");
        console.log(this.targetCity);
      }
    });
    if (this.targetCity === null) {
      this.setTargetCity(Country);
    }
  };

  calculateRoute = () => {};

  probability = (n) => {
    return !!n && Math.random() <= n;
  };
}
