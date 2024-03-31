<script>
  import { onMount } from "svelte";

  // Initial default values for the link budget calculation parameters
  let transmitPowerNodeB = 27; // Transmit power in dBm
  let transmitCableLossNodeB = 2; // Transmit cable loss in dB
  let transmitterAntennaGainNodeB = 15; // Transmitter antenna gain in dB
  let transmitPowerUT = 23; // Transmit power in dBm
  let transmitCableLossUT = 0; // Transmit cable loss in dB
  let transmitterAntennaGainUT = 0; // Transmitter antenna gain in dB
  let pathLoss = 100; // Basic path loss in dB
  let interferenceMargin = 10; // Interference margin in dB
  let fadingMargin = 6; // Fading margin in dB
  let penetrationLoss = 15; // Penetration loss in dB
  let receiverGain = 10; // Receiver antenna gain in dB
  let receiveCableLoss = 2; // Receive cable loss in dB
  let txGain = 15; // Additional transmitter gain, if applicable
  let rxSensitivity = -100; // Receiver sensitivity in dBm
  let rxSensitivityNodeB = -100; // Receiver sensitivity in dBm
  let rxSensitivityUE = -100; // Receiver sensitivity in dBm
  let result = ""; // To display the calculation result
  let chart = null; // Chart instance
  let cellRadius = 500;
  let cftx = 3600;
  let rbCount = 1;
  let mapl = 0;
  let thermalNoise = 0;
  let sinr = 4;
  let sinrNodeB = -6;
  let sinrUE = -6;
  let noiseFigure = -6;
  let noiseFigureNodeB = 4;
  let noiseFigureUE = 10;
  let numerology = "1";
  let subCarrierSpacing = 0;
  let linkBudgetDL = 0;
  let linkBudgetDLStr = "";
  let linkBudgetULStr = "";
  let linkBudgetUL = 0;
  let linkBudgetTotal = 0;
  let EIRPNodeB = 0;
  let dlColorClass = "";
  let ulColorClass = "";
  let pathLossScenarios = ["RMa-LOS", "RMa-NLOS", "UMa-LOS", "UMa-NLOS"];
  let pathLossScenario = "RMa-LOS";

  $: subCarrierSpacing = 15 * Math.pow(2, numerology);

  $: pathLoss =
    transmitPowerNodeB -
    transmitCableLossNodeB +
    transmitterAntennaGainNodeB -
    interferenceMargin -
    fadingMargin -
    penetrationLoss +
    receiverGain -
    receiveCableLoss -
    rxSensitivity;

  $: cellRadius = roundToDecimal(
    calculate3DDistanceFromPathLossUMaNLOS(linkBudgetTotal, cftx, 1.5),
    2,
  );

  $: thermalNoise = roundToDecimal(
    -174 + 10 * Math.log10(subCarrierSpacing * 1000 * 12 * rbCount),
    2,
  );

  $: rxSensitivityNodeB = thermalNoise + sinrNodeB + noiseFigureNodeB;

  $: rxSensitivityUE = thermalNoise + sinrUE + noiseFigureUE;

  $: linkBudgetDL =
    transmitPowerNodeB -
    transmitCableLossNodeB +
    transmitterAntennaGainNodeB -
    fadingMargin -
    interferenceMargin -
    rxSensitivityUE;
  $: linkBudgetDLStr = `MAPL DL = ${transmitPowerNodeB} - ${transmitCableLossNodeB} + ${transmitterAntennaGainNodeB} - ${fadingMargin} - ${interferenceMargin} - ${rxSensitivityUE} = ${linkBudgetDL}`;

  $: linkBudgetUL =
    transmitPowerUT -
    transmitCableLossUT +
    transmitterAntennaGainUT -
    fadingMargin -
    interferenceMargin +
    transmitterAntennaGainNodeB -
    transmitCableLossNodeB -
    rxSensitivityNodeB;
  $: linkBudgetULStr = `MAPL UL = ${transmitPowerUT} - ${transmitCableLossUT} + ${transmitterAntennaGainUT} - ${fadingMargin} - ${interferenceMargin} +${transmitterAntennaGainNodeB} - ${transmitCableLossNodeB} - ${rxSensitivityNodeB} = ${linkBudgetUL}`;

  $: if (linkBudgetDL <= linkBudgetUL) {
    linkBudgetTotal = linkBudgetDL;
  } else {
    linkBudgetTotal = linkBudgetUL;
  }

  $: {
    if (linkBudgetDL < linkBudgetUL) {
      dlColorClass = "table-success";
      ulColorClass = "table-danger";
    } else if (linkBudgetDL > linkBudgetUL) {
      dlColorClass = "table-danger";
      ulColorClass = "table-success";
    } else {
      // If they are equal, optionally set them to a neutral color or leave them as default
      dlColorClass = "table-success";
      ulColorClass = "table-success";
    }
  }

  function roundToDecimal(val, decimal) {
    return Math.round(val * Math.pow(10, decimal)) / Math.pow(10, decimal);
  }
  function calculate3DDistanceFromPathLossUMaNLOS(pathLoss, fc, hUT) {
    const d3D = Math.pow(
      10,
      (pathLoss - 13.54 - 20 * Math.log10(fc / 1000) + 0.6 * (hUT - 1.5)) /
        39.08,
    );
    return d3D; // Round to two decimal places for readability
  }

  onMount(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) =>
          console.log("Service Worker registered", registration),
        )
        .catch((error) =>
          console.log("Service Worker registration failed:", error),
        );
    }
  });

  function updateChart(data) {
    chart.data.labels = data.map((d) => d.name);
    chart.data.datasets.forEach((dataset) => {
      dataset.data = data.map((d) => d.value);
    });
    chart.update();
  }
</script>

<div class="container">
  <div class="row">
    <h2>5G Link Budget</h2>
    <div class="row">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <!-- <button
        class="btn btn-outline-secondary  col-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#channel"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Radio Configuration
      </button> -->
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-height"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#channel"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Radio Configuration
            </button>
          </h2>
          <div class="row collapse" id="channel">
            <div class="col-3">
              <label for="centerFrequency" class="form-label"
                >Frequency Tx (MHz):</label
              >
              <input type="number" class="form-control" bind:value={cftx} />
            </div>
            <div class="col-3">
              <label for="noRBs" class="form-label">RB count:</label>
              <input type="number" class="form-control" bind:value={rbCount} />
            </div>
            <div class="col-6"></div>
            <div class="col-3">
              <label for="numerology" class="form-label">Select:</label>
              <select
                class="form-select col-3"
                aria-label="Default select example"
                bind:value={numerology}
              >
                <option value="0">0 - 15kHz</option>

                <option value="1">1 - 30kHz</option>
                <option value="2">2 - 60kHz</option>
                <option value="3">3 - 120kHz</option>
                <option value="3">4 - 240kHz</option>
              </select>
            </div>
            <div class="col-3">
              <label for="numerology" class="form-label">Numerolgy:</label>
              <input
                type="number"
                class="form-control"
                disabled
                bind:value={numerology}
              />
            </div>
            <div class="col-3">
              <label for="subCarrierSpacing" class="form-label"
                >Subcarrie Spacing (kHz):</label
              >
              <input
                type="number"
                class="form-control"
                disabled
                bind:value={subCarrierSpacing}
              />
            </div>
            <div class="col-3">
              <label for="thermalNoise" class="form-label">Thermal Noise:</label
              >
              <input
                type="number"
                class="form-control"
                disabled
                bind:value={thermalNoise}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 mb-3"></div>
    <div class="row">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-height"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nodeB"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              NodeB
            </button>
          </h2>
          <h6 class="collapse" id="nodeB">Losses & Gains</h6>
          <div class="row collapse" id="nodeB">
            <div class="col-3">
              <label for="transmitCableLoss" class="form-label"
                >Cable Loss (dB):</label
              >
              <input
                type="number"
                class="form-control"
                bind:value={transmitCableLossNodeB}
              />
            </div>
            <div class="col-3">
              <label for="transmitterGain" class="form-label"
                >Antenna Gain (dB):</label
              >
              <input
                type="number"
                class="form-control"
                bind:value={transmitterAntennaGainNodeB}
              />
            </div>
          </div>
          <h6 class="collapse" id="nodeB">Tx</h6>
          <div class="row collapse" id="nodeB">
            <div class="col-3">
              <label for="transmitPower" class="form-label"
                >Tx Power (dBm):</label
              >
              <input
                type="number"
                class="form-control"
                bind:value={transmitPowerNodeB}
              />
            </div>
          </div>
          <h6 class="collapse" id="nodeB">Rx</h6>
          <div class="row collapse" id="nodeB">
            <div class="col-3">
              <label for="noiseFigureNodeB" class="form-label"
                >Noise Figure (dB):</label
              >
              <input
                type="number"
                class="form-control"
                bind:value={noiseFigureNodeB}
              />
            </div>
            <div class="col-3">
              <label for="sinrNodeB" class="form-label">SINR (dB):</label>
              <input
                type="number"
                class="form-control"
                bind:value={sinrNodeB}
              />
            </div>
            <div class="col-3">
              <label for="rxSensitivityNodeB" class="form-label"
                >Receiver Sensitivity:</label
              >
              <input
                type="number"
                class="form-control"
                disabled
                bind:value={rxSensitivityNodeB}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 mb-3"></div>

    <div class="row">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-height"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#ueconf"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              UT
            </button>
          </h2>
          <div class="row">
            <h6 class="collapse" id="ueconf">Losses & Gains</h6>
            <div class="row collapse" id="ueconf">
              <div class="col-3">
                <label for="transmitCableLoss" class="form-label"
                  >Cable Loss (dB):</label
                >
                <input
                  type="number"
                  class="form-control"
                  bind:value={transmitCableLossUT}
                />
              </div>
              <div class="col-3">
                <label for="transmitterGain" class="form-label"
                  >Antenna Gain (dB):</label
                >
                <input
                  type="number"
                  class="form-control"
                  bind:value={transmitterAntennaGainUT}
                />
              </div>
            </div>
            <h6 class="collapse" id="ueconf">Tx</h6>
            <div class="row collapse" id="ueconf">
              <div class="col-3">
                <label for="transmitPowerUT" class="form-label"
                  >Tx Power (dBm):</label
                >
                <input
                  type="number"
                  class="form-control"
                  bind:value={transmitPowerUT}
                />
              </div>
            </div>
            <h6 class="collapse" id="ueconf">Rx</h6>
            <div class="row collapse" id="ueconf">
              <div class="col-3">
                <label for="noiseFigureUE" class="form-label"
                  >Noise Figure (dB):</label
                >
                <input
                  type="number"
                  class="form-control"
                  bind:value={noiseFigureUE}
                />
              </div>
              <div class="col-3">
                <label for="sinrUE" class="form-label">SINR (dB):</label>
                <input type="number" class="form-control" bind:value={sinrUE} />
              </div>

              <!-- <div class="w-100"></div> -->
              <div class="col-3">
                <label for="rxSensitivityUE" class="form-label"
                  >Receiver Sensitivity:</label
                >
                <input
                  type="number"
                  class="form-control"
                  disabled
                  bind:value={rxSensitivityUE}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 mb-3"></div>
    <div class="row">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-height"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pathlosstype"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Pathloss Model
            </button>
          </h2>
          <div class="row collapse" id="pathlosstype">
            <div class="col-3">
              <label for="numerology" class="form-label">Select:</label>
              <select
                class="form-select col-3"
                aria-label="Default select"
                bind:value={pathLossScenario}
              >
                <option value="RMsaLOS" selected>RMa-LOS</option>

                <option value="RMa-NLOS">RMa-NLOS</option>
                <option value="UMa-LOS">UMa-LOS</option>
                <option value="UMa-NLOS">UMa-NLOS</option>
              </select>
            </div>

            {#if pathLossScenario === "RMa-LOS"}
              <p>TBD</p>
            {/if}
            {#if pathLossScenario === "RMa-NLOS"}
              <p class="formula">
                <span
                  >PL<sub>RMa-NLOS</sub> = 31.84 + 21.50 log<sub>10</sub>(d<sub
                    >3D</sub
                  >) + 19.00 log<sub>10</sub>(f<sub>c</sub>)</span
                >
              </p>
            {/if}
            {#if pathLossScenario === "UMa-LOS"}
              <p>TBD</p>
            {/if}
            {#if pathLossScenario === "UMa-NLOS"}
              <p class="formula">
                PL<sub>UMa-NLOS</sub>(d<sub>3D</sub>) = 13.54 + 39.08 log<sub
                  >10</sub
                >(d<sub>3D</sub>) + 20 log<sub>10</sub>(f<sub>c</sub>) − 0.6 (h<sub
                  >UT</sub
                > − 1.5)
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 mb-3"></div>

    <div class="row">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed custom-height"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#losses"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Propagation Loss & Margin
            </button>
          </h2>
          <div class="row collapse" id="losses">
            <div class="col-3">
              <label for="interferenceMargin" class="form-label"
                >Interference Margin (dB):</label
              >
              <input
                type="number"
                class="form-control"
                bind:value={interferenceMargin}
              />
            </div>
            <div class="col-3">
              <label for="fadingMargin" class="form-label"
                >Fading Margin (dB):</label
              >
              <input
                type="number"
                class="form-control"
                bind:value={fadingMargin}
              />
            </div>
            <div class="col-3">
              <label for="penetrationLoss" class="form-label"
                >Penetration Loss (dB):</label
              >
              <input
                type="number"
                class="form-control"
                bind:value={penetrationLoss}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 mb-3"></div>

    <h4>Maximum Allowable Pathloss</h4>
    <table class="table">
      <thead>
        <th scope="col" style="width: 10%;">Path</th>
        <th scope="col" style="width: 10%;">Tx Power</th>
        <th scope="col" style="width: 10%;">Cable Loss Tx</th>
        <th scope="col" style="width: 10%;">Antenna Gain Tx</th>
        <th scope="col" style="width: 10%;">Fading Margin</th>
        <th scope="col" style="width: 10%;">Interference Margin</th>
        <th scope="col" style="width: 10%;">Cable Loss Rx</th>
        <th scope="col" style="width: 10%;">Antenna Gain Rx</th>
        <th scope="col" style="width: 10%;">Rx Sensitivity</th>
        <th scope="col" style="width: 10%;">MAPL</th>
      </thead>
      <tbody>
        <tr class={dlColorClass}>
          <th scope="row">DL</th>
          <td>{transmitPowerNodeB}</td>
          <td>{transmitCableLossNodeB}</td>
          <td>{transmitterAntennaGainNodeB}</td>
          <td>{fadingMargin}</td>
          <td>{interferenceMargin}</td>
          <td>{transmitCableLossUT}</td>
          <td>{transmitterAntennaGainUT}</td>
          <td>{rxSensitivityUE}</td>
          <td> {linkBudgetDL}</td>
        </tr>
      </tbody>
      <tbody>
        <tr> </tr><tr class={ulColorClass}>
          <th scope="row">UL</th>
          <td>{transmitPowerUT}</td>
          <td>{transmitCableLossUT}</td>
          <td>{transmitterAntennaGainUT}</td>
          <td>{fadingMargin}</td>
          <td>{interferenceMargin}</td>
          <td>{transmitCableLossNodeB}</td>
          <td>{transmitterAntennaGainNodeB}</td>
          <td>{rxSensitivityNodeB}</td>
          <td> {linkBudgetUL}</td>
        </tr>
      </tbody>
    </table>
    <h4>Cell Radius: {cellRadius} m</h4>
    <!-- <div class="w-100 mb-3"></div>

    <div class="col"></div>
    <div class="col"></div>
    <div class="w-100 mb-3"></div>
    <div class="col-3">
      <h4>Results</h4>
    </div>
    <div class="w-100 mb-3"></div>
    <div class="col-3">
      <label for="cellradius" class="form-label">Cell Radius (m):</label>
      <input type="number" class="form-control" bind:value={cellRadius} />
    </div>
    <div class="col-3">
      <label for="cftx" class="form-label">Centre frequency Tx (MHz)</label>
      <input type="number" class="form-control" bind:value={cftx} />
    </div>
    <div class="col-3">
      <label for="pathLoss" class="form-label">Max Path Loss (dB):</label>
      <input type="number" class="form-control" bind:value={pathLoss} />
    </div> -->
  </div>

  <!-- <div class="row"></div>

  <button class="btn btn-primary mt-3" on:click={calculateLinkBudget}
    >Calculate Link Budget</button
  >
  <div class="result">
    <p>{result}</p>
  </div>
  <div class="chart-container">
    <canvas id="pathLossChart"></canvas>
  </div> -->
</div>

<style>
  .result,
  .chart-container {
    margin-top: 20px;
  }

  .custom-height {
    /* height: 10px;  */
    padding: 0 15px; /* Adjust padding as needed */
    font-size: 16px; /* Optional: Adjust font size as needed */
  }
  .formula {
    font-family: "Times New Roman", Times, serif; /* or any font that suits mathematical expressions */
    font-size: 20px; /* Adjust based on your preference */
  }
  .accordion {
    accordion-btn-bg: #cccc;
  }
</style>
