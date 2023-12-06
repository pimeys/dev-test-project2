import { graph, config } from "@grafbase/sdk";

const feds = graph.Federated();

export default config({ graph: feds });
