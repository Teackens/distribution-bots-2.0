class Country {
  constructor() {
    console.log("creating country");
    let Nijmegen = new City("Nijmegen");
    let Amsterdam = new City("Amsterdam");
    let Groningen = new City("Groningen");
    let Utrecht = new City("Utrecht");
    let Leeuwarden = new City("Leeuwarden");
    let Rotterdam = new City("Rotterdam");

    this.graph = this.buildGraphFromEdges([
      { startCity: Nijmegen, targetCity: Amsterdam, weight: 10 },
      { startCity: Amsterdam, targetCity: Groningen, weight: 5 },
      { startCity: Amsterdam, targetCity: Utrecht, weight: 12 },
      { startCity: Amsterdam, targetCity: Rotterdam, weight: 7 },
      { startCity: Groningen, targetCity: Rotterdam, weight: 19 },
      { startCity: Utrecht, targetCity: Leeuwarden, weight: 2 },
      { startCity: Utrecht, targetCity: Rotterdam, weight: 3 },
      { startCity: Rotterdam, targetCity: Leeuwarden, weight: 22 },
    ]);
    console.log("completed graph");
    console.log(this.graph);
  }

  logGraph() {
    console.log(this.graph);
  }

  buildGraphFromEdges = (edges) => {
    edges.reduce((graph, { startCity, targetCity }) => {
      if (!graph.has(startCity)) {
        this.addNode(graph, startCity);
      }

      if (!graph.has(targetCity)) {
        this.addNode(graph, targetCity);
      }

      this.connectNodes(graph, startCity, targetCity);
      return graph;
    }, new Map());
    return edges;
  };

  addNode = (graph, node) => {
    graph.set(node, { in: new Set(), out: new Set() });
  };

  connectNodes = (graph, startCity, targetCity) => {
    graph.get(startCity).out.add(targetCity);
    graph.get(targetCity).in.add(startCity);
  };
}
