<script>
    import { onMount } from 'svelte';
  
    // Initial default values for the link budget calculation parameters
    let transmitPower = 20; // Transmit power in dBm
    let transmitterGain = 15; // Transmitter antenna gain in dB
    let receiverGain = 10; // Receiver antenna gain in dB
    let txGain = 15; // Additional transmitter gain, if applicable
    let rxSensitivity = -100; // Receiver sensitivity in dBm
    let fadingMargin = 6; // Fading margin in dB
    let interferenceMargin = 10; // Interference margin in dB
    let penetrationLoss = 15; // Penetration loss in dB
    let transmitCableLoss = 2; // Transmit cable loss in dB
    let receiveCableLoss = 2; // Receive cable loss in dB
    let pathLoss = 100; // Basic path loss in dB
    let result = ""; // To display the calculation result
    let chart = null; // Chart instance
    let cellRadius =500;
    let cftx =3600;
  
    const calculateLinkBudget = () => {
      // Calculating the Link Budget based on the provided formula
      const linkBudget = transmitPower + transmitterGain + receiverGain
                         - pathLoss - transmitCableLoss - receiveCableLoss
                         - penetrationLoss + fadingMargin - interferenceMargin
                         - rxSensitivity;
      result = `Calculated Link Budget: ${linkBudget.toFixed(2)} dBm`;
  
      if (!chart) {
        const ctx = document.getElementById('pathLossChart').getContext('2d');
        chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [],
            datasets: [{
              label: 'Link Budget Components (dBm)',
              data: [],
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
  
      updateChart([
        { name: 'Transmit Power', value: transmitPower },
        { name: 'Transmitter Gain', value: transmitterGain },
        { name: 'Receiver Gain', value: receiverGain },
        // { name: 'Cell Raius', value: cellRadius },
        // { name: 'Center Frequeccy TX', value: cftx },
        { name: 'Path Loss', value: -pathLoss },
        { name: 'Transmit Cable Loss', value: -transmitCableLoss },
        { name: 'Receive Cable Loss', value: -receiveCableLoss },
        { name: 'Penetration Loss', value: -penetrationLoss },
        { name: 'Fading Margin', value: fadingMargin },
        { name: 'Interference Margin', value: -interferenceMargin },
        // { name: 'Receiver Sensitivity', value: -rxSensitivity },
        // { name: 'Link Budget', value: linkBudget }
      ]);
    };
  
    onMount(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => console.log('Service Worker registered', registration))
          .catch((error) => console.log('Service Worker registration failed:', error));
      }
    });
  
    function updateChart(data) {
      chart.data.labels = data.map(d => d.name);
      chart.data.datasets.forEach((dataset) => {
        dataset.data = data.map(d => d.value);
      });
      chart.update();
    }
  </script>
  
  <style>

    .result, .chart-container {
      margin-top: 20px;
    }
  </style>

  <div class="container">
    
    <div class="row">
      <h2>5G Link Budget</h2>
        <div class="col-3">
             <label for="transmitPower" class="form-label">Tx Power (dBm):</label>
            <input type="number" class="form-control" bind:value={transmitPower}>
        </div>
        <div class="col-3">
            <label for="transmitCableLoss" class="form-label">Tx Cable Loss (dB):</label>
            <input type="number" class="form-control" bind:value={transmitCableLoss}>
        </div>
        <div class="col-3">
            <label for="transmitterGain" class="form-label">Tx Gain (dB):</label>
            <input type="number" class="form-control" bind:value={transmitterGain}>
        </div>

        <div class="w-100 mb-3"></div>
        <div class="col-3">        
            <label for="cellradius" class="form-label">Cell Radius (m):</label>
            <input type="number" class="form-control" bind:value={cellRadius}>
        </div>
        <div class="col-3">        
            <label for="cftx" class="form-label">Centre frequency Tx (MHz)</label>
            <input type="number" class="form-control" bind:value={cftx}>
        </div>
        <div class="col-3">        
            <label for="pathLoss" class="form-label">Path Loss (dB):</label>
            <input type="number" class="form-control" bind:value={pathLoss}>
        </div>
        <div class="w-100 mb-3"></div>
        <div class="col-3">
            <label for="interferenceMargin" class="form-label">Interference Margin (dB):</label>
            <input type="number" class="form-control" bind:value={interferenceMargin}>
        </div>
        <div class="col-3">
            <label for="fadingMargin" class="form-label">Fading Margin (dB):</label>
            <input type="number" class="form-control" bind:value={fadingMargin}>
        </div>
        <div class="col-3">
            <label for="penetrationLoss" class="form-label">Penetration Loss (dB):</label>
            <input type="number" class="form-control" bind:value={penetrationLoss}>
        </div>

        <div class="col-3">        
            <label for="receiverGain" class="form-label">Rx Gain (dB):</label>
            <input type="number" class="form-control" bind:value={receiverGain}>
        </div>
        <div class="col-3">
            <label for="receiveCableLoss" class="form-label">Rx Cable Loss (dB):</label>
            <input type="number" class="form-control" bind:value={receiveCableLoss}>
        </div>


        <!-- <div class="w-100"></div> -->
        <div class="col-3">
            <label for="rxSensitivity" class="form-label">Receiver Sensitivity (dBm):</label>
            <input type="number" class="form-control" bind:value={rxSensitivity}>
        </div>

        <div class="col"></div>
        <div class="col"></div>
    </div>

    <div class="row">


    </div>
    <button class="btn btn-primary mt-3" on:click={calculateLinkBudget}>Calculate Link Budget</button>
    <div class="result">
      <p>{result}</p>
    </div>
    <div class="chart-container">
      <canvas id="pathLossChart"></canvas>
    </div>
  </div>
  