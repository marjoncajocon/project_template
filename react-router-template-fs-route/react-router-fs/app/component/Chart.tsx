import { useEffect, useRef } from "react"
import Chart from 'chart.js/auto'; 

export default function ChartJS({
    type = 'bar',
    labels,
    title,
    data,
    bgColor
}: {
    type?: 'bar'|'pie'|'line',
    title: string,
    labels: string[],
    data: number[],
    bgColor: string[]
}) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const ctx = canvasRef.current;

        if (ctx) {
            const myChart = new Chart(ctx, {
                type: type,
                data: {
                    labels: labels,
                    datasets: [{
                        label: title,
                        data: data,
                        borderWidth: 1,
                        backgroundColor: bgColor
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return () => {
                myChart.destroy();
            };
        }

    }, [data, labels, bgColor]);

    return (
        <canvas ref={canvasRef}></canvas>
    );
}