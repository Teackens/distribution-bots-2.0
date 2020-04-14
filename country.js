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
      { source: Nijmegen, target: Amsterdam, weight: 10 },
      { source: Amsterdam, target: Groningen, weight: 5 },
      { source: Amsterdam, target: Utrecht, weight: 12 },
      { source: Amsterdam, target: Rotterdam, weight: 7 },
      { source: Groningen, target: Rotterdam, weight: 19 },
      { source: Utrecht, target: Leeuwarden, weight: 2 },
      { source: Utrecht, target: Rotterdam, weight: 3 },
      { source: Rotterdam, target: Leeuwarden, weight: 22 }
    ]);
    console.log("completed graph");
    console.log(this.graph);
  }

  logGraph() {
    console.log(this.graph);
  }

  buildGraphFromEdges = edges => {
    edges.reduce((graph, { source, target }) => {
      if (!graph.has(source)) {
        this.addNode(graph, source);
      }

      if (!graph.has(target)) {
        this.addNode(graph, target);
      }

      this.connectNodes(graph, source, target);
      return graph;
    }, new Map());
    return edges;
  };

  addNode = (graph, node) => {
    graph.set(node, { in: new Set(), out: new Set() });
  };

  connectNodes = (graph, source, target) => {
    graph.get(source).out.add(target);
    graph.get(target).in.add(source);
  };
}
