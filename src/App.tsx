import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./styles.css";
import "./assets/styles/globalStyles.css";
import "chart.js/auto";

export default function App() {
    // aqui vai os dados //
    const data = [
        {
            id: 1,
            closed: "111",
            name: "Banana",
            priceUsd: "331",
        },
        {
            id: 2,
            closed: "134",
            name: "Batata",
            priceUsd: "221",
        },
        {
            id: 3,
            closed: "187",
            name: "Maçã",
            priceUsd: "403",
        },
        {
            id: 4,
            closed: "344",
            name: "Cebola",
            priceUsd: "503",
        },
    ];

    // Aqui vai ser configurado o grafico //
    const [chartData] = useState({
        labels: data.map(({ name }) => name),
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: "Preços",
                data: data.map(({ priceUsd }) => priceUsd),
                // you can set indiviual colors for each bar
                backgroundColor: ["#293462"], // <-- Cada item desse array e a cor das Barras
                borderWidth: 1, // <-- borda envolta da Barra
            },
            {
                label: "Cancelados",
                data: data.map(({ closed }) => closed),
                // you can set indiviual colors for each bar
                backgroundColor: ["#FF4A4A"],
                borderWidth: 1,
            },
        ],
    });

    return (
        <div className="App">
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "PREÇOS",
                        },
                        legend: {
                            display: true,
                            position: "bottom",
                        },
                    },
                }}
            />
        </div>
    );
}
