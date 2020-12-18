import EmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new EmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-personal_budget_final-pwjjt"
});

const chart = sdk.createChart({
    chartID: "4601659c-4428-4a77-a1a1-8dd2500dc53d",
    width: 640,
    height: 400,
    theme: 'dark',
});

chart.render(document.getElementById('chart'));
